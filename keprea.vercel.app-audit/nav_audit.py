import json
import os
from playwright.sync_api import sync_playwright

BASE_URL = "http://localhost:8081"
PAGES = [
    ("home", "/"),
    ("solutions", "/solutions"),
    ("production", "/notre-production"),
    ("qui-sommes-nous", "/qui-sommes-nous"),
    ("biocontrole", "/pourquoi-le-biocontrole"),
]
WIDTHS = [375, 768, 1024, 1440]
HEIGHT = 1200
OUT_DIR = os.path.join(os.path.dirname(__file__), "screenshots-nav")

results = []

with sync_playwright() as p:
    browser = p.chromium.launch()
    for slug, path in PAGES:
        for width in WIDTHS:
            page = browser.new_page(viewport={"width": width, "height": HEIGHT})
            url = BASE_URL + path
            page.goto(url, wait_until="networkidle")
            page.wait_for_timeout(400)

            # check horizontal scroll
            scroll_info = page.evaluate("""
                () => {
                    const doc = document.documentElement;
                    return {
                        scrollWidth: doc.scrollWidth,
                        clientWidth: doc.clientWidth,
                        bodyScrollWidth: document.body.scrollWidth
                    };
                }
            """)
            has_hscroll = scroll_info["scrollWidth"] > scroll_info["clientWidth"] + 2

            # nav specific check (look for nav pill container)
            nav_info = page.evaluate("""
                () => {
                    const navs = Array.from(document.querySelectorAll('nav'));
                    if (navs.length === 0) return null;
                    // pick the biggest nav (likely the main one) or first with role
                    let nav = navs.find(n => n.offsetWidth > 0) || navs[0];
                    const rect = nav.getBoundingClientRect();
                    const overflowing = nav.scrollWidth > nav.clientWidth + 2;
                    const links = Array.from(nav.querySelectorAll('a')).map(a => ({
                        text: a.textContent.trim(),
                        rect: a.getBoundingClientRect()
                    }));
                    return {
                        rect: {x: rect.x, y: rect.y, width: rect.width, height: rect.height},
                        overflowing,
                        scrollWidth: nav.scrollWidth,
                        clientWidth: nav.clientWidth,
                        viewportWidth: window.innerWidth,
                        rightEdge: rect.x + rect.width,
                        links: links.map(l => l.text)
                    };
                }
            """)

            fname = f"{slug}_{width}.png"
            fpath = os.path.join(OUT_DIR, fname)
            page.screenshot(path=fpath, full_page=False)

            results.append({
                "page": slug,
                "path": path,
                "width": width,
                "has_hscroll": has_hscroll,
                "scroll_info": scroll_info,
                "nav_info": nav_info,
                "screenshot": fname,
            })
            page.close()
    browser.close()

with open(os.path.join(OUT_DIR, "results.json"), "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2, ensure_ascii=False)

for r in results:
    flag = "HSCROLL!" if r["has_hscroll"] else ""
    nav_overflow = ""
    if r["nav_info"] and r["nav_info"]["overflowing"]:
        nav_overflow = "NAV-OVERFLOW!"
    right_edge_info = ""
    if r["nav_info"]:
        ni = r["nav_info"]
        right_edge_info = f"navRight={ni['rightEdge']:.0f} vw={ni['viewportWidth']} navW={ni['rect']['width']:.0f} scrollW={ni['scrollWidth']} clientW={ni['clientWidth']}"
    print(f"{r['page']:15} {r['width']:5} {flag:10} {nav_overflow:14} {right_edge_info}")

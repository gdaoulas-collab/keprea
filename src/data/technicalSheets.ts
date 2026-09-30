import type { LucideIcon } from "lucide-react";
import { Leaf, Sprout, Wheat, ShieldCheck, FlaskConical, Beaker, Droplets, CalendarClock, Repeat, Puzzle, Tag, Microscope } from "lucide-react";

export interface SpecRow {
  labelKey: string;
  valueKey: string;
}

export interface TechnicalSheetEntry {
  slug: string;
  /** Literal brand name (not translated) — leave undefined and set nameKey for range-level entries. */
  name?: string;
  /** i18n key for a translated name — used when there is no fixed brand name. */
  nameKey?: string;
  icon: LucideIcon;
  rangePath: string;
  rangeLabelKey: string;
  rows: SpecRow[];
  cropsLabelKey: string;
  cropKeys: string[];
}

export const technicalSheets: TechnicalSheetEntry[] = [
  {
    slug: "boostea13",
    name: "Boostea13",
    icon: Leaf,
    rangePath: "/solutions/boosters",
    rangeLabelKey: "boosters.title",
    rows: [
      { labelKey: "techsheet.label.compositionEffect", valueKey: "boosters.boostea.desc" },
      { labelKey: "techsheet.label.application", valueKey: "boosters.boosteaSteps.step1.desc" },
      { labelKey: "techsheet.label.stages", valueKey: "boosters.boosteaSteps.step2.desc" },
      { labelKey: "techsheet.label.frequency", valueKey: "boosters.boosteaSteps.step3.desc" },
      { labelKey: "techsheet.label.category", valueKey: "techsheet.value.category.biostimulant" },
    ],
    cropsLabelKey: "techsheet.label.crops",
    cropKeys: ["boosters.crop1", "boosters.crop2", "boosters.crop3", "boosters.crop4", "boosters.crop5", "boosters.crop6"],
  },
  {
    slug: "soilea110",
    name: "Soilea110",
    icon: Sprout,
    rangePath: "/solutions/boosters",
    rangeLabelKey: "boosters.title",
    rows: [
      { labelKey: "techsheet.label.compositionEffect", valueKey: "boosters.soilea.desc" },
      { labelKey: "techsheet.label.application", valueKey: "boosters.soileaSteps.step1.desc" },
      { labelKey: "techsheet.label.dosage", valueKey: "boosters.soileaSteps.step2.desc" },
      { labelKey: "techsheet.label.compatibility", valueKey: "boosters.soileaSteps.step3.desc" },
      { labelKey: "techsheet.label.category", valueKey: "techsheet.value.category.biostimulant" },
    ],
    cropsLabelKey: "techsheet.label.crops",
    cropKeys: ["boosters.crop1", "boosters.crop2", "boosters.crop3", "boosters.crop4", "boosters.crop5", "boosters.crop6"],
  },
  {
    slug: "fertea432",
    name: "Fertea432",
    icon: Wheat,
    rangePath: "/solutions/biofertilisant",
    rangeLabelKey: "biofertilisant.title",
    rows: [
      { labelKey: "techsheet.label.compositionEffect", valueKey: "techsheet.fertea432.composition" },
      { labelKey: "techsheet.label.application", valueKey: "biofertilisant.step1.desc" },
      { labelKey: "techsheet.label.dosage", valueKey: "biofertilisant.step2.desc" },
      { labelKey: "techsheet.label.stages", valueKey: "biofertilisant.step3.desc" },
      { labelKey: "techsheet.label.category", valueKey: "techsheet.value.category.biofertilizer" },
    ],
    cropsLabelKey: "techsheet.label.crops",
    cropKeys: ["biofertilisant.crop1", "biofertilisant.crop2", "biofertilisant.crop3", "biofertilisant.crop4", "biofertilisant.crop5", "biofertilisant.crop6"],
  },
  {
    slug: "bioprotection",
    nameKey: "biocontrole.title",
    icon: ShieldCheck,
    rangePath: "/solutions/bioprotection",
    rangeLabelKey: "biocontrole.title",
    rows: [
      { labelKey: "techsheet.label.description", valueKey: "biocontrole.auxiliary.desc" },
      { labelKey: "techsheet.label.compatibility", valueKey: "biocontrole.adv4.desc" },
      { labelKey: "techsheet.label.category", valueKey: "techsheet.value.category.biocontrol" },
    ],
    cropsLabelKey: "techsheet.label.pests",
    cropKeys: ["biocontrole.pest1.title", "biocontrole.pest2.title", "biocontrole.pest3.title", "biocontrole.pest4.title"],
  },
  {
    slug: "biopesticides",
    nameKey: "substances.title",
    icon: FlaskConical,
    rangePath: "/solutions/biopesticides",
    rangeLabelKey: "substances.title",
    rows: [
      { labelKey: "techsheet.label.application", valueKey: "extraits.howItWorks.desc" },
      { labelKey: "techsheet.label.technology", valueKey: "substances.tech.step2.desc" },
      { labelKey: "techsheet.label.category", valueKey: "extraits.subheading" },
    ],
    cropsLabelKey: "techsheet.label.crops",
    cropKeys: ["extraits.crops.pending"],
  },
];

export const getTechnicalSheet = (slug: string) => technicalSheets.find((entry) => entry.slug === slug);

/** Icon shown next to each spec row on the detail page, keyed by the row's labelKey. */
export const specRowIcons: Record<string, LucideIcon> = {
  "techsheet.label.compositionEffect": Beaker,
  "techsheet.label.description": Beaker,
  "techsheet.label.application": Droplets,
  "techsheet.label.technology": Microscope,
  "techsheet.label.stages": CalendarClock,
  "techsheet.label.frequency": Repeat,
  "techsheet.label.dosage": Droplets,
  "techsheet.label.compatibility": Puzzle,
  "techsheet.label.category": Tag,
};

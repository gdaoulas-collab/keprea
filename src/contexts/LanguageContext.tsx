import { createContext, useContext, useState, type ReactNode } from 'react';

export type Language = 'fr' | 'en' | 'es' | 'pt' | 'de';

interface Translations {
  [key: string]: {
    fr: string;
    en: string;
    es: string;
    pt: string;
    de: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.solutions': {
    fr: 'Solutions',
    en: 'Solutions',
    es: 'Soluciones',
    pt: 'Soluções',
    de: 'Lösungen'
  },
  'nav.innovation': {
    fr: 'Innovation',
    en: 'Innovation',
    es: 'Innovación',
    pt: 'Inovação',
    de: 'Innovation'
  },
  'nav.production': {
    fr: 'Notre biofabrique',
    en: 'Our production site',
    es: 'Nuestro sitio de producción',
    pt: 'Nosso local de produção',
    de: 'Unser Produktionsstandort'
  },
  'nav.production.short': {
    fr: 'Production',
    en: 'Production',
    es: 'Producción',
    pt: 'Produção',
    de: 'Produktion'
  },
  'nav.ressources': {
    fr: 'Ressources',
    en: 'Resources',
    es: 'Recursos',
    pt: 'Recursos',
    de: 'Ressourcen'
  },
  'nav.about': {
    fr: 'À propos',
    en: 'About',
    es: 'Acerca de',
    pt: 'Sobre',
    de: 'Über uns'
  },
  'nav.game': {
    fr: 'Pack jeu éducatif',
    en: 'Educational game pack',
    es: 'Pack juego educativo',
    pt: 'Pacote de jogo educativo',
    de: 'Lernspielpaket'
  },
  'nav.contact': {
    fr: 'Nous contacter',
    en: 'Contact us',
    es: 'Contáctanos',
    pt: 'Entre em contato',
    de: 'Kontakt'
  },
  // Hero section
  'hero.title': {
    fr: 'La nature au service de vos cultures',
    en: 'Nature at the service of your crops',
    es: 'La naturaleza al servicio de sus cultivos',
    pt: 'A natureza a trabalhar pelas suas culturas',
    de: 'Die Natur im Dienste Ihrer Kulturen'
  },
  'hero.subtitle': {
    fr: 'Protégez, stimulez et nourrissez vos cultures grâce à la puissance des insectes.',
    en: 'Protect, stimulate and nourish your crops with the power of insects.',
    es: 'Proteja, estimule y nutra sus cultivos con el poder de los insectos.',
    pt: 'Proteja, estimule e nutra as suas culturas com o poder dos insetos.',
    de: 'Schützen, stimulieren und nähren Sie Ihre Kulturen mit der Kraft von Insekten.'
  },
  'hero.cta': {
    fr: 'Voir nos solutions',
    en: 'Discover our solutions',
    es: 'Ver nuestras soluciones',
    pt: 'Ver as nossas soluções',
    de: 'Unsere Lösungen entdecken'
  },
  'hero.stat1.value': {
    fr: '100%',
    en: '100%',
    es: '100%',
    pt: '100%',
    de: '100%'
  },
  'hero.stat1.label': {
    fr: 'Naturel',
    en: 'Natural',
    es: 'Natural',
    pt: 'Natural',
    de: 'Natürlich'
  },
  'hero.stat2.value': {
    fr: '10',
    en: '10',
    es: '10',
    pt: '10',
    de: '10'
  },
  'hero.stat2.label': {
    fr: 'solutions en développement, dont 5 déjà sur le marché',
    en: 'solutions in development, including 5 already on the market',
    es: 'soluciones en desarrollo, 5 ya en el mercado',
    pt: 'soluções em desenvolvimento, 5 já no mercado',
    de: 'Lösungen in Entwicklung, davon 5 bereits am Markt'
  },
  'hero.stat3.label': {
    fr: 'Origine',
    en: 'Origin',
    es: 'Origen',
    pt: 'Origem',
    de: 'Herkunft'
  },
  // Solutions section
  'solutions.title': {
    fr: '4 gammes pour une agriculture sans compromis',
    en: '4 ranges for uncompromising agriculture',
    es: '4 gamas para una agricultura sin compromisos',
    pt: '4 linhas para uma agricultura sem compromissos',
    de: '4 Produktlinien für eine kompromisslose Landwirtschaft'
  },
  'solutions.badge.available': {
    fr: 'Disponible', en: 'Available', es: 'Disponible', pt: 'Disponível', de: 'Verfügbar'
  },
  'solutions.badge.pipeline': {
    fr: 'En développement', en: 'In development', es: 'En desarrollo', pt: 'Em desenvolvimento', de: 'In Entwicklung'
  },
  'solutions.subtitle': {
    fr: 'Issues de la biologie des insectes, nos solutions proposent des alternatives aux intrants chimiques sans sacrifier votre rendement.',
    en: 'Derived from insect biology, our solutions replace chemical inputs without sacrificing your yield.',
    es: 'Basadas en la biología de los insectos, nuestras soluciones sustituyen los insumos químicos sin sacrificar el rendimiento.',
    pt: 'Baseadas na biologia dos insetos, nossas soluções substituem os insumos químicos sem sacrificar a produtividade.',
    de: 'Basierend auf der Insektenbiologie ersetzen unsere Lösungen chemische Inputs, ohne Ihren Ertrag zu beeinträchtigen.'
  },
  'solutions.subtitle2': {
    fr: 'Nous répondons aux défis majeurs des agriculteurs du monde entier :',
    en: 'We address the major challenges faced by farmers worldwide:',
    es: 'Respondemos a los principales desafíos de los agricultores de todo el mundo:',
    pt: 'Respondemos aos principais desafios enfrentados no campo em todo o mundo:',
    de: 'Wir begegnen den großen Herausforderungen der Landwirte weltweit:'
  },
  'solutions.challenges': {
    fr: 'compétitivité, productivité, préservation des sols, de la biodiversité et du climat',
    en: 'competitiveness, productivity, soil preservation, biodiversity and climate',
    es: 'competitividad, productividad, preservación de suelos, biodiversidad y clima',
    pt: 'competitividade, produtividade, preservação dos solos, biodiversidade e clima',
    de: 'Wettbewerbsfähigkeit, Produktivität, Bodenschutz, Biodiversität und Klima'
  },
  'solutions.approach': {
    fr: 'Pour cela, nous exploitons le potentiel des insectes pour créer des solutions agricoles durables, performantes et abordables. Notre approche scientifique et technique combine',
    en: 'To achieve this, we harness the potential of insects to create sustainable, efficient and affordable agricultural solutions. Our scientific and technical approach combines',
    es: 'Para ello, aprovechamos el potencial de los insectos para crear soluciones agrícolas sostenibles, eficientes y asequibles. Nuestro enfoque científico y técnico combina',
    pt: 'Para isso, aproveitamos o potencial dos insetos para criar soluções agrícolas sustentáveis, eficientes e acessíveis. Nossa abordagem científica e técnica combina',
    de: 'Dafür nutzen wir das Potenzial von Insekten, um nachhaltige, leistungsstarke und erschwingliche Agrarlösungen zu schaffen. Unser wissenschaftlich-technischer Ansatz verbindet'
  },
  'solutions.expertise': {
    fr: 'savoir faire artisanal, maîtrise de la production et compétences agronomiques',
    en: 'artisanal expertise, production mastery and agronomic skills',
    es: 'saber hacer artesanal, dominio de la producción y competencias agronómicas',
    pt: 'saber-fazer artesanal, excelência produtiva e competências agronômicas',
    de: 'handwerkliches Know-how, Produktionsbeherrschung und agronomische Kompetenz'
  },
  'solutions.forFarmers': {
    fr: 'pour répondre aux besoins des agriculteurs.',
    en: 'to meet the needs of farmers.',
    es: 'para satisfacer las necesidades de los agricultores.',
    pt: 'para atender às necessidades dos agricultores.',
    de: 'um den Bedürfnissen der Landwirte gerecht zu werden.'
  },
  // Solutions cards
  'solutions.bioprotection.title': {
    fr: 'Bioprotection',
    en: 'Bioprotection',
    es: 'Bioprotección',
    pt: 'Bioproteção',
    de: 'Bioschutz'
  },
  'solutions.bioprotection.subtitle': {
    fr: 'Protégez vos cultures avec les insectes auxiliaires',
    en: 'Protect your crops with living organisms',
    es: 'Proteger sus cultivos con seres vivos',
    pt: 'Proteger suas culturas com seres vivos',
    de: 'Schützen Sie Ihre Kulturen mit Lebewesen'
  },
  'solutions.bioprotection.pests': {
    fr: 'Lâchers d\'insectes prédateurs',
    en: 'Releases of predatory insects',
    es: 'Suelta de insectos depredadores',
    pt: 'Liberação de insetos predadores',
    de: 'Ausbringung von Nützlingen'
  },
  'solutions.bioprotection.pestsList': {
    fr: 'contre pucerons, pyrales et cochenilles',
    en: 'against aphids, borers and scale insects',
    es: 'contra pulgones, polillas y cochinillas',
    pt: 'contra pulgões, brocas e cochonilhas',
    de: 'gegen Blattläuse, Zünsler und Schildläuse'
  },
  'solutions.bioprotection.innovation': {
    fr: 'Solutions d\'application innovantes pour une meilleure performance',
    en: 'Innovative application solutions for better performance',
    es: 'Soluciones de aplicación innovadoras para un mejor rendimiento',
    pt: 'Tecnologias de aplicação inovadoras para máximo desempenho.',
    de: 'Innovative Anwendungslösungen für bessere Leistung'
  },
  'solutions.biopesticides.title': {
    fr: 'Biopesticides',
    en: 'Biopesticides',
    es: 'Biopesticidas',
    pt: 'Biopesticidas',
    de: 'Biopestizide'
  },
  'solutions.biopesticides.subtitle': {
    fr: 'Solutions écologiques innovantes',
    en: 'Innovative ecological solutions',
    es: 'Soluciones ecológicas innovadoras',
    pt: 'Soluções ecológicas inovadoras',
    de: 'Innovative ökologische Lösungen'
  },
  'solutions.biopesticides.molecules': {
    fr: 'Extraits des',
    en: 'Extracts of',
    es: 'Extractos de',
    pt: 'Moléculas e extratos naturais para',
    de: 'Extrakte von'
  },
  'solutions.biopesticides.protection': {
    fr: 'molécules de protection',
    en: 'protective molecules',
    es: 'moléculas de protección',
    pt: 'proteção',
    de: 'Schutzmolekülen'
  },
  'solutions.biopesticides.agents': {
    fr: 'Agents actifs naturels',
    en: 'Natural active agents',
    es: 'Agentes activos naturales',
    pt: 'Ingredientes ativos de origem natural',
    de: 'Natürliche Wirkstoffe'
  },
  'solutions.boosters.title': {
    fr: 'Boosters',
    en: 'Boosters',
    es: 'Potenciadores',
    pt: 'Bioestimulante',
    de: 'Booster'
  },
  'solutions.boosters.subtitle': {
    fr: 'Activateur de sol et résistance aux stress',
    en: 'Soil activator and stress resistance',
    es: 'Activador de suelo y resistencia al estrés',
    pt: 'Ativador de solo e resistência ao estresse',
    de: 'Bodenaktivator und Stressresistenz'
  },
  'solutions.boosters.polypeptides': {
    fr: 'Riches en',
    en: 'Rich in',
    es: 'Rico en',
    pt: 'Rico em',
    de: 'Reich an'
  },
  'solutions.boosters.substances': {
    fr: 'Extraits actifs',
    en: 'Active extracts',
    es: 'Extractos activos',
    pt: 'Extratos bioativos',
    de: 'Aktive Extrakte'
  },
  'solutions.biofertilisant.title': {
    fr: 'Biofertilisants',
    en: 'Biofertilizers',
    es: 'Biofertilizantes',
    pt: 'Biofertilizantes',
    de: 'Biodünger'
  },
  'solutions.biofertilisant.subtitle': {
    fr: 'Nutrition optimale des cultures',
    en: 'Optimal crop nutrition',
    es: 'Nutrición óptima de cultivos',
    pt: 'Nutrição completa para suas culturas',
    de: 'Optimale Pflanzenernährung'
  },
  'solutions.biofertilisant.organic': {
    fr: 'Riches en matière organique',
    en: 'Rich in organic matter',
    es: 'Rico en materia orgánica',
    pt: 'Rico em matéria orgânica',
    de: 'Reich an organischer Substanz'
  },
  'solutions.biofertilisant.npk': {
    fr: 'Concentration équilibrée en NPK',
    en: 'Balanced NPK concentration',
    es: 'Concentración equilibrada de NPK',
    pt: 'Equilíbrio de NPK para melhor desempenho',
    de: 'Ausgewogene NPK-Konzentration'
  },
  // Innovation section
  'innovation.title': {
    fr: 'L\'innovation par les insectes',
    en: 'Innovation through insects',
    es: 'Innovación a través de insectos',
    pt: 'Inovação através de insetos',
    de: 'Innovation durch Insekten'
  },
  'innovation.substances.question': {
    fr: 'Pourquoi protéger vos cultures avec des extraits d\'insectes?',
    en: 'Why protect your crops with insect extracts?',
    es: '¿Por qué proteger sus cultivos con extractos de insectos?',
    pt: 'Por que proteger suas culturas com extratos de insetos?',
    de: 'Warum Ihre Kulturen mit Insektenextrakten schützen?'
  },
  'innovation.biocontrol.question': {
    fr: 'Pourquoi protéger vos cultures avec des insectes auxiliaires?',
    en: 'Why protect your crops with beneficial insects?',
    es: '¿Por qué proteger sus cultivos con insectos auxiliares?',
    pt: 'Por que proteger suas culturas com insetos auxiliares?',
    de: 'Warum Ihre Kulturen mit Nützlingen schützen?'
  },
  // Infographic - Substances
  'innovation.infographic.substances.title': {
    fr: 'Des extraits d\'insectes pour l\'agriculture',
    en: 'Insect extracts for agriculture',
    es: 'Extractos de insectos para la agricultura',
    pt: 'Extratos de insetos para a agricultura',
    de: 'Insektenextrakte für die Landwirtschaft'
  },
  'innovation.infographic.substances.benefit1': {
    fr: 'Interagissent rapidement avec la plante et le sol, naturellement',
    en: 'Interact quickly with the plant and soil, naturally',
    es: 'Interactúan rápidamente con la planta y el suelo, naturalmente',
    pt: 'Interagem rapidamente com a planta e o solo, naturalmente',
    de: 'Interagieren schnell und natürlich mit Pflanze und Boden'
  },
  'innovation.infographic.substances.benefit2': {
    fr: 'Respectent l\'environnement sans aucun résidu toxique',
    en: 'Respect the soil without any toxic residue',
    es: 'Respetan el suelo sin ningún residuo tóxico',
    pt: 'Respeitam o solo sem nenhum resíduo tóxico',
    de: 'Schonen den Boden ohne toxische Rückstände'
  },
  'innovation.infographic.substances.benefit3': {
    fr: 'Assure la qualité et le rendement',
    en: 'Improve yield',
    es: 'Mejoran el rendimiento',
    pt: 'Melhoram o rendimento',
    de: 'Verbessern den Ertrag'
  },
  // Infographic - Biocontrol
  'innovation.infographic.biocontrol.title': {
    fr: 'Biocontrôle vivant pour les cultures',
    en: 'Living biocontrol for crops',
    es: 'Biocontrol vivo para los cultivos',
    pt: 'Biocontrole vivo para as culturas',
    de: 'Lebende Biokontrolle für Kulturen'
  },
  'innovation.infographic.biocontrol.stat1.value': {
    fr: '84%',
    en: '84%',
    es: '84%',
    pt: '84%',
    de: '84%'
  },
  'innovation.infographic.biocontrol.stat1.label': {
    fr: 'des cultures dépendent des insectes pour leur qualité et rendement',
    en: 'of crops depend on insects for their quality and yield',
    es: 'de los cultivos dependen de los insectos para su calidad y rendimiento',
    pt: 'das culturas dependem dos insetos para sua qualidade e rendimento',
    de: 'der Kulturen hängen für Qualität und Ertrag von Insekten ab'
  },
  'innovation.infographic.biocontrol.stat2.value': {
    fr: '150',
    en: '5500',
    es: '5500',
    pt: '5500',
    de: '5500'
  },
  'innovation.infographic.biocontrol.stat2.label': {
    fr: 'auxiliaires utiles aux cultures recensés en France. Keprea sélectionne les plus performants pour une efficacité optimale en plein champ',
    en: 'beneficial insects useful to crops recorded in France. Keprea selects the most effective ones for optimal performance in the field',
    es: 'auxiliares útiles para los cultivos registrados en Francia. Keprea selecciona los más eficaces para un rendimiento óptimo en campo',
    pt: 'auxiliares úteis às culturas recenseados em França. A Keprea seleciona os mais eficazes para um desempenho ótimo em pleno campo',
    de: 'für Kulturen nützliche Helfer, die in Frankreich erfasst wurden. Keprea wählt die leistungsstärksten für eine optimale Wirksamkeit im Feld aus'
  },
  'innovation.infographic.biocontrol.stat3.value': {
    fr: '10 000',
    en: '10,000',
    es: '10 000',
    pt: '10 000',
    de: '10.000'
  },
  'innovation.infographic.biocontrol.stat3.label': {
    fr: 'individus actifs par m² en moyenne',
    en: 'active individuals per m² on average',
    es: 'individuos activos por m² en promedio',
    pt: 'indivíduos ativos por m² em média',
    de: 'aktive Individuen pro m² im Durchschnitt'
  },
  // Production section
  'production.title': {
    fr: 'Notre biofabrique',
    en: 'Our production site',
    es: 'Nuestro sitio de producción',
    pt: 'Nosso local de produção',
    de: 'Unser Produktionsstandort'
  },
  'production.subtitle': {
    fr: 'Découvrez notre biofabrique moderne, située en France, où nous développons et produisons nos biosolutions',
    en: 'Discover our modern production site, made in France, where we develop and produce our biosolutions',
    es: 'Descubra nuestro moderno sitio de producción, made in France, donde desarrollamos y producimos nuestras biosoluciones',
    pt: 'Descubra a nossa moderna unidade de produção, made in France, onde desenvolvemos e produzimos as nossas biosoluções.',
    de: 'Entdecken Sie unseren modernen Produktionsstandort, made in France, wo wir unsere Biolösungen entwickeln und herstellen'
  },
  'production.excellence': {
    fr: 'Un site d\'excellence',
    en: 'A site of excellence',
    es: 'Un sitio de excelencia',
    pt: 'Um local de excelência',
    de: 'Ein Standort der Exzellenz'
  },
  'production.location.title': {
    fr: 'Localisation stratégique',
    en: 'Strategic location',
    es: 'Ubicación estratégica',
    pt: 'Localização estratégica',
    de: 'Strategische Lage'
  },
  'production.location.desc': {
    fr: 'Situé en France, notre site est à seulement 2 heures de Paris, Bâle, Genève et Lyon, au cœur d\'un important bassin céréalier et viticole français.',
    en: 'Located in France, our site is only 2 hours from Paris, Basel, Geneva and Lyon, in the heart of an important French cereal and wine-growing basin.',
    es: 'Situado en Francia, nuestro sitio está a solo 2 horas de París, Basilea, Ginebra y Lyon, en el corazón de una importante cuenca cerealera y vitícola francesa.',
    pt: 'Localizada em França, a nossa unidade fica a apenas 2 horas de Paris, Basileia, Genebra e Lyon, no coração de uma importante região produtora de cereais e cultivo de uva para vinho na França.',
    de: 'Gelegen in Frankreich, ist unser Standort nur 2 Stunden von Paris, Basel, Genf und Lyon entfernt, im Herzen eines wichtigen französischen Getreide- und Weinanbaugebiets.'
  },
  'production.technology.title': {
    fr: 'Technologies modernes',
    en: 'Modern technologies',
    es: 'Tecnologías modernas',
    pt: 'Tecnologias modernas',
    de: 'Moderne Technologien'
  },
  'production.technology.desc': {
    fr: 'Équipements de pointe pour la production de solutions de bioprotection et de boosters',
    en: 'State-of-the-art equipment for the production of bioprotection solutions and boosters',
    es: 'Equipos de vanguardia para la producción de soluciones de bioprotección y potenciadores',
    pt: 'Equipamentos de ponta para a produção de soluções de bioproteção e potenciadores',
    de: 'Modernste Ausrüstung für die Herstellung von Bioschutzlösungen und Boostern'
  },
  'production.environment.title': {
    fr: 'Respect de l\'environnement',
    en: 'Environmental respect',
    es: 'Respeto al medio ambiente',
    pt: 'Respeito ao meio ambiente',
    de: 'Umweltschutz'
  },
  'production.environment.desc': {
    fr: 'Processus de production éco-responsable et certifications qualité',
    en: 'Eco-responsible production process and quality certifications',
    es: 'Proceso de producción eco-responsable y certificaciones de calidad',
    pt: 'Processo de produção eco-responsável e certificações de qualidade',
    de: 'Umweltbewusster Produktionsprozess und Qualitätszertifizierungen'
  },
  'production.team.title': {
    fr: 'Équipe d\'experts',
    en: 'Team of experts',
    es: 'Equipo de expertos',
    pt: 'Equipe de especialistas',
    de: 'Expertenteam'
  },
  'production.team.desc': {
    fr: 'Une équipe de spécialistes dédiée à l\'innovation et à la qualité',
    en: 'A team of specialists dedicated to innovation and quality',
    es: 'Un equipo de especialistas dedicado a la innovación y la calidad',
    pt: 'Uma equipe de especialistas dedicada à inovação e qualidade',
    de: 'Ein Spezialistenteam für Innovation und Qualität'
  },
  'production.process.title': {
    fr: 'De la larve au champ',
    en: 'From larva to field',
    es: 'De la larva al campo',
    pt: 'Da larva ao campo',
    de: 'Von der Larve aufs Feld'
  },
  'production.process.step1': {
    fr: 'Élevage d\'insectes auxiliaires',
    en: 'Beneficial Insect Breeding',
    es: 'Cría de insectos auxiliares',
    pt: 'Criação de insetos auxiliares',
    de: 'Nützlingszucht'
  },
  'production.process.step2': {
    fr: 'Collecte de co-produits d\'insectes',
    en: 'Co-product Collection',
    es: 'Recolección de Co-productos',
    pt: 'Coleta de Co-produtos',
    de: 'Sammlung von Nebenprodukten'
  },
  'production.process.step3': {
    fr: 'Préparation ou transformation',
    en: 'Preparation or transformation',
    es: 'Preparación o transformación',
    pt: 'Preparação ou transformação',
    de: 'Aufbereitung oder Verarbeitung'
  },
  'production.process.step4': {
    fr: 'Packaging',
    en: 'Packaging',
    es: 'Envasado',
    pt: 'Embalagem',
    de: 'Verpackung'
  },
  'production.process.step5': {
    fr: 'Conseil d\'utilisation en plein champ',
    en: 'Field Application Advice',
    es: 'Consejo de uso en campo',
    pt: 'Orientação de uso no campo',
    de: 'Anwendungsberatung im Freiland'
  },
  'production.process.transport': {
    fr: 'Transport',
    en: 'Transport',
    es: 'Transporte',
    pt: 'Transporte',
    de: 'Transport'
  },
  // About section
  'about.title': {
    fr: 'À propos de Keprea',
    en: 'About Keprea',
    es: 'Acerca de Keprea',
    pt: 'Sobre a Keprea',
    de: 'Über Keprea'
  },
  'about.subtitle': {
    fr: 'Producteurs de biosolutions Made in France',
    en: 'Producers of biosolutions Made in France',
    es: 'Productores de biosoluciones Made in France',
    pt: 'Produtores de biosoluções Made in France',
    de: 'Hersteller von Biolösungen Made in France'
  },
  'about.history.title': {
    fr: 'Notre Histoire',
    en: 'Our History',
    es: 'Nuestra Historia',
    pt: 'Nossa História',
    de: 'Unsere Geschichte'
  },
  'about.history.p1': {
    fr: 'Fondée en',
    en: 'Founded in',
    es: 'Fundada en',
    pt: 'Fundada em',
    de: 'Gegründet im Jahr'
  },
  'about.history.p1.year': {
    fr: '2024',
    en: '2024',
    es: '2024',
    pt: '2024',
    de: '2024'
  },
  'about.history.p1.by': {
    fr: 'par',
    en: 'by',
    es: 'por',
    pt: 'por',
    de: 'von'
  },
  'about.history.p1.associates': {
    fr: '7 associés experts',
    en: '7 expert associates',
    es: '7 socios expertos',
    pt: 'sete sócios especialistas',
    de: '7 Expertengründern'
  },
  'about.history.p1.roles': {
    fr: '(agriculteurs, entomologistes, agronomes et entrepreneurs)',
    en: '(farmers, entomologists, agronomists and entrepreneurs)',
    es: '(agricultores, entomólogos, agrónomos y empresarios)',
    pt: '(agricultores, entomologistas, agrônomos e empresários)',
    de: '(Landwirte, Entomologen, Agronomen und Unternehmer)'
  },
  'about.history.p1.vision.intro': {
    fr: 'Keprea est née d\'une vision commune :',
    en: 'Keprea was born from a common vision:',
    es: 'Keprea nació de una visión común:',
    pt: 'a Keprea nasceu de uma visão comum:',
    de: 'Keprea entstand aus einer gemeinsamen Vision:'
  },
  'about.history.p1.vision.bold': {
    fr: 'que le vivant revienne au cœur de la gestion de la ferme.',
    en: 'bringing life back to the heart of farm management.',
    es: 'que lo vivo vuelva al corazón de la gestión de la granja.',
    pt: 'trazer a vida de volta ao centro da gestão da fazenda.',
    de: 'das Lebendige wieder in den Mittelpunkt der Betriebsführung zu stellen.'
  },
  'about.history.body': {
    fr: 'Situé en France, notre site de 3 000 m² produit des biosolutions de qualité stable et reproductible, toutes utilisables en agriculture biologique.',
    en: 'Made in France, our 3,000 m² facility produces biosolutions of stable, reproducible quality, all compatible with organic farming.',
    es: 'Made in France, nuestro sitio de 3.000 m² produce biosoluciones de calidad estable y reproducible, todas compatibles con la agricultura ecológica.',
    pt: 'Made in France, a nossa unidade de 3.000 m² produz biosoluções de qualidade estável e reprodutível, todas compatíveis com a agricultura biológica.',
    de: 'Made in France entwickelt unser 3.000 m² großer Standort Biolösungen von stabiler, reproduzierbarer Qualität, alle für den ökologischen Landbau geeignet.'
  },
  // About values
  'about.value1.title': {
    fr: 'Innovation Naturelle',
    en: 'Natural Innovation',
    es: 'Innovación Natural',
    pt: 'Inovação Natural',
    de: 'Natürliche Innovation'
  },
  'about.value1.desc': {
    fr: 'Nous développons des solutions biosourcées issues d\'insectes pour une agriculture durable et respectueuse de l\'environnement.',
    en: 'We develop bio-based solutions from insects for sustainable and environmentally friendly agriculture.',
    es: 'Desarrollamos soluciones de base biológica derivadas de insectos para una agricultura sostenible y respetuosa con el medio ambiente.',
    pt: 'Desenvolvemos soluções de base biológica derivadas de insetos para uma agricultura sustentável e respeitadora do meio ambiente.',
    de: 'Wir entwickeln biobasierte Lösungen aus Insekten für eine nachhaltige und umweltfreundliche Landwirtschaft.'
  },
  'about.value2.title': {
    fr: 'Excellence Scientifique',
    en: 'Scientific Excellence',
    es: 'Excelencia Científica',
    pt: 'Excelência Científica',
    de: 'Wissenschaftliche Exzellenz'
  },
  'about.value2.desc': {
    fr: 'Notre équipe R&D combine expertise entomologique et agronomique pour créer des produits efficaces et homologués.',
    en: 'Our R&D team combines entomological and agronomic expertise to create effective and approved products.',
    es: 'Nuestro equipo de I+D combina experiencia entomológica y agronómica para crear productos eficaces y homologados.',
    pt: 'Nossa equipe de P&D combina experiência entomológica e agronômica para criar produtos eficazes e aprovados.',
    de: 'Unser F&E-Team verbindet entomologische und agronomische Expertise, um wirksame und zugelassene Produkte zu entwickeln.'
  },
  'about.value3.title': {
    fr: 'Partenariat Agricole',
    en: 'Agricultural Partnership',
    es: 'Asociación Agrícola',
    pt: 'Parceria Agrícola',
    de: 'Landwirtschaftliche Partnerschaft'
  },
  'about.value3.desc': {
    fr: 'Nous accompagnons les agriculteurs dans leur transition vers des pratiques plus durables avec des solutions adaptées.',
    en: 'We support farmers in their transition to more sustainable practices with tailored solutions.',
    es: 'Acompañamos a los agricultores en su transición hacia prácticas más sostenibles con soluciones adaptadas.',
    pt: 'Acompanhamos os agricultores em sua transição para práticas mais sustentáveis com soluções adaptadas.',
    de: 'Wir begleiten Landwirte bei der Umstellung auf nachhaltigere Praktiken mit maßgeschneiderten Lösungen.'
  },
  'about.value4.title': {
    fr: 'Impact Mesurable',
    en: 'Measurable Impact',
    es: 'Impacto Medible',
    pt: 'Impacto Mensurável',
    de: 'Messbare Wirkung'
  },
  'about.value4.desc': {
    fr: 'Des résultats concrets et quantifiables sur le terrain : réduction des intrants chimiques, amélioration des rendements et protection de la biodiversité.',
    en: 'Concrete, measurable results in the field: reduction of chemical inputs, improved yields and protection of biodiversity.',
    es: 'Resultados concretos y cuantificables en el campo: reducción de insumos químicos, mejora de los rendimientos y protección de la biodiversidad.',
    pt: 'Resultados concretos e quantificáveis no campo: redução de insumos químicos, melhoria dos rendimentos e proteção da biodiversidade.',
    de: 'Konkrete und messbare Ergebnisse im Feld: Reduzierung chemischer Betriebsmittel, Ertragssteigerung und Schutz der Biodiversität.'
  },
  // Team section
  'team.title': {
    fr: 'Notre équipe',
    en: 'Our team',
    es: 'Nuestro equipo',
    pt: 'Nossa equipe',
    de: 'Unser Team'
  },
  'team.subtitle': {
    fr: 'Une équipe passionnée d\'experts en agriculture, industrie et politiques agricoles',
    en: 'A passionate team of experts in biotechnology, agriculture, industry and agricultural policies',
    es: 'Un equipo apasionado de expertos en biotecnología, agricultura, industria y políticas agrícolas',
    pt: 'Uma equipe apaixonada de especialistas em biotecnologia, agricultura, indústria e políticas agrícolas',
    de: 'Ein leidenschaftliches Expertenteam für Landwirtschaft, Industrie und Agrarpolitik'
  },
  // Contact form
  'contact.title': {
    fr: 'Contactez-nous',
    en: 'Contact us',
    es: 'Contáctanos',
    pt: 'Entre em contato',
    de: 'Kontaktieren Sie uns'
  },
  'contact.subtitle': {
    fr: 'Découvrez comment nos biosolutions peuvent transformer votre agriculture',
    en: 'Discover how our biosolutions can transform your agriculture',
    es: 'Descubra cómo nuestras biosoluciones pueden transformar su agricultura',
    pt: 'Descubra como nossas biosoluções podem transformar sua agricultura',
    de: 'Entdecken Sie, wie unsere Biolösungen Ihre Landwirtschaft verändern können'
  },
  'contact.form.title': {
    fr: 'Parlez-nous de votre projet',
    en: 'Tell us about your project',
    es: 'Cuéntanos sobre tu proyecto',
    pt: 'Conte-nos sobre seu projeto',
    de: 'Erzählen Sie uns von Ihrem Projekt'
  },
  'contact.form.firstName': {
    fr: 'Prénom',
    en: 'First name',
    es: 'Nombre',
    pt: 'Nome',
    de: 'Vorname'
  },
  'contact.form.lastName': {
    fr: 'Nom',
    en: 'Last name',
    es: 'Apellido',
    pt: 'Sobrenome',
    de: 'Nachname'
  },
  'contact.form.company': {
    fr: 'Entreprise',
    en: 'Company',
    es: 'Empresa',
    pt: 'Empresa',
    de: 'Unternehmen'
  },
  'contact.form.subject': {
    fr: 'Sujet d\'intérêt',
    en: 'Subject of interest',
    es: 'Tema de interés',
    pt: 'Assunto de interesse',
    de: 'Interessengebiet'
  },
  'contact.form.subject.placeholder': {
    fr: 'Sélectionnez un sujet',
    en: 'Select a subject',
    es: 'Seleccionar un tema',
    pt: 'Selecione um assunto',
    de: 'Thema auswählen'
  },
  'contact.form.subject.biofertilisant': {
    fr: 'Biofertilisant et Boosters',
    en: 'Biofertilizer and Boosters',
    es: 'Biofertilizante y Potenciadores',
    pt: 'Biofertilizante e Potenciadores',
    de: 'Biodünger und Booster'
  },
  'contact.form.subject.biopesticides': {
    fr: 'Biopesticides',
    en: 'Biopesticides',
    es: 'Biopesticidas',
    pt: 'Biopesticidas',
    de: 'Biopestizide'
  },
  'contact.form.subject.biocontrol': {
    fr: 'Biocontrôle',
    en: 'Biocontrol',
    es: 'Biocontrol',
    pt: 'Biocontrole',
    de: 'Biokontrolle'
  },
  'contact.form.subject.info': {
    fr: 'Demande d\'information générale',
    en: 'General information request',
    es: 'Solicitud de información general',
    pt: 'Solicitação de informações gerais',
    de: 'Allgemeine Informationsanfrage'
  },
  'contact.form.message': {
    fr: 'Message',
    en: 'Message',
    es: 'Mensaje',
    pt: 'Mensagem',
    de: 'Nachricht'
  },
  'contact.form.message.placeholder': {
    fr: 'Décrivez votre projet ou vos besoins...',
    en: 'Describe your project or needs...',
    es: 'Describe tu proyecto o necesidades...',
    pt: 'Descreva seu projeto ou necessidades...',
    de: 'Beschreiben Sie Ihr Projekt oder Ihre Anforderungen...'
  },
  'contact.form.submit': {
    fr: 'Envoyer ma demande',
    en: 'Send my request',
    es: 'Enviar mi solicitud',
    pt: 'Enviar minha solicitação',
    de: 'Anfrage senden'
  },
  'contact.form.submitting': {
    fr: 'Envoi en cours...',
    en: 'Sending...',
    es: 'Enviando...',
    pt: 'Enviando...',
    de: 'Wird gesendet...'
  },
  'contact.form.firstName.placeholder': {
    fr: 'Votre prénom',
    en: 'Your first name',
    es: 'Tu nombre',
    pt: 'Seu nome',
    de: 'Ihr Vorname'
  },
  'contact.form.lastName.placeholder': {
    fr: 'Votre nom',
    en: 'Your last name',
    es: 'Tu apellido',
    pt: 'Seu sobrenome',
    de: 'Ihr Nachname'
  },
  'contact.form.email.placeholder': {
    fr: 'votre.email@exemple.com',
    en: 'your.email@example.com',
    es: 'tu.email@ejemplo.com',
    pt: 'seu.email@exemplo.com',
    de: 'ihre.email@beispiel.com'
  },
  'contact.form.company.placeholder': {
    fr: 'Nom de votre entreprise',
    en: 'Your company name',
    es: 'Nombre de tu empresa',
    pt: 'Nome da sua empresa',
    de: 'Ihr Firmenname'
  },
  // Contact page tabs (contact général vs retour terrain)
  'contact.tabs.contact': {
    fr: 'Contact',
    en: 'Contact',
    es: 'Contacto',
    pt: 'Contato',
    de: 'Kontakt'
  },
  'contact.tabs.terrain': {
    fr: 'Retour terrain',
    en: 'Field feedback',
    es: 'Retorno de campo',
    pt: 'Retorno de campo',
    de: 'Feldrückmeldung'
  },
  // Field feedback form (agriculteurs / conseillers agricoles)
  'contact.terrain.title': {
    fr: 'Partagez votre retour terrain',
    en: 'Share your field feedback',
    es: 'Comparte tu experiencia en el campo',
    pt: 'Compartilhe sua experiência em campo',
    de: 'Teilen Sie Ihre Erfahrungen aus dem Feld'
  },
  'contact.terrain.culture': {
    fr: 'Culture concernée',
    en: 'Crop',
    es: 'Cultivo',
    pt: 'Cultura',
    de: 'Kultur'
  },
  'contact.terrain.culture.placeholder': {
    fr: 'Ex : vigne, pomme de terre, maraîchage...',
    en: 'E.g. grapevine, potato, market gardening...',
    es: 'Ej.: viña, patata, horticultura...',
    pt: 'Ex.: videira, batata, horticultura...',
    de: 'Z. B. Weinrebe, Kartoffel, Gemüsebau...'
  },
  'contact.terrain.region': {
    fr: 'Région / département',
    en: 'Region',
    es: 'Región',
    pt: 'Região',
    de: 'Region'
  },
  'contact.terrain.region.placeholder': {
    fr: 'Ex : Jura (39)',
    en: 'E.g. Jura, France',
    es: 'Ej.: Jura, Francia',
    pt: 'Ex.: Jura, França',
    de: 'Z. B. Jura, Frankreich'
  },
  'contact.terrain.product': {
    fr: 'Produit Keprea utilisé',
    en: 'Keprea product used',
    es: 'Producto Keprea utilizado',
    pt: 'Produto Keprea utilizado',
    de: 'Verwendetes Keprea-Produkt'
  },
  'contact.terrain.product.placeholder': {
    fr: 'Sélectionnez un produit',
    en: 'Select a product',
    es: 'Seleccionar un producto',
    pt: 'Selecione um produto',
    de: 'Produkt auswählen'
  },
  'contact.terrain.product.biofertilisant': {
    fr: 'Biofertilisant',
    en: 'Biofertilizer',
    es: 'Biofertilizante',
    pt: 'Biofertilizante',
    de: 'Biodünger'
  },
  'contact.terrain.product.boosters': {
    fr: 'Boosters',
    en: 'Boosters',
    es: 'Potenciadores',
    pt: 'Potenciadores',
    de: 'Booster'
  },
  'contact.terrain.product.biocontrole': {
    fr: 'Biocontrôle',
    en: 'Biocontrol',
    es: 'Biocontrol',
    pt: 'Biocontrole',
    de: 'Biokontrolle'
  },
  'contact.terrain.product.extraits': {
    fr: 'Extraits naturels',
    en: 'Natural extracts',
    es: 'Extractos naturales',
    pt: 'Extratos naturais',
    de: 'Natürliche Extrakte'
  },
  'contact.terrain.product.autre': {
    fr: 'Autre / je ne sais pas',
    en: 'Other / not sure',
    es: 'Otro / no estoy seguro',
    pt: 'Outro / não sei',
    de: 'Andere / weiß nicht'
  },
  'contact.terrain.feedback': {
    fr: 'Votre retour',
    en: 'Your feedback',
    es: 'Tu comentario',
    pt: 'Seu retorno',
    de: 'Ihre Rückmeldung'
  },
  'contact.terrain.feedback.placeholder': {
    fr: 'Décrivez le contexte d\'usage et les résultats observés sur vos parcelles...',
    en: 'Describe how you used the product and the results observed on your fields...',
    es: 'Describe el contexto de uso y los resultados observados en tus parcelas...',
    pt: 'Descreva o contexto de uso e os resultados observados em suas parcelas...',
    de: 'Beschreiben Sie den Einsatzkontext und die beobachteten Ergebnisse auf Ihren Feldern...'
  },
  'contact.terrain.submit': {
    fr: 'Envoyer mon retour terrain',
    en: 'Send my field feedback',
    es: 'Enviar mi retorno de campo',
    pt: 'Enviar meu retorno de campo',
    de: 'Feldrückmeldung senden'
  },
  'toast.terrain.success': {
    fr: 'Merci pour votre retour !',
    en: 'Thank you for your feedback!',
    es: '¡Gracias por tu comentario!',
    pt: 'Obrigado pelo seu retorno!',
    de: 'Vielen Dank für Ihre Rückmeldung!'
  },
  'toast.terrain.success.desc': {
    fr: 'Votre retour terrain a bien été transmis à notre équipe agronomique.',
    en: 'Your field feedback has been sent to our agronomy team.',
    es: 'Tu retorno de campo ha sido enviado a nuestro equipo agronómico.',
    pt: 'Seu retorno de campo foi enviado à nossa equipe agronômica.',
    de: 'Ihre Feldrückmeldung wurde an unser Agronomie-Team gesendet.'
  },
  // Toast messages
  'toast.error': {
    fr: 'Erreur',
    en: 'Error',
    es: 'Error',
    pt: 'Erro',
    de: 'Fehler'
  },
  'toast.error.required': {
    fr: 'Veuillez remplir tous les champs obligatoires',
    en: 'Please fill in all required fields',
    es: 'Por favor complete todos los campos obligatorios',
    pt: 'Por favor preencha todos os campos obrigatórios',
    de: 'Bitte füllen Sie alle Pflichtfelder aus'
  },
  'toast.success': {
    fr: 'Message envoyé !',
    en: 'Message sent!',
    es: '¡Mensaje enviado!',
    pt: 'Mensagem enviada!',
    de: 'Nachricht gesendet!'
  },
  'toast.success.desc': {
    fr: 'Nous avons bien reçu votre message et vous répondrons rapidement.',
    en: 'We have received your message and will respond shortly.',
    es: 'Hemos recibido tu mensaje y te responderemos pronto.',
    pt: 'Recebemos sua mensagem e responderemos em breve.',
    de: 'Wir haben Ihre Nachricht erhalten und werden Ihnen in Kürze antworten.'
  },
  'toast.error.send': {
    fr: 'Une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer.',
    en: 'An error occurred while sending the message. Please try again.',
    es: 'Se produjo un error al enviar el mensaje. Por favor, inténtelo de nuevo.',
    pt: 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.',
    de: 'Beim Senden der Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.'
  },
  // Educational Game section
  'game.title': {
    fr: 'AgVengers - Le Jeu Éducatif',
    en: 'AgVengers - The Educational Game',
    es: 'AgVengers - El Juego Educativo',
    pt: 'AgVengers - O Jogo Educativo',
    de: 'AgVengers - Das Lernspiel'
  },
  'game.subtitle': {
    fr: 'Découvrez le monde fascinant des insectes auxiliaires et ravageurs à travers notre jeu de cartes éducatif et ludique',
    en: 'Discover the fascinating world of beneficial and pest insects through our educational and fun card game',
    es: 'Descubre el fascinante mundo de los insectos beneficiosos y plagas a través de nuestro juego de cartas educativo y divertido',
    pt: 'Descubra o fascinante mundo dos insetos benéficos e pragas através do nosso jogo de cartas educativo e divertido',
    de: 'Entdecken Sie die faszinierende Welt der Nützlinge und Schädlinge durch unser lehrreiches und unterhaltsames Kartenspiel'
  },
  'game.howToPlay': {
    fr: 'Comment Jouer ?',
    en: 'How to Play?',
    es: '¿Cómo Jugar?',
    pt: 'Como Jogar?',
    de: 'Wie spielt man?'
  },
  'game.step1.title': {
    fr: 'Découverte',
    en: 'Discovery',
    es: 'Descubrimiento',
    pt: 'Descoberta',
    de: 'Entdeckung'
  },
  'game.step1.description': {
    fr: 'Apprenez à identifier les différents insectes et leurs caractéristiques',
    en: 'Learn to identify different insects and their characteristics',
    es: 'Aprende a identificar diferentes insectos y sus características',
    pt: 'Aprenda a identificar diferentes insetos e suas características',
    de: 'Lernen Sie, verschiedene Insekten und ihre Eigenschaften zu erkennen'
  },
  'game.step2.title': {
    fr: 'Stratégie',
    en: 'Strategy',
    es: 'Estrategia',
    pt: 'Estratégia',
    de: 'Strategie'
  },
  'game.step2.description': {
    fr: 'Utilisez les super-pouvoirs des insectes auxiliaires contre les ravageurs',
    en: 'Use the superpowers of beneficial insects against pests',
    es: 'Usa los superpoderes de los insectos beneficiosos contra las plagas',
    pt: 'Use os superpoderes dos insetos benéficos contra as pragas',
    de: 'Nutzen Sie die Superkräfte der Nützlinge gegen Schädlinge'
  },
  'game.step3.title': {
    fr: 'Protection',
    en: 'Protection',
    es: 'Protección',
    pt: 'Proteção',
    de: 'Schutz'
  },
  'game.step3.description': {
    fr: 'Protégez vos cultures en créant un écosystème équilibré',
    en: 'Protect your crops by creating a balanced ecosystem',
    es: 'Protege tus cultivos creando un ecosistema equilibrado',
    pt: 'Proteja suas culturas criando um ecossistema equilibrado',
    de: 'Schützen Sie Ihre Kulturen durch ein ausgewogenes Ökosystem'
  },
  'game.educational.title': {
    fr: 'Objectif Pédagogique',
    en: 'Educational Objective',
    es: 'Objetivo Educativo',
    pt: 'Objetivo Educacional',
    de: 'Pädagogisches Ziel'
  },
  'game.educational.description': {
    fr: 'Ce jeu permet de comprendre l\'importance des insectes dans l\'écosystème agricole et d\'apprendre à distinguer les alliés des ravageurs.',
    en: 'This game helps understand the importance of insects in the agricultural ecosystem and learn to distinguish allies from pests.',
    es: 'Este juego ayuda a entender la importancia de los insectos en el ecosistema agrícola y aprender a distinguir aliados de plagas.',
    pt: 'Este jogo ajuda a entender a importância dos insetos no ecossistema agrícola e aprender a distinguir aliados de pragas.',
    de: 'Dieses Spiel hilft, die Bedeutung der Insekten im Agrarökosystem zu verstehen und Nützlinge von Schädlingen zu unterscheiden.'
  },
  // Product pages - Common
  'product.back': {
    fr: 'Retour aux biosolutions',
    en: 'Back to biosolutions',
    es: 'Volver a las biosoluciones',
    pt: 'Voltar às biosoluções',
    de: 'Zurück zu den Biolösungen'
  },
  'product.contact': {
    fr: 'Nous contacter',
    en: 'Contact us',
    es: 'Contáctanos',
    pt: 'Entre em contato',
    de: 'Kontaktieren Sie uns'
  },
  // SubstancesNaturelles page
  'substances.title': {
    fr: 'Biopesticides',
    en: 'Biopesticides',
    es: 'Biopesticidas',
    pt: 'Biopesticidas',
    de: 'Biopestizide'
  },
  'substances.subtitle': {
    fr: 'Solutions performantes à base d\'extraits naturels d\'insectes',
    en: 'High-performance solutions based on natural insect extracts',
    es: 'Soluciones de alto rendimiento basadas en extractos naturales de insectos',
    pt: 'Soluções de alto desempenho baseadas em extratos naturais de insetos',
    de: 'Hochleistungslösungen auf Basis natürlicher Insektenextrakte'
  },
  'substances.highlight': {
    fr: '100% Extraits Naturels',
    en: '100% Natural Extracts',
    es: '100% Extractos Naturales',
    pt: '100% Extratos Naturais',
    de: '100% Natürliche Extrakte'
  },
  'substances.benefit1.title': {
    fr: 'Protection foliaire, racinaire et aérienne',
    en: 'Foliar, root and aerial protection',
    es: 'Protección foliar, radicular y aérea',
    pt: 'Proteção foliar, radicular e aérea',
    de: 'Blatt-, Wurzel- und Luftschutz'
  },
  'substances.benefit1.desc': {
    fr: 'Agit sur les ravageurs suceurs, broyeurs et fouisseurs grâce à des molécules bioactives spécifiques.',
    en: 'Acts on sucking, chewing and burrowing pests through specific bioactive molecules.',
    es: 'Actúa sobre plagas succionadoras, masticadoras y excavadoras mediante moléculas bioactivas específicas.',
    pt: 'Age sobre pragas sugadoras, mastigadoras e mineiras através de moléculas bioativas específicas.',
    de: 'Wirkt gegen saugende, beißende und grabende Schädlinge durch spezifische bioaktive Moleküle.'
  },
  'substances.benefit2.title': {
    fr: 'Stimulation des défenses',
    en: 'Defense stimulation',
    es: 'Estimulación de las defensas',
    pt: 'Estimulação das defesas',
    de: 'Abwehrstimulation'
  },
  'substances.benefit2.desc': {
    fr: 'Contre les ravageurs des feuilles, de la tige et du système racinaire',
    en: 'Against leaf, stem and root system pests',
    es: 'Contra las plagas de hojas, tallos y sistema radicular',
    pt: 'Contra pragas de folhas, caules e sistema radicular',
    de: 'Gegen Schädlinge an Blättern, Stängeln und Wurzelsystemen'
  },
  'substances.benefit3.title': {
    fr: 'Respect de l\'environnement',
    en: 'Environmental respect',
    es: 'Respeto al medio ambiente',
    pt: 'Respeito ao meio ambiente',
    de: 'Umweltschonung'
  },
  'substances.benefit3.desc': {
    fr: 'Solutions biodégradables et non toxiques',
    en: 'Biodegradable and non-toxic solutions',
    es: 'Soluciones biodegradables y no tóxicas',
    pt: 'Soluções biodegradáveis e não tóxicas',
    de: 'Biologisch abbaubare und ungiftige Lösungen'
  },
  'substances.benefit4.title': {
    fr: 'Compatible avec votre matériel existant',
    en: 'Compatible with your existing equipment',
    es: 'Compatible con su maquinaria existente',
    pt: 'Compatível com seu equipamento existente',
    de: 'Kompatibel mit Ihren bestehenden Geräten'
  },
  'substances.benefit4.desc': {
    fr: 'Formulations liquides ou granulées applicables avec vos pulvérisateurs, atomiseurs et épandeurs habituels. Aucun investissement matériel.',
    en: 'Liquid or granular formulations applicable with your usual sprayers, atomizers and spreaders. Drone application is also being explored. No equipment investment.',
    es: 'Formulaciones líquidas o granuladas aplicables con sus pulverizadores, atomizadores y distribuidores habituales. También se estudia la aplicación por dron. Sin inversión en maquinaria.',
    pt: 'Formulações líquidas ou granuladas aplicáveis com seus pulverizadores, atomizadores e distribuidores habituais. A aplicação por drone também está a ser estudada. Sem investimento em equipamentos.',
    de: 'Flüssige oder granulare Formulierungen für Ihre Spritz-, Zerstäubungs- und Streugeräte. Auch die Anwendung per Drohne wird geprüft. Keine Geräteinvestitionen.'
  },
  'substances.tech.title': {
    fr: 'Notre technologie d\'extraction',
    en: 'Our extraction technology',
    es: 'Nuestra tecnología de extracción',
    pt: 'Nossa tecnologia de extração',
    de: 'Unsere Extraktionstechnologie'
  },
  'substances.tech.step1.title': {
    fr: 'Sélection d\'insectes',
    en: 'Insect selection',
    es: 'Selección de insectos',
    pt: 'Seleção de insetos',
    de: 'Insektenauswahl'
  },
  'substances.tech.step1.desc': {
    fr: 'Choix rigoureux d\'espèces d\'insectes aux propriétés spécifiques',
    en: 'Rigorous selection of insect species with specific properties',
    es: 'Selección rigurosa de especies de insectos con propiedades específicas',
    pt: 'Seleção rigorosa de espécies de insetos com propriedades específicas',
    de: 'Sorgfältige Auswahl von Insektenarten mit spezifischen Eigenschaften'
  },
  'substances.tech.step2.title': {
    fr: 'Extraction douce',
    en: 'Gentle extraction',
    es: 'Extracción suave',
    pt: 'Extração suave',
    de: 'Schonende Extraktion'
  },
  'substances.tech.step2.desc': {
    fr: 'Procédés d\'extraction sans solvant préservant l\'intégrité des molécules actives',
    en: 'Solvent-free extraction processes preserving the integrity of active molecules',
    es: 'Procesos de extracción sin solventes que preservan la integridad de las moléculas activas',
    pt: 'Processos de extração sem solventes preservando a integridade das moléculas ativas',
    de: 'Lösungsmittelfreie Extraktionsverfahren, die die Integrität der Wirkstoffe bewahren'
  },
  'substances.tech.step3.title': {
    fr: 'Formulation',
    en: 'Formulation',
    es: 'Formulación',
    pt: 'Formulação',
    de: 'Formulierung'
  },
  'substances.tech.step3.desc': {
    fr: 'Développement de solutions prêtes à l\'emploi',
    en: 'Development of ready-to-use solutions',
    es: 'Desarrollo de soluciones listas para usar',
    pt: 'Desenvolvimento de soluções prontas para uso',
    de: 'Entwicklung gebrauchsfertiger Lösungen'
  },
  // BiocontroleVivant page
  'biocontrole.title': {
    fr: 'Bioprotection',
    en: 'Bioprotection',
    es: 'Bioprotección',
    pt: 'Bioproteção',
    de: 'Bioschutz'
  },
  'biocontrole.subtitle': {
    fr: 'Solutions biologiques vivantes pour une protection durable des cultures',
    en: 'Living biological solutions for sustainable crop protection',
    es: 'Soluciones biológicas vivas para una protección sostenible de los cultivos',
    pt: 'Soluções biológicas vivas para proteção sustentável das culturas',
    de: 'Lebende biologische Lösungen für nachhaltigen Pflanzenschutz'
  },
  'biocontrole.auxiliary': {
    fr: 'Insectes Auxiliaires',
    en: 'Beneficial Insects',
    es: 'Insectos Auxiliares',
    pt: 'Insetos Auxiliares',
    de: 'Nützlinge'
  },
  'biocontrole.auxiliary.desc': {
    fr: 'Solutions d\'insectes pour lutter contre les principaux ravageurs des cultures',
    en: 'Insect solutions to combat major crop pests',
    es: 'Soluciones de insectos para combatir las principales plagas de los cultivos',
    pt: 'Soluções de insetos para combater as principais pragas das culturas',
    de: 'Insektenlösungen zur Bekämpfung der wichtigsten Kulturschädlinge'
  },
  'biocontrole.pests.title': {
    fr: 'Ravageurs ciblés',
    en: 'Targeted pests',
    es: 'Plagas objetivo',
    pt: 'Pragas alvo',
    de: 'Zielschädlinge'
  },
  'biocontrole.pest1.title': {
    fr: 'Pucerons',
    en: 'Aphids',
    es: 'Pulgones',
    pt: 'Pulgões',
    de: 'Blattläuse'
  },
  'biocontrole.pest1.desc': {
    fr: 'Contre tous types de pucerons en champs et sous serre',
    en: 'Against all types of aphids in fields and greenhouses',
    es: 'Contra todo tipo de pulgones en campos e invernaderos',
    pt: 'Contra todos os tipos de pulgões em campos e estufas',
    de: 'Gegen alle Blattlausarten im Freiland und unter Glas'
  },
  'biocontrole.pest2.title': {
    fr: 'Chenilles ravageuses',
    en: 'Destructive caterpillars',
    es: 'Orugas destructivas',
    pt: 'Lagartas destrutivas',
    de: 'Schadhafte Raupen'
  },
  'biocontrole.pest2.desc': {
    fr: 'contre les pyrales',
    en: 'against corn borers',
    es: 'contra las polillas',
    pt: 'contra as brocas',
    de: 'gegen Zünsler'
  },
  'biocontrole.pest3.title': {
    fr: 'Cochenilles',
    en: 'Scale insects',
    es: 'Cochinillas',
    pt: 'Cochonilhas',
    de: 'Schildläuse'
  },
  'biocontrole.pest3.desc': {
    fr: 'Contre les cochenilles farineuses des arbres fruitiers',
    en: 'Against mealybugs on fruit trees',
    es: 'Contra las cochinillas harinosas de los árboles frutales',
    pt: 'Contra cochonilhas farinhentas em árvores frutíferas',
    de: 'Gegen Wollläuse an Obstbäumen'
  },
  'biocontrole.pest4.title': {
    fr: 'Mouches Blanches',
    en: 'Whiteflies',
    es: 'Moscas Blancas',
    pt: 'Moscas Brancas',
    de: 'Weiße Fliegen'
  },
  'biocontrole.pest4.desc': {
    fr: 'Contre les mouches blanches (aleurodes) des concombres, courgettes...',
    en: 'Against whiteflies on tomatoes, cucumbers, zucchini...',
    es: 'Contra las moscas blancas (aleuródidos) de tomates, pepinos, calabacines...',
    pt: 'Contra moscas brancas (aleuroídeos) de tomates, pepinos, abobrinhas...',
    de: 'Gegen Weiße Fliegen an Tomaten, Gurken, Zucchini...'
  },
  'biocontrole.advantages.title': {
    fr: 'Avantages du biocontrôle',
    en: 'Benefits of biocontrol',
    es: 'Ventajas del biocontrol',
    pt: 'Vantagens do biocontrole',
    de: 'Vorteile der Biokontrolle'
  },
  'biocontrole.adv1.title': {
    fr: 'Naturel',
    en: 'Natural',
    es: 'Natural',
    pt: 'Natural',
    de: 'Natürlich'
  },
  'biocontrole.adv1.desc': {
    fr: 'Des solutions 100% biologiques, sans résidus chimiques, qui s\'appuient uniquement sur des mécanismes présents dans la nature.',
    en: '100% biological solutions, free of chemical residues, relying solely on mechanisms already present in nature.',
    es: 'Soluciones 100% biológicas, sin residuos químicos, que se basan únicamente en mecanismos presentes en la naturaleza.',
    pt: 'Soluções 100% biológicas, sem resíduos químicos, que se apoiam apenas em mecanismos já presentes na natureza.',
    de: '100% biologische Lösungen ohne chemische Rückstände, die ausschließlich auf natürlich vorkommenden Mechanismen beruhen.'
  },
  'biocontrole.adv2.title': {
    fr: 'Sélectif',
    en: 'Selective',
    es: 'Selectivo',
    pt: 'Seletivo',
    de: 'Selektiv'
  },
  'biocontrole.adv2.desc': {
    fr: 'Les auxiliaires s\'attaquent exclusivement à leurs espèces hôtes cibles, sans risque pour les abeilles ni la faune utile environnante.',
    en: 'Beneficial insects exclusively target their host pest species, with no risk to bees or other beneficial fauna.',
    es: 'Los auxiliares atacan exclusivamente a sus especies huésped, sin riesgo para las abejas ni la fauna útil.',
    pt: 'Os auxiliares atacam exclusivamente as suas espécies hospedeiras alvo, sem risco para abelhas ou fauna útil.',
    de: 'Nützlinge greifen ausschließlich ihre Zielwirtsarten an, ohne Risiko für Bienen oder andere nützliche Fauna.'
  },
  'biocontrole.adv3.title': {
    fr: 'Durable',
    en: 'Sustainable',
    es: 'Sostenible',
    pt: 'Sustentável',
    de: 'Nachhaltig'
  },
  'biocontrole.adv3.desc': {
    fr: 'Aucun développement de résistance',
    en: 'No resistance development',
    es: 'Sin desarrollo de resistencia',
    pt: 'Sem desenvolvimento de resistência',
    de: 'Keine Resistenzentwicklung'
  },
  'biocontrole.adv4.title': {
    fr: 'Utilisable en agriculture biologique',
    en: 'Suitable for organic farming',
    es: 'Apto para agricultura ecológica',
    pt: 'Adequado para agricultura orgânica',
    de: 'Geeignet für den ökologischen Landbau'
  },
  'biocontrole.adv4.desc': {
    fr: 'Préserve la santé des champs et des utilisateurs',
    en: 'Preserves the health of fields and users',
    es: 'Preserva la salud de los campos y usuarios',
    pt: 'Preserva a saúde dos campos e usuários',
    de: 'Schützt die Gesundheit der Felder und Anwender'
  },
  'biocontrole.cta': {
    fr: 'Découvrez nos solutions de protection biologique pour une agriculture durable et performante.',
    en: 'Discover our biological protection solutions for sustainable and efficient agriculture.',
    es: 'Descubra nuestras soluciones de protección biológica para una agricultura sostenible y eficiente.',
    pt: 'Descubra nossas soluções de proteção biológica para uma agricultura sustentável e eficiente.',
    de: 'Entdecken Sie unsere biologischen Pflanzenschutzlösungen für eine nachhaltige und leistungsstarke Landwirtschaft.'
  },
  // Biofertilisant page
  'biofertilisant.title': {
    fr: 'Biofertilisants',
    en: 'Biofertilizers',
    es: 'Biofertilizantes',
    pt: 'Biofertilizantes',
    de: 'Biodünger'
  },
  'biofertilisant.subtitle': {
    fr: 'Nutrition optimale des cultures',
    en: 'Optimal crop nutrition',
    es: 'Nutrición óptima de cultivos',
    pt: 'Nutrição ideal das culturas',
    de: 'Optimale Pflanzenernährung'
  },
  'biofertilisant.npk': {
    fr: 'Composition NPK 4-3-2',
    en: 'NPK 4-3-2 Composition',
    es: 'Composición NPK 4-3-2',
    pt: 'Composição NPK 4-3-2',
    de: 'NPK 4-3-2 Zusammensetzung'
  },
  'biofertilisant.phosphore': {
    fr: 'Phosphore (P)',
    en: 'Phosphorus (P)',
    es: 'Fósforo (P)',
    pt: 'Fósforo (P)',
    de: 'Phosphor (P)'
  },
  'biofertilisant.phosphore.desc': {
    fr: 'Stimule le développement racinaire et la floraison',
    en: 'Stimulates root development and flowering',
    es: 'Estimula el desarrollo radicular y la floración',
    pt: 'Estimula o desenvolvimento radicular e a floração',
    de: 'Fördert Wurzelentwicklung und Blüte'
  },
  'biofertilisant.azote': {
    fr: 'Azote (N)',
    en: 'Nitrogen (N)',
    es: 'Nitrógeno (N)',
    pt: 'Nitrogênio (N)',
    de: 'Stickstoff (N)'
  },
  'biofertilisant.azote.desc': {
    fr: 'Favorise la croissance végétative et le développement des feuilles',
    en: 'Promotes vegetative growth and leaf development',
    es: 'Favorece el crecimiento vegetativo y el desarrollo de las hojas',
    pt: 'Promove o crescimento vegetativo e o desenvolvimento das folhas',
    de: 'Fördert vegetatives Wachstum und Blattentwicklung'
  },
  'biofertilisant.potassium': {
    fr: 'Potassium (K)',
    en: 'Potassium (K)',
    es: 'Potasio (K)',
    pt: 'Potássio (K)',
    de: 'Kalium (K)'
  },
  'biofertilisant.potassium.desc': {
    fr: 'Renforce la résistance aux maladies et améliore la qualité des fruits',
    en: 'Strengthens disease resistance and improves fruit quality',
    es: 'Fortalece la resistencia a las enfermedades y mejora la calidad de los frutos',
    pt: 'Fortalece a resistência a doenças e melhora a qualidade dos frutos',
    de: 'Stärkt die Krankheitsresistenz und verbessert die Fruchtqualität'
  },
  'biofertilisant.organic': {
    fr: 'Matière organique',
    en: 'Organic matter',
    es: 'Materia orgánica',
    pt: 'Matéria orgânica',
    de: 'Organische Substanz'
  },
  'biofertilisant.organic.desc': {
    fr: 'Améliore la qualité du sol',
    en: 'Improves soil quality',
    es: 'Mejora la calidad del suelo',
    pt: 'Melhora a qualidade do solo',
    de: 'Verbessert die Bodenqualität'
  },
  'biofertilisant.advantages': {
    fr: 'Avantages clés',
    en: 'Key benefits',
    es: 'Ventajas clave',
    pt: 'Vantagens principais',
    de: 'Wichtigste Vorteile'
  },
  'biofertilisant.adv1.title': {
    fr: 'Origine 100% naturelle',
    en: '100% natural origin',
    es: 'Origen 100% natural',
    pt: 'Origem 100% natural',
    de: '100% natürlichen Ursprungs'
  },
  'biofertilisant.adv1.desc': {
    fr: 'Formulé à partir de matières organiques premium, sans produits chimiques de synthèse.',
    en: 'Formulated from premium organic materials, without synthetic chemicals.',
    es: 'Formulado a partir de materiales orgánicos premium, sin productos químicos sintéticos.',
    pt: 'Formulado a partir de materiais orgânicos premium, sem produtos químicos sintéticos.',
    de: 'Aus hochwertigen organischen Materialien formuliert, ohne synthetische Chemikalien.'
  },
  'biofertilisant.adv2.title': {
    fr: 'Absorption rapide',
    en: 'Rapid absorption',
    es: 'Absorción rápida',
    pt: 'Absorção rápida',
    de: 'Schnelle Aufnahme'
  },
  'biofertilisant.adv2.desc': {
    fr: 'Les nutriments sont immédiatement disponibles pour les plantes.',
    en: 'Nutrients are immediately available to plants.',
    es: 'Los nutrientes están inmediatamente disponibles para las plantas.',
    pt: 'Os nutrientes estão imediatamente disponíveis para as plantas.',
    de: 'Die Nährstoffe sind sofort für die Pflanzen verfügbar.'
  },
  'biofertilisant.adv3.title': {
    fr: 'Améliore la structure du sol',
    en: 'Improves soil structure',
    es: 'Mejora la estructura del suelo',
    pt: 'Melhora a estrutura do solo',
    de: 'Verbessert die Bodenstruktur'
  },
  'biofertilisant.adv3.desc': {
    fr: 'Enrichit la terre et favorise l\'activité microbienne bénéfique.',
    en: 'Enriches the soil and promotes beneficial microbial activity.',
    es: 'Enriquece la tierra y favorece la actividad microbiana beneficiosa.',
    pt: 'Enriquece o solo e promove a atividade microbiana benéfica.',
    de: 'Reichert den Boden an und fördert nützliche mikrobielle Aktivität.'
  },
  'biofertilisant.adv4.title': {
    fr: 'Rendements supérieurs',
    en: 'Superior yields',
    es: 'Rendimientos superiores',
    pt: 'Rendimentos superiores',
    de: 'Höhere Erträge'
  },
  'biofertilisant.adv4.desc': {
    fr: 'Augmente significativement la productivité de vos cultures.',
    en: 'Significantly increases the productivity of your crops.',
    es: 'Aumenta significativamente la productividad de sus cultivos.',
    pt: 'Aumenta significativamente a produtividade das suas culturas.',
    de: 'Steigert die Produktivität Ihrer Kulturen erheblich.'
  },
  'biofertilisant.cta.title': {
    fr: 'Prêt à optimiser vos cultures ?',
    en: 'Ready to optimize your crops?',
    es: '¿Listo para optimizar sus cultivos?',
    pt: 'Pronto para otimizar suas culturas?',
    de: 'Bereit, Ihre Kulturen zu optimieren?'
  },
  'biofertilisant.cta.desc': {
    fr: 'Contactez-nous pour découvrir comment notre biofertilisant peut transformer votre agriculture.',
    en: 'Contact us to discover how our biofertilizer can transform your agriculture.',
    es: 'Contáctenos para descubrir cómo nuestro biofertilizante puede transformar su agricultura.',
    pt: 'Entre em contato para descobrir como nosso biofertilizante pode transformar sua agricultura.',
    de: 'Kontaktieren Sie uns, um zu erfahren, wie unser Biodünger Ihre Landwirtschaft verändern kann.'
  },
  // Boosters page
  'boosters.title': {
    fr: 'Boosters : Biostimulants Agricoles',
    en: 'Boosters : Agricultural Biostimulants',
    es: 'Potenciadores : Bioestimulantes Agrícolas',
    pt: 'Potenciadores : Bioestimulantes Agrícolas',
    de: 'Booster : Landwirtschaftliche Biostimulanzien'
  },
  'boosters.subtitle': {
    fr: 'Solutions biostimulantes liquides ou solides pour optimiser le potentiel de vos cultures et vos sols',
    en: 'Liquid or solid biostimulant solutions to optimize the potential of your crops and soils',
    es: 'Soluciones bioestimulantes líquidas o sólidas para optimizar el potencial de sus cultivos y sus suelos',
    pt: 'Soluções bioestimulantes líquidas ou sólidas para otimizar o potencial das suas culturas e solos',
    de: 'Flüssige oder feste Biostimulans-Lösungen zur Optimierung des Potenzials Ihrer Kulturen und Böden'
  },
  'boosters.headline': {
    fr: 'Des solutions liquides ou solides pour booster la santé de vos cultures',
    en: 'Liquid or solid solutions to boost the health of your crops',
    es: 'Soluciones líquidas o sólidas para potenciar la salud de sus cultivos',
    pt: 'Soluções líquidas ou sólidas para potenciar a saúde das suas culturas',
    de: 'Flüssige oder feste Lösungen zur Stärkung Ihrer Kulturen'
  },
  'boosters.range.title': {
    fr: 'Notre gamme de boosters',
    en: 'Our range of boosters',
    es: 'Nuestra gama de potenciadores',
    pt: 'Nossa gama de potenciadores',
    de: 'Unsere Booster-Produktpalette'
  },
  'boosters.boostea.desc': {
    fr: 'Riche en micro-peptides et en acides aminés libres (proline), Boostea13 augmente la résistance face aux stress abiotiques et améliore l\'activité du sol.',
    en: 'Rich in very small polypeptides and free amino acids (proline), Boostea13 increases resistance to abiotic stress and improves soil activity.',
    es: 'Rico en polipéptidos de muy pequeño tamaño y aminoácidos libres (prolina), Boostea13 aumenta la resistencia al estrés abiótico y mejora la actividad del suelo.',
    pt: 'Rico em polipeptídeos de tamanho muito pequeno e aminoácidos livres (prolina), Boostea13 aumenta a resistência ao estresse abiótico e melhora a atividade do solo.',
    de: 'Reich an sehr kleinen Polypeptiden und freien Aminosäuren (Prolin) erhöht Boostea13 die Widerstandsfähigkeit gegen abiotischen Stress und verbessert die Bodenaktivität.'
  },
  'boosters.boostea.benefit1': {
    fr: 'Améliore la résistance aux stress hydrique et phytotoxiques',
    en: 'Improves resistance to water and phytotoxic stress',
    es: 'Mejora la resistencia al estrés hídrico y fitotóxico',
    pt: 'Melhora a resistência ao estresse hídrico e fitotóxico',
    de: 'Verbessert die Widerstandsfähigkeit gegen Wasser- und phytotoxischen Stress'
  },
  'boosters.boostea.benefit2': {
    fr: 'Améliore l\'assimilation nutritive',
    en: 'Improves nutrient assimilation',
    es: 'Mejora la asimilación de nutrientes',
    pt: 'Melhora a assimilação de nutrientes',
    de: 'Verbessert die Nährstoffaufnahme'
  },
  'boosters.boostea.benefit3': {
    fr: 'Stimule la photosynthèse',
    en: 'Stimulates photosynthesis',
    es: 'Estimula la fotosíntesis',
    pt: 'Estimula a fotossíntese',
    de: 'Stimuliert die Photosynthese'
  },
  'boosters.soilea.desc': {
    fr: '2% de chitine pure pour activer les micro-organismes du sol qui renforcent naturellement les défenses des plantes et améliorent leur résistance aux maladies racinaires.',
    en: '2% pure chitin to activate soil microorganisms that naturally strengthen plant defenses and improve resistance to root diseases.',
    es: '2% de quitina pura para activar los microorganismos del suelo que refuerzan naturalmente las defensas de las plantas y mejoran su resistencia a las enfermedades radiculares.',
    pt: '2% de quitina pura para ativar os microorganismos do solo que fortalecem naturalmente as defesas das plantas e melhoram sua resistência a doenças radiculares.',
    de: '2% reine Chitine zur Aktivierung der Bodenmikroorganismen, die natürlich die Pflanzenabwehr stärken und die Resistenz gegen Wurzelkrankheiten verbessern.'
  },
  'boosters.soilea.benefit1': {
    fr: 'Matière organique de qualité',
    en: 'Quality organic matter',
    es: 'Materia orgánica de calidad',
    pt: 'Matéria orgânica de qualidade',
    de: 'Hochwertige organische Substanz'
  },
  'boosters.soilea.benefit2': {
    fr: 'Stimule les défenses naturelles de la plante (SDN)',
    en: 'Stimulates the plant\'s natural defenses (ISR)',
    es: 'Estimula las defensas naturales de la planta (SDN)',
    pt: 'Estimula as defesas naturais das plantas (SDN)',
    de: 'Stimuliert die natürlichen Abwehrkräfte der Pflanze (ISR)'
  },
  'boosters.soilea.benefit3': {
    fr: 'Augmente la présence des bons microorganismes',
    en: 'Increases the presence of beneficial microorganisms',
    es: 'Aumenta la presencia de microorganismos beneficiosos',
    pt: 'Aumenta a presença de microorganismos benéficos',
    de: 'Erhöht die Präsenz nützlicher Mikroorganismen'
  },
  'boosters.why.title': {
    fr: 'Pourquoi choisir nos boosters ?',
    en: 'Why choose our boosters?',
    es: '¿Por qué elegir nuestros potenciadores?',
    pt: 'Por que escolher nossos potenciadores?',
    de: 'Warum unsere Booster wählen?'
  },
  'boosters.why1.title': {
    fr: 'Efficacité prouvée',
    en: 'Proven effectiveness',
    es: 'Eficacia probada',
    pt: 'Eficácia comprovada',
    de: 'Nachgewiesene Wirksamkeit'
  },
  'boosters.why1.desc': {
    fr: 'Résultats mesurables sur la croissance et les rendements',
    en: 'Measurable results on growth and yields',
    es: 'Resultados medibles en el crecimiento y los rendimientos',
    pt: 'Resultados mensuráveis no crescimento e nos rendimentos',
    de: 'Messbare Ergebnisse bei Wachstum und Erträgen'
  },
  'boosters.why2.title': {
    fr: '100% naturel',
    en: '100% natural',
    es: '100% natural',
    pt: '100% natural',
    de: '100% natürlich'
  },
  'boosters.why2.desc': {
    fr: 'Formulations respectueuses de l\'environnement',
    en: 'Environmentally friendly formulations',
    es: 'Formulaciones respetuosas con el medio ambiente',
    pt: 'Formulações respeitadoras do meio ambiente',
    de: 'Umweltfreundliche Formulierungen'
  },
  'boosters.why3.title': {
    fr: 'Compatible',
    en: 'Compatible',
    es: 'Compatible',
    pt: 'Compatível',
    de: 'Kompatibel'
  },
  'boosters.why3.desc': {
    fr: 'S\'intègre parfaitement aux programmes de fertilisation et traitements phytosanitaires',
    en: 'Integrates perfectly with fertilization programs and plant protection treatments',
    es: 'Se integra perfectamente con los programas de fertilización y tratamientos fitosanitarios',
    pt: 'Integra-se perfeitamente aos programas de fertilização e tratamentos fitossanitários',
    de: 'Lässt sich perfekt in Düngungsprogramme und Pflanzenschutzbehandlungen integrieren'
  },
  'boosters.why4.title': {
    fr: 'Support technique',
    en: 'Technical support',
    es: 'Soporte técnico',
    pt: 'Suporte técnico',
    de: 'Technischer Support'
  },
  'boosters.why4.desc': {
    fr: 'Pas de modification de l\'itinéraire technique, ni d\'investissement dans le matériel agricole : application foliaire ou au sol. Peut être mélangé avec un autre intrant organique ou de synthèse.',
    en: 'No modification of the technical itinerary, no investment in agricultural equipment: foliar or soil application. Can be mixed with another organic or synthetic input.',
    es: 'Sin modificación del itinerario técnico, ni inversión en equipos agrícolas: aplicación foliar o al suelo. Se puede mezclar con otro insumo orgánico o de síntesis.',
    pt: 'Sem modificação do itinerário técnico, nem investimento em equipamentos agrícolas: aplicação foliar ou no solo. Pode ser misturado com outro insumo orgânico ou de síntese.',
    de: 'Keine Änderung des technischen Ablaufs, keine Investition in landwirtschaftliche Geräte: Blatt- oder Bodenanwendung. Kann mit einem anderen organischen oder synthetischen Betriebsmittel gemischt werden.'
  },
  'boosters.cta.title': {
    fr: 'Prêt à booster vos cultures ?',
    en: 'Ready to boost your crops?',
    es: '¿Listo para potenciar sus cultivos?',
    pt: 'Pronto para potenciar suas culturas?',
    de: 'Bereit, Ihre Kulturen zu stärken?'
  },
  'boosters.cta.desc': {
    fr: 'Contactez notre équipe pour découvrir comment nos boosters peuvent améliorer vos rendements.',
    en: 'Contact our team to discover how our boosters can improve your yields.',
    es: 'Contacte a nuestro equipo para descubrir cómo nuestros potenciadores pueden mejorar sus rendimientos.',
    pt: 'Entre em contato com nossa equipe para descobrir como nossos potenciadores podem melhorar seus rendimentos.',
    de: 'Kontaktieren Sie unser Team, um zu erfahren, wie unsere Booster Ihre Erträge verbessern können.'
  },
  // Problem section (homepage)
  'problem.eyebrow': {
    fr: 'L\'agriculture en transition',
    en: 'Agriculture in transition',
    es: 'La agricultura en transición',
    pt: 'A agricultura em transição',
    de: 'Landwirtschaft im Wandel'
  },
  'problem.title': {
    fr: 'Une protection des cultures plus ciblée, plus performante',
    en: 'More targeted, more effective crop protection',
    es: 'Una protección de cultivos más específica y eficaz',
    pt: 'Uma proteção das culturas mais direcionada e eficaz',
    de: 'Ein gezielterer, leistungsfähigerer Pflanzenschutz'
  },
  'problem.subtitle': {
    fr: 'L\'agriculture française évolue vers des pratiques plus intelligentes et plus durables. Les agriculteurs recherchent des solutions efficaces, durables et adaptées aux réalités du terrain. A toutes les réalités, de la serre au plein champ. Keprea a développé ses biosolutions exactement pour ça.',
    en: 'French agriculture is moving toward smarter, more sustainable practices. Farmers are looking for solutions that are effective, sustainable and adapted to real field conditions — every condition, from the greenhouse to the open field. Keprea developed its biosolutions exactly for that.',
    es: 'La agricultura francesa evoluciona hacia prácticas más inteligentes y sostenibles. Los agricultores buscan soluciones eficaces, sostenibles y adaptadas a las realidades del terreno, en todas las situaciones, desde el invernadero hasta el campo abierto. Keprea desarrolló sus biosoluciones exactamente para eso.',
    pt: 'A agricultura francesa está evoluindo para práticas mais inteligentes e sustentáveis. Os agricultores procuram soluções eficazes, sustentáveis e adaptadas às realidades do terreno, em todas as situações, da estufa ao campo aberto. A Keprea desenvolveu as suas biosoluções exatamente para isso.',
    de: 'Die französische Landwirtschaft entwickelt sich hin zu intelligenteren, nachhaltigeren Praktiken. Landwirte suchen wirksame, nachhaltige Lösungen, die an die Realität vor Ort angepasst sind – an jede Realität, vom Gewächshaus bis zum freien Feld. Genau dafür hat Keprea seine Biolösungen entwickelt.'
  },
  'problem.challenge1.title': {
    fr: 'Des cultures liées aux insectes',
    en: 'Crops linked to insects',
    es: 'Cultivos vinculados a los insectos',
    pt: 'Culturas ligadas aos insetos',
    de: 'Kulturen, die von Insekten abhängen'
  },
  'problem.challenge1.desc': {
    fr: '84 % des cultures dépendent des insectes pour leur qualité et leur rendement. Keprea exploite cette relation naturelle pour protéger et stimuler vos parcelles.',
    en: '84% of crops depend on insects for their quality and yield. Keprea harnesses this natural relationship to protect and boost your fields.',
    es: 'El 84 % de los cultivos dependen de los insectos para su calidad y rendimiento. Keprea aprovecha esta relación natural para proteger y estimular sus parcelas.',
    pt: '84% das culturas dependem dos insetos para sua qualidade e rendimento. A Keprea aproveita essa relação natural para proteger e estimular as suas parcelas.',
    de: '84 % der Kulturen sind für ihre Qualität und ihren Ertrag von Insekten abhängig. Keprea nutzt diese natürliche Beziehung, um Ihre Flächen zu schützen und zu stärken.'
  },
  'problem.challenge2.title': {
    fr: 'Naturel et sans résidu chimique',
    en: 'Natural and free of chemical residue',
    es: 'Natural y sin residuos químicos',
    pt: 'Natural e sem resíduos químicos',
    de: 'Natürlich und ohne chemische Rückstände'
  },
  'problem.challenge2.desc': {
    fr: 'Toutes nos formulations sont d\'origine naturelle, sans résidu toxique. Compatibles avec l\'agriculture biologique, les certifications et les exigences croissantes des filières.',
    en: 'All our formulations are of natural origin, with no toxic residue. Compatible with organic farming, certifications and the growing requirements of supply chains.',
    es: 'Todas nuestras formulaciones son de origen natural, sin residuos tóxicos. Compatibles con la agricultura ecológica, las certificaciones y las exigencias crecientes de las cadenas de suministro.',
    pt: 'Todas as nossas formulações são de origem natural, sem resíduos tóxicos. Compatíveis com a agricultura biológica, as certificações e as exigências crescentes das cadeias produtivas.',
    de: 'Alle unsere Formulierungen sind natürlichen Ursprungs und frei von toxischen Rückständen. Kompatibel mit ökologischem Landbau, Zertifizierungen und den wachsenden Anforderungen der Wertschöpfungsketten.'
  },
  'problem.challenge3.title': {
    fr: 'Espèces auxiliaires mobilisables',
    en: 'Beneficial species available',
    es: 'Especies auxiliares movilizables',
    pt: 'Espécies auxiliares mobilizáveis',
    de: 'Verfügbare Nützlingsarten'
  },
  'problem.challenge3.desc': {
    fr: 'La France recense 150 espèces d\'insectes auxiliaires utiles. Keprea sélectionne et formule les plus efficaces pour chaque culture et chaque besoin.',
    en: 'France counts 5,500 species of beneficial insects. Keprea selects and formulates the most effective ones for each crop and each need.',
    es: 'Francia registra 5.500 especies de insectos auxiliares útiles. Keprea selecciona y formula los más eficaces para cada cultivo y cada necesidad.',
    pt: 'A França recenseia 5.500 espécies de insetos auxiliares úteis. A Keprea seleciona e formula os mais eficazes para cada cultura e cada necessidade.',
    de: 'In Frankreich sind 5.500 Arten nützlicher Insekten erfasst. Keprea wählt die wirksamsten aus und formuliert sie für jede Kultur und jeden Bedarf.'
  },
  // Innovation section — homepage hardcoded strings
  'innovation.eyebrow': {
    fr: 'Pourquoi les insectes ?',
    en: 'Why insects?',
    es: '¿Por qué los insectos?',
    pt: 'Por que os insetos?',
    de: 'Warum Insekten?'
  },
  'innovation.heading': {
    fr: 'Une source de molécules agricoles unique',
    en: 'A unique source of agricultural molecules',
    es: 'Una fuente única de moléculas agrícolas',
    pt: 'Uma fonte única de moléculas agrícolas',
    de: 'Eine einzigartige Quelle landwirtschaftlicher Wirkstoffe'
  },
  'innovation.intro': {
    fr: 'Les insectes ont co-évolué avec les plantes pendant 400 millions d\'années. Ils ont développé des actifs biologiques que Keprea extrait et formule pour les rendre accessibles aux agriculteurs.',
    en: 'Insects have co-evolved with plants for 400 million years. They developed biological actives that Keprea extracts and formulates to make them accessible to farmers.',
    es: 'Los insectos han coevolucionado con las plantas durante 400 millones de años. Han desarrollado activos biológicos que Keprea extrae y formula para hacerlos accesibles a los agricultores.',
    pt: 'Os insetos coevoluíram com as plantas durante 400 milhões de anos. Desenvolveram ativos biológicos que a Keprea extrai e formula para torná-los acessíveis aos agricultores.',
    de: 'Insekten haben sich über 400 Millionen Jahre gemeinsam mit Pflanzen entwickelt. Sie haben biologische Wirkstoffe entwickelt, die Keprea extrahiert und formuliert, um sie für Landwirte zugänglich zu machen.'
  },
  'innovation.link': {
    fr: 'Pourquoi le biocontrôle ?',
    en: 'Why biocontrol?',
    es: '¿Por qué el biocontrol?',
    pt: 'Por que o biocontrole?',
    de: 'Warum Biokontrolle?'
  },
  'innovation.card1.eyebrow': {
    fr: 'Extraits d\'insectes',
    en: 'Insect extracts',
    es: 'Extractos de insectos',
    pt: 'Extratos de insetos',
    de: 'Insektenextrakte'
  },
  'innovation.card2.eyebrow': {
    fr: 'Biocontrôle vivant',
    en: 'Living biocontrol',
    es: 'Biocontrol vivo',
    pt: 'Biocontrole vivo',
    de: 'Lebende Biokontrolle'
  },
  // Solutions teaser — homepage hardcoded strings
  'solutionsTeaser.eyebrow': {
    fr: 'Nos gammes',
    en: 'Our ranges',
    es: 'Nuestras gamas',
    pt: 'Nossas linhas',
    de: 'Unsere Produktlinien'
  },
  'solutionsTeaser.cta': {
    fr: 'Voir toutes nos solutions',
    en: 'See all our solutions',
    es: 'Ver todas nuestras soluciones',
    pt: 'Ver todas as nossas soluções',
    de: 'Alle Lösungen ansehen'
  },
  // Production teaser — homepage hardcoded strings
  'production.eyebrow': {
    fr: 'Site de production',
    en: 'Production site',
    es: 'Sitio de producción',
    pt: 'Local de produção',
    de: 'Produktionsstandort'
  },
  'production.teaser.label': {
    fr: 'Process complet',
    en: 'Full process',
    es: 'Proceso completo',
    pt: 'Processo completo',
    de: 'Vollständiger Prozess'
  },
  'production.teaser.title': {
    fr: 'De l\'élevage d\'insectes à la formulation finale',
    en: 'From insect rearing to final formulation',
    es: 'De la cría de insectos a la formulación final',
    pt: 'Da criação de insetos à formulação final',
    de: 'Von der Insektenzucht bis zur fertigen Formulierung'
  },
  'production.teaser.desc': {
    fr: 'Découvrez notre chaîne de production maîtrisée : collecte de co-produits, extraction, formulation, livraison.',
    en: 'Discover our fully controlled production chain: co-product collection, extraction, formulation, delivery.',
    es: 'Descubra nuestra cadena de producción totalmente controlada: recogida de subproductos, extracción, formulación, entrega.',
    pt: 'Descubra a nossa cadeia de produção totalmente controlada: recolha de coprodutos, extração, formulação, entrega.',
    de: 'Entdecken Sie unsere vollständig kontrollierte Produktionskette: Sammlung von Nebenprodukten, Extraktion, Formulierung, Lieferung.'
  },
  'production.teaser.link': {
    fr: 'Voir notre site de production',
    en: 'See our production site',
    es: 'Ver nuestro sitio de producción',
    pt: 'Ver o nosso local de produção',
    de: 'Unseren Produktionsstandort ansehen'
  },
  'production.site.mapCaption': {
    fr: 'Notre site de production, à Damparis (Jura)',
    en: 'Our production site, in Damparis (Jura, France)',
    es: 'Nuestro sitio de producción, en Damparis (Jura, Francia)',
    pt: 'O nosso local de produção, em Damparis (Jura, França)',
    de: 'Unser Produktionsstandort in Damparis (Jura, Frankreich)'
  },
  // About — homepage hardcoded strings
  'about.eyebrow': {
    fr: 'Qui sommes-nous ?',
    en: 'Who we are',
    es: 'Quiénes somos',
    pt: 'Quem somos',
    de: 'Wer wir sind'
  },
  'about.teaser.link': {
    fr: 'Découvrir notre équipe et nos valeurs',
    en: 'Discover our team and values',
    es: 'Descubra nuestro equipo y valores',
    pt: 'Descubra a nossa equipa e valores',
    de: 'Entdecken Sie unser Team und unsere Werte'
  },
  // Testimonials / trust section — homepage hardcoded strings
  'testimonials.eyebrow': {
    fr: 'Nos garanties',
    en: 'Our guarantees',
    es: 'Nuestras garantías',
    pt: 'Nossas garantias',
    de: 'Unsere Garantien'
  },
  'testimonials.title': {
    fr: 'Des biosolutions développées avec rigueur',
    en: 'Biosolutions developed with rigor',
    es: 'Biosoluciones desarrolladas con rigor',
    pt: 'Biosoluções desenvolvidas com rigor',
    de: 'Mit Sorgfalt entwickelte Biolösungen'
  },
  'testimonials.stat1.value': {
    fr: '2024', en: '2024', es: '2024', pt: '2024', de: '2024'
  },
  'testimonials.stat1.label': {
    fr: 'Fondée en France',
    en: 'Founded in France',
    es: 'Fundada en Francia',
    pt: 'Fundada em França',
    de: 'Gegründet in Frankreich'
  },
  'testimonials.stat2.value': {
    fr: '4', en: '4', es: '4', pt: '4', de: '4'
  },
  'testimonials.stat2.label': {
    fr: 'Gammes de biosolutions',
    en: 'Ranges of biosolutions',
    es: 'Gamas de biosoluciones',
    pt: 'Linhas de biosoluções',
    de: 'Biolösungs-Produktlinien'
  },
  'testimonials.stat3.value': {
    fr: '100%', en: '100%', es: '100%', pt: '100%', de: '100%'
  },
  'testimonials.stat3.label': {
    fr: 'Origine naturelle',
    en: 'Natural origin',
    es: 'Origen natural',
    pt: 'Origem natural',
    de: 'Natürlichen Ursprungs'
  },
  'testimonials.stat4.value': {
    fr: 'Terrain', en: 'Field', es: 'Campo', pt: 'Campo', de: 'Feld'
  },
  'testimonials.stat4.label': {
    fr: 'Suivi agronomique inclus, produits testés en plein champ',
    en: 'Agronomic follow-up included, products field-tested',
    es: 'Seguimiento agronómico incluido, productos probados en campo',
    pt: 'Acompanhamento agronómico incluído, produtos testados em campo',
    de: 'Agronomische Betreuung inklusive, im Feld getestete Produkte'
  },
  'testimonials.guarantee1.title': {
    fr: 'Traçabilité complète',
    en: 'Full traceability',
    es: 'Trazabilidad completa',
    pt: 'Rastreabilidade completa',
    de: 'Vollständige Rückverfolgbarkeit'
  },
  'testimonials.guarantee1.desc': {
    fr: 'Chaque lot est tracé de la filière insecte jusqu\'à la formulation finale, sans intermédiaire inconnu.',
    en: 'Every batch is traced from the insect supply chain to the final formulation, with no unknown intermediary.',
    es: 'Cada lote se rastrea desde la cadena de insectos hasta la formulación final, sin intermediarios desconocidos.',
    pt: 'Cada lote é rastreado desde a cadeia de insetos até a formulação final, sem intermediários desconhecidos.',
    de: 'Jede Charge wird von der Insektenlieferkette bis zur endgültigen Formulierung rückverfolgt, ohne unbekannte Zwischenhändler.'
  },
  'testimonials.guarantee2.title': {
    fr: 'Accompagnement agronomique',
    en: 'Agronomic support',
    es: 'Acompañamiento agronómico',
    pt: 'Acompanhamento agronómico',
    de: 'Agronomische Betreuung'
  },
  'testimonials.guarantee2.desc': {
    fr: 'Un technicien Keprea reste à votre disposition pour toute question liée au protocole et à l\'optimisation de l\'usage de nos solutions.',
    en: 'A Keprea technician remains available for any question about the protocol and optimizing the use of our solutions.',
    es: 'Un técnico de Keprea permanece a su disposición para cualquier pregunta sobre el protocolo y la optimización del uso de nuestras soluciones.',
    pt: 'Um técnico da Keprea permanece à sua disposição para qualquer questão relacionada com o protocolo e a otimização do uso das nossas soluções.',
    de: 'Ein Keprea-Techniker steht Ihnen für alle Fragen zum Protokoll und zur Optimierung der Anwendung unserer Lösungen zur Verfügung.'
  },
  'testimonials.cta': {
    fr: 'Rejoindre les premiers essais',
    en: 'Join the first trials',
    es: 'Unirse a los primeros ensayos',
    pt: 'Participar dos primeiros ensaios',
    de: 'An den ersten Versuchen teilnehmen'
  },
  // How to get — homepage hardcoded strings
  'howtoget.eyebrow': {
    fr: 'Comment ça marche',
    en: 'How it works',
    es: 'Cómo funciona',
    pt: 'Como funciona',
    de: 'So funktioniert es'
  },
  'howtoget.title': {
    fr: 'Tester nos solutions en 3 étapes',
    en: 'Test our solutions in 3 steps',
    es: 'Pruebe nuestras soluciones en 3 pasos',
    pt: 'Teste as nossas soluções em 3 etapas',
    de: 'Unsere Lösungen in 3 Schritten testen'
  },
  'howtoget.subtitle': {
    fr: 'Nous accompagnons chaque agriculteur du premier contact jusqu\'au résultat terrain. Pas de signature avant d\'avoir vu les effets sur votre exploitation.',
    en: 'We support every farmer from first contact through to field results. No commitment before you\'ve seen the effects on your farm.',
    es: 'Acompañamos a cada agricultor desde el primer contacto hasta el resultado en el campo. Sin compromiso antes de ver los efectos en su explotación.',
    pt: 'Acompanhamos cada agricultor desde o primeiro contacto até ao resultado no terreno. Sem compromisso antes de ver os efeitos na sua exploração.',
    de: 'Wir begleiten jeden Landwirt vom ersten Kontakt bis zum Ergebnis im Feld. Keine Verpflichtung, bevor Sie die Wirkung auf Ihrem Betrieb gesehen haben.'
  },
  'howtoget.step1.title': {
    fr: 'Prenez contact',
    en: 'Get in touch',
    es: 'Póngase en contacto',
    pt: 'Entre em contacto',
    de: 'Kontakt aufnehmen'
  },
  'howtoget.step1.desc': {
    fr: 'Décrivez votre contexte : culture, pression parasitaire, objectifs. Notre équipe revient vers vous rapidement.',
    en: 'Describe your context: crop, pest pressure, goals. Our team will get back to you quickly.',
    es: 'Describa su contexto: cultivo, presión de plagas, objetivos. Nuestro equipo le responderá rápidamente.',
    pt: 'Descreva o seu contexto: cultura, pressão de pragas, objetivos. A nossa equipa responde rapidamente.',
    de: 'Beschreiben Sie Ihre Situation: Kultur, Schädlingsdruck, Ziele. Unser Team meldet sich schnell bei Ihnen.'
  },
  'howtoget.step2.title': {
    fr: 'Essai terrain',
    en: 'Field trial',
    es: 'Ensayo en campo',
    pt: 'Ensaio de campo',
    de: 'Feldversuch'
  },
  'howtoget.step2.desc': {
    fr: 'Nous organisons un essai sur votre exploitation avec suivi technique. Vous observez les résultats dans vos conditions réelles.',
    en: 'We organize a trial on your farm with technical follow-up. You observe the results under your real conditions.',
    es: 'Organizamos un ensayo en su explotación con seguimiento técnico. Usted observa los resultados en sus condiciones reales.',
    pt: 'Organizamos um ensaio na sua exploração com acompanhamento técnico. Observa os resultados nas suas condições reais.',
    de: 'Wir organisieren einen Versuch auf Ihrem Betrieb mit technischer Begleitung. Sie beobachten die Ergebnisse unter Ihren realen Bedingungen.'
  },
  'howtoget.step3.title': {
    fr: 'Déploiement & suivi',
    en: 'Rollout & follow-up',
    es: 'Despliegue y seguimiento',
    pt: 'Implementação e acompanhamento',
    de: 'Einführung & Betreuung'
  },
  'howtoget.step3.desc': {
    fr: 'Passage à l\'échelle selon vos résultats, avec un accompagnement agronomique continu. Pas d\'engagement avant conviction.',
    en: 'Scale-up based on your results, with ongoing agronomic support. No commitment before you\'re convinced.',
    es: 'Ampliación de escala según sus resultados, con acompañamiento agronómico continuo. Sin compromiso antes de estar convencido.',
    pt: 'Passagem à escala conforme os seus resultados, com acompanhamento agronómico contínuo. Sem compromisso antes de estar convencido.',
    de: 'Skalierung basierend auf Ihren Ergebnissen, mit kontinuierlicher agronomischer Betreuung. Keine Verpflichtung, bevor Sie überzeugt sind.'
  },
  // Contact CTA — homepage hardcoded strings
  'contactcta.eyebrow': {
    fr: 'Passons à l\'action',
    en: 'Let\'s take action',
    es: 'Pasemos a la acción',
    pt: 'Vamos agir',
    de: 'Kommen wir zur Sache'
  },
  'contactcta.title': {
    fr: 'Prêt à tester nos solutions sur votre exploitation ?',
    en: 'Ready to test our solutions on your farm?',
    es: '¿Listo para probar nuestras soluciones en su explotación?',
    pt: 'Pronto para testar as nossas soluções na sua exploração?',
    de: 'Bereit, unsere Lösungen auf Ihrem Betrieb zu testen?'
  },
  'contactcta.desc': {
    fr: 'Nos équipes vous accompagnent de l\'essai terrain à la mise en place. Réponse garantie sous 48 heures.',
    en: 'Our teams support you from field trial to implementation. Guaranteed response within 48 hours.',
    es: 'Nuestros equipos le acompañan desde el ensayo en campo hasta la implementación. Respuesta garantizada en 48 horas.',
    pt: 'As nossas equipas acompanham-no desde o ensaio de campo até à implementação. Resposta garantida em 48 horas.',
    de: 'Unsere Teams begleiten Sie vom Feldversuch bis zur Umsetzung. Antwort garantiert innerhalb von 48 Stunden.'
  },
  'contactcta.primary': {
    fr: 'Nous contacter',
    en: 'Contact us',
    es: 'Contáctenos',
    pt: 'Contacte-nos',
    de: 'Kontaktieren Sie uns'
  },
  'contactcta.secondary': {
    fr: 'Voir nos solutions',
    en: 'See our solutions',
    es: 'Ver nuestras soluciones',
    pt: 'Ver as nossas soluções',
    de: 'Unsere Lösungen ansehen'
  },
  // Footer
  'footer.tagline': {
    fr: 'Biosolutions à base d\'insectes pour une agriculture performante et régénérative.',
    en: 'Insect-based biosolutions for high-performing, regenerative agriculture.',
    es: 'Biosoluciones a base de insectos para una agricultura eficiente y regenerativa.',
    pt: 'Biosoluções à base de insetos para uma agricultura eficiente e regenerativa.',
    de: 'Biolösungen auf Insektenbasis für eine leistungsstarke, regenerative Landwirtschaft.'
  },
  'footer.location': {
    fr: 'Dole (39100), Jura, France',
    en: 'Dole (39100), Jura, France',
    es: 'Dole (39100), Jura, Francia',
    pt: 'Dole (39100), Jura, França',
    de: 'Dole (39100), Jura, Frankreich'
  },
  'footer.nav.title': {
    fr: 'Navigation',
    en: 'Navigation',
    es: 'Navegación',
    pt: 'Navegação',
    de: 'Navigation'
  },
  'footer.nav.solutions': {
    fr: 'Nos solutions',
    en: 'Our solutions',
    es: 'Nuestras soluciones',
    pt: 'Nossas soluções',
    de: 'Unsere Lösungen'
  },
  'footer.nav.production': {
    fr: 'Notre production',
    en: 'Our production',
    es: 'Nuestra producción',
    pt: 'Nossa produção',
    de: 'Unsere Produktion'
  },
  'footer.nav.about': {
    fr: 'À propos',
    en: 'About',
    es: 'Acerca de',
    pt: 'Sobre',
    de: 'Über uns'
  },
  'footer.nav.contact': {
    fr: 'Contact',
    en: 'Contact',
    es: 'Contacto',
    pt: 'Contato',
    de: 'Kontakt'
  },
  'footer.nav.ressources': {
    fr: 'Ressources',
    en: 'Resources',
    es: 'Recursos',
    pt: 'Recursos',
    de: 'Ressourcen'
  },
  'footer.nav.whyBiocontrol': {
    fr: 'Pourquoi le biocontrôle ?',
    en: 'Why biocontrol?',
    es: '¿Por qué el biocontrol?',
    pt: 'Por que o biocontrole?',
    de: 'Warum Biokontrolle?'
  },
  'footer.contact.title': {
    fr: 'Contact',
    en: 'Contact',
    es: 'Contacto',
    pt: 'Contato',
    de: 'Kontakt'
  },
  'footer.legal.title': {
    fr: 'Informations légales',
    en: 'Legal information',
    es: 'Información legal',
    pt: 'Informações legais',
    de: 'Rechtliche Hinweise'
  },
  'footer.legal.notice': {
    fr: 'Mentions légales',
    en: 'Legal notice',
    es: 'Aviso legal',
    pt: 'Aviso legal',
    de: 'Impressum'
  },
  'footer.legal.privacy': {
    fr: 'Politique de confidentialité',
    en: 'Privacy policy',
    es: 'Política de privacidad',
    pt: 'Política de privacidade',
    de: 'Datenschutzrichtlinie'
  },
  'footer.copyright': {
    fr: 'Tous droits réservés.',
    en: 'All rights reserved.',
    es: 'Todos los derechos reservados.',
    pt: 'Todos os direitos reservados.',
    de: 'Alle Rechte vorbehalten.'
  },
  'footer.bottomTagline': {
    fr: 'Biosolutions naturelles pour l\'agriculture de demain.',
    en: 'Natural biosolutions for tomorrow\'s agriculture.',
    es: 'Biosoluciones naturales para la agricultura del mañana.',
    pt: 'Biosoluções naturais para a agricultura de amanhã.',
    de: 'Natürliche Biolösungen für die Landwirtschaft von morgen.'
  },
  // 404 page
  'notfound.message': {
    fr: 'Cette page n\'existe pas.',
    en: 'This page does not exist.',
    es: 'Esta página no existe.',
    pt: 'Esta página não existe.',
    de: 'Diese Seite existiert nicht.'
  },
  'notfound.backHome': {
    fr: 'Retour à l\'accueil',
    en: 'Back to home',
    es: 'Volver al inicio',
    pt: 'Voltar ao início',
    de: 'Zurück zur Startseite'
  },
  // Contact page
  'contactpage.eyebrow': {
    fr: 'Nous contacter',
    en: 'Get in touch',
    es: 'Contáctenos',
    pt: 'Fale connosco',
    de: 'Kontakt aufnehmen'
  },
  'contactpage.title': {
    fr: 'Parlons de votre projet',
    en: 'Let\'s talk about your project',
    es: 'Hablemos de su proyecto',
    pt: 'Vamos falar sobre o seu projeto',
    de: 'Sprechen wir über Ihr Projekt'
  },
  'contactpage.subtitle': {
    fr: 'Une question sur nos biosolutions, un essai terrain ou un projet de partenariat ? Notre équipe vous répond sous 48 heures.',
    en: 'A question about our biosolutions, a field trial or a partnership project? Our team replies within 48 hours.',
    es: '¿Alguna pregunta sobre nuestras biosoluciones, un ensayo en campo o un proyecto de colaboración? Nuestro equipo le responde en 48 horas.',
    pt: 'Uma questão sobre as nossas biosoluções, um ensaio de campo ou um projeto de parceria? A nossa equipa responde em 48 horas.',
    de: 'Eine Frage zu unseren Biolösungen, ein Feldversuch oder ein Partnerschaftsprojekt? Unser Team antwortet innerhalb von 48 Stunden.'
  },
  'contactpage.tabsAriaLabel': {
    fr: 'Type de demande',
    en: 'Request type',
    es: 'Tipo de solicitud',
    pt: 'Tipo de pedido',
    de: 'Art der Anfrage'
  },
  'contactpage.coordinates.title': {
    fr: 'Coordonnées',
    en: 'Contact details',
    es: 'Datos de contacto',
    pt: 'Dados de contacto',
    de: 'Kontaktdaten'
  },
  'contactpage.coordinates.hq.label': {
    fr: 'Siège social',
    en: 'Head office',
    es: 'Sede social',
    pt: 'Sede social',
    de: 'Hauptsitz'
  },
  'contactpage.coordinates.email.label': {
    fr: 'Email',
    en: 'Email',
    es: 'Correo electrónico',
    pt: 'E-mail',
    de: 'E-Mail'
  },
  'contactpage.coordinates.responseTime.label': {
    fr: 'Délai de réponse',
    en: 'Response time',
    es: 'Tiempo de respuesta',
    pt: 'Tempo de resposta',
    de: 'Antwortzeit'
  },
  'contactpage.coordinates.responseTime.value': {
    fr: 'Sous 48 heures ouvrées',
    en: 'Within 48 business hours',
    es: 'En un plazo de 48 horas laborables',
    pt: 'Em até 48 horas úteis',
    de: 'Innerhalb von 48 Werktagsstunden'
  },
  'contactpage.farmerCard.title': {
    fr: 'Agriculteur ou conseiller agricole ?',
    en: 'Farmer or agricultural advisor?',
    es: '¿Agricultor o asesor agrícola?',
    pt: 'Agricultor ou consultor agrícola?',
    de: 'Landwirt oder landwirtschaftlicher Berater?'
  },
  'contactpage.farmerCard.desc': {
    fr: 'Nous proposons des essais terrain et des accompagnements techniques. Mentionnez votre culture et votre région pour un conseil ciblé.',
    en: 'We offer field trials and technical support. Mention your crop and your region for targeted advice.',
    es: 'Ofrecemos ensayos en campo y acompañamiento técnico. Indique su cultivo y su región para un consejo específico.',
    pt: 'Oferecemos ensaios de campo e acompanhamento técnico. Indique a sua cultura e a sua região para um conselho específico.',
    de: 'Wir bieten Feldversuche und technische Unterstützung an. Geben Sie Ihre Kultur und Ihre Region an, um eine gezielte Beratung zu erhalten.'
  },
  'contactpage.farmerCard.cta': {
    fr: 'Partager un retour terrain',
    en: 'Share field feedback',
    es: 'Compartir un informe de campo',
    pt: 'Partilhar um retorno de campo',
    de: 'Feldbericht teilen'
  },
  // Contact form — additional keys
  'contact.form.eyebrow': {
    fr: 'Contact', en: 'Contact', es: 'Contacto', pt: 'Contato', de: 'Kontakt'
  },
  'contact.form.email': {
    fr: 'Email',
    en: 'Email',
    es: 'Correo electrónico',
    pt: 'E-mail',
    de: 'E-Mail'
  },
  'contact.form.rgpd.pre': {
    fr: 'J\'accepte que mes données soient traitées par Keprea dans le but de répondre à ma demande, conformément à la',
    en: 'I agree that my data will be processed by Keprea in order to respond to my request, in accordance with the',
    es: 'Acepto que mis datos sean tratados por Keprea con el fin de responder a mi solicitud, de conformidad con la',
    pt: 'Aceito que os meus dados sejam tratados pela Keprea com o objetivo de responder ao meu pedido, em conformidade com a',
    de: 'Ich stimme zu, dass meine Daten von Keprea zur Beantwortung meiner Anfrage verarbeitet werden, gemäß der'
  },
  'contact.form.rgpd.link': {
    fr: 'politique de confidentialité',
    en: 'privacy policy',
    es: 'política de privacidad',
    pt: 'política de privacidade',
    de: 'Datenschutzrichtlinie'
  },
  'toast.error.rgpd': {
    fr: 'Vous devez accepter la politique de confidentialité pour envoyer votre message.',
    en: 'You must accept the privacy policy to send your message.',
    es: 'Debe aceptar la política de privacidad para enviar su mensaje.',
    pt: 'Deve aceitar a política de privacidade para enviar a sua mensagem.',
    de: 'Sie müssen die Datenschutzrichtlinie akzeptieren, um Ihre Nachricht zu senden.'
  },
  // Solutions hub — banner + card aria label
  'solutions.banner.title': {
    fr: 'Pourquoi le biocontrôle ?',
    en: 'Why biocontrol?',
    es: '¿Por qué el biocontrol?',
    pt: 'Por que o biocontrole?',
    de: 'Warum Biokontrolle?'
  },
  'solutions.banner.desc': {
    fr: 'Cadre réglementaire, enjeux agronomiques et données clés.',
    en: 'Regulatory framework, agronomic stakes and key data: read before choosing your solution.',
    es: 'Marco regulatorio, retos agronómicos y datos clave: léalo antes de elegir su solución.',
    pt: 'Enquadramento regulamentar, desafios agronómicos e dados-chave: leia antes de escolher a sua solução.',
    de: 'Regulatorischer Rahmen, agronomische Herausforderungen und Schlüsseldaten: lesen Sie dies, bevor Sie Ihre Lösung wählen.'
  },
  'solutions.banner.cta': {
    fr: 'Découvrir',
    en: 'Discover',
    es: 'Descubrir',
    pt: 'Descobrir',
    de: 'Entdecken'
  },
  'solutions.card.ariaLabel': {
    fr: 'Découvrir la gamme',
    en: 'Discover the range',
    es: 'Descubrir la gama',
    pt: 'Descobrir a linha',
    de: 'Produktlinie entdecken'
  },
  // Notre Production page
  'notreproduction.hero.eyebrow': {
    fr: 'Fabrication française',
    en: 'French manufacturing',
    es: 'Fabricación francesa',
    pt: 'Fabricação francesa',
    de: 'Französische Herstellung'
  },
  'notreproduction.hero.title': {
    fr: 'Notre Production',
    en: 'Our Production',
    es: 'Nuestra Producción',
    pt: 'Nossa Produção',
    de: 'Unsere Produktion'
  },
  'notreproduction.hero.lead': {
    fr: 'De l\'élevage et la collecte de co-produits d\'insectes à la formulation finale : un process maîtrisé, situé en France.',
    en: 'From the collection of insect co-products to final formulation: a fully controlled process, based in France.',
    es: 'Desde la recogida de subproductos de insectos hasta la formulación final: un proceso totalmente controlado, ubicado en Francia.',
    pt: 'Da recolha de coprodutos de insetos até à formulação final: um processo totalmente controlado, situado em França.',
    de: 'Von der Sammlung von Insekten-Nebenprodukten bis zur fertigen Formulierung: ein vollständig kontrollierter Prozess mit Sitz in Frankreich.'
  },
  'notreproduction.hero.stat1.label': {
    fr: 'Surface du site',
    en: 'Site surface area',
    es: 'Superficie del sitio',
    pt: 'Área do local',
    de: 'Standortfläche'
  },
  'notreproduction.hero.stat2.label': {
    fr: 'Étapes maîtrisées',
    en: 'Controlled stages',
    es: 'Etapas controladas',
    pt: 'Etapas controladas',
    de: 'Kontrollierte Schritte'
  },
  'notreproduction.hero.stat3.label': {
    fr: 'Fabriqué en France',
    en: 'Made in France',
    es: 'Fabricado en Francia',
    pt: 'Fabricado em França',
    de: 'Hergestellt in Frankreich'
  },
  'notreproduction.why.title': {
    fr: 'Pourquoi produire en France ?',
    en: 'Why produce in France?',
    es: '¿Por qué producir en Francia?',
    pt: 'Por que produzir em França?',
    de: 'Warum in Frankreich produzieren?'
  },
  'notreproduction.why.desc': {
    fr: 'Maîtriser l\'élevage d\'insectes et l\'extraction des molécules actives sur un site unique nous permet de garantir une traçabilité complète, du lot d\'élevage au produit fini. Cette intégration verticale limite notre dépendance aux approvisionnements internationaux, un enjeu particulièrement sensible pour des matières premières vivantes, et raccourcit les délais entre la production et la livraison aux exploitations agricoles françaises.',
    en: 'Controlling insect rearing and active molecule extraction on a single site allows us to guarantee full traceability, from the rearing batch to the finished product. This vertical integration limits our dependence on international supply, a particularly sensitive issue for living raw materials, and shortens lead times between production and delivery to French farms.',
    es: 'Controlar la cría de insectos y la extracción de moléculas activas en un único sitio nos permite garantizar una trazabilidad completa, desde el lote de cría hasta el producto terminado. Esta integración vertical limita nuestra dependencia de los suministros internacionales, un aspecto especialmente sensible para materias primas vivas, y acorta los plazos entre la producción y la entrega a las explotaciones agrícolas francesas.',
    pt: 'Controlar a criação de insetos e a extração das moléculas ativas num único local permite-nos garantir uma rastreabilidade completa, desde o lote de criação até ao produto acabado. Esta integração vertical limita a nossa dependência de fornecimentos internacionais, uma questão particularmente sensível para matérias-primas vivas, e reduz os prazos entre a produção e a entrega às explorações agrícolas francesas.',
    de: 'Die Kontrolle der Insektenzucht und der Extraktion aktiver Moleküle an einem einzigen Standort ermöglicht es uns, eine vollständige Rückverfolgbarkeit vom Zuchtlos bis zum Fertigprodukt zu gewährleisten. Diese vertikale Integration verringert unsere Abhängigkeit von internationalen Lieferungen – ein besonders sensibles Thema bei lebenden Rohstoffen – und verkürzt die Zeit zwischen Produktion und Lieferung an französische Betriebe.'
  },
  'notreproduction.steps.title': {
    fr: 'Les 6 étapes de notre chaîne de production',
    en: 'The 6 stages of our production chain',
    es: 'Las 6 etapas de nuestra cadena de producción',
    pt: 'As 6 etapas da nossa cadeia de produção',
    de: 'Die 6 Schritte unserer Produktionskette'
  },
  'notreproduction.steps.subtitle': {
    fr: 'Chaque lot de biosolutions Keprea suit un process intégré, de l\'élevage des insectes jusqu\'au conseil d\'utilisation en parcelle.',
    en: 'Every batch of Keprea biosolutions follows an integrated process, from insect rearing to field-use guidance.',
    es: 'Cada lote de biosoluciones Keprea sigue un proceso integrado, desde la cría de insectos hasta el asesoramiento de uso en campo.',
    pt: 'Cada lote de biosoluções Keprea segue um processo integrado, desde a criação de insetos até ao aconselhamento de utilização no terreno.',
    de: 'Jede Charge der Keprea-Biolösungen durchläuft einen integrierten Prozess, von der Insektenzucht bis zur Anwendungsberatung im Feld.'
  },
  'notreproduction.step1.title': {
    fr: 'Élevage d\'insectes auxiliaires',
    en: 'Beneficial insect rearing',
    es: 'Cría de insectos auxiliares',
    pt: 'Criação de insetos auxiliares',
    de: 'Zucht von Nützlingen'
  },
  'notreproduction.step1.desc': {
    fr: 'Élevage en conditions contrôlées (température, hygrométrie, alimentation) sur notre site en France, une matière première disponible toute l\'année, indépendante des aléas climatiques.',
    en: 'Rearing under controlled conditions (temperature, humidity, feeding) at our site in France, a raw material available year-round, independent of weather conditions.',
    es: 'Cría en condiciones controladas (temperatura, humedad, alimentación) en nuestro centro en Francia, una materia prima disponible todo el año, independiente de los riesgos climáticos.',
    pt: 'Criação em condições controladas (temperatura, humidade, alimentação) no nosso local em França, uma matéria-prima disponível durante todo o ano, independente das condições climáticas.',
    de: 'Zucht unter kontrollierten Bedingungen (Temperatur, Luftfeuchtigkeit, Fütterung) an unserem Standort in Frankreich – ein ganzjährig verfügbarer, witterungsunabhängiger Rohstoff.'
  },
  'notreproduction.step2.title': {
    fr: 'Collecte de co-produits d\'insectes',
    en: 'Insect co-product collection',
    es: 'Recogida de subproductos de insectos',
    pt: 'Recolha de coprodutos de insetos',
    de: 'Sammlung von Insekten-Nebenprodukten'
  },
  'notreproduction.step2.desc': {
    fr: 'Valorisation des co-produits issus de l\'élevage d\'autres insectes (mouche soldat noire, ténébrion meunier).',
    en: 'Recovery of co-products from the rearing of other insects (black soldier fly, mealworm).',
    es: 'Valorización de subproductos procedentes de la cría de otros insectos (mosca soldado negra, gusano de la harina).',
    pt: 'Valorização de coprodutos provenientes da criação de outros insetos (mosca-soldado-negra, larva-da-farinha).',
    de: 'Verwertung von Nebenprodukten aus der Zucht anderer Insekten (Schwarze Soldatenfliege, Mehlwurm).'
  },
  'notreproduction.step3.title': {
    fr: 'Préparation ou transformation',
    en: 'Preparation or processing',
    es: 'Preparación o transformación',
    pt: 'Preparação ou transformação',
    de: 'Aufbereitung oder Verarbeitung'
  },
  'notreproduction.step3.desc': {
    fr: 'Extraction des molécules actives (peptides antimicrobiens, chitine, acides aminés) par nos procédés propriétaires, puis formulation selon la gamme de destination.',
    en: 'Extraction of active molecules (antimicrobial peptides, chitin, amino acids) using our proprietary processes, then formulation according to the target range.',
    es: 'Extracción de las moléculas activas (péptidos antimicrobianos, quitina, aminoácidos) mediante nuestros procesos patentados, y posterior formulación según la gama de destino.',
    pt: 'Extração das moléculas ativas (péptidos antimicrobianos, quitina, aminoácidos) através dos nossos processos proprietários, seguida de formulação conforme a linha de destino.',
    de: 'Extraktion der aktiven Moleküle (antimikrobielle Peptide, Chitin, Aminosäuren) mit unseren eigenen Verfahren, anschließend Formulierung je nach Zielproduktlinie.'
  },
  'notreproduction.step4.title': {
    fr: 'Packaging',
    en: 'Packaging',
    es: 'Envasado',
    pt: 'Embalagem',
    de: 'Verpackung'
  },
  'notreproduction.step4.desc': {
    fr: 'Conditionnement adapté à chaque format de vente : sachets et tubes pour les auxiliaires vivants, bidons pour les biopesticides et boosters, big-bags et sacs pour le biofertilisant Fertea432.',
    en: 'Packaging adapted to each sales format: pouches and tubes for living auxiliaries, jerrycans for biopesticides and boosters, big bags and sacks for Fertea432 biofertilizer.',
    es: 'Envasado adaptado a cada formato de venta: bolsitas y tubos para los auxiliares vivos, garrafas para biopesticidas y potenciadores, big-bags y sacos para el biofertilizante Fertea432.',
    pt: 'Embalagem adaptada a cada formato de venda: saquetas e tubos para os auxiliares vivos, bidões para os biopesticidas e potenciadores, big-bags e sacos para o biofertilizante Fertea432.',
    de: 'Verpackung, angepasst an jedes Verkaufsformat: Beutel und Röhrchen für lebende Nützlinge, Kanister für Biopestizide und Booster, Big Bags und Säcke für den Biodünger Fertea432.'
  },
  'notreproduction.step5.title': {
    fr: 'Transport',
    en: 'Transport',
    es: 'Transporte',
    pt: 'Transporte',
    de: 'Transport'
  },
  'notreproduction.step5.desc': {
    fr: 'Logistique organisée pour préserver la viabilité des produits vivants et la stabilité des formulations liquides jusqu\'à la parcelle.',
    en: 'Logistics organized to preserve the viability of living products and the stability of liquid formulations all the way to the field.',
    es: 'Logística organizada para preservar la viabilidad de los productos vivos y la estabilidad de las formulaciones líquidas hasta la parcela.',
    pt: 'Logística organizada para preservar a viabilidade dos produtos vivos e a estabilidade das formulações líquidas até à parcela.',
    de: 'Logistik, organisiert zur Erhaltung der Lebensfähigkeit lebender Produkte und der Stabilität flüssiger Formulierungen bis zum Feld.'
  },
  'notreproduction.step6.title': {
    fr: 'Conseil d\'utilisation en plein champ',
    en: 'Field-use guidance',
    es: 'Asesoramiento de uso en campo',
    pt: 'Aconselhamento de utilização no terreno',
    de: 'Anwendungsberatung im Feld'
  },
  'notreproduction.step6.desc': {
    fr: 'Accompagnement technique pour le diagnostic, le dosage et le calendrier d\'application, en lien avec les équipes agronomiques de nos clients et distributeurs.',
    en: 'Technical support for diagnosis, dosage and application timing, in coordination with the agronomic teams of our customers and distributors.',
    es: 'Acompañamiento técnico para el diagnóstico, la dosificación y el calendario de aplicación, en coordinación con los equipos agronómicos de nuestros clientes y distribuidores.',
    pt: 'Acompanhamento técnico para o diagnóstico, a dosagem e o calendário de aplicação, em ligação com as equipas agronómicas dos nossos clientes e distribuidores.',
    de: 'Technische Begleitung bei Diagnose, Dosierung und Anwendungszeitplan, in Abstimmung mit den agronomischen Teams unserer Kunden und Vertriebspartner.'
  },
  'notreproduction.location.title': {
    fr: 'Une implantation stratégique en France',
    en: 'A strategic location in France',
    es: 'Una ubicación estratégica en Francia',
    pt: 'Uma localização estratégica em França',
    de: 'Ein strategischer Standort in Frankreich'
  },
  'notreproduction.location.stat1.desc': {
    fr: 'Surface de notre site de production, situé en France',
    en: 'Surface area of our production site, based in France',
    es: 'Superficie de nuestro sitio de producción, ubicado en Francia',
    pt: 'Área do nosso local de produção, situado em França',
    de: 'Fläche unseres Produktionsstandorts in Frankreich'
  },
  'notreproduction.location.stat2.desc': {
    fr: 'De Paris, Bâle, Genève et Lyon, au cœur d\'un bassin céréalier et viticole',
    en: '2 hours from Paris, Basel, Geneva and Lyon, at the heart of a grain and wine-growing region',
    es: 'A 2 horas de París, Basilea, Ginebra y Lyon, en el corazón de una región cerealista y vitícola',
    pt: 'A 2 horas de Paris, Basileia, Genebra e Lyon, no coração de uma região cerealífera e vitícola',
    de: '2 Stunden von Paris, Basel, Genf und Lyon entfernt, im Herzen einer Getreide- und Weinbauregion'
  },
  'notreproduction.location.stat3.desc': {
    fr: 'Étapes maîtrisées, de la collecte de co-produits au conseil terrain',
    en: 'Controlled stages, from co-product collection to field advice',
    es: 'Etapas controladas, desde la recogida de subproductos hasta el asesoramiento en campo',
    pt: 'Etapas controladas, desde a recolha de coprodutos até ao aconselhamento no terreno',
    de: 'Kontrollierte Schritte, von der Sammlung der Nebenprodukte bis zur Feldberatung'
  },
  'notreproduction.bullet1': {
    fr: 'Site implanté en France, à proximité d\'un important bassin céréalier et viticole français',
    en: 'Site based in France, near a major French grain and wine-growing region',
    es: 'Sitio ubicado en Francia, cerca de una importante región cerealista y vitícola francesa',
    pt: 'Local situado em França, perto de uma importante região cerealífera e vitícola francesa',
    de: 'Standort in Frankreich, in der Nähe einer bedeutenden französischen Getreide- und Weinbauregion'
  },
  'notreproduction.bullet2': {
    fr: 'Élevage d\'insectes en conditions contrôlées, garantissant une matière première traçable toute l\'année',
    en: 'Insect rearing under controlled conditions, guaranteeing a traceable raw material year-round',
    es: 'Cría de insectos en condiciones controladas, que garantiza una materia prima trazable todo el año',
    pt: 'Criação de insetos em condições controladas, garantindo uma matéria-prima rastreável durante todo o ano',
    de: 'Insektenzucht unter kontrollierten Bedingungen, die ganzjährig einen rückverfolgbaren Rohstoff garantiert'
  },
  'notreproduction.bullet3': {
    fr: 'Produits formulés pour répondre aux exigences de l\'agriculture biologique (règlement (UE) 2018/848)',
    en: 'Products formulated to meet organic farming requirements (Regulation (EU) 2018/848)',
    es: 'Productos formulados para cumplir los requisitos de la agricultura ecológica (Reglamento (UE) 2018/848)',
    pt: 'Produtos formulados para responder às exigências da agricultura biológica (regulamento (UE) 2018/848)',
    de: 'Produkte, formuliert zur Erfüllung der Anforderungen des ökologischen Landbaus (Verordnung (EU) 2018/848)'
  },
  // Ressources page
  'ressources.hero.title': {
    fr: 'Ressources', en: 'Resources', es: 'Recursos', pt: 'Recursos', de: 'Ressourcen'
  },
  'ressources.hero.subtitle': {
    fr: 'Guides pratiques, fiches techniques et articles pour vous accompagner dans l\'adoption des biosolutions agricoles.',
    en: 'Practical guides, technical sheets and articles to support you in adopting agricultural biosolutions.',
    es: 'Guías prácticas, fichas técnicas y artículos para acompañarle en la adopción de biosoluciones agrícolas.',
    pt: 'Guias práticos, fichas técnicas e artigos para o acompanhar na adoção de biosoluções agrícolas.',
    de: 'Praktische Leitfäden, technische Datenblätter und Artikel, die Sie bei der Einführung landwirtschaftlicher Biolösungen unterstützen.'
  },
  'ressources.card1.title': {
    fr: 'Fiches techniques', en: 'Technical sheets', es: 'Fichas técnicas', pt: 'Fichas técnicas', de: 'Technische Datenblätter'
  },
  'ressources.card1.desc': {
    fr: 'Guides d\'utilisation, doses, cultures cibles et compatibilités pour chaque produit Keprea.',
    en: 'Usage guides, dosages, target crops and compatibilities for each Keprea product.',
    es: 'Guías de uso, dosis, cultivos objetivo y compatibilidades para cada producto Keprea.',
    pt: 'Guias de utilização, doses, culturas-alvo e compatibilidades para cada produto Keprea.',
    de: 'Anwendungsleitfäden, Dosierungen, Zielkulturen und Kompatibilitäten für jedes Keprea-Produkt.'
  },
  'ressources.card2.title': {
    fr: 'Articles & études', en: 'Articles & studies', es: 'Artículos y estudios', pt: 'Artigos e estudos', de: 'Artikel & Studien'
  },
  'ressources.card2.desc': {
    fr: 'Retours d\'expériences d\'agriculteurs, études d\'efficacité et actualités biocontrôle.',
    en: 'Farmer feedback, efficacy studies and biocontrol news.',
    es: 'Experiencias de agricultores, estudios de eficacia y noticias sobre biocontrol.',
    pt: 'Testemunhos de agricultores, estudos de eficácia e notícias sobre biocontrole.',
    de: 'Erfahrungsberichte von Landwirten, Wirksamkeitsstudien und Neuigkeiten zur Biokontrolle.'
  },
  'ressources.card3.title': {
    fr: 'Newsletter', en: 'Newsletter', es: 'Boletín informativo', pt: 'Newsletter', de: 'Newsletter'
  },
  'ressources.card3.desc': {
    fr: 'Conseils saisonniers, nouveautés produits et actualités réglementaires chaque mois.',
    en: 'Seasonal advice, product news and regulatory updates every month.',
    es: 'Consejos estacionales, novedades de productos y noticias regulatorias cada mes.',
    pt: 'Conselhos sazonais, novidades de produtos e atualizações regulamentares todos os meses.',
    de: 'Saisonale Tipps, Produktneuheiten und regulatorische Neuigkeiten jeden Monat.'
  },
  'ressources.comingSoon': {
    fr: 'Bientôt disponible', en: 'Coming soon', es: 'Próximamente', pt: 'Brevemente disponível', de: 'Demnächst verfügbar'
  },
  'ressources.card1.cta': {
    fr: 'Voir les fiches techniques', en: 'View technical data sheets', es: 'Ver fichas técnicas', pt: 'Ver fichas técnicas', de: 'Technische Datenblätter ansehen'
  },
  // Fiches techniques (hub + detail)
  'techsheet.hub.title': {
    fr: 'Fiches techniques', en: 'Technical data sheets', es: 'Fichas técnicas', pt: 'Fichas técnicas', de: 'Technische Datenblätter'
  },
  'techsheet.hub.subtitle': {
    fr: 'Composition, dose d\'application, cultures cibles et compatibilités pour chaque produit Keprea.',
    en: 'Composition, application rate, target crops and compatibilities for each Keprea product.',
    es: 'Composición, dosis de aplicación, cultivos objetivo y compatibilidades de cada producto Keprea.',
    pt: 'Composição, dose de aplicação, culturas-alvo e compatibilidades de cada produto Keprea.',
    de: 'Zusammensetzung, Aufwandmenge, Zielkulturen und Kompatibilitäten für jedes Keprea-Produkt.'
  },
  'techsheet.hub.viewSheet': {
    fr: 'Voir la fiche', en: 'View data sheet', es: 'Ver ficha', pt: 'Ver ficha', de: 'Datenblatt ansehen'
  },
  'techsheet.detail.backToHub': {
    fr: 'Toutes les fiches techniques', en: 'All technical data sheets', es: 'Todas las fichas técnicas', pt: 'Todas as fichas técnicas', de: 'Alle technischen Datenblätter'
  },
  'techsheet.detail.viewRangePage': {
    fr: 'Voir la page produit', en: 'View product page', es: 'Ver página de producto', pt: 'Ver página do produto', de: 'Zur Produktseite'
  },
  'techsheet.detail.range': {
    fr: 'Gamme', en: 'Range', es: 'Gama', pt: 'Gama', de: 'Produktlinie'
  },
  'techsheet.cta.viewSheet': {
    fr: 'Voir la fiche technique', en: 'View technical data sheet', es: 'Ver ficha técnica', pt: 'Ver ficha técnica', de: 'Technisches Datenblatt ansehen'
  },
  'techsheet.label.compositionEffect': {
    fr: 'Composition & effet', en: 'Composition & effect', es: 'Composición y efecto', pt: 'Composição e efeito', de: 'Zusammensetzung & Wirkung'
  },
  'techsheet.label.description': {
    fr: 'Description', en: 'Description', es: 'Descripción', pt: 'Descrição', de: 'Beschreibung'
  },
  'techsheet.label.application': {
    fr: 'Mode d\'application', en: 'Application method', es: 'Modo de aplicación', pt: 'Modo de aplicação', de: 'Anwendungsart'
  },
  'techsheet.label.technology': {
    fr: 'Technologie d\'extraction', en: 'Extraction technology', es: 'Tecnología de extracción', pt: 'Tecnologia de extração', de: 'Extraktionstechnologie'
  },
  'techsheet.label.stages': {
    fr: 'Stades clés', en: 'Key stages', es: 'Etapas clave', pt: 'Fases-chave', de: 'Schlüsselstadien'
  },
  'techsheet.label.frequency': {
    fr: 'Fréquence', en: 'Frequency', es: 'Frecuencia', pt: 'Frequência', de: 'Häufigkeit'
  },
  'techsheet.label.dosage': {
    fr: 'Dose', en: 'Dosage', es: 'Dosis', pt: 'Dose', de: 'Dosierung'
  },
  'techsheet.label.compatibility': {
    fr: 'Compatibilité', en: 'Compatibility', es: 'Compatibilidad', pt: 'Compatibilidade', de: 'Kompatibilität'
  },
  'techsheet.label.crops': {
    fr: 'Cultures cibles', en: 'Target crops', es: 'Cultivos objetivo', pt: 'Culturas-alvo', de: 'Zielkulturen'
  },
  'techsheet.label.pests': {
    fr: 'Ravageurs ciblés', en: 'Target pests', es: 'Plagas objetivo', pt: 'Pragas-alvo', de: 'Zielschädlinge'
  },
  'techsheet.label.category': {
    fr: 'Catégorie', en: 'Category', es: 'Categoría', pt: 'Categoria', de: 'Kategorie'
  },
  'techsheet.value.category.biostimulant': {
    fr: 'Biostimulant (non-fertilisant, non-produit phytopharmaceutique)',
    en: 'Biostimulant (not a fertilizer, not a plant protection product)',
    es: 'Bioestimulante (no es fertilizante ni producto fitosanitario)',
    pt: 'Bioestimulante (não é fertilizante nem produto fitofarmacêutico)',
    de: 'Biostimulans (kein Düngemittel, kein Pflanzenschutzmittel)'
  },
  'techsheet.value.category.biofertilizer': {
    fr: 'Biofertilisant / amendement organique',
    en: 'Biofertilizer / organic amendment',
    es: 'Biofertilizante / enmienda orgánica',
    pt: 'Biofertilizante / corretivo orgânico',
    de: 'Biodünger / organischer Bodenverbesserer'
  },
  'techsheet.value.category.biocontrol': {
    fr: 'Auxiliaire de biocontrôle (organisme vivant)',
    en: 'Biocontrol agent (living organism)',
    es: 'Agente de biocontrol (organismo vivo)',
    pt: 'Agente de biocontrolo (organismo vivo)',
    de: 'Biokontroll-Nützling (lebender Organismus)'
  },
  'techsheet.fertea432.composition': {
    fr: '85% de matière organique — ratio N-P-K : 3% azote, 4% phosphore, 2% potassium.',
    en: '85% organic matter — N-P-K ratio: 3% nitrogen, 4% phosphorus, 2% potassium.',
    es: '85% de materia orgánica — relación N-P-K: 3% nitrógeno, 4% fósforo, 2% potasio.',
    pt: '85% de matéria orgânica — relação N-P-K: 3% azoto, 4% fósforo, 2% potássio.',
    de: '85% organische Substanz — N-P-K-Verhältnis: 3% Stickstoff, 4% Phosphor, 2% Kalium.'
  },
  'ressources.cta.title': {
    fr: 'Vous souhaitez être informé de nos publications ?',
    en: 'Want to be notified about our publications?',
    es: '¿Quiere estar informado de nuestras publicaciones?',
    pt: 'Deseja ser informado sobre as nossas publicações?',
    de: 'Möchten Sie über unsere Veröffentlichungen informiert werden?'
  },
  'ressources.cta.desc': {
    fr: 'Contactez-nous pour être ajouté à notre liste de diffusion et recevoir nos fiches techniques dès leur parution.',
    en: 'Contact us to be added to our mailing list and receive our technical sheets as soon as they are published.',
    es: 'Contáctenos para ser añadido a nuestra lista de distribución y recibir nuestras fichas técnicas en cuanto se publiquen.',
    pt: 'Contacte-nos para ser adicionado à nossa lista de distribuição e receber as nossas fichas técnicas assim que forem publicadas.',
    de: 'Kontaktieren Sie uns, um in unsere Mailingliste aufgenommen zu werden und unsere technischen Datenblätter direkt nach Veröffentlichung zu erhalten.'
  },
  // Qui sommes-nous page
  'quisommesnous.hero.eyebrow': {
    fr: 'L\'équipe Keprea', en: 'The Keprea team', es: 'El equipo Keprea', pt: 'A equipa Keprea', de: 'Das Keprea-Team'
  },
  'quisommesnous.hero.title': {
    fr: 'Qui sommes-nous ?', en: 'Who are we?', es: '¿Quiénes somos?', pt: 'Quem somos?', de: 'Wer sind wir?'
  },
  'quisommesnous.hero.lead': {
    fr: 'Une équipe pluridisciplinaire au service d\'une agriculture plus durable, réunie autour de la biologie des insectes.',
    en: 'A multidisciplinary team dedicated to more sustainable agriculture, united around insect biology.',
    es: 'Un equipo multidisciplinar al servicio de una agricultura más sostenible, reunido en torno a la biología de los insectos.',
    pt: 'Uma equipa multidisciplinar ao serviço de uma agricultura mais sustentável, reunida em torno da biologia dos insetos.',
    de: 'Ein multidisziplinäres Team im Dienst einer nachhaltigeren Landwirtschaft, vereint rund um die Biologie der Insekten.'
  },
  'quisommesnous.hero.stat1.label': {
    fr: 'Année de création', en: 'Year founded', es: 'Año de creación', pt: 'Ano de criação', de: 'Gründungsjahr'
  },
  'quisommesnous.hero.stat2.label': {
    fr: 'Associés fondateurs', en: 'Founding partners', es: 'Socios fundadores', pt: 'Sócios fundadores', de: 'Gründungsgesellschafter'
  },
  'quisommesnous.hero.stat3.label': {
    fr: 'Site de production France', en: 'Production site in France', es: 'Sitio de producción en Francia', pt: 'Local de produção em França', de: 'Produktionsstandort Frankreich'
  },
  'quisommesnous.mission.title': {
    fr: 'Notre mission', en: 'Our mission', es: 'Nuestra misión', pt: 'A nossa missão', de: 'Unsere Mission'
  },
  'quisommesnous.mission.p1': {
    fr: 'Faire de la biologie des insectes un levier concret pour la transition agroécologique. Nous convertissons les propriétés biologiques des insectes (peptides antimicrobiens, chitine, acides aminés) en solutions de protection et de nutrition des cultures, conçues pour répondre aux contraintes réelles du terrain : coût, simplicité d\'usage, conformité réglementaire.',
    en: 'Making insect biology a concrete lever for the agroecological transition. We convert the biological properties of insects (antimicrobial peptides, chitin, amino acids) into crop protection and nutrition solutions, designed to meet real field constraints: cost, ease of use, regulatory compliance.',
    es: 'Hacer de la biología de los insectos una palanca concreta para la transición agroecológica. Convertimos las propiedades biológicas de los insectos (péptidos antimicrobianos, quitina, aminoácidos) en soluciones de protección y nutrición de los cultivos, diseñadas para responder a las limitaciones reales del terreno: coste, sencillez de uso, cumplimiento normativo.',
    pt: 'Fazer da biologia dos insetos uma alavanca concreta para a transição agroecológica. Convertemos as propriedades biológicas dos insetos (péptidos antimicrobianos, quitina, aminoácidos) em soluções de proteção e nutrição das culturas, concebidas para responder às limitações reais do terreno: custo, simplicidade de utilização, conformidade regulamentar.',
    de: 'Die Biologie der Insekten zu einem konkreten Hebel für die agrarökologische Wende machen. Wir wandeln die biologischen Eigenschaften von Insekten (antimikrobielle Peptide, Chitin, Aminosäuren) in Lösungen zum Pflanzenschutz und zur Pflanzenernährung um, die auf die realen Anforderungen vor Ort ausgelegt sind: Kosten, einfache Anwendung, Einhaltung der Vorschriften.'
  },
  'quisommesnous.mission.p2': {
    fr: 'Cette approche répond à un double constat : le retrait progressif des substances actives conventionnelles impose de nouvelles alternatives aux agriculteurs, et les filières exigent des preuves concrètes de pratiques durables. Notre ambition est de rendre le biocontrôle accessible, sans compromis sur l\'efficacité agronomique.',
    en: 'This approach addresses a dual observation: the gradual withdrawal of conventional active substances requires new alternatives for farmers, and supply chains demand concrete proof of sustainable practices. Our ambition is to make biocontrol accessible, without compromising agronomic efficacy.',
    es: 'Este enfoque responde a una doble constatación: la retirada progresiva de las sustancias activas convencionales impone nuevas alternativas a los agricultores, y las cadenas de suministro exigen pruebas concretas de prácticas sostenibles. Nuestra ambición es hacer accesible el biocontrol, sin comprometer la eficacia agronómica.',
    pt: 'Esta abordagem responde a uma dupla constatação: a retirada progressiva das substâncias ativas convencionais impõe novas alternativas aos agricultores, e as cadeias produtivas exigem provas concretas de práticas sustentáveis. A nossa ambição é tornar o biocontrole acessível, sem comprometer a eficácia agronómica.',
    de: 'Dieser Ansatz reagiert auf zwei Beobachtungen: Der schrittweise Rückzug konventioneller Wirkstoffe zwingt Landwirte zu neuen Alternativen, und die Wertschöpfungsketten verlangen konkrete Nachweise nachhaltiger Praktiken. Unser Ziel ist es, Biokontrolle zugänglich zu machen, ohne Kompromisse bei der agronomischen Wirksamkeit einzugehen.'
  },
  'quisommesnous.milestones.title': {
    fr: 'Nos jalons', en: 'Our milestones', es: 'Nuestros hitos', pt: 'Os nossos marcos', de: 'Unsere Meilensteine'
  },
  'quisommesnous.milestone1': {
    fr: '2024 : création de Keprea (SAS)',
    en: '2024: Keprea founded (SAS)',
    es: '2024: creación de Keprea (SAS)',
    pt: '2024: criação da Keprea (SAS)',
    de: '2024: Gründung von Keprea (SAS)'
  },
  'quisommesnous.milestone2': {
    fr: '2025 : implantation du site de production en France (3 000 m²)',
    en: '2025: production site established in France (3,000 m²)',
    es: '2025: implantación del sitio de producción en Francia (3.000 m²)',
    pt: '2025: implementação do local de produção em França (3.000 m²)',
    de: '2025: Errichtung des Produktionsstandorts in Frankreich (3.000 m²)'
  },
  'quisommesnous.milestone3': {
    fr: 'Une gamme de 4 familles de biosolutions : bioprotection vivante, biopesticides, boosters, biofertilisant',
    en: 'A range of 4 biosolution families: living bioprotection, biopesticides, boosters, biofertilizer',
    es: 'Una gama de 4 familias de biosoluciones: bioprotección viva, biopesticidas, potenciadores, biofertilizante',
    pt: 'Uma linha de 4 famílias de biosoluções: bioproteção viva, biopesticidas, potenciadores, biofertilizante',
    de: 'Eine Produktpalette mit 4 Biolösungsfamilien: lebender Bioschutz, Biopestizide, Booster, Biodünger'
  },
  'quisommesnous.milestone4': {
    fr: 'Des formulations pensées pour l\'agriculture biologique (règlement (UE) 2018/848)',
    en: 'Formulations designed for organic farming (Regulation (EU) 2018/848)',
    es: 'Formulaciones pensadas para la agricultura ecológica (Reglamento (UE) 2018/848)',
    pt: 'Formulações pensadas para a agricultura biológica (regulamento (UE) 2018/848)',
    de: 'Formulierungen, konzipiert für den ökologischen Landbau (Verordnung (EU) 2018/848)'
  },
  'quisommesnous.values.eyebrow': {
    fr: 'Ce qui nous guide', en: 'What guides us', es: 'Lo que nos guía', pt: 'O que nos guia', de: 'Was uns leitet'
  },
  'quisommesnous.values.title': {
    fr: 'Nos valeurs', en: 'Our values', es: 'Nuestros valores', pt: 'Os nossos valores', de: 'Unsere Werte'
  },
  'quisommesnous.cta.eyebrow': {
    fr: 'Envie d\'en savoir plus ?', en: 'Want to know more?', es: '¿Quiere saber más?', pt: 'Quer saber mais?', de: 'Möchten Sie mehr erfahren?'
  },
  'quisommesnous.cta.title': {
    fr: 'Discutons de votre exploitation',
    en: 'Let\'s talk about your farm',
    es: 'Hablemos de su explotación',
    pt: 'Vamos falar sobre a sua exploração',
    de: 'Sprechen wir über Ihren Betrieb'
  },
  'quisommesnous.cta.desc': {
    fr: 'Notre équipe est à votre écoute pour répondre à vos questions sur nos biosolutions et leur mise en œuvre sur le terrain.',
    en: 'Our team is here to answer your questions about our biosolutions and their implementation in the field.',
    es: 'Nuestro equipo está a su disposición para responder a sus preguntas sobre nuestras biosoluciones y su aplicación en el campo.',
    pt: 'A nossa equipa está disponível para responder às suas perguntas sobre as nossas biosoluções e a sua implementação no terreno.',
    de: 'Unser Team beantwortet gerne Ihre Fragen zu unseren Biolösungen und deren Einsatz vor Ort.'
  },
  'quisommesnous.press.title': {
    fr: 'Contact presse',
    en: 'Press contact',
    es: 'Contacto de prensa',
    pt: 'Contacto de imprensa',
    de: 'Pressekontakt'
  },
  'quisommesnous.press.agency': {
    fr: 'Scopus Communication',
    en: 'Scopus Communication',
    es: 'Scopus Communication',
    pt: 'Scopus Communication',
    de: 'Scopus Communication'
  },
  // Team roles
  'team.role.alexandre': {
    fr: 'Responsable de production', en: 'Production Manager', es: 'Responsable de producción', pt: 'Responsável de produção', de: 'Produktionsleiter'
  },
  'team.role.antoine': {
    fr: 'Co-fondateur · Agriculteur (fruit et légumes, pisciculture)', en: 'Co-founder · Farmer (fruit and vegetables, fish farming)', es: 'Cofundador · Agricultor (frutas y verduras, piscicultura)', pt: 'Cofundador · Agricultor (frutas e legumes, piscicultura)', de: 'Mitgründer · Landwirt (Obst und Gemüse, Fischzucht)'
  },
  'team.role.beatrice': {
    fr: 'Présidente & CFO · Co-fondatrice', en: 'President & CFO · Co-founder', es: 'Presidenta y CFO · Cofundadora', pt: 'Presidente e CFO · Cofundadora', de: 'Präsidentin & CFO · Mitgründerin'
  },
  'team.role.emilien': {
    fr: 'Responsable R&D Biostimulants · Co-fondateur · Agriculteur (grandes cultures, élevage ovin)', en: 'Head of R&D Biostimulants · Co-founder · Farmer (arable farming, sheep farming)', es: 'Responsable de I+D Bioestimulantes · Cofundador · Agricultor (agricultura extensiva, ganadería ovina)', pt: 'Responsável de I&D Bioestimulantes · Cofundador · Agricultor (agricultura extensiva, criação de ovinos)', de: 'Leiter F&E Biostimulanzien · Mitgründer · Landwirt (Ackerbau, Schafhaltung)'
  },
  'team.role.guillaume': {
    fr: 'Responsable des ventes · Co-fondateur · Agriculteur (élevage ovin)', en: 'Head of Sales · Co-founder · Farmer (sheep farming)', es: 'Responsable de ventas · Cofundador · Agricultor (ganadería ovina)', pt: 'Responsável de vendas · Cofundador · Agricultor (criação de ovinos)', de: 'Vertriebsleiter · Mitgründer · Landwirt (Schafhaltung)'
  },
  'team.role.isabelle': {
    fr: 'Responsable supply chain et logistique', en: 'Supply Chain and Logistics Manager', es: 'Responsable de cadena de suministro y logística', pt: 'Responsável de cadeia de abastecimento e logística', de: 'Leiterin Supply Chain und Logistik'
  },
  'team.role.julien': {
    fr: 'Président du comité stratégique · Co-fondateur', en: 'Chairman of the Strategic Committee · Co-founder', es: 'Presidente del comité estratégico · Cofundador', pt: 'Presidente do comité estratégico · Cofundador', de: 'Vorsitzender des Strategieausschusses · Mitgründer'
  },
  'team.role.pascal': {
    fr: 'Responsable R&D Insectes · Co-fondateur', en: 'Head of R&D Insects · Co-founder', es: 'Responsable de I+D Insectos · Cofundador', pt: 'Responsável de I&D Insetos · Cofundador', de: 'Leiter F&E Insekten · Mitgründer'
  },
  'team.role.thibault': {
    fr: 'Responsable des opérations · Co-fondateur', en: 'Head of Operations · Co-founder', es: 'Responsable de operaciones · Cofundador', pt: 'Responsável de operações · Cofundador', de: 'Leiter Betrieb · Mitgründer'
  },
  'team.role.thierry': {
    fr: 'Ingénieur R&D Insectes', en: 'R&D Engineer Insects', es: 'Ingeniero de I+D Insectos', pt: 'Engenheiro de I&D Insetos', de: 'F&E-Ingenieur Insekten'
  },
  // Innovation page
  'innovationpage.hero.eyebrow': {
    fr: 'Innovation', en: 'Innovation', es: 'Innovación', pt: 'Inovação', de: 'Innovation'
  },
  'innovationpage.hero.title': {
    fr: 'Une nouvelle source de molécules bioactives issues du vivant',
    en: 'A new source of bioactive molecules from living organisms',
    es: 'Una nueva fuente de moléculas bioactivas de origen vivo',
    pt: 'Uma nova fonte de moléculas bioativas de origem viva',
    de: 'Eine neue Quelle bioaktiver Moleküle aus der Natur'
  },
  'innovationpage.hero.lead': {
    fr: 'Les insectes ont co-évolué avec les plantes pendant 400 millions d\'années. Keprea identifie et développe des biosolutions innovantes pour mettre l\'insecte au service d\'une agriculture plus résiliente.',
    en: 'Insects have co-evolved with plants for 400 million years. Keprea extracts and formulates these biological actives into agricultural biosolutions with no chemical residue.',
    es: 'Los insectos han coevolucionado con las plantas durante 400 millones de años. Keprea extrae y formula estos activos biológicos para convertirlos en biosoluciones agrícolas sin ningún residuo químico.',
    pt: 'Os insetos coevoluíram com as plantas durante 400 milhões de anos. A Keprea extrai e formula estes ativos biológicos, transformando-os em biosoluções agrícolas sem qualquer resíduo químico.',
    de: 'Insekten haben sich über 400 Millionen Jahre gemeinsam mit Pflanzen entwickelt. Keprea extrahiert und formuliert diese biologischen Wirkstoffe zu landwirtschaftlichen Biolösungen ohne chemische Rückstände.'
  },
  'innovationpage.hero.stat1.label': {
    fr: 'années de co-évolution',
    en: 'years of co-evolution',
    es: 'años de coevolución',
    pt: 'anos de coevolução',
    de: 'Jahre gemeinsamer Evolution'
  },
  'innovationpage.hero.stat2.label': {
    fr: 'des cultures dépendent des insectes',
    en: 'of crops depend on insects',
    es: 'de los cultivos dependen de los insectos',
    pt: 'das culturas dependem dos insetos',
    de: 'der Kulturen sind von Insekten abhängig'
  },
  'innovationpage.hero.stat3.label': {
    fr: 'résidu chimique',
    en: 'chemical residue',
    es: 'residuo químico',
    pt: 'resíduo químico',
    de: 'chemische Rückstände'
  },
  'innovationpage.hero.image.alt': {
    fr: 'Chrysope posée sur une feuille de soja, illustrant l’interaction naturelle entre insectes et plantes à l’origine des biosolutions Keprea',
    en: 'A lacewing resting on a soybean leaf, illustrating the natural insect–plant interaction behind Keprea’s biosolutions',
    es: 'Una crisopa posada en una hoja de soja, que ilustra la interacción natural entre insectos y plantas en el origen de las biosoluciones de Keprea',
    pt: 'Um crisopídeo sobre uma folha de soja, ilustrando a interação natural entre insetos e plantas na origem das biossoluções da Keprea',
    de: 'Eine Florfliege auf einem Sojablatt – die natürliche Insekten-Pflanzen-Interaktion, die den Biolösungen von Keprea zugrunde liegt'
  },
  'innovationpage.challenges.title': {
    fr: 'Un contexte agricole en mouvement',
    en: 'Agriculture facing its limits',
    es: 'La agricultura frente a sus límites',
    pt: 'A agricultura perante os seus limites',
    de: 'Die Landwirtschaft an ihren Grenzen'
  },
  'innovationpage.challenges.subtitle': {
    fr: 'Réglementation évolutive, résistances des ravageurs, attentes de traçabilité : l\'agriculture a besoin de nouveaux outils pour continuer à protéger les cultures efficacement.',
    en: 'Conventional chemical solutions are showing signs of exhaustion. Stricter regulation, pest resistance, traceability expectations: the model has to change.',
    es: 'Las soluciones químicas convencionales muestran signos de agotamiento. Regulación más estricta, resistencias de las plagas, exigencias de trazabilidad: el modelo debe cambiar.',
    pt: 'As soluções químicas convencionais mostram sinais de esgotamento. Regulamentação mais rigorosa, resistências das pragas, exigências de rastreabilidade: o modelo tem de mudar.',
    de: 'Konventionelle chemische Lösungen zeigen Ermüdungserscheinungen. Strengere Vorschriften, Schädlingsresistenzen, Rückverfolgbarkeitsanforderungen: Das Modell muss sich ändern.'
  },
  'innovationpage.challenge1.title': {
    fr: 'Réglementation en hausse',
    en: 'Rising regulation',
    es: 'Regulación en aumento',
    pt: 'Regulamentação crescente',
    de: 'Zunehmende Regulierung'
  },
  'innovationpage.challenge1.text': {
    fr: 'De nombreuses matières actives ont été retirées du marché ces dernières années en Europe. Les agriculteurs cherchent des alternatives fiables et durables pour compléter leur boîte à outils.',
    en: 'Hundreds of chemical active substances have been withdrawn from the market in Europe in recent years. Farmers are looking for reliable, sustainable alternatives.',
    es: 'Cientos de sustancias activas químicas se han retirado del mercado en Europa en los últimos años. Los agricultores buscan alternativas fiables y sostenibles.',
    pt: 'Centenas de substâncias ativas químicas foram retiradas do mercado na Europa nos últimos anos. Os agricultores procuram alternativas fiáveis e sustentáveis.',
    de: 'In den letzten Jahren wurden in Europa Hunderte chemischer Wirkstoffe vom Markt genommen. Landwirte suchen nach zuverlässigen, nachhaltigen Alternativen.'
  },
  'innovationpage.challenge2.title': {
    fr: 'Résistances croissantes',
    en: 'Growing resistance',
    es: 'Resistencias crecientes',
    pt: 'Resistências crescentes',
    de: 'Zunehmende Resistenzen'
  },
  'innovationpage.challenge2.text': {
    fr: 'Les ravageurs peuvent développer des résistances aux matières actives conventionnelles sur le long terme. Diversifier les modes d\'action fait partie des bonnes pratiques agronomiques.',
    en: 'Pests are developing resistance to chemical pesticides. The effectiveness of conventional treatments declines over time, forcing increasing doses.',
    es: 'Las plagas desarrollan resistencias a los pesticidas químicos. La eficacia de los tratamientos convencionales disminuye a largo plazo, obligando a aumentar las dosis.',
    pt: 'As pragas desenvolvem resistências aos pesticidas químicos. A eficácia dos tratamentos convencionais diminui a longo prazo, forçando doses crescentes.',
    de: 'Schädlinge entwickeln Resistenzen gegen chemische Pestizide. Die Wirksamkeit konventioneller Behandlungen nimmt langfristig ab und erzwingt steigende Dosierungen.'
  },
  'innovationpage.challenge3.title': {
    fr: 'Attentes de traçabilité',
    en: 'Traceability expectations',
    es: 'Exigencias de trazabilidad',
    pt: 'Exigências de rastreabilidade',
    de: 'Anforderungen an Rückverfolgbarkeit'
  },
  'innovationpage.challenge3.text': {
    fr: 'Les filières et les consommateurs sont de plus en plus attentifs à la traçabilité et à l\'absence de résidu. Le biocontrôle répond à cette demande croissante.',
    en: 'Supply chains and consumers demand residue-free products. Biocontrol is no longer a marginal choice — it\'s a commercial and regulatory necessity.',
    es: 'Las cadenas de suministro y los consumidores exigen productos sin residuos. El biocontrol ya no es una opción marginal, es una necesidad comercial y regulatoria.',
    pt: 'As cadeias produtivas e os consumidores exigem produtos sem resíduos. O biocontrole já não é uma escolha marginal, é uma necessidade comercial e regulamentar.',
    de: 'Wertschöpfungsketten und Verbraucher verlangen rückstandsfreie Produkte. Biokontrolle ist keine Randerscheinung mehr, sondern eine kommerzielle und regulatorische Notwendigkeit.'
  },
  'innovationpage.pillars.title': {
    fr: 'Pourquoi les insectes sont uniques',
    en: 'Why insects are unique',
    es: 'Por qué los insectos son únicos',
    pt: 'Por que os insetos são únicos',
    de: 'Warum Insekten einzigartig sind'
  },
  'innovationpage.pillars.subtitle': {
    fr: 'Ce n\'est pas un effet de mode. L\'innovation Keprea repose sur une réalité biologique profonde que la chimie de synthèse et les extraits végétaux ne peuvent pas égaler.',
    en: 'This isn\'t a trend. Keprea\'s innovation is built on a deep biological reality that synthetic chemistry and plant extracts cannot match.',
    es: 'No es una moda pasajera. La innovación de Keprea se basa en una realidad biológica profunda que la química de síntesis y los extractos vegetales no pueden igualar.',
    pt: 'Não é uma moda passageira. A inovação da Keprea assenta numa realidade biológica profunda que a química de síntese e os extratos vegetais não conseguem igualar.',
    de: 'Das ist kein Trend. Kepreas Innovation beruht auf einer tiefgreifenden biologischen Realität, die synthetische Chemie und Pflanzenextrakte nicht erreichen können.'
  },
  'innovationpage.pillar1.title': {
    fr: '400 millions d\'années de biochimie naturelle',
    en: '400 million years of natural biochemistry',
    es: '400 millones de años de bioquímica natural',
    pt: '400 milhões de anos de bioquímica natural',
    de: '400 Millionen Jahre natürliche Biochemie'
  },
  'innovationpage.pillar1.desc': {
    fr: 'Les insectes ont co-evolué avec les plantes depuis 400 millions d\'années. Ils ont développé des enzymes, des peptides et des acides aminés qui interagissent précisément avec les mécanismes de défense et de croissance végétales. Ces molécules sont impossibles à reproduire synthétiquement avec la même efficacité.',
    en: 'Insects have co-evolved with plants for 400 million years. They developed enzymes, peptides and amino acids that interact precisely with plant defense and growth mechanisms. These molecules are impossible to reproduce synthetically with the same effectiveness.',
    es: 'Los insectos han coevolucionado con las plantas durante 400 millones de años. Han desarrollado enzimas, péptidos y aminoácidos que interactúan con precisión con los mecanismos de defensa y crecimiento de las plantas. Estas moléculas son imposibles de reproducir sintéticamente con la misma eficacia.',
    pt: 'Os insetos coevoluíram com as plantas ao longo de 400 milhões de anos. Desenvolveram enzimas, péptidos e aminoácidos que interagem com precisão com os mecanismos de defesa e crescimento das plantas. Estas moléculas são impossíveis de reproduzir sinteticamente com a mesma eficácia.',
    de: 'Insekten haben sich über 400 Millionen Jahre gemeinsam mit Pflanzen entwickelt. Sie entwickelten Enzyme, Peptide und Aminosäuren, die präzise mit den Abwehr- und Wachstumsmechanismen der Pflanzen interagieren. Diese Moleküle lassen sich synthetisch nicht mit gleicher Wirksamkeit nachbilden.'
  },
  'innovationpage.pillar2.title': {
    fr: 'Zéro résidu chimique, zéro restriction',
    en: 'Zero chemical residue, zero restriction',
    es: 'Cero residuos químicos, cero restricciones',
    pt: 'Zero resíduos químicos, zero restrições',
    de: 'Null chemische Rückstände, keine Einschränkungen'
  },
  'innovationpage.pillar2.desc': {
    fr: 'Les biosolutions Keprea sont entièrement d\'origine naturelle. Aucun résidu toxique dans le sol, les eaux ou les récoltes. Compatibles avec les cahiers des charges bio, les certifications HVE et les exigences de la distribution.',
    en: 'Keprea biosolutions are entirely of natural origin. No toxic residue in the soil, water or harvests. Compatible with organic specifications, HVE certification and the requirements of large retailers.',
    es: 'Las biosoluciones Keprea son totalmente de origen natural. Ningún residuo tóxico en el suelo, el agua o las cosechas. Compatibles con los pliegos de condiciones ecológicos, las certificaciones HVE y las exigencias de las grandes superficies.',
    pt: 'As biosoluções Keprea são inteiramente de origem natural. Nenhum resíduo tóxico no solo, na água ou nas colheitas. Compatíveis com os cadernos de encargos biológicos, as certificações HVE e as exigências das grandes superfícies.',
    de: 'Die Biolösungen von Keprea sind vollständig natürlichen Ursprungs. Keine toxischen Rückstände in Boden, Wasser oder Ernte. Kompatibel mit Bio-Vorgaben, HVE-Zertifizierung und den Anforderungen des Einzelhandels.'
  },
  'innovationpage.pillar3.title': {
    fr: 'Efficacité prouvée sur le terrain',
    en: 'Proven field effectiveness',
    es: 'Eficacia probada en el campo',
    pt: 'Eficácia comprovada no terreno',
    de: 'Nachgewiesene Wirksamkeit im Feld'
  },
  'innovationpage.pillar3.desc': {
    fr: 'Les gammes Keprea sont développées et testées directement avec des agriculteurs. Chaque formulation est évaluée en conditions réelles avant d\'être mise sur le marché.',
    en: 'Keprea ranges are developed and tested directly with farmers. Every formulation is evaluated on real fields, under French growing conditions, before being brought to market.',
    es: 'Las gamas Keprea se desarrollan y prueban directamente con agricultores. Cada formulación se evalúa en parcelas reales, en condiciones de cultivo francesas, antes de salir al mercado.',
    pt: 'As linhas Keprea são desenvolvidas e testadas diretamente com agricultores. Cada formulação é avaliada em parcelas reais, nas condições de cultivo francesas, antes de ser colocada no mercado.',
    de: 'Die Keprea-Produktlinien werden direkt mit Landwirten entwickelt und getestet. Jede Formulierung wird vor der Markteinführung auf realen Feldern unter französischen Anbaubedingungen evaluiert.'
  },
  'innovationpage.pillar3.stat1.label': {
    fr: 'des cultures dépendent des insectes pour leur rendement',
    en: 'of crops depend on insects for their yield',
    es: 'de los cultivos dependen de los insectos para su rendimiento',
    pt: 'das culturas dependem dos insetos para o seu rendimento',
    de: 'der Kulturen sind für ihren Ertrag von Insekten abhängig'
  },
  'innovationpage.pillar3.stat2.label': {
    fr: 'espèces auxiliaires utiles recensées en France, exploitables en plein champ',
    en: 'beneficial species recorded in France, usable in the field',
    es: 'especies auxiliares útiles registradas en Francia, utilizables en campo',
    pt: 'espécies auxiliares úteis recenseadas em França, utilizáveis em campo',
    de: 'nützliche Arten in Frankreich erfasst, im Feld einsetzbar'
  },
  'innovationpage.pillar3.stat3.label': {
    fr: 'naturel, sans résidu chimique',
    en: 'natural, chemical residue-free',
    es: 'natural, sin residuos químicos',
    pt: 'natural, sem resíduos químicos',
    de: 'natürlich, ohne chemische Rückstände'
  },
  'innovationpage.cta.title': {
    fr: 'Convaincu ? Testez sur vos parcelles.',
    en: 'Convinced? Test it on your fields.',
    es: '¿Convencido? Pruébelo en sus parcelas.',
    pt: 'Convencido? Teste nas suas parcelas.',
    de: 'Überzeugt? Testen Sie es auf Ihren Feldern.'
  },
  'innovationpage.cta.desc': {
    fr: 'Nous proposons des essais terrain avec accompagnement technique. Parlez-nous de vos cultures, nous adaptons la solution.',
    en: 'We offer field trials with technical support. Tell us about your crops, we\'ll adapt the solution.',
    es: 'Ofrecemos ensayos en campo con acompañamiento técnico. Cuéntenos sobre sus cultivos, adaptamos la solución.',
    pt: 'Oferecemos ensaios de campo com acompanhamento técnico. Fale-nos das suas culturas, adaptamos a solução.',
    de: 'Wir bieten Feldversuche mit technischer Unterstützung an. Erzählen Sie uns von Ihren Kulturen, wir passen die Lösung an.'
  },
  'innovationpage.cta.primary': {
    fr: 'Voir nos solutions', en: 'See our solutions', es: 'Ver nuestras soluciones', pt: 'Ver as nossas soluções', de: 'Unsere Lösungen ansehen'
  },
  'innovationpage.cta.secondary': {
    fr: 'Demander un essai', en: 'Request a trial', es: 'Solicitar un ensayo', pt: 'Pedir um ensaio', de: 'Versuch anfragen'
  },
  // Pourquoi le biocontrôle page
  'pourquoi.hero.eyebrow': {
    fr: 'Comprendre le biocontrôle', en: 'Understanding biocontrol', es: 'Comprender el biocontrol', pt: 'Compreender o biocontrole', de: 'Biokontrolle verstehen'
  },
  'pourquoi.hero.title': {
    fr: 'Pourquoi le Biocontrôle ?', en: 'Why Biocontrol?', es: '¿Por qué el Biocontrol?', pt: 'Por que o Biocontrole?', de: 'Warum Biokontrolle?'
  },
  'pourquoi.hero.lead': {
    fr: 'Face au retrait progressif de nombreuses matières actives et aux exigences croissantes des filières et consommateurs, le biocontrôle s\'impose comme la réponse agronomique et économique durable.',
    en: 'As chemical pesticides are gradually withdrawn and supply chains and consumers demand more, biocontrol is emerging as the sustainable agronomic and economic answer.',
    es: 'Ante la retirada progresiva de los pesticidas químicos y las crecientes exigencias de las cadenas de suministro y los consumidores, el biocontrol se impone como la respuesta agronómica y económica sostenible.',
    pt: 'Face à retirada progressiva dos pesticidas químicos e às exigências crescentes das cadeias produtivas e dos consumidores, o biocontrole impõe-se como a resposta agronómica e económica sustentável.',
    de: 'Angesichts des schrittweisen Rückzugs chemischer Pestizide und der wachsenden Anforderungen von Wertschöpfungsketten und Verbrauchern etabliert sich die Biokontrolle als nachhaltige agronomische und wirtschaftliche Antwort.'
  },
  'pourquoi.hero.stat1.label': {
    fr: 'Objectif Ecophyto 2030', en: 'Ecophyto 2030 target', es: 'Objetivo Ecophyto 2030', pt: 'Objetivo Ecophyto 2030', de: 'Ziel Ecophyto 2030'
  },
  'pourquoi.hero.stat2.label': {
    fr: 'Solutions homologuées en France', en: 'Approved solutions in France', es: 'Soluciones homologadas en Francia', pt: 'Soluções homologadas em França', de: 'Zugelassene Lösungen in Frankreich'
  },
  'pourquoi.hero.stat3.label': {
    fr: 'Marché européen du biocontrôle', en: 'European biocontrol market', es: 'Mercado europeo del biocontrol', pt: 'Mercado europeu do biocontrole', de: 'Europäischer Biokontrollmarkt'
  },
  'pourquoi.def.image.alt': {
    fr: 'Coccinelle, auxiliaire de biocontrôle, sur une feuille au jardin',
    en: 'Ladybird, a biocontrol beneficial insect, on a garden leaf',
    es: 'Mariquita, insecto auxiliar de biocontrol, sobre una hoja en el jardín',
    pt: 'Joaninha, inseto auxiliar de biocontrole, numa folha no jardim',
    de: 'Marienkäfer, ein Nützling der Biokontrolle, auf einem Blatt im Garten'
  },
  'pourquoi.def.title': {
    fr: 'Qu\'est-ce que le biocontrôle ?', en: 'What is biocontrol?', es: '¿Qué es el biocontrol?', pt: 'O que é o biocontrole?', de: 'Was ist Biokontrolle?'
  },
  'pourquoi.def.intro': {
    fr: 'Le biocontrôle regroupe l\'ensemble des méthodes de protection des végétaux utilisant des mécanismes et agents naturels, en alternative aux produits phytosanitaires de synthèse.',
    en: 'Biocontrol brings together all crop protection methods that use natural mechanisms and agents, as an alternative to synthetic chemical pesticides.',
    es: 'El biocontrol reúne todos los métodos de protección de las plantas que utilizan mecanismos y agentes naturales, como alternativa a los pesticidas químicos de síntesis.',
    pt: 'O biocontrole reúne todos os métodos de proteção das plantas que utilizam mecanismos e agentes naturais, como alternativa aos pesticidas químicos de síntese.',
    de: 'Biokontrolle umfasst alle Pflanzenschutzmethoden, die natürliche Mechanismen und Wirkstoffe nutzen, als Alternative zu synthetischen chemischen Pestiziden.'
  },
  'pourquoi.def.france.title': {
    fr: 'En France', en: 'In France', es: 'En Francia', pt: 'Em França', de: 'In Frankreich'
  },
  'pourquoi.def.france.text': {
    fr: 'L\'article L.253-6 du Code rural donne une définition légale précise : les agents et produits utilisant des mécanismes naturels dans le cadre de la lutte intégrée contre les ennemis des cultures, répartis en quatre catégories détaillées ci-dessous. La liste officielle est publiée et actualisée chaque mois au Bulletin officiel du ministère de l\'Agriculture, avec ses propres procédures d\'homologation.',
    en: 'Article L.253-6 of the French Rural Code provides a precise legal definition: agents and products using natural mechanisms as part of integrated pest management, divided into the four categories detailed below. The official list is published and updated monthly in the Official Bulletin of the Ministry of Agriculture, with its own approval procedures.',
    es: 'El artículo L.253-6 del Código Rural francés ofrece una definición legal precisa: los agentes y productos que utilizan mecanismos naturales en el marco de la lucha integrada contra los enemigos de los cultivos, repartidos en cuatro categorías detalladas a continuación. La lista oficial se publica y actualiza cada mes en el Boletín Oficial del Ministerio de Agricultura, con sus propios procedimientos de homologación.',
    pt: 'O artigo L.253-6 do Código Rural francês dá uma definição legal precisa: os agentes e produtos que utilizam mecanismos naturais no âmbito da luta integrada contra os inimigos das culturas, repartidos em quatro categorias detalhadas abaixo. A lista oficial é publicada e atualizada mensalmente no Boletim Oficial do Ministério da Agricultura, com os seus próprios procedimentos de homologação.',
    de: 'Artikel L.253-6 des französischen Landwirtschaftsgesetzbuches liefert eine präzise rechtliche Definition: Wirkstoffe und Produkte, die natürliche Mechanismen im Rahmen des integrierten Pflanzenschutzes nutzen, unterteilt in die vier unten beschriebenen Kategorien. Die offizielle Liste wird monatlich im Amtsblatt des Landwirtschaftsministeriums veröffentlicht und aktualisiert, mit eigenen Zulassungsverfahren.'
  },
  'pourquoi.def.europe.title': {
    fr: 'En Europe', en: 'In Europe', es: 'En Europa', pt: 'Na Europa', de: 'In Europa'
  },
  'pourquoi.def.europe.text': {
    fr: 'Le règlement (CE) n° 1107/2009 encadre la mise sur le marché des produits phytopharmaceutiques dans toute l\'Union et introduit la notion de « substances actives à faible risque », sur laquelle s\'appuient les cadres nationaux. Chaque État membre applique ce règlement via sa propre procédure nationale d\'autorisation de mise sur le marché (AMM).',
    en: 'Regulation (EC) No 1107/2009 governs the placing on the market of plant protection products across the EU and introduces the concept of "low-risk active substances," which national frameworks build on. Each member state applies this regulation via its own national market authorization procedure.',
    es: 'El Reglamento (CE) n.º 1107/2009 regula la comercialización de los productos fitosanitarios en toda la Unión e introduce el concepto de «sustancias activas de bajo riesgo», en el que se basan los marcos nacionales. Cada Estado miembro aplica este reglamento mediante su propio procedimiento nacional de autorización de comercialización.',
    pt: 'O regulamento (CE) n.º 1107/2009 enquadra a colocação no mercado dos produtos fitofarmacêuticos em toda a União e introduz o conceito de «substâncias ativas de baixo risco», no qual se baseiam os quadros nacionais. Cada Estado-Membro aplica este regulamento através do seu próprio procedimento nacional de autorização de introdução no mercado.',
    de: 'Die Verordnung (EG) Nr. 1107/2009 regelt das Inverkehrbringen von Pflanzenschutzmitteln in der gesamten Union und führt den Begriff der „Wirkstoffe mit geringem Risiko" ein, auf dem die nationalen Rahmenwerke aufbauen. Jeder Mitgliedstaat wendet diese Verordnung über sein eigenes nationales Zulassungsverfahren an.'
  },
  'pourquoi.def.outro': {
    fr: 'Keprea développe des solutions à base d\'insectes, exploitant leurs propriétés biologiques uniques pour créer des produits efficaces, traçables et conformes aux cahiers des charges agriculture biologique (règlement (UE) 2018/848).',
    en: 'Keprea develops insect-based solutions, harnessing their unique biological properties to create products that are effective, traceable and compliant with organic farming specifications (Regulation (EU) 2018/848).',
    es: 'Keprea desarrolla soluciones a base de insectos, aprovechando sus propiedades biológicas únicas para crear productos eficaces, trazables y conformes a los pliegos de condiciones de la agricultura ecológica (Reglamento (UE) 2018/848).',
    pt: 'A Keprea desenvolve soluções à base de insetos, explorando as suas propriedades biológicas únicas para criar produtos eficazes, rastreáveis e conformes com os cadernos de encargos da agricultura biológica (regulamento (UE) 2018/848).',
    de: 'Keprea entwickelt insektenbasierte Lösungen und nutzt deren einzigartige biologische Eigenschaften, um wirksame, rückverfolgbare Produkte zu schaffen, die den Vorgaben des ökologischen Landbaus entsprechen (Verordnung (EU) 2018/848).'
  },
  'pourquoi.categories.title': {
    fr: 'Les 4 catégories reconnues par la loi', en: 'The 4 categories recognized by law', es: 'Las 4 categorías reconocidas por la ley', pt: 'As 4 categorias reconhecidas por lei', de: 'Die 4 gesetzlich anerkannten Kategorien'
  },
  'pourquoi.categories.subtitle': {
    fr: 'Le Code rural (article L.253-6) distingue quatre familles d\'agents et de produits de biocontrôle, chacune avec ses propres mécanismes d\'action — une classification qui recoupe celle utilisée par la filière au niveau européen (micro-organismes, invertébrés, médiateurs chimiques, substances naturelles, selon l\'IBMA, l\'association professionnelle du secteur en Europe).',
    en: 'The Rural Code (Article L.253-6) distinguishes four families of biocontrol agents and products, each with its own mechanisms of action — a classification that overlaps with the one used by the industry at European level (micro-organisms, invertebrates, chemical mediators, natural substances, per IBMA, the sector\'s European trade association).',
    es: 'El Código Rural (artículo L.253-6) distingue cuatro familias de agentes y productos de biocontrol, cada una con sus propios mecanismos de acción, una clasificación que coincide con la utilizada por el sector a nivel europeo (microorganismos, invertebrados, mediadores químicos, sustancias naturales, según la IBMA, la asociación profesional del sector en Europa).',
    pt: 'O Código Rural (artigo L.253-6) distingue quatro famílias de agentes e produtos de biocontrole, cada uma com os seus próprios mecanismos de ação — uma classificação que se sobrepõe à utilizada pelo setor a nível europeu (microrganismos, invertebrados, mediadores químicos, substâncias naturais, segundo a IBMA, a associação profissional do setor na Europa).',
    de: 'Das Landwirtschaftsgesetzbuch (Artikel L.253-6) unterscheidet vier Familien von Biokontroll-Wirkstoffen und -Produkten, jede mit eigenen Wirkmechanismen — eine Klassifizierung, die sich mit der auf europäischer Ebene verwendeten überschneidet (Mikroorganismen, Wirbellose, chemische Mediatoren, natürliche Substanzen, laut IBMA, dem europäischen Branchenverband).'
  },
  'pourquoi.cat1.title': {
    fr: 'Macro-organismes', en: 'Macro-organisms', es: 'Macroorganismos', pt: 'Macrorganismos', de: 'Makroorganismen'
  },
  'pourquoi.cat1.desc': {
    fr: 'Insectes, acariens ou nématodes auxiliaires introduits pour réguler les populations de ravageurs (ex. : coccinelles contre les pucerons).',
    en: 'Beneficial insects, mites or nematodes introduced to regulate pest populations (e.g. ladybugs against aphids).',
    es: 'Insectos, ácaros o nematodos auxiliares introducidos para regular las poblaciones de plagas (por ejemplo, mariquitas contra pulgones).',
    pt: 'Insetos, ácaros ou nemátodes auxiliares introduzidos para regular as populações de pragas (ex.: joaninhas contra pulgões).',
    de: 'Nützliche Insekten, Milben oder Nematoden, die zur Regulierung von Schädlingspopulationen eingesetzt werden (z. B. Marienkäfer gegen Blattläuse).'
  },
  'pourquoi.cat2.title': {
    fr: 'Micro-organismes', en: 'Micro-organisms', es: 'Microorganismos', pt: 'Microrganismos', de: 'Mikroorganismen'
  },
  'pourquoi.cat2.desc': {
    fr: 'Bactéries, champignons ou virus utilisés comme agents de lutte biologique contre les maladies et ravageurs des cultures.',
    en: 'Bacteria, fungi or viruses used as biological control agents against crop diseases and pests.',
    es: 'Bacterias, hongos o virus utilizados como agentes de control biológico contra las enfermedades y plagas de los cultivos.',
    pt: 'Bactérias, fungos ou vírus utilizados como agentes de luta biológica contra doenças e pragas das culturas.',
    de: 'Bakterien, Pilze oder Viren, die als biologische Kontrollmittel gegen Pflanzenkrankheiten und Schädlinge eingesetzt werden.'
  },
  'pourquoi.cat3.title': {
    fr: 'Médiateurs chimiques', en: 'Chemical mediators', es: 'Mediadores químicos', pt: 'Mediadores químicos', de: 'Chemische Mediatoren'
  },
  'pourquoi.cat3.desc': {
    fr: 'Phéromones et kairomones qui perturbent le comportement des ravageurs (piégeage, confusion sexuelle) sans les détruire directement.',
    en: 'Pheromones and kairomones that disrupt pest behavior (trapping, mating disruption) without directly destroying them.',
    es: 'Feromonas y cairomonas que alteran el comportamiento de las plagas (trampeo, confusión sexual) sin destruirlas directamente.',
    pt: 'Feromonas e cairomonas que perturbam o comportamento das pragas (armadilhagem, confusão sexual) sem as destruir diretamente.',
    de: 'Pheromone und Kairomone, die das Verhalten von Schädlingen stören (Fallen, Verwirrungstechnik), ohne sie direkt zu zerstören.'
  },
  'pourquoi.cat4.title': {
    fr: 'Substances naturelles', en: 'Natural substances', es: 'Sustancias naturales', pt: 'Substâncias naturais', de: 'Natürliche Substanzen'
  },
  'pourquoi.cat4.desc': {
    fr: 'D\'origine végétale, animale ou minérale, c\'est dans cette catégorie que s\'inscrivent les extraits d\'insectes développés par Keprea.',
    en: 'Of plant, animal or mineral origin — this is the category that includes the insect extracts developed by Keprea.',
    es: 'De origen vegetal, animal o mineral, en esta categoría se incluyen los extractos de insectos desarrollados por Keprea.',
    pt: 'De origem vegetal, animal ou mineral, é nesta categoria que se inserem os extratos de insetos desenvolvidos pela Keprea.',
    de: 'Pflanzlichen, tierischen oder mineralischen Ursprungs — in diese Kategorie fallen die von Keprea entwickelten Insektenextrakte.'
  },
  'pourquoi.context.title': {
    fr: 'Un contexte réglementaire et économique qui accélère, en France comme en Europe',
    en: 'A regulatory and economic context that is accelerating, in France and across Europe',
    es: 'Un contexto regulatorio y económico que se acelera, tanto en Francia como en Europa',
    pt: 'Um contexto regulamentar e económico que acelera, tanto em França como na Europa',
    de: 'Ein regulatorisches und wirtschaftliches Umfeld, das sich in Frankreich wie in Europa beschleunigt'
  },
  'pourquoi.context.subtitle': {
    fr: 'Le retrait progressif des substances actives conventionnelles et la structuration de la filière biocontrôle transforment rapidement le marché de la protection des cultures, à l\'échelle française et européenne.',
    en: 'The gradual withdrawal of conventional active substances and the structuring of the biocontrol industry are rapidly transforming the crop protection market, both in France and across Europe.',
    es: 'La retirada progresiva de las sustancias activas convencionales y la estructuración del sector del biocontrol están transformando rápidamente el mercado de la protección de cultivos, a escala francesa y europea.',
    pt: 'A retirada progressiva das substâncias ativas convencionais e a estruturação do setor do biocontrole transformam rapidamente o mercado da proteção das culturas, à escala francesa e europeia.',
    de: 'Der schrittweise Rückzug konventioneller Wirkstoffe und die Strukturierung der Biokontroll-Branche verändern rasant den Pflanzenschutzmarkt, sowohl in Frankreich als auch europaweit.'
  },
  'pourquoi.tabs.france': {
    fr: 'France', en: 'France', es: 'Francia', pt: 'França', de: 'Frankreich'
  },
  'pourquoi.tabs.europe': {
    fr: 'Europe', en: 'Europe', es: 'Europa', pt: 'Europa', de: 'Europa'
  },
  'pourquoi.tabs.ariaLabel': {
    fr: 'Périmètre des statistiques', en: 'Statistics scope', es: 'Ámbito de las estadísticas', pt: 'Âmbito das estatísticas', de: 'Umfang der Statistiken'
  },
  'pourquoi.sources.trigger': {
    fr: 'Sources et méthodologie', en: 'Sources and methodology', es: 'Fuentes y metodología', pt: 'Fontes e metodologia', de: 'Quellen und Methodik'
  },
  'pourquoi.sources.content': {
    fr: 'Chiffres tiers cités à titre indicatif, sources : agriculture.gouv.fr (stratégie Écophyto 2030, mai 2024), Alliance Biocontrôle (Baromètre du Biocontrôle 2024), Légifrance (article L.253-6 du Code rural, règlement (CE) n° 1107/2009, directive 2009/128/CE), IBMA (enquête membres 2024, marché européen du biocontrôle). Ces données évoluent chaque année ; nous les mettons à jour lors de nos revues de contenu périodiques.',
    en: 'Third-party figures cited for information purposes, sources: agriculture.gouv.fr (Ecophyto 2030 strategy, May 2024), Alliance Biocontrôle (2024 Biocontrol Barometer), Légifrance (Article L.253-6 of the Rural Code, Regulation (EC) No 1107/2009, Directive 2009/128/EC), IBMA (2024 member survey, European biocontrol market). These figures evolve every year; we update them during our periodic content reviews.',
    es: 'Cifras de terceros citadas a título indicativo, fuentes: agriculture.gouv.fr (estrategia Ecophyto 2030, mayo de 2024), Alliance Biocontrôle (Barómetro del Biocontrol 2024), Légifrance (artículo L.253-6 del Código Rural, Reglamento (CE) n.º 1107/2009, Directiva 2009/128/CE), IBMA (encuesta a miembros 2024, mercado europeo del biocontrol). Estos datos evolucionan cada año; los actualizamos durante nuestras revisiones periódicas de contenido.',
    pt: 'Dados de terceiros citados a título indicativo, fontes: agriculture.gouv.fr (estratégia Ecophyto 2030, maio de 2024), Alliance Biocontrôle (Barómetro do Biocontrole 2024), Légifrance (artigo L.253-6 do Código Rural, regulamento (CE) n.º 1107/2009, diretiva 2009/128/CE), IBMA (inquérito a membros 2024, mercado europeu do biocontrole). Estes dados evoluem todos os anos; atualizamo-los nas nossas revisões periódicas de conteúdo.',
    de: 'Drittanbieterdaten zur Information zitiert, Quellen: agriculture.gouv.fr (Ecophyto-2030-Strategie, Mai 2024), Alliance Biocontrôle (Biokontroll-Barometer 2024), Légifrance (Artikel L.253-6 des Landwirtschaftsgesetzbuchs, Verordnung (EG) Nr. 1107/2009, Richtlinie 2009/128/EG), IBMA (Mitgliederumfrage 2024, europäischer Biokontrollmarkt). Diese Daten ändern sich jährlich; wir aktualisieren sie im Rahmen unserer regelmäßigen Inhaltsprüfungen.'
  },
  'pourquoi.reasons.title': {
    fr: '3 raisons d\'adopter le biocontrôle', en: '3 reasons to adopt biocontrol', es: '3 razones para adoptar el biocontrol', pt: '3 razões para adotar o biocontrole', de: '3 Gründe für Biokontrolle'
  },
  'pourquoi.reason1.title': {
    fr: 'Conformité réglementaire', en: 'Regulatory compliance', es: 'Cumplimiento normativo', pt: 'Conformidade regulamentar', de: 'Regulatorische Konformität'
  },
  'pourquoi.reason1.desc': {
    fr: 'Règlement européen (CE) 1107/2009, plan Ecophyto 2030, retrait des substances actives critiques, exigences HVE et AB : le biocontrôle sécurise votre conformité aujourd\'hui et demain, en France comme dans le reste de l\'UE.',
    en: 'EU Regulation (EC) 1107/2009, the Ecophyto 2030 plan, the withdrawal of critical active substances, HVE and organic requirements: biocontrol secures your compliance today and tomorrow, in France and across the rest of the EU.',
    es: 'Reglamento europeo (CE) 1107/2009, plan Ecophyto 2030, retirada de sustancias activas críticas, exigencias HVE y AB: el biocontrol asegura su cumplimiento hoy y mañana, tanto en Francia como en el resto de la UE.',
    pt: 'Regulamento europeu (CE) 1107/2009, plano Ecophyto 2030, retirada de substâncias ativas críticas, exigências HVE e AB: o biocontrole assegura a sua conformidade hoje e amanhã, tanto em França como no resto da UE.',
    de: 'EU-Verordnung (EG) 1107/2009, Ecophyto-2030-Plan, Rückzug kritischer Wirkstoffe, HVE- und Bio-Anforderungen: Biokontrolle sichert Ihre Konformität heute und morgen, in Frankreich wie im Rest der EU.'
  },
  'pourquoi.reason2.title': {
    fr: 'Valeur commerciale', en: 'Commercial value', es: 'Valor comercial', pt: 'Valor comercial', de: 'Kommerzieller Wert'
  },
  'pourquoi.reason2.desc': {
    fr: 'Les filières premium, grande distribution et export exigent des preuves de pratiques durables. Le biocontrôle est un argument de vente concret.',
    en: 'Premium supply chains, large retailers and export markets demand proof of sustainable practices. Biocontrol is a concrete selling point.',
    es: 'Las cadenas premium, la gran distribución y la exportación exigen pruebas de prácticas sostenibles. El biocontrol es un argumento de venta concreto.',
    pt: 'As cadeias premium, a grande distribuição e a exportação exigem provas de práticas sustentáveis. O biocontrole é um argumento de venda concreto.',
    de: 'Premium-Wertschöpfungsketten, der Großhandel und der Export verlangen Nachweise nachhaltiger Praktiken. Biokontrolle ist ein konkretes Verkaufsargument.'
  },
  'pourquoi.reason3.title': {
    fr: 'Agronomie durable', en: 'Sustainable agronomy', es: 'Agronomía sostenible', pt: 'Agronomia sustentável', de: 'Nachhaltige Agronomie'
  },
  'pourquoi.reason3.desc': {
    fr: 'Préservation des auxiliaires naturels, maintien de la biodiversité du sol, réduction des résidus sur les productions : des bénéfices mesurables long terme.',
    en: 'Preservation of natural predators, maintenance of soil biodiversity, reduced residues on crops: measurable long-term benefits.',
    es: 'Preservación de los auxiliares naturales, mantenimiento de la biodiversidad del suelo, reducción de residuos en las producciones: beneficios medibles a largo plazo.',
    pt: 'Preservação dos auxiliares naturais, manutenção da biodiversidade do solo, redução de resíduos nas produções: benefícios mensuráveis a longo prazo.',
    de: 'Erhaltung natürlicher Nützlinge, Erhalt der Bodenbiodiversität, Reduzierung von Rückständen auf den Ernten: messbare langfristige Vorteile.'
  },
  'pourquoi.approach.title': {
    fr: 'L\'approche Keprea', en: 'The Keprea approach', es: 'El enfoque de Keprea', pt: 'A abordagem Keprea', de: 'Der Keprea-Ansatz'
  },
  'pourquoi.approach1.title': {
    fr: 'Matière première insecte', en: 'Insect raw material', es: 'Materia prima de insectos', pt: 'Matéria-prima de insetos', de: 'Rohstoff Insekt'
  },
  'pourquoi.approach1.desc': {
    fr: 'Nos insectes sont élevés dans des conditions contrôlées garantissant la traçabilité et la qualité constante de nos extraits.',
    en: 'Our insects are raised under controlled conditions that guarantee traceability and consistent quality of our extracts.',
    es: 'Nuestros insectos se crían en condiciones controladas que garantizan la trazabilidad y la calidad constante de nuestros extractos.',
    pt: 'Os nossos insetos são criados em condições controladas que garantem a rastreabilidade e a qualidade constante dos nossos extratos.',
    de: 'Unsere Insekten werden unter kontrollierten Bedingungen gezüchtet, die die Rückverfolgbarkeit und gleichbleibende Qualität unserer Extrakte gewährleisten.'
  },
  'pourquoi.approach2.title': {
    fr: 'Extraction innovante', en: 'Innovative extraction', es: 'Extracción innovadora', pt: 'Extração inovadora', de: 'Innovative Extraktion'
  },
  'pourquoi.approach2.desc': {
    fr: 'Nos procédés d\'extraction préservent les molécules actives : peptides antimicrobiens, chitine, acides aminés. Une technologie propriétaire développée en France.',
    en: 'Our extraction processes preserve the active molecules: antimicrobial peptides, chitin, amino acids. A proprietary technology developed in France.',
    es: 'Nuestros procesos de extracción preservan las moléculas activas: péptidos antimicrobianos, quitina, aminoácidos. Una tecnología patentada desarrollada en Francia.',
    pt: 'Os nossos processos de extração preservam as moléculas ativas: péptidos antimicrobianos, quitina, aminoácidos. Uma tecnologia proprietária desenvolvida em França.',
    de: 'Unsere Extraktionsverfahren erhalten die aktiven Moleküle: antimikrobielle Peptide, Chitin, Aminosäuren. Eine in Frankreich entwickelte proprietäre Technologie.'
  },
  'pourquoi.approach3.title': {
    fr: 'Formulations adaptées', en: 'Tailored formulations', es: 'Formulaciones adaptadas', pt: 'Formulações adaptadas', de: 'Angepasste Formulierungen'
  },
  'pourquoi.approach3.desc': {
    fr: 'Chaque produit est formulé pour une application terrain optimale : miscibilité eau, stabilité en conditions agricoles, compatibilité avec d\'autres intrants.',
    en: 'Each product is formulated for optimal field application: water miscibility, stability under agricultural conditions, compatibility with other inputs.',
    es: 'Cada producto está formulado para una aplicación óptima en campo: miscibilidad con agua, estabilidad en condiciones agrícolas, compatibilidad con otros insumos.',
    pt: 'Cada produto é formulado para uma aplicação ótima no terreno: miscibilidade em água, estabilidade em condições agrícolas, compatibilidade com outros insumos.',
    de: 'Jedes Produkt ist für die optimale Anwendung im Feld formuliert: Wassermischbarkeit, Stabilität unter landwirtschaftlichen Bedingungen, Kompatibilität mit anderen Betriebsmitteln.'
  },
  'pourquoi.approach4.title': {
    fr: 'Homologations & cahiers des charges', en: 'Approvals & specifications', es: 'Homologaciones y pliegos de condiciones', pt: 'Homologações e cadernos de encargos', de: 'Zulassungen & Vorgaben'
  },
  'pourquoi.approach4.desc': {
    fr: 'Nos produits répondent aux exigences de l\'agriculture biologique (norme UE 2018/848) et sont développés dans le respect des bonnes pratiques phytosanitaires.',
    en: 'Our products meet organic farming requirements (EU standard 2018/848) and are developed in accordance with good plant health practices.',
    es: 'Nuestros productos cumplen los requisitos de la agricultura ecológica (norma UE 2018/848) y se desarrollan respetando las buenas prácticas fitosanitarias.',
    pt: 'Os nossos produtos respondem às exigências da agricultura biológica (norma UE 2018/848) e são desenvolvidos no respeito das boas práticas fitossanitárias.',
    de: 'Unsere Produkte erfüllen die Anforderungen des ökologischen Landbaus (EU-Norm 2018/848) und werden unter Einhaltung guter Pflanzenschutzpraxis entwickelt.'
  },
  'pourquoi.approach5.title': {
    fr: 'Application en plein champ', en: 'Open-field application', es: 'Aplicación en campo abierto', pt: 'Aplicação em pleno campo', de: 'Anwendung im freien Feld'
  },
  'pourquoi.approach5.desc': {
    fr: 'Au-delà de la production, Keprea développe des solutions d\'application pensées pour le plein champ, notamment par pulvérisation, afin de rendre compétitive l\'utilisation des insectes auxiliaires et des extraits d\'insectes à l\'échelle de l\'exploitation agricole.',
    en: 'Beyond production, Keprea develops application solutions designed for the open field, particularly by spraying, to make the use of beneficial insects and insect extracts competitive at the farm scale.',
    es: 'Más allá de la producción, Keprea desarrolla soluciones de aplicación pensadas para el campo abierto, en particular por pulverización, para hacer competitiva la utilización de insectos auxiliares y extractos de insectos a escala de la explotación agrícola.',
    pt: 'Para além da produção, a Keprea desenvolve soluções de aplicação pensadas para o pleno campo, nomeadamente por pulverização, de modo a tornar competitiva a utilização de insetos auxiliares e extratos de insetos à escala da exploração agrícola.',
    de: 'Über die Produktion hinaus entwickelt Keprea Anwendungslösungen für das freie Feld, insbesondere durch Sprühverfahren, um den Einsatz von Nützlingen und Insektenextrakten auf Betriebsebene wettbewerbsfähig zu machen.'
  },
  'pourquoi.faq.title': {
    fr: 'Questions fréquentes', en: 'Frequently asked questions', es: 'Preguntas frecuentes', pt: 'Perguntas frequentes', de: 'Häufig gestellte Fragen'
  },
  'pourquoi.cta.title': {
    fr: 'Prêt à passer au biocontrôle ?', en: 'Ready to switch to biocontrol?', es: '¿Listo para pasarse al biocontrol?', pt: 'Pronto para passar ao biocontrole?', de: 'Bereit für den Wechsel zur Biokontrolle?'
  },
  'pourquoi.cta.desc': {
    fr: 'Découvrez nos gammes de solutions ou contactez-nous pour un conseil personnalisé.',
    en: 'Discover our range of solutions or contact us for personalized advice.',
    es: 'Descubra nuestras gamas de soluciones o contáctenos para un asesoramiento personalizado.',
    pt: 'Descubra as nossas linhas de soluções ou contacte-nos para um aconselhamento personalizado.',
    de: 'Entdecken Sie unsere Lösungspalette oder kontaktieren Sie uns für eine persönliche Beratung.'
  },
  'pourquoi.franceStat1.desc': {
    fr: 'Objectif de réduction de l\'usage et des risques des produits phytopharmaceutiques fixé par la stratégie Ecophyto 2030 d\'ici 2030, par rapport à la moyenne 2011-2013 — la déclinaison française de la directive européenne 2009/128/CE sur l\'utilisation durable des pesticides (stratégie publiée le 6 mai 2024).',
    en: 'Target reduction in the use and risks of plant protection products set by the Ecophyto 2030 strategy by 2030, compared to the 2011-2013 average — the French implementation of European Directive 2009/128/EC on the sustainable use of pesticides (strategy published on 6 May 2024).',
    es: 'Objetivo de reducción del uso y los riesgos de los productos fitosanitarios fijado por la estrategia Ecophyto 2030 de aquí a 2030, con respecto a la media 2011-2013 — la aplicación francesa de la directiva europea 2009/128/CE sobre el uso sostenible de los pesticidas (estrategia publicada el 6 de mayo de 2024).',
    pt: 'Objetivo de redução do uso e dos riscos dos produtos fitofarmacêuticos fixado pela estratégia Ecophyto 2030 até 2030, em relação à média de 2011-2013 — a transposição francesa da diretiva europeia 2009/128/CE sobre a utilização sustentável dos pesticidas (estratégia publicada em 6 de maio de 2024).',
    de: 'Ziel zur Reduzierung von Einsatz und Risiken von Pflanzenschutzmitteln, festgelegt durch die Ecophyto-2030-Strategie bis 2030, im Vergleich zum Durchschnitt 2011-2013 — die französische Umsetzung der europäischen Richtlinie 2009/128/EG zur nachhaltigen Nutzung von Pestiziden (Strategie veröffentlicht am 6. Mai 2024).'
  },
  'pourquoi.franceStat2.desc': {
    fr: 'Baisse déjà constatée de l\'usage des produits phytopharmaceutiques de synthèse en 2022 par rapport à la moyenne 2015-2017, première baisse depuis 2009 (données Ecophyto II+).',
    en: 'Decrease already observed in the use of synthetic plant protection products in 2022 compared to the 2015-2017 average, the first decrease since 2009 (Ecophyto II+ data).',
    es: 'Disminución ya constatada del uso de productos fitosanitarios de síntesis en 2022 con respecto a la media 2015-2017, primera disminución desde 2009 (datos Ecophyto II+).',
    pt: 'Diminuição já constatada do uso de produtos fitofarmacêuticos de síntese em 2022 em relação à média de 2015-2017, primeira diminuição desde 2009 (dados Ecophyto II+).',
    de: 'Bereits festgestellter Rückgang der Nutzung synthetischer Pflanzenschutzmittel im Jahr 2022 im Vergleich zum Durchschnitt 2015-2017, der erste Rückgang seit 2009 (Daten Ecophyto II+).'
  },
  'pourquoi.franceStat3.desc': {
    fr: 'Produits de biocontrôle homologués en France en janvier 2025, couvrant 56 % des usages phytosanitaires (source : ministère de l\'Agriculture).',
    en: 'Biocontrol products approved in France as of January 2025, covering 56% of plant protection uses (source: Ministry of Agriculture).',
    es: 'Productos de biocontrol homologados en Francia en enero de 2025, que cubren el 56 % de los usos fitosanitarios (fuente: Ministerio de Agricultura).',
    pt: 'Produtos de biocontrole homologados em França em janeiro de 2025, cobrindo 56 % dos usos fitossanitários (fonte: Ministério da Agricultura).',
    de: 'In Frankreich im Januar 2025 zugelassene Biokontrollprodukte, die 56 % der Pflanzenschutzanwendungen abdecken (Quelle: Landwirtschaftsministerium).'
  },
  'pourquoi.franceStat4.desc': {
    fr: 'Part de marché visée par la filière biocontrôle en France à l\'horizon 2030, contre environ 12 % en 2024 (Baromètre du Biocontrôle, Alliance Biocontrôle, 2025).',
    en: 'Market share targeted by the biocontrol industry in France by 2030, compared to around 12% in 2024 (Biocontrol Barometer, Alliance Biocontrôle, 2025).',
    es: 'Cuota de mercado prevista para el sector del biocontrol en Francia de aquí a 2030, frente al 12 % aproximadamente en 2024 (Barómetro del Biocontrol, Alliance Biocontrôle, 2025).',
    pt: 'Quota de mercado visada pelo setor do biocontrole em França até 2030, contra cerca de 12 % em 2024 (Barómetro do Biocontrole, Alliance Biocontrôle, 2025).',
    de: 'Angestrebter Marktanteil der Biokontroll-Branche in Frankreich bis 2030, gegenüber rund 12 % im Jahr 2024 (Biokontroll-Barometer, Alliance Biocontrôle, 2025).'
  },
  'pourquoi.europeStat1.desc': {
    fr: 'Valeur du marché européen du biocontrôle en 2023, soit près de 10 % du marché européen de la protection des cultures (source : IBMA, association professionnelle européenne du secteur, enquête membres 2024).',
    en: 'Value of the European biocontrol market in 2023, or nearly 10% of the European crop protection market (source: IBMA, the sector\'s European trade association, 2024 member survey).',
    es: 'Valor del mercado europeo del biocontrol en 2023, es decir, cerca del 10 % del mercado europeo de la protección de cultivos (fuente: IBMA, asociación profesional europea del sector, encuesta a miembros 2024).',
    pt: 'Valor do mercado europeu do biocontrole em 2023, ou seja, cerca de 10 % do mercado europeu da proteção das culturas (fonte: IBMA, associação profissional europeia do setor, inquérito a membros 2024).',
    de: 'Wert des europäischen Biokontrollmarkts im Jahr 2023, das entspricht fast 10 % des europäischen Pflanzenschutzmarkts (Quelle: IBMA, der europäische Branchenverband, Mitgliederumfrage 2024).'
  },
  'pourquoi.europeStat2.desc': {
    fr: 'Croissance annuelle du marché européen du biocontrôle, contre environ 4 % par an pour le marché conventionnel de la protection des cultures (source : IBMA, 2024).',
    en: 'Annual growth of the European biocontrol market, compared to around 4% per year for the conventional crop protection market (source: IBMA, 2024).',
    es: 'Crecimiento anual del mercado europeo del biocontrol, frente a aproximadamente el 4 % anual del mercado convencional de protección de cultivos (fuente: IBMA, 2024).',
    pt: 'Crescimento anual do mercado europeu do biocontrole, contra cerca de 4 % ao ano para o mercado convencional de proteção das culturas (fonte: IBMA, 2024).',
    de: 'Jährliches Wachstum des europäischen Biokontrollmarkts, verglichen mit rund 4 % pro Jahr beim konventionellen Pflanzenschutzmarkt (Quelle: IBMA, 2024).'
  },
  'pourquoi.faq1.q': {
    fr: 'Qu\'est-ce que le biocontrôle, au sens de la loi française ?',
    en: 'What is biocontrol, under French law?',
    es: '¿Qué es el biocontrol, en el sentido de la ley francesa?',
    pt: 'O que é o biocontrole, na aceção da lei francesa?',
    de: 'Was ist Biokontrolle im Sinne des französischen Rechts?'
  },
  'pourquoi.faq1.a': {
    fr: 'L\'article L.253-6 du Code rural définit les produits de biocontrôle comme l\'ensemble des agents et produits utilisant des mécanismes naturels dans le cadre de la lutte intégrée contre les ennemis des cultures. Quatre catégories sont reconnues : les macro-organismes auxiliaires, les micro-organismes, les médiateurs chimiques (phéromones, kairomones) et les substances naturelles d\'origine végétale, animale ou minérale. La liste officielle des produits de biocontrôle est publiée et mise à jour chaque mois au Bulletin officiel du ministère de l\'Agriculture.',
    en: 'Article L.253-6 of the Rural Code defines biocontrol products as all agents and products using natural mechanisms as part of integrated pest management. Four categories are recognized: beneficial macro-organisms, micro-organisms, chemical mediators (pheromones, kairomones), and natural substances of plant, animal or mineral origin. The official list of biocontrol products is published and updated monthly in the Official Bulletin of the Ministry of Agriculture.',
    es: 'El artículo L.253-6 del Código Rural define los productos de biocontrol como el conjunto de agentes y productos que utilizan mecanismos naturales en el marco de la lucha integrada contra los enemigos de los cultivos. Se reconocen cuatro categorías: los macroorganismos auxiliares, los microorganismos, los mediadores químicos (feromonas, cairomonas) y las sustancias naturales de origen vegetal, animal o mineral. La lista oficial de productos de biocontrol se publica y actualiza cada mes en el Boletín Oficial del Ministerio de Agricultura.',
    pt: 'O artigo L.253-6 do Código Rural define os produtos de biocontrole como o conjunto de agentes e produtos que utilizam mecanismos naturais no âmbito da luta integrada contra os inimigos das culturas. São reconhecidas quatro categorias: os macrorganismos auxiliares, os microrganismos, os mediadores químicos (feromonas, cairomonas) e as substâncias naturais de origem vegetal, animal ou mineral. A lista oficial dos produtos de biocontrole é publicada e atualizada mensalmente no Boletim Oficial do Ministério da Agricultura.',
    de: 'Artikel L.253-6 des Landwirtschaftsgesetzbuches definiert Biokontrollprodukte als alle Wirkstoffe und Produkte, die natürliche Mechanismen im Rahmen des integrierten Pflanzenschutzes nutzen. Vier Kategorien werden anerkannt: nützliche Makroorganismen, Mikroorganismen, chemische Mediatoren (Pheromone, Kairomone) und natürliche Substanzen pflanzlichen, tierischen oder mineralischen Ursprungs. Die offizielle Liste der Biokontrollprodukte wird monatlich im Amtsblatt des Landwirtschaftsministeriums veröffentlicht und aktualisiert.'
  },
  'pourquoi.faq2.q': {
    fr: 'Le biocontrôle est-il aussi efficace que les produits phytosanitaires classiques ?',
    en: 'Is biocontrol as effective as conventional plant protection products?',
    es: '¿Es el biocontrol tan eficaz como los productos fitosanitarios convencionales?',
    pt: 'O biocontrole é tão eficaz como os produtos fitossanitários convencionais?',
    de: 'Ist Biokontrolle genauso wirksam wie herkömmliche Pflanzenschutzmittel?'
  },
  'pourquoi.faq2.a': {
    fr: 'L\'efficacité dépend du couple bioagresseur/culture et du positionnement dans l\'itinéraire technique : le biocontrôle agit le plus souvent en prévention ou en curatif précoce, avec une fenêtre d\'application différente de celle des produits chimiques de synthèse. Utilisé au bon moment et en combinaison avec d\'autres leviers agronomiques (rotation, auxiliaires, prophylaxie), il constitue une alternative crédible, en particulier là où les substances actives conventionnelles disparaissent du marché.',
    en: 'Effectiveness depends on the pest/crop pairing and its position in the crop management schedule: biocontrol most often acts preventively or in early curative treatment, with a different application window than synthetic chemical products. Used at the right time and combined with other agronomic levers (rotation, beneficials, prophylaxis), it constitutes a credible alternative, particularly where conventional active substances are disappearing from the market.',
    es: 'La eficacia depende del binomio bioagresor/cultivo y de su posicionamiento en el itinerario técnico: el biocontrol actúa la mayoría de las veces en prevención o en curativo temprano, con una ventana de aplicación diferente a la de los productos químicos de síntesis. Utilizado en el momento adecuado y combinado con otras palancas agronómicas (rotación, auxiliares, profilaxis), constituye una alternativa creíble, en particular allí donde las sustancias activas convencionales desaparecen del mercado.',
    pt: 'A eficácia depende do binómio bioagressor/cultura e do posicionamento no itinerário técnico: o biocontrole atua na maioria das vezes em prevenção ou em curativo precoce, com uma janela de aplicação diferente da dos produtos químicos de síntese. Utilizado no momento certo e combinado com outras alavancas agronómicas (rotação, auxiliares, profilaxia), constitui uma alternativa credível, em particular onde as substâncias ativas convencionais desaparecem do mercado.',
    de: 'Die Wirksamkeit hängt vom Schädling-Kultur-Paar und der Position im Anbauplan ab: Biokontrolle wirkt meist präventiv oder frühkurativ, mit einem anderen Anwendungsfenster als synthetische Chemikalien. Zum richtigen Zeitpunkt eingesetzt und mit anderen agronomischen Hebeln kombiniert (Fruchtfolge, Nützlinge, Prophylaxe), stellt sie eine glaubwürdige Alternative dar, besonders dort, wo konventionelle Wirkstoffe vom Markt verschwinden.'
  },
  'pourquoi.faq3.q': {
    fr: 'Le biocontrôle est-il autorisé en agriculture biologique ?',
    en: 'Is biocontrol permitted in organic farming?',
    es: '¿Está autorizado el biocontrol en la agricultura ecológica?',
    pt: 'O biocontrole é autorizado na agricultura biológica?',
    de: 'Ist Biokontrolle im ökologischen Landbau erlaubt?'
  },
  'pourquoi.faq3.a': {
    fr: 'La majorité des produits de biocontrôle sont compatibles avec le règlement (UE) 2018/848 relatif à la production biologique, sous réserve de vérifier l\'inscription de chaque produit à l\'annexe correspondante et son autorisation de mise sur le marché (AMM) en France. Les solutions Keprea sont développées pour répondre à ces exigences ; nous recommandons systématiquement de vérifier la compatibilité avec votre organisme certificateur avant emploi.',
    en: 'Most biocontrol products are compatible with Regulation (EU) 2018/848 on organic production, subject to checking each product\'s listing in the relevant annex and its market authorization (AMM) in France. Keprea solutions are developed to meet these requirements; we always recommend checking compatibility with your certification body before use.',
    es: 'La mayoría de los productos de biocontrol son compatibles con el Reglamento (UE) 2018/848 relativo a la producción ecológica, siempre que se verifique la inscripción de cada producto en el anexo correspondiente y su autorización de comercialización (AMM) en Francia. Las soluciones Keprea se desarrollan para cumplir estos requisitos; recomendamos sistemáticamente verificar la compatibilidad con su organismo certificador antes de su uso.',
    pt: 'A maioria dos produtos de biocontrole são compatíveis com o regulamento (UE) 2018/848 relativo à produção biológica, sob reserva de verificar a inscrição de cada produto no anexo correspondente e a sua autorização de introdução no mercado (AMM) em França. As soluções Keprea são desenvolvidas para responder a essas exigências; recomendamos sistematicamente verificar a compatibilidade com o seu organismo certificador antes da utilização.',
    de: 'Die meisten Biokontrollprodukte sind mit der Verordnung (EU) 2018/848 über die ökologische Produktion vereinbar, vorbehaltlich der Prüfung der Eintragung jedes Produkts im entsprechenden Anhang und seiner Marktzulassung (AMM) in Frankreich. Keprea-Lösungen werden entwickelt, um diese Anforderungen zu erfüllen; wir empfehlen grundsätzlich, die Kompatibilität vor der Verwendung mit Ihrer Zertifizierungsstelle zu prüfen.'
  },
  'pourquoi.faq4.q': {
    fr: 'Pourquoi utiliser des insectes comme matière première en biocontrôle ?',
    en: 'Why use insects as a raw material in biocontrol?',
    es: '¿Por qué utilizar insectos como materia prima en biocontrol?',
    pt: 'Por que utilizar insetos como matéria-prima no biocontrole?',
    de: 'Warum Insekten als Rohstoff in der Biokontrolle verwenden?'
  },
  'pourquoi.faq4.a': {
    fr: 'Les insectes comme Hermetia illucens (mouche soldat noire) ou les vers de farine produisent naturellement des molécules de défense (peptides antimicrobiens, chitine, acides aminés) développées au cours de leur évolution pour résister à leurs propres agresseurs (bactéries, champignons). L\'élevage contrôlé permet d\'obtenir une matière première standardisée, traçable et disponible toute l\'année, contrairement à certaines ressources végétales soumises aux aléas de récolte.',
    en: 'Insects such as Hermetia illucens (black soldier fly) or mealworms naturally produce defense molecules (antimicrobial peptides, chitin, amino acids) developed over the course of their evolution to resist their own aggressors (bacteria, fungi). Controlled rearing makes it possible to obtain a standardized, traceable raw material available year-round, unlike certain plant resources subject to harvest variability.',
    es: 'Insectos como Hermetia illucens (mosca soldado negra) o los gusanos de la harina producen de forma natural moléculas de defensa (péptidos antimicrobianos, quitina, aminoácidos) desarrolladas a lo largo de su evolución para resistir a sus propios agresores (bacterias, hongos). La cría controlada permite obtener una materia prima estandarizada, trazable y disponible todo el año, a diferencia de ciertos recursos vegetales sujetos a los avatares de la cosecha.',
    pt: 'Insetos como Hermetia illucens (mosca-soldado-negra) ou as larvas-da-farinha produzem naturalmente moléculas de defesa (péptidos antimicrobianos, quitina, aminoácidos) desenvolvidas ao longo da sua evolução para resistir aos seus próprios agressores (bactérias, fungos). A criação controlada permite obter uma matéria-prima padronizada, rastreável e disponível durante todo o ano, ao contrário de certos recursos vegetais sujeitos às vicissitudes das colheitas.',
    de: 'Insekten wie Hermetia illucens (Schwarze Soldatenfliege) oder Mehlwürmer produzieren natürlich Abwehrmoleküle (antimikrobielle Peptide, Chitin, Aminosäuren), die sich im Laufe ihrer Evolution entwickelt haben, um ihren eigenen Angreifern (Bakterien, Pilzen) zu widerstehen. Die kontrollierte Zucht ermöglicht einen standardisierten, rückverfolgbaren und ganzjährig verfügbaren Rohstoff, im Gegensatz zu bestimmten pflanzlichen Ressourcen, die von Ernteschwankungen abhängen.'
  },
  'pourquoi.faq5.q': {
    fr: 'Le biocontrôle est-il reconnu au niveau européen, ou seulement en France ?',
    en: 'Is biocontrol recognized at the European level, or only in France?',
    es: '¿Está reconocido el biocontrol a nivel europeo, o solo en Francia?',
    pt: 'O biocontrole é reconhecido a nível europeu, ou apenas em França?',
    de: 'Ist Biokontrolle auf europäischer Ebene anerkannt, oder nur in Frankreich?'
  },
  'pourquoi.faq5.a': {
    fr: 'Le biocontrôle en tant que catégorie juridique nommée est une spécificité française (article L.253-6 du Code rural), mais le principe repose sur un socle européen commun : le règlement (CE) n° 1107/2009 encadre la mise sur le marché des produits phytopharmaceutiques dans toute l\'Union et définit les substances actives à faible risque, sur lesquelles s\'appuient les cadres nationaux. La filière professionnelle européenne (IBMA) utilise une classification proche de celle du droit français (micro-organismes, invertébrés, médiateurs chimiques, substances naturelles), et le marché européen du biocontrôle représentait 1,6 milliard d\'euros en 2023, avec une croissance annuelle d\'environ 10 %.',
    en: 'Biocontrol as a named legal category is a French specificity (Article L.253-6 of the Rural Code), but the principle rests on a common European foundation: Regulation (EC) No 1107/2009 governs the placing on the market of plant protection products across the Union and defines low-risk active substances, on which national frameworks are based. The European professional sector (IBMA) uses a classification close to that of French law (micro-organisms, invertebrates, chemical mediators, natural substances), and the European biocontrol market was worth €1.6 billion in 2023, with annual growth of around 10%.',
    es: 'El biocontrol como categoría jurídica con nombre propio es una especificidad francesa (artículo L.253-6 del Código Rural), pero el principio se basa en un fundamento europeo común: el Reglamento (CE) n.º 1107/2009 regula la comercialización de los productos fitosanitarios en toda la Unión y define las sustancias activas de bajo riesgo, en las que se basan los marcos nacionales. El sector profesional europeo (IBMA) utiliza una clasificación cercana a la del derecho francés (microorganismos, invertebrados, mediadores químicos, sustancias naturales), y el mercado europeo del biocontrol representaba 1.600 millones de euros en 2023, con un crecimiento anual de aproximadamente el 10 %.',
    pt: 'O biocontrole como categoria jurídica nomeada é uma especificidade francesa (artigo L.253-6 do Código Rural), mas o princípio assenta numa base europeia comum: o regulamento (CE) n.º 1107/2009 enquadra a colocação no mercado dos produtos fitofarmacêuticos em toda a União e define as substâncias ativas de baixo risco, nas quais se baseiam os quadros nacionais. O setor profissional europeu (IBMA) utiliza uma classificação próxima da do direito francês (microrganismos, invertebrados, mediadores químicos, substâncias naturais), e o mercado europeu do biocontrole representava 1,6 mil milhões de euros em 2023, com um crescimento anual de cerca de 10 %.',
    de: 'Biokontrolle als benannte Rechtskategorie ist eine französische Besonderheit (Artikel L.253-6 des Landwirtschaftsgesetzbuches), aber das Prinzip beruht auf einer gemeinsamen europäischen Grundlage: Die Verordnung (EG) Nr. 1107/2009 regelt das Inverkehrbringen von Pflanzenschutzmitteln in der gesamten Union und definiert Wirkstoffe mit geringem Risiko, auf denen die nationalen Rahmenwerke basieren. Der europäische Fachverband (IBMA) verwendet eine dem französischen Recht ähnliche Klassifizierung (Mikroorganismen, Wirbellose, chemische Mediatoren, natürliche Substanzen), und der europäische Biokontrollmarkt hatte 2023 einen Wert von 1,6 Milliarden Euro, bei einem jährlichen Wachstum von rund 10 %.'
  },
  'pourquoi.faq6.q': {
    fr: 'Quelle est la différence entre biocontrôle, biostimulant et biofertilisant ?',
    en: 'What is the difference between biocontrol, biostimulant and biofertilizer?',
    es: '¿Cuál es la diferencia entre biocontrol, bioestimulante y biofertilizante?',
    pt: 'Qual é a diferença entre biocontrole, bioestimulante e biofertilizante?',
    de: 'Was ist der Unterschied zwischen Biokontrolle, Biostimulans und Biodünger?'
  },
  'pourquoi.faq6.a': {
    fr: 'Le biocontrôle vise la protection des cultures contre les bioagresseurs (insectes ravageurs, champignons pathogènes). Le biostimulant améliore la nutrition, la tolérance au stress abiotique ou les caractéristiques qualitatives de la culture, sans action directe contre les bioagresseurs. Le biofertilisant apporte ou améliore la disponibilité des éléments nutritifs. Les trois catégories relèvent de cadres réglementaires distincts, et une même gamme de produits peut combiner plusieurs de ces fonctions.',
    en: 'Biocontrol aims to protect crops against pests (insect pests, pathogenic fungi). Biostimulants improve nutrition, tolerance to abiotic stress, or the qualitative characteristics of the crop, without direct action against pests. Biofertilizers provide or improve the availability of nutrients. The three categories fall under distinct regulatory frameworks, and the same product range can combine several of these functions.',
    es: 'El biocontrol tiene como objetivo la protección de los cultivos contra los bioagresores (insectos plaga, hongos patógenos). El bioestimulante mejora la nutrición, la tolerancia al estrés abiótico o las características cualitativas del cultivo, sin acción directa contra los bioagresores. El biofertilizante aporta o mejora la disponibilidad de los elementos nutritivos. Las tres categorías dependen de marcos regulatorios distintos, y una misma gama de productos puede combinar varias de estas funciones.',
    pt: 'O biocontrole visa a proteção das culturas contra os bioagressores (insetos-praga, fungos patogénicos). O bioestimulante melhora a nutrição, a tolerância ao stress abiótico ou as características qualitativas da cultura, sem ação direta contra os bioagressores. O biofertilizante fornece ou melhora a disponibilidade dos elementos nutritivos. As três categorias dependem de quadros regulamentares distintos, e a mesma linha de produtos pode combinar várias destas funções.',
    de: 'Biokontrolle zielt auf den Schutz von Kulturen vor Schädlingen ab (Schadinsekten, pathogene Pilze). Biostimulanzien verbessern die Ernährung, die Toleranz gegenüber abiotischem Stress oder die qualitativen Eigenschaften der Kultur, ohne direkte Wirkung gegen Schädlinge. Biodünger liefern oder verbessern die Verfügbarkeit von Nährstoffen. Die drei Kategorien unterliegen unterschiedlichen regulatorischen Rahmenwerken, und dieselbe Produktreihe kann mehrere dieser Funktionen kombinieren.'
  },
  // BiocontroleVivant page (bv.*)
  'bv.principle': {
    fr: 'Le principe : nous élevons des insectes prédateurs naturels que vous libérez sur vos parcelles. Ils chassent et éliminent les ravageurs cibles : sans intervention chimique, sans résidu, sans développement de résistance.',
    en: 'The principle: we raise natural predator insects that you release on your fields. They hunt and eliminate target pests: no chemical intervention, no residue, no resistance build-up.',
    es: 'El principio: criamos insectos depredadores naturales que usted libera en sus parcelas. Cazan y eliminan las plagas objetivo: sin intervención química, sin residuos, sin desarrollo de resistencias.',
    pt: 'O princípio: criamos insetos predadores naturais que liberta nas suas parcelas. Eles caçam e eliminam as pragas-alvo: sem intervenção química, sem resíduos, sem desenvolvimento de resistências.',
    de: 'Das Prinzip: Wir züchten natürliche Raubinsekten, die Sie auf Ihren Feldern freisetzen. Sie jagen und eliminieren Zielschädlinge: ohne chemischen Eingriff, ohne Rückstände, ohne Resistenzbildung.'
  },
  'bv.targetPest': {
    fr: 'Ravageur cible', en: 'Target pest', es: 'Plaga objetivo', pt: 'Praga-alvo', de: 'Zielschädling'
  },
  'bv.neutralized': {
    fr: 'Neutralisé par Keprea', en: 'Neutralized by Keprea', es: 'Neutralizado por Keprea', pt: 'Neutralizado pela Keprea', de: 'Von Keprea neutralisiert'
  },
  'bv.crops.title': {
    fr: 'Cultures cibles', en: 'Target crops', es: 'Cultivos objetivo', pt: 'Culturas-alvo', de: 'Zielkulturen'
  },
  'bv.crops.subtitle': {
    fr: 'Nos auxiliaires entomophages s\'adaptent aux principales cultures agricoles françaises, en plein champ comme sous serre.',
    en: 'Our entomophagous beneficials adapt to the main French agricultural crops, both in open fields and greenhouses.',
    es: 'Nuestros auxiliares entomófagos se adaptan a los principales cultivos agrícolas franceses, tanto en campo abierto como en invernadero.',
    pt: 'Os nossos auxiliares entomófagos adaptam-se às principais culturas agrícolas francesas, tanto em pleno campo como em estufa.',
    de: 'Unsere entomophagen Nützlinge passen sich den wichtigsten französischen landwirtschaftlichen Kulturen an, sowohl im Freiland als auch im Gewächshaus.'
  },
  'bv.crop1': {
    fr: 'Maïs : lutte contre la pyrale (Ostrinia nubilalis)',
    en: 'Corn: control of the European corn borer (Ostrinia nubilalis)',
    es: 'Maíz: lucha contra el taladro (Ostrinia nubilalis)',
    pt: 'Milho: luta contra a broca (Ostrinia nubilalis)',
    de: 'Mais: Bekämpfung des Maiszünslers (Ostrinia nubilalis)'
  },
  'bv.crop2': {
    fr: 'Grandes cultures : betterave, blé, colza (pucerons)',
    en: 'Field crops: sugar beet, wheat, rapeseed (aphids)',
    es: 'Cultivos extensivos: remolacha, trigo, colza (pulgones)',
    pt: 'Culturas extensivas: beterraba, trigo, colza (pulgões)',
    de: 'Ackerkulturen: Zuckerrüben, Weizen, Raps (Blattläuse)'
  },
  'bv.crop3': {
    fr: 'Maraîchage sous serre : tomate, poivron, concombre',
    en: 'Greenhouse market gardening: tomato, pepper, cucumber',
    es: 'Horticultura de invernadero: tomate, pimiento, pepino',
    pt: 'Horticultura de estufa: tomate, pimento, pepino',
    de: 'Gewächshausgemüsebau: Tomate, Paprika, Gurke'
  },
  'bv.crop4': {
    fr: 'Maraîchage plein champ : laitue, courgette, aubergine, carotte, oignon, poivrons',
    en: 'Open-field market gardening: lettuce, zucchini, eggplant, carrot, onion, peppers',
    es: 'Horticultura de campo abierto: lechuga, calabacín, berenjena, zanahoria, cebolla, pimientos',
    pt: 'Horticultura de pleno campo: alface, curgete, beringela, cenoura, cebola, pimentos',
    de: 'Freilandgemüsebau: Salat, Zucchini, Aubergine, Karotte, Zwiebel, Paprika'
  },
  'bv.crop5': {
    fr: 'Arboriculture fruitière : pomme, poire, cerise, kiwi',
    en: 'Fruit growing: apple, pear, cherry, kiwi',
    es: 'Fruticultura: manzana, pera, cereza, kiwi',
    pt: 'Fruticultura: maçã, pera, cereja, kiwi',
    de: 'Obstbau: Apfel, Birne, Kirsche, Kiwi'
  },
  'bv.crop6': {
    fr: 'Viticulture : tordeuse de la vigne (ver de la grappe), vecteur de la flavescence dorée',
    en: 'Viticulture: grape berry moth, vector of Flavescence dorée',
    es: 'Viticultura: polilla del racimo, vector de la flavescencia dorada',
    pt: 'Viticultura: traça-da-uva, vetor da flavescência dourada',
    de: 'Weinbau: Traubenwickler, Überträger der Goldgelben Vergilbung'
  },
  'bv.results.title': {
    fr: 'Résultats mesurés sur le terrain', en: 'Results measured in the field', es: 'Resultados medidos en campo', pt: 'Resultados medidos no terreno', de: 'Im Feld gemessene Ergebnisse'
  },
  'bv.results.stat2.label': {
    fr: 'délai d\'action après le lâcher',
    en: 'time to action after release',
    es: 'tiempo de acción tras la suelta',
    pt: 'tempo de ação após a libertação',
    de: 'Wirkzeit nach der Freisetzung'
  },
  'bv.results.stat3.label': {
    fr: 'chimique de synthèse', en: 'synthetic chemical', es: 'químico de síntesis', pt: 'químico de síntese', de: 'synthetisch-chemisch'
  },
  'bv.results.disclaimer': {
    fr: 'Données internes Keprea, essais en parcelles pilotes 2023–2024. Résultats variables selon l\'espèce ravageur, la pression parasitaire et les conditions climatiques, communiqués à titre indicatif, hors valeur d\'engagement contractuel.',
    en: 'Internal Keprea data, pilot field trials 2023–2024. Results vary depending on pest species, pest pressure and weather conditions; provided for indicative purposes only, with no contractual commitment.',
    es: 'Datos internos de Keprea, ensayos en parcelas piloto 2023-2024. Resultados variables según la especie de plaga, la presión parasitaria y las condiciones climáticas, comunicados a título indicativo, sin valor de compromiso contractual.',
    pt: 'Dados internos Keprea, ensaios em parcelas piloto 2023-2024. Resultados variáveis consoante a espécie de praga, a pressão parasitária e as condições climáticas, comunicados a título indicativo, sem valor de compromisso contratual.',
    de: 'Interne Keprea-Daten, Pilotfeldversuche 2023-2024. Ergebnisse variieren je nach Schädlingsart, Befallsdruck und Witterungsbedingungen; nur zur Orientierung, ohne vertragliche Verbindlichkeit.'
  },
  'bv.howto.title': {
    fr: 'Mode d\'emploi', en: 'Instructions for use', es: 'Modo de empleo', pt: 'Modo de utilização', de: 'Gebrauchsanleitung'
  },
  'bv.howto.intro': {
    fr: 'Un lâcher consiste à ouvrir des sachets ou boîtes contenant des auxiliaires vivants et à les déposer sur les plantes ou dans les rangs. Voici le déroulé type.',
    en: 'A release involves opening pouches or boxes containing live beneficials and placing them on plants or in the rows. Here is the typical process.',
    es: 'Una suelta consiste en abrir bolsitas o cajas que contienen auxiliares vivos y colocarlos sobre las plantas o entre las hileras. Este es el proceso típico.',
    pt: 'Uma libertação consiste em abrir saquetas ou caixas contendo auxiliares vivos e colocá-los nas plantas ou nas fileiras. Eis o processo típico.',
    de: 'Bei einer Freisetzung werden Beutel oder Boxen mit lebenden Nützlingen geöffnet und auf die Pflanzen oder in die Reihen gelegt. Hier der typische Ablauf.'
  },
  'bv.howto.delivery': {
    fr: 'Format de livraison : sachets ou tubes de 250 à 1 000 individus selon l\'espèce.\n\nConservation : 24–48h à 8°C, à l\'abri de la lumière directe. Application le jour de réception recommandée pour préserver le taux de survie des auxiliaires au lâcher.',
    en: 'Delivery format: pouches or tubes of 250 to 1,000 individuals depending on the species.\n\nStorage: 24–48h at 10°C, away from direct light. Application on the day of receipt is recommended to preserve the survival rate of the beneficials upon release.',
    es: 'Formato de entrega: bolsitas o tubos de 250 a 1.000 individuos según la especie.\n\nConservación: 24-48h a 10°C, al abrigo de la luz directa. Se recomienda la aplicación el día de recepción para preservar la tasa de supervivencia de los auxiliares en la suelta.',
    pt: 'Formato de entrega: saquetas ou tubos de 250 a 1.000 indivíduos consoante a espécie.\n\nConservação: 24-48h a 10°C, ao abrigo da luz direta. Recomenda-se a aplicação no dia da receção para preservar a taxa de sobrevivência dos auxiliares na libertação.',
    de: 'Lieferformat: Beutel oder Röhrchen mit 250 bis 1.000 Individuen je nach Art.\n\nLagerung: 24-48h bei 10°C, vor direktem Licht geschützt. Die Anwendung am Tag des Erhalts wird empfohlen, um die Überlebensrate der Nützlinge bei der Freisetzung zu erhalten.'
  },
  'bv.howto.summary': {
    fr: 'En résumé : diagnostiquer → planifier → lâcher tôt le matin → éviter les insecticides 48h avant et après → observer à J+7.',
    en: 'In summary: diagnose → plan → release early in the morning → avoid insecticides 48h before and after → observe at day 7.',
    es: 'En resumen: diagnosticar → planificar → soltar temprano por la mañana → evitar insecticidas 48h antes y después → observar a los 7 días.',
    pt: 'Em resumo: diagnosticar → planear → libertar de manhã cedo → evitar inseticidas 48h antes e depois → observar ao fim de 7 dias.',
    de: 'Zusammengefasst: diagnostizieren → planen → früh morgens freisetzen → Insektizide 48h vorher und nachher vermeiden → nach 7 Tagen beobachten.'
  },
  'bv.step1.title': {
    fr: 'Diagnostic ravageur', en: 'Pest diagnosis', es: 'Diagnóstico de la plaga', pt: 'Diagnóstico de praga', de: 'Schädlingsdiagnose'
  },
  'bv.step1.desc': {
    fr: 'Identifier l\'espèce ravageur, évaluer la pression parasitaire et choisir l\'auxiliaire adapté à votre situation culturale.',
    en: 'Identify the pest species, assess pest pressure and choose the beneficial best suited to your crop situation.',
    es: 'Identificar la especie de plaga, evaluar la presión parasitaria y elegir el auxiliar adaptado a su situación de cultivo.',
    pt: 'Identificar a espécie de praga, avaliar a pressão parasitária e escolher o auxiliar adaptado à sua situação de cultivo.',
    de: 'Schädlingsart identifizieren, Befallsdruck bewerten und den für Ihre Anbausituation geeigneten Nützling auswählen.'
  },
  'bv.step2.title': {
    fr: 'Planification des lâchers', en: 'Release planning', es: 'Planificación de las sueltas', pt: 'Planeamento das libertações', de: 'Freisetzungsplanung'
  },
  'bv.step2.desc': {
    fr: 'Lâchers préventifs positionnés selon les données météo et les outils de suivi de la pression parasitaire, ou curatifs dès confirmation du ravageur cible sur la parcelle.',
    en: 'Preventive releases at the start of the season as soon as the first outbreaks appear, or curative releases as soon as the target pest is observed.',
    es: 'Sueltas preventivas al inicio de temporada desde la aparición de los primeros focos, o curativas desde la observación de la plaga objetivo.',
    pt: 'Libertações preventivas no início da estação a partir do aparecimento dos primeiros focos, ou curativas a partir da observação da praga-alvo.',
    de: 'Präventive Freisetzungen zu Saisonbeginn bei den ersten Befallsherden, oder kurative Freisetzungen bei Beobachtung des Zielschädlings.'
  },
  'bv.step3.title': {
    fr: 'Méthodes de distribution', en: 'Distribution methods', es: 'Métodos de distribución', pt: 'Métodos de distribuição', de: 'Verteilungsmethoden'
  },
  'bv.step3.desc': {
    fr: 'Lâcher manuel (sachets ou boîtes), ou à l\'aide d\'un pulvérisateur ou d\'un atomiseur adapté pour les formulations sur support inerte.',
    en: 'Manual release (pouches or boxes), or using a sprayer or atomizer suited to formulations on an inert carrier. Drone application is also a route being explored by the industry.',
    es: 'Suelta manual (bolsitas o cajas), o mediante un pulverizador o atomizador adaptado para las formulaciones sobre soporte inerte. La aplicación por dron es también una vía seguida por el sector.',
    pt: 'Libertação manual (saquetas ou caixas), ou com recurso a um pulverizador ou atomizador adaptado para as formulações sobre suporte inerte. A aplicação por drone é também uma via seguida pelo setor.',
    de: 'Manuelle Freisetzung (Beutel oder Boxen) oder mit einem für Formulierungen auf inertem Trägermaterial geeigneten Sprüh- oder Zerstäubergerät. Die Anwendung per Drohne wird ebenfalls von der Branche verfolgt.'
  },
  'bv.step4.title': {
    fr: 'Conditions d\'application', en: 'Application conditions', es: 'Condiciones de aplicación', pt: 'Condições de aplicação', de: 'Anwendungsbedingungen'
  },
  'bv.step4.desc': {
    fr: 'Libérer les auxiliaires aux heures fraîches (matin ou soir), répartir de manière homogène sur la parcelle.',
    en: 'Release beneficials during cooler hours (morning or evening), spreading them evenly across the field.',
    es: 'Liberar los auxiliares en las horas frescas (mañana o tarde), repartiéndolos de manera homogénea en la parcela.',
    pt: 'Libertar os auxiliares nas horas mais frescas (manhã ou tarde), distribuindo-os de forma homogénea na parcela.',
    de: 'Nützlinge zu kühleren Tageszeiten freisetzen (morgens oder abends) und gleichmäßig auf dem Feld verteilen.'
  },
  'bv.step5.title': {
    fr: 'Précautions phytosanitaires', en: 'Phytosanitary precautions', es: 'Precauciones fitosanitarias', pt: 'Precauções fitossanitárias', de: 'Pflanzenschutz-Vorsichtsmaßnahmen'
  },
  'bv.step5.desc': {
    fr: 'Éviter tout insecticide à large spectre dans les 48h avant et après le lâcher pour protéger les auxiliaires.',
    en: 'Avoid any broad-spectrum insecticide within 48h before and after release to protect the beneficials.',
    es: 'Evitar cualquier insecticida de amplio espectro en las 48h antes y después de la suelta para proteger a los auxiliares.',
    pt: 'Evitar qualquer inseticida de largo espetro nas 48h antes e depois da libertação para proteger os auxiliares.',
    de: 'Vermeiden Sie 48 Stunden vor und nach der Freisetzung jedes Breitband-Insektizid, um die Nützlinge zu schützen.'
  },
  'bv.step6.title': {
    fr: 'Suivi et évaluation', en: 'Monitoring and evaluation', es: 'Seguimiento y evaluación', pt: 'Acompanhamento e avaliação', de: 'Überwachung und Auswertung'
  },
  'bv.step6.desc': {
    fr: 'Observer l\'évolution des populations ravageurs 7 à 14 jours après le lâcher. Un suivi régulier permet d\'ajuster le programme.',
    en: 'Observe pest population trends 7 to 14 days after release. Regular monitoring allows the program to be adjusted.',
    es: 'Observar la evolución de las poblaciones de plagas de 7 a 14 días después de la suelta. Un seguimiento regular permite ajustar el programa.',
    pt: 'Observar a evolução das populações de pragas 7 a 14 dias após a libertação. Um acompanhamento regular permite ajustar o programa.',
    de: 'Beobachten Sie die Entwicklung der Schädlingspopulationen 7 bis 14 Tage nach der Freisetzung. Regelmäßige Überwachung ermöglicht die Anpassung des Programms.'
  },
  'bv.faq1.q': {
    fr: 'En combien de temps les auxiliaires réduisent-ils les populations ravageurs ?',
    en: 'How long do beneficials take to reduce pest populations?',
    es: '¿En cuánto tiempo reducen los auxiliares las poblaciones de plagas?',
    pt: 'Em quanto tempo os auxiliares reduzem as populações de pragas?',
    de: 'Wie lange dauert es, bis Nützlinge die Schädlingspopulationen reduzieren?'
  },
  'bv.faq1.a': {
    fr: 'Les auxiliaires commencent à agir en 48 à 72h. La réduction visible des populations ravageurs s\'observe généralement entre 7 et 21 jours selon la pression initiale et les conditions climatiques.',
    en: 'Beneficials begin to act within 48 to 72 hours. A visible reduction in pest populations is generally observed between 7 and 21 days, depending on initial pressure and weather conditions.',
    es: 'Los auxiliares comienzan a actuar en 48 a 72h. La reducción visible de las poblaciones de plagas se observa generalmente entre 7 y 21 días según la presión inicial y las condiciones climáticas.',
    pt: 'Os auxiliares começam a agir em 48 a 72h. A redução visível das populações de pragas observa-se geralmente entre 7 e 21 dias consoante a pressão inicial e as condições climáticas.',
    de: 'Nützlinge beginnen innerhalb von 48 bis 72 Stunden zu wirken. Eine sichtbare Reduzierung der Schädlingspopulationen wird in der Regel zwischen 7 und 21 Tagen beobachtet, abhängig vom anfänglichen Befallsdruck und den Witterungsbedingungen.'
  },
  'bv.faq2.q': {
    fr: 'Le biocontrôle vivant est-il efficace en agriculture conventionnelle ?',
    en: 'Is living biocontrol effective in conventional farming?',
    es: '¿Es eficaz el biocontrol vivo en la agricultura convencional?',
    pt: 'O biocontrole vivo é eficaz na agricultura convencional?',
    de: 'Ist lebende Biokontrolle in der konventionellen Landwirtschaft wirksam?'
  },
  'bv.faq2.a': {
    fr: 'Oui. Le biocontrôle vivant s\'intègre dans tout système de production, conventionnel ou biologique. Il permet souvent de réduire significativement les doses d\'insecticides de synthèse, avec des résultats généralement équivalents.',
    en: 'Yes. Living biocontrol fits into any production system, conventional or organic. It often allows a significant reduction in synthetic insecticide doses, with equivalent or even better results.',
    es: 'Sí. El biocontrol vivo se integra en cualquier sistema de producción, convencional o ecológico. A menudo permite reducir significativamente las dosis de insecticidas de síntesis, con resultados equivalentes o incluso superiores.',
    pt: 'Sim. O biocontrole vivo integra-se em qualquer sistema de produção, convencional ou biológico. Permite frequentemente reduzir significativamente as doses de inseticidas de síntese, com resultados equivalentes ou mesmo superiores.',
    de: 'Ja. Lebende Biokontrolle passt in jedes Produktionssystem, konventionell oder ökologisch. Sie ermöglicht oft eine deutliche Reduzierung der Dosen synthetischer Insektizide, mit gleichwertigen oder sogar besseren Ergebnissen.'
  },
  'bv.faq4.q': {
    fr: 'Que faire si les conditions météo ne permettent pas de lâcher à la date prévue ?',
    en: 'What should I do if weather conditions prevent release on the planned date?',
    es: '¿Qué hacer si las condiciones meteorológicas no permiten soltar en la fecha prevista?',
    pt: 'O que fazer se as condições meteorológicas não permitirem a libertação na data prevista?',
    de: 'Was tun, wenn die Wetterbedingungen die Freisetzung am geplanten Datum nicht zulassen?'
  },
  'bv.faq4.a': {
    fr: 'Un report de 24 à 48h n\'affecte généralement pas l\'efficacité du programme, à condition de conserver les auxiliaires dans de bonnes conditions (8°C, obscurité). Au-delà, contactez notre équipe technique pour ajuster le calendrier de lâcher en fonction de la météo et du stade de la culture.',
    en: 'A delay of 24 to 48 hours generally does not affect program effectiveness, provided beneficials are kept in good conditions (10°C, darkness). Beyond that, contact our technical team to adjust the release schedule based on the weather and crop stage.',
    es: 'Un aplazamiento de 24 a 48h generalmente no afecta a la eficacia del programa, siempre que se conserven los auxiliares en buenas condiciones (10°C, oscuridad). Más allá, contacte con nuestro equipo técnico para ajustar el calendario de suelta en función del tiempo y del estado del cultivo.',
    pt: 'Um adiamento de 24 a 48h geralmente não afeta a eficácia do programa, desde que os auxiliares sejam conservados em boas condições (10°C, escuridão). Para além disso, contacte a nossa equipa técnica para ajustar o calendário de libertação em função do tempo e do estádio da cultura.',
    de: 'Eine Verzögerung von 24 bis 48 Stunden beeinträchtigt die Wirksamkeit des Programms in der Regel nicht, sofern die Nützlinge unter guten Bedingungen gehalten werden (10°C, Dunkelheit). Darüber hinaus wenden Sie sich an unser technisches Team, um den Freisetzungsplan an Wetter und Kulturstadium anzupassen.'
  },
  'bv.faq5.q': {
    fr: 'Faut-il renouveler les lâchers d\'auxiliaires chaque saison ?',
    en: 'Do beneficial releases need to be renewed every season?',
    es: '¿Hay que renovar las sueltas de auxiliares cada temporada?',
    pt: 'É necessário renovar as libertações de auxiliares a cada estação?',
    de: 'Müssen Nützlingsfreisetzungen jede Saison erneuert werden?'
  },
  'bv.faq5.a': {
    fr: 'Oui, dans la grande majorité des cas. Les auxiliaires introduits ne s\'établissent pas de façon pérenne sur la parcelle une fois le ravageur cible éliminé, faute de proie disponible, leur population décline naturellement. Un programme de lâchers est donc à reconduire à chaque nouvelle saison culturale, en ajustant les quantités selon la pression observée l\'année précédente.',
    en: 'Yes, in the vast majority of cases. Introduced beneficials do not establish permanently on the field once the target pest is eliminated; lacking available prey, their population naturally declines. A release program must therefore be renewed each new growing season, adjusting quantities according to the pressure observed the previous year.',
    es: 'Sí, en la gran mayoría de los casos. Los auxiliares introducidos no se establecen de forma permanente en la parcela una vez eliminada la plaga objetivo; a falta de presas disponibles, su población declina de forma natural. Un programa de sueltas debe por tanto renovarse en cada nueva temporada de cultivo, ajustando las cantidades según la presión observada el año anterior.',
    pt: 'Sim, na grande maioria dos casos. Os auxiliares introduzidos não se estabelecem de forma permanente na parcela uma vez eliminada a praga-alvo; na falta de presas disponíveis, a sua população declina naturalmente. Um programa de libertações deve, portanto, ser renovado a cada nova estação de cultivo, ajustando as quantidades consoante a pressão observada no ano anterior.',
    de: 'Ja, in den meisten Fällen. Eingeführte Nützlinge etablieren sich nicht dauerhaft auf dem Feld, sobald der Zielschädling beseitigt ist; mangels verfügbarer Beute geht ihre Population natürlich zurück. Ein Freisetzungsprogramm muss daher jede neue Anbausaison erneuert werden, wobei die Mengen entsprechend dem im Vorjahr beobachteten Befallsdruck angepasst werden.'
  },
  'bv.faq6.q': {
    fr: 'Pourquoi lâcher des auxiliaires s\'il en existe déjà naturellement dans mes parcelles ?',
    en: 'Why release beneficials if they already occur naturally in my fields?',
    es: '¿Por qué soltar auxiliares si ya existen de forma natural en mis parcelas?',
    pt: 'Por que libertar auxiliares se já existem naturalmente nas minhas parcelas?',
    de: 'Warum Nützlinge freisetzen, wenn sie bereits natürlich auf meinen Feldern vorkommen?'
  },
  'bv.faq6.a': {
    fr: 'Les populations d\'auxiliaires naturels arrivent généralement avec un décalage par rapport aux ravageurs : elles mettent plus de temps à s\'installer, pendant que les ravageurs prolifèrent déjà. Les lâchers permettent de combler ce décalage en apportant immédiatement une population d\'auxiliaires suffisante pour intervenir dès les premiers stades de l\'infestation.',
    en: 'Natural beneficial populations generally arrive later than pests: they take longer to establish while pests are already multiplying. Releases fill this gap by immediately providing a sufficient population of beneficials to act from the early stages of an infestation.',
    es: 'Las poblaciones de auxiliares naturales suelen llegar con un desfase respecto a las plagas: tardan más en instalarse mientras las plagas ya proliferan. Las sueltas permiten colmar este desfase aportando de inmediato una población de auxiliares suficiente para intervenir desde las primeras fases de la infestación.',
    pt: 'As populações de auxiliares naturais geralmente chegam com um desfasamento em relação às pragas: demoram mais a instalar-se enquanto as pragas já proliferam. As libertações permitem colmatar esse desfasamento, fornecendo de imediato uma população de auxiliares suficiente para intervir desde os primeiros estádios da infestação.',
    de: 'Natürliche Nützlingspopulationen treffen in der Regel später ein als die Schädlinge: Sie brauchen länger, um sich zu etablieren, während sich die Schädlinge bereits vermehren. Freisetzungen schließen diese Lücke, indem sofort eine ausreichende Nützlingspopulation bereitgestellt wird, um bereits in den frühen Stadien des Befalls einzugreifen.'
  },
  'bv.faq.title': {
    fr: 'Questions fréquentes', en: 'Frequently asked questions', es: 'Preguntas frecuentes', pt: 'Perguntas frequentes', de: 'Häufig gestellte Fragen'
  },
  'bv.feedback.title': {
    fr: 'Retours terrain', en: 'Field feedback', es: 'Comentarios de campo', pt: 'Comentários de campo', de: 'Feldrückmeldungen'
  },
  'bv.feedback.subtitle': {
    fr: 'Vous utilisez nos auxiliaires ? Votre retour d\'expérience aide d\'autres agriculteurs à décider.',
    en: 'Do you use our beneficials? Your feedback helps other farmers decide.',
    es: '¿Utiliza nuestros auxiliares? Su experiencia ayuda a otros agricultores a decidir.',
    pt: 'Utiliza os nossos auxiliares? A sua experiência ajuda outros agricultores a decidir.',
    de: 'Nutzen Sie unsere Nützlinge? Ihre Erfahrung hilft anderen Landwirten bei der Entscheidung.'
  },
  'bv.feedback.link': {
    fr: 'Partager votre expérience avec nos auxiliaires →',
    en: 'Share your experience with our beneficials →',
    es: 'Comparta su experiencia con nuestros auxiliares →',
    pt: 'Partilhe a sua experiência com os nossos auxiliares →',
    de: 'Teilen Sie Ihre Erfahrung mit unseren Nützlingen →'
  },
  'bv.cta.title': {
    fr: 'Prêt à protéger vos cultures naturellement ?',
    en: 'Ready to protect your crops naturally?',
    es: '¿Listo para proteger sus cultivos de forma natural?',
    pt: 'Pronto para proteger as suas culturas naturalmente?',
    de: 'Bereit, Ihre Kulturen natürlich zu schützen?'
  },
  'bv.cta.desc': {
    fr: 'Contactez notre équipe technique pour un conseil personnalisé et un programme de bioprotection adapté à votre exploitation.',
    en: 'Contact our technical team for personalized advice and a bioprotection program tailored to your farm.',
    es: 'Contacte a nuestro equipo técnico para un asesoramiento personalizado y un programa de bioprotección adaptado a su explotación.',
    pt: 'Contacte a nossa equipa técnica para um aconselhamento personalizado e um programa de bioproteção adaptado à sua exploração.',
    de: 'Kontaktieren Sie unser technisches Team für eine persönliche Beratung und ein auf Ihren Betrieb zugeschnittenes Bioschutzprogramm.'
  },
  'bv.cta.primary': {
    fr: 'Demander un conseil', en: 'Request advice', es: 'Solicitar asesoramiento', pt: 'Pedir aconselhamento', de: 'Beratung anfragen'
  },
  'bv.crosssell.title': {
    fr: 'Complétez votre programme avec nos autres solutions',
    en: 'Complete your program with our other solutions',
    es: 'Complete su programa con nuestras otras soluciones',
    pt: 'Complete o seu programa com as nossas outras soluções',
    de: 'Ergänzen Sie Ihr Programm mit unseren anderen Lösungen'
  },
  'bv.crosssell.biopesticides.title': {
    fr: 'Biopesticides', en: 'Biopesticides', es: 'Biopesticidas', pt: 'Biopesticidas', de: 'Biopestizide'
  },
  'bv.crosssell.biopesticides.desc': {
    fr: 'Extraits d\'insectes pour une protection foliaire complémentaire',
    en: 'Insect extracts for complementary foliar protection',
    es: 'Extractos de insectos para una protección foliar complementaria',
    pt: 'Extratos de insetos para uma proteção foliar complementar',
    de: 'Insektenextrakte für ergänzenden Blattschutz'
  },
  'bv.crosssell.boosters.title': {
    fr: 'Boosters de croissance', en: 'Growth boosters', es: 'Potenciadores de crecimiento', pt: 'Potenciadores de crescimento', de: 'Wachstumsbooster'
  },
  'bv.crosssell.boosters.desc': {
    fr: 'Biostimulants pour renforcer la vigueur et la résistance des cultures',
    en: 'Biostimulants to strengthen crop vigor and resistance',
    es: 'Bioestimulantes para reforzar el vigor y la resistencia de los cultivos',
    pt: 'Bioestimulantes para reforçar o vigor e a resistência das culturas',
    de: 'Biostimulanzien zur Stärkung von Vitalität und Widerstandsfähigkeit der Kulturen'
  },
  'bv.crosssell.biofertilisant.title': {
    fr: 'Biofertilisant', en: 'Biofertilizer', es: 'Biofertilizante', pt: 'Biofertilizante', de: 'Biodünger'
  },
  'bv.crosssell.biofertilisant.desc': {
    fr: 'Fertea432 pour améliorer la fertilité et la structure du sol',
    en: 'Fertea432 to improve soil fertility and structure',
    es: 'Fertea432 para mejorar la fertilidad y la estructura del suelo',
    pt: 'Fertea432 para melhorar a fertilidade e a estrutura do solo',
    de: 'Fertea432 zur Verbesserung von Bodenfruchtbarkeit und -struktur'
  },
  // ExtraitsNaturels page (extraits.*)
  'extraits.crops.pending': {
    fr: 'Communiqué à l\'issue des phases de développement et d\'homologation',
    en: 'To be announced once development and approval are complete',
    es: 'Se comunicará al finalizar las fases de desarrollo y homologación',
    pt: 'Comunicado após a conclusão das fases de desenvolvimento e homologação',
    de: 'Wird nach Abschluss der Entwicklungs- und Zulassungsphasen mitgeteilt'
  },
  'extraits.notAvailable.badge': {
    fr: 'En développement - non disponible à la vente',
    en: 'In development — not yet available for sale',
    es: 'En desarrollo — no disponible para la venta',
    pt: 'Em desenvolvimento — não disponível para venda',
    de: 'In Entwicklung — noch nicht im Verkauf'
  },
  'extraits.heading': {
    fr: 'Nos biopesticides', en: 'Our biopesticides', es: 'Nuestros biopesticidas', pt: 'Os nossos biopesticidas', de: 'Unsere Biopestizide'
  },
  'extraits.subheading': {
    fr: 'Nos biopesticides à base d\'extraits d\'insectes sont en cours d\'homologation',
    en: 'Our insect-extract biopesticides are undergoing approval',
    es: 'Nuestros biopesticidas a base de extractos de insectos están en proceso de homologación',
    pt: 'Os nossos biopesticidas à base de extratos de insetos estão em processo de homologação',
    de: 'Unsere Biopestizide auf Basis von Insektenextrakten befinden sich im Zulassungsverfahren'
  },
  'extraits.howItWorks.title': {
    fr: 'Comment ça fonctionne ?', en: 'How does it work?', es: '¿Cómo funciona?', pt: 'Como funciona?', de: 'Wie funktioniert das?'
  },
  'extraits.howItWorks.desc': {
    fr: 'Ces molécules bioactives issues d\'extraits d\'insectes agissent sur les ravageurs cibles tout en se dégradant rapidement dans l\'environnement. Le détail de leur mode d\'action sera précisé à l\'issue des phases de développement et d\'homologation en cours.',
    en: 'These active molecules disrupt the nervous or digestive system of target pests: they stop feeding, lose mobility and die, without affecting pollinators or beneficial fauna present in your crops. The contact-and-ingestion mode of action, combined with rapid environmental degradation, limits the risk of resistant populations developing — a growing concern as conventional active substances become scarcer.',
    es: 'Estas moléculas activas perturban el sistema nervioso o digestivo de las plagas objetivo: dejan de alimentarse, pierden movilidad y mueren, sin afectar a los polinizadores ni a la fauna auxiliar presente en sus cultivos. El modo de acción por contacto e ingestión, combinado con una rápida degradación en el medio ambiente, limita el riesgo de selección de poblaciones resistentes, un desafío creciente a medida que las sustancias activas convencionales escasean.',
    pt: 'Estas moléculas ativas perturbam o sistema nervoso ou digestivo das pragas-alvo: deixam de se alimentar, perdem mobilidade e morrem, sem afetar os polinizadores nem a fauna auxiliar presente nas suas culturas. O modo de ação por contacto e ingestão, combinado com uma rápida degradação no ambiente, limita o risco de seleção de populações resistentes, um desafio crescente à medida que as substâncias ativas convencionais escasseiam.',
    de: 'Diese Wirkmoleküle stören das Nerven- oder Verdauungssystem der Zielschädlinge: Sie hören auf zu fressen, verlieren ihre Beweglichkeit und sterben, ohne Bestäuber oder Nützlinge in Ihren Kulturen zu beeinträchtigen. Die Kontakt- und Fraßwirkung, kombiniert mit schnellem Abbau in der Umwelt, begrenzt das Risiko der Entwicklung resistenter Populationen – ein wachsendes Problem, da konventionelle Wirkstoffe seltener werden.'
  },
  'extraits.whyChoose.title': {
    fr: 'Pourquoi choisir nos biopesticides ?',
    en: 'Why choose our biopesticides?',
    es: '¿Por qué elegir nuestros biopesticidas?',
    pt: 'Por que escolher os nossos biopesticidas?',
    de: 'Warum unsere Biopestizide wählen?'
  },
  'extraits.faq.title': {
    fr: 'Questions fréquentes', en: 'Frequently asked questions', es: 'Preguntas frecuentes', pt: 'Perguntas frequentes', de: 'Häufig gestellte Fragen'
  },
  'extraits.faq1.q': {
    fr: 'Les biopesticides Keprea laissent-ils des résidus sur les cultures ?',
    en: 'Do Keprea biopesticides leave residues on crops?',
    es: '¿Dejan residuos los biopesticidas Keprea en los cultivos?',
    pt: 'Os biopesticidas Keprea deixam resíduos nas culturas?',
    de: 'Hinterlassen Keprea-Biopestizide Rückstände auf den Kulturen?'
  },
  'extraits.faq1.a': {
    fr: 'Nos biopesticides à base d\'extraits d\'insectes se dégradent rapidement par les UV et l\'humidité. Ils ne laissent pas de résidus chimiques de synthèse, ce qui les rend compatibles avec les exigences des filières biologiques et premium.',
    en: 'Our insect-extract biopesticides degrade quickly through UV exposure and humidity. They leave no synthetic chemical residue, making them compatible with the requirements of organic and premium supply chains.',
    es: 'Nuestros biopesticidas a base de extractos de insectos se degradan rápidamente por los rayos UV y la humedad. No dejan residuos químicos de síntesis, lo que los hace compatibles con las exigencias de las cadenas ecológicas y premium.',
    pt: 'Os nossos biopesticidas à base de extratos de insetos degradam-se rapidamente pelos UV e pela humidade. Não deixam resíduos químicos de síntese, o que os torna compatíveis com as exigências das cadeias biológicas e premium.',
    de: 'Unsere Biopestizide auf Basis von Insektenextrakten bauen sich durch UV-Strahlung und Feuchtigkeit schnell ab. Sie hinterlassen keine synthetischen chemischen Rückstände, was sie mit den Anforderungen von Bio- und Premium-Wertschöpfungsketten kompatibel macht.'
  },
  'extraits.faq2.q': {
    fr: 'Y a-t-il un délai avant récolte (DAR) à respecter ?',
    en: 'Is there a pre-harvest interval (PHI) to observe?',
    es: '¿Hay un plazo de seguridad (DAR) que respetar?',
    pt: 'Existe um prazo antes da colheita (PAC) a respeitar?',
    de: 'Gibt es eine einzuhaltende Wartezeit vor der Ernte?'
  },
  'extraits.faq2.a': {
    fr: 'Le délai avant récolte dépend du produit et de la culture. Consultez la fiche technique de chaque produit ou contactez notre équipe technique pour les informations réglementaires précises.',
    en: 'The pre-harvest interval depends on the product and crop. Consult each product\'s technical data sheet or contact our technical team for precise regulatory information.',
    es: 'El plazo de seguridad depende del producto y del cultivo. Consulte la ficha técnica de cada producto o contacte a nuestro equipo técnico para información normativa precisa.',
    pt: 'O prazo antes da colheita depende do produto e da cultura. Consulte a ficha técnica de cada produto ou contacte a nossa equipa técnica para informações regulamentares precisas.',
    de: 'Die Wartezeit vor der Ernte hängt vom Produkt und der Kultur ab. Konsultieren Sie das technische Datenblatt jedes Produkts oder wenden Sie sich für genaue regulatorische Informationen an unser technisches Team.'
  },
  'extraits.feedback.title': {
    fr: 'Retours terrain', en: 'Field feedback', es: 'Comentarios de campo', pt: 'Comentários de campo', de: 'Feldrückmeldungen'
  },
  'extraits.feedback.subtitle': {
    fr: 'Vous utilisez nos biopesticides ? Votre retour d\'expérience aide d\'autres agriculteurs à décider.',
    en: 'Do you use our biopesticides? Your feedback helps other farmers decide.',
    es: '¿Utiliza nuestros biopesticidas? Su experiencia ayuda a otros agricultores a decidir.',
    pt: 'Utiliza os nossos biopesticidas? A sua experiência ajuda outros agricultores a decidir.',
    de: 'Nutzen Sie unsere Biopestizide? Ihre Erfahrung hilft anderen Landwirten bei der Entscheidung.'
  },
  'extraits.feedback.link': {
    fr: 'Partager votre expérience avec nos biopesticides →',
    en: 'Share your experience with our biopesticides →',
    es: 'Comparta su experiencia con nuestros biopesticidas →',
    pt: 'Partilhe a sua experiência com os nossos biopesticidas →',
    de: 'Teilen Sie Ihre Erfahrung mit unseren Biopestiziden →'
  },
  'extraits.cta.title': {
    fr: 'Protégez vos cultures naturellement', en: 'Protect your crops naturally', es: 'Proteja sus cultivos de forma natural', pt: 'Proteja as suas culturas naturalmente', de: 'Schützen Sie Ihre Kulturen natürlich'
  },
  'extraits.cta.desc': {
    fr: 'Contactez notre équipe pour un conseil personnalisé sur nos biopesticides et la constitution d\'un programme de protection intégré.',
    en: 'Contact our team for personalized advice on our biopesticides and building an integrated protection program.',
    es: 'Contacte a nuestro equipo para un asesoramiento personalizado sobre nuestros biopesticidas y la elaboración de un programa de protección integrado.',
    pt: 'Contacte a nossa equipa para um aconselhamento personalizado sobre os nossos biopesticidas e a constituição de um programa de proteção integrado.',
    de: 'Kontaktieren Sie unser Team für eine persönliche Beratung zu unseren Biopestiziden und den Aufbau eines integrierten Schutzprogramms.'
  },
  'extraits.crosssell.title': {
    fr: 'Complétez votre programme avec nos autres solutions',
    en: 'Complete your program with our other solutions',
    es: 'Complete su programa con nuestras otras soluciones',
    pt: 'Complete o seu programa com as nossas outras soluções',
    de: 'Ergänzen Sie Ihr Programm mit unseren anderen Lösungen'
  },
  'extraits.crosssell.bioprotection.title': {
    fr: 'Bioprotection vivante', en: 'Living bioprotection', es: 'Bioprotección viva', pt: 'Bioproteção viva', de: 'Lebender Bioschutz'
  },
  'extraits.crosssell.bioprotection.desc': {
    fr: 'Insectes prédateurs pour éliminer les ravageurs de vos cultures',
    en: 'Predatory insects to eliminate pests from your crops',
    es: 'Insectos depredadores para eliminar las plagas de sus cultivos',
    pt: 'Insetos predadores para eliminar as pragas das suas culturas',
    de: 'Räuberische Insekten zur Beseitigung von Schädlingen in Ihren Kulturen'
  },
  // Boosters page — additional content
  'boosters.whatIs.title': {
    fr: 'Qu\'est-ce qu\'un biostimulant agricole ?', en: 'What is an agricultural biostimulant?', es: '¿Qué es un bioestimulante agrícola?', pt: 'O que é um bioestimulante agrícola?', de: 'Was ist ein landwirtschaftliches Biostimulans?'
  },
  'boosters.whatIs.desc': {
    fr: 'Un biostimulant agricole est une substance ou un microorganisme qui stimule les processus naturels de la plante : nutrition, développement racinaire, tolérance aux stress abiotiques (sécheresse, gel, salinité), sans agir directement comme un engrais ou un produit phytosanitaire. Boostea13 et Soilea110 sont les deux biostimulants de Keprea, formulés à partir d\'extraits d\'insectes : le premier en application foliaire pour la vigueur aérienne, le second au sol pour la santé racinaire et microbienne.',
    en: 'An agricultural biostimulant is a substance or microorganism that stimulates the plant\'s natural processes: nutrition, root development, tolerance to abiotic stress (drought, frost, salinity), without acting directly as a fertilizer or plant protection product. Boostea13 and Soilea110 are Keprea\'s two biostimulants, formulated from insect extracts: the first applied foliarly for aerial vigor, the second applied to the soil for root and microbial health.',
    es: 'Un bioestimulante agrícola es una sustancia o microorganismo que estimula los procesos naturales de la planta: nutrición, desarrollo radicular, tolerancia al estrés abiótico (sequía, heladas, salinidad), sin actuar directamente como fertilizante o producto fitosanitario. Boostea13 y Soilea110 son los dos bioestimulantes de Keprea, formulados a partir de extractos de insectos: el primero en aplicación foliar para el vigor aéreo, el segundo al suelo para la salud radicular y microbiana.',
    pt: 'Um bioestimulante agrícola é uma substância ou microrganismo que estimula os processos naturais da planta: nutrição, desenvolvimento radicular, tolerância ao stress abiótico (seca, gelo, salinidade), sem atuar diretamente como fertilizante ou produto fitossanitário. Boostea13 e Soilea110 são os dois bioestimulantes da Keprea, formulados a partir de extratos de insetos: o primeiro em aplicação foliar para o vigor aéreo, o segundo no solo para a saúde radicular e microbiana.',
    de: 'Ein landwirtschaftliches Biostimulans ist eine Substanz oder ein Mikroorganismus, der die natürlichen Prozesse der Pflanze anregt: Ernährung, Wurzelentwicklung, Toleranz gegenüber abiotischem Stress (Trockenheit, Frost, Salzgehalt), ohne direkt als Düngemittel oder Pflanzenschutzmittel zu wirken. Boostea13 und Soilea110 sind die beiden Biostimulanzien von Keprea, formuliert aus Insektenextrakten: das erste als Blattanwendung für die oberirdische Vitalität, das zweite als Bodenanwendung für Wurzel- und Mikrobengesundheit.'
  },
  'boosters.micropeptides.title': {
    fr: 'Les micropeptides, notre différenciant', en: 'Micropeptides, our differentiator', es: 'Los micropéptidos, nuestro diferenciador', pt: 'Os micropéptidos, o nosso diferencial', de: 'Mikropeptide, unser Unterscheidungsmerkmal'
  },
  'boosters.micropeptides.desc': {
    fr: 'Plus que le terme générique de « biostimulant », ce qui distingue Boostea13 et Soilea110, ce sont les micropeptides qu\'ils apportent : de courtes chaînes d\'acides aminés issues de l\'hydrolyse de la matière première insecte. Directement assimilables par la plante, ces micropeptides agissent comme signaux biologiques qui activent les mécanismes naturels de croissance et de défense, plus rapidement que des protéines complètes qui doivent d\'abord être dégradées. C\'est cette spécificité moléculaire, et non une action biostimulante générique, qui explique les effets observés sur la vigueur, l\'enracinement et la tolérance aux stress.',
    en: 'More than the generic term "biostimulant," what sets Boostea13 and Soilea110 apart are the micropeptides they provide: short amino acid chains derived from the hydrolysis of the insect raw material. Directly absorbable by the plant, these micropeptides act as biological signals that activate natural growth and defense mechanisms, faster than complete proteins that must first be broken down. It is this molecular specificity, not a generic biostimulant action, that explains the observed effects on vigor, rooting and stress tolerance.',
    es: 'Más allá del término genérico «bioestimulante», lo que distingue a Boostea13 y Soilea110 son los micropéptidos que aportan: cadenas cortas de aminoácidos procedentes de la hidrólisis de la materia prima de insecto. Directamente asimilables por la planta, estos micropéptidos actúan como señales biológicas que activan los mecanismos naturales de crecimiento y defensa, más rápidamente que las proteínas completas que primero deben degradarse. Es esta especificidad molecular, y no una acción bioestimulante genérica, lo que explica los efectos observados en el vigor, el enraizamiento y la tolerancia al estrés.',
    pt: 'Mais do que o termo genérico «bioestimulante», o que distingue Boostea13 e Soilea110 são os micropéptidos que fornecem: cadeias curtas de aminoácidos resultantes da hidrólise da matéria-prima de inseto. Diretamente assimiláveis pela planta, estes micropéptidos atuam como sinais biológicos que ativam os mecanismos naturais de crescimento e defesa, mais rapidamente do que proteínas completas que devem primeiro ser degradadas. É esta especificidade molecular, e não uma ação bioestimulante genérica, que explica os efeitos observados no vigor, no enraizamento e na tolerância ao stress.',
    de: 'Mehr als der generische Begriff „Biostimulans" zeichnet Boostea13 und Soilea110 aus, dass sie Mikropeptide liefern: kurze Aminosäureketten aus der Hydrolyse des Insektenrohstoffs. Direkt von der Pflanze aufnehmbar, wirken diese Mikropeptide als biologische Signale, die natürliche Wachstums- und Abwehrmechanismen aktivieren, schneller als vollständige Proteine, die zunächst abgebaut werden müssen. Diese molekulare Spezifität, nicht eine generische biostimulierende Wirkung, erklärt die beobachteten Effekte auf Vitalität, Verwurzelung und Stresstoleranz.'
  },
  'boosters.choose.title': {
    fr: 'Quel produit choisir ?', en: 'Which product to choose?', es: '¿Qué producto elegir?', pt: 'Que produto escolher?', de: 'Welches Produkt wählen?'
  },
  'boosters.choose.boostea.title': {
    fr: 'Boostea13 : Application foliaire', en: 'Boostea13: Foliar application', es: 'Boostea13: Aplicación foliar', pt: 'Boostea13: Aplicação foliar', de: 'Boostea13: Blattanwendung'
  },
  'boosters.choose.boostea.desc': {
    fr: 'Votre priorité est la vigueur aérienne : manque de résistance à la sécheresse, stress post-gel, assimilation nutritive insuffisante.',
    en: 'Your priority is aerial vigor: lack of drought resistance, post-frost stress, insufficient nutrient uptake.',
    es: 'Su prioridad es el vigor aéreo: falta de resistencia a la sequía, estrés post-helada, asimilación nutritiva insuficiente.',
    pt: 'A sua prioridade é o vigor aéreo: falta de resistência à seca, stress pós-gelo, assimilação nutritiva insuficiente.',
    de: 'Ihre Priorität ist die oberirdische Vitalität: mangelnde Trockenresistenz, Frost-Nachstress, unzureichende Nährstoffaufnahme.'
  },
  'boosters.choose.boostea.action': {
    fr: '→ Pulvérisation foliaire aux stades clés (tallage, floraison…)',
    en: '→ Foliar spraying at key stages (tillering, flowering…)',
    es: '→ Pulverización foliar en las etapas clave (ahijado, floración…)',
    pt: '→ Pulverização foliar nas fases-chave (afilhamento, floração…)',
    de: '→ Blattspritzung in Schlüsselstadien (Bestockung, Blüte…)'
  },
  'boosters.choose.soilea.title': {
    fr: 'Soilea110 : Application au sol', en: 'Soilea110: Soil application', es: 'Soilea110: Aplicación al suelo', pt: 'Soilea110: Aplicação no solo', de: 'Soilea110: Bodenanwendung'
  },
  'boosters.choose.soilea.desc': {
    fr: 'Votre priorité est la santé du sol : structure dégradée, faible activité microbienne, résistance aux maladies racinaires.',
    en: 'Your priority is soil health: degraded structure, low microbial activity, resistance to root diseases.',
    es: 'Su prioridad es la salud del suelo: estructura degradada, baja actividad microbiana, resistencia a enfermedades radiculares.',
    pt: 'A sua prioridade é a saúde do solo: estrutura degradada, baixa atividade microbiana, resistência a doenças radiculares.',
    de: 'Ihre Priorität ist die Bodengesundheit: degradierte Struktur, geringe mikrobielle Aktivität, Resistenz gegen Wurzelkrankheiten.'
  },
  'boosters.choose.soilea.action': {
    fr: '→ Incorporation avant semis ou plantation',
    en: '→ Incorporation before sowing or planting',
    es: '→ Incorporación antes de la siembra o plantación',
    pt: '→ Incorporação antes da sementeira ou plantação',
    de: '→ Einarbeitung vor der Aussaat oder Pflanzung'
  },
  'boosters.choose.complementary': {
    fr: 'Les deux produits sont complémentaires, utilisés ensemble, ils couvrent l\'ensemble du programme de stimulation.',
    en: 'The two products are complementary; used together, they cover the entire stimulation program.',
    es: 'Los dos productos son complementarios; utilizados juntos, cubren todo el programa de estimulación.',
    pt: 'Os dois produtos são complementares; utilizados em conjunto, cobrem todo o programa de estimulação.',
    de: 'Die beiden Produkte ergänzen sich; gemeinsam eingesetzt, decken sie das gesamte Stimulationsprogramm ab.'
  },
  'boosters.crops.title': {
    fr: 'Cultures cibles', en: 'Target crops', es: 'Cultivos objetivo', pt: 'Culturas-alvo', de: 'Zielkulturen'
  },
  'boosters.crops.subtitle': {
    fr: 'Nos biostimulants Boostea13 et Soilea110 s\'appliquent sur l\'ensemble des grandes cultures et productions spécialisées, pour renforcer la vigueur et la résistance aux stress.',
    en: 'Our Boostea13 and Soilea110 biostimulants apply to all field crops and specialty productions, to strengthen vigor and stress resistance.',
    es: 'Nuestros bioestimulantes Boostea13 y Soilea110 se aplican a todos los cultivos extensivos y producciones especializadas, para reforzar el vigor y la resistencia al estrés.',
    pt: 'Os nossos bioestimulantes Boostea13 e Soilea110 aplicam-se a todas as culturas extensivas e produções especializadas, para reforçar o vigor e a resistência ao stress.',
    de: 'Unsere Biostimulanzien Boostea13 und Soilea110 werden auf alle Ackerkulturen und Sonderkulturen angewendet, um Vitalität und Stressresistenz zu stärken.'
  },
  'boosters.crop1': {
    fr: 'Céréales : blé, orge, triticale, seigle, avoine',
    en: 'Cereals: wheat, barley, triticale, rye, oats',
    es: 'Cereales: trigo, cebada, triticale, centeno, avena',
    pt: 'Cereais: trigo, cevada, triticale, centeio, aveia',
    de: 'Getreide: Weizen, Gerste, Triticale, Roggen, Hafer'
  },
  'boosters.crop2': {
    fr: 'Oléagineux : colza, tournesol, soja',
    en: 'Oilseeds: rapeseed, sunflower, soybean',
    es: 'Oleaginosas: colza, girasol, soja',
    pt: 'Oleaginosas: colza, girassol, soja',
    de: 'Ölsaaten: Raps, Sonnenblume, Soja'
  },
  'boosters.crop3': {
    fr: 'Maïs : grain et fourrage', en: 'Corn: grain and forage', es: 'Maíz: grano y forraje', pt: 'Milho: grão e forragem', de: 'Mais: Körner und Futter'
  },
  'boosters.crop4': {
    fr: 'Maraîchage sous serre et plein champ : courgette, aubergine, carotte, oignon, poivron',
    en: 'Greenhouse and open-field market gardening: zucchini, eggplant, carrot, onion, pepper',
    es: 'Horticultura de invernadero y campo abierto: calabacín, berenjena, zanahoria, cebolla, pimiento',
    pt: 'Horticultura de estufa e pleno campo: curgete, beringela, cenoura, cebola, pimento',
    de: 'Gewächshaus- und Freilandgemüsebau: Zucchini, Aubergine, Karotte, Zwiebel, Paprika'
  },
  'boosters.crop5': {
    fr: 'Arboriculture fruitière : pommier, poirier, cerisier',
    en: 'Fruit growing: apple, pear, cherry trees',
    es: 'Fruticultura: manzano, peral, cerezo',
    pt: 'Fruticultura: macieira, pereira, cerejeira',
    de: 'Obstbau: Apfel-, Birn-, Kirschbaum'
  },
  'boosters.crop6': {
    fr: 'Viticulture : renforcement de la vigueur et résistance',
    en: 'Viticulture: strengthening vigor and resistance',
    es: 'Viticultura: refuerzo del vigor y la resistencia',
    pt: 'Viticultura: reforço do vigor e da resistência',
    de: 'Weinbau: Stärkung von Vitalität und Widerstandsfähigkeit'
  },
  'boosters.howto.title': {
    fr: 'Mode d\'emploi', en: 'Instructions for use', es: 'Modo de empleo', pt: 'Modo de utilização', de: 'Gebrauchsanleitung'
  },
  'boosters.boosteaSteps.step1.title': {
    fr: 'Application foliaire', en: 'Foliar application', es: 'Aplicación foliar', pt: 'Aplicação foliar', de: 'Blattanwendung'
  },
  'boosters.boosteaSteps.step1.desc': {
    fr: 'Diluer à 0,5–1,5 L dans un pulvérisateur. Appliquer en conditions fraîches (matin ou soir).',
    en: 'Dilute to 0.5–1.5 L in a sprayer. Apply in cool conditions (morning or evening).',
    es: 'Diluir a 0,5-1,5 L en un pulverizador. Aplicar en condiciones frescas (mañana o tarde).',
    pt: 'Diluir a 0,5-1,5 L num pulverizador. Aplicar em condições frescas (manhã ou tarde).',
    de: 'Auf 0,5-1,5 L in einem Sprühgerät verdünnen. Bei kühlen Bedingungen anwenden (morgens oder abends).'
  },
  'boosters.boosteaSteps.step2.title': {
    fr: 'Stades clés', en: 'Key stages', es: 'Etapas clave', pt: 'Fases-chave', de: 'Schlüsselstadien'
  },
  'boosters.boosteaSteps.step2.desc': {
    fr: 'Tallage et montaison pour les céréales, floraison et nouaison pour le maraîchage et l\'arboriculture.',
    en: 'Tillering and stem elongation for cereals, flowering and fruit set for market gardening and fruit growing.',
    es: 'Ahijado y encañado para los cereales, floración y cuajado para la horticultura y la fruticultura.',
    pt: 'Afilhamento e alongamento para os cereais, floração e vingamento para a horticultura e a fruticultura.',
    de: 'Bestockung und Schossen bei Getreide, Blüte und Fruchtansatz bei Gemüse- und Obstbau.'
  },
  'boosters.boosteaSteps.step3.title': {
    fr: 'Fréquence', en: 'Frequency', es: 'Frecuencia', pt: 'Frequência', de: 'Häufigkeit'
  },
  'boosters.boosteaSteps.step3.desc': {
    fr: '1 à 3 applications selon la culture.', en: '1 to 3 applications depending on the crop.', es: '1 a 3 aplicaciones según el cultivo.', pt: '1 a 3 aplicações consoante a cultura.', de: '1 bis 3 Anwendungen je nach Kultur.'
  },
  'boosters.soileaSteps.step1.title': {
    fr: 'Application au sol', en: 'Soil application', es: 'Aplicación al suelo', pt: 'Aplicação no solo', de: 'Bodenanwendung'
  },
  'boosters.soileaSteps.step1.desc': {
    fr: 'Application pendant le semis ou la plantation.', en: 'Application during sowing or planting.', es: 'Aplicación durante la siembra o la plantación.', pt: 'Aplicação durante a sementeira ou a plantação.', de: 'Anwendung während der Aussaat oder Pflanzung.'
  },
  'boosters.soileaSteps.step2.title': {
    fr: 'Dosage', en: 'Dosage', es: 'Dosificación', pt: 'Dosagem', de: 'Dosierung'
  },
  'boosters.soileaSteps.step2.desc': {
    fr: '150 à 300 kg/ha ou une poignée par plant selon le type de sol, la culture et les objectifs de fertilité.',
    en: '150 to 300 kg/ha or a handful per plant depending on soil type, crop and fertility goals.',
    es: '150 a 300 kg/ha o un puñado por planta según el tipo de suelo, el cultivo y los objetivos de fertilidad.',
    pt: '150 a 300 kg/ha ou um punhado por planta consoante o tipo de solo, a cultura e os objetivos de fertilidade.',
    de: '150 bis 300 kg/ha oder eine Handvoll pro Pflanze, je nach Bodentyp, Kultur und Fruchtbarkeitszielen.'
  },
  'boosters.soileaSteps.step3.title': {
    fr: 'Compatibilité', en: 'Compatibility', es: 'Compatibilidad', pt: 'Compatibilidade', de: 'Kompatibilität'
  },
  'boosters.soileaSteps.step3.desc': {
    fr: 'Compatible avec d\'autres amendements organiques. Favorise la microfaune du sol et le développement racinaire.',
    en: 'Compatible with other organic amendments. Promotes soil microfauna and root development.',
    es: 'Compatible con otras enmiendas orgánicas. Favorece la microfauna del suelo y el desarrollo radicular.',
    pt: 'Compatível com outras alterações orgânicas. Favorece a microfauna do solo e o desenvolvimento radicular.',
    de: 'Kompatibel mit anderen organischen Bodenverbesserern. Fördert die Bodenmikrofauna und die Wurzelentwicklung.'
  },
  'boosters.results.title': {
    fr: 'Résultats mesurés sur le terrain', en: 'Results measured in the field', es: 'Resultados medidos en campo', pt: 'Resultados medidos no terreno', de: 'Im Feld gemessene Ergebnisse'
  },
  'boosters.results.stat1.label': {
    fr: 'de biomasse (Boostea13)', en: 'biomass (Boostea13)', es: 'de biomasa (Boostea13)', pt: 'de biomassa (Boostea13)', de: 'Biomasse (Boostea13)'
  },
  'boosters.results.stat2.value': {
    fr: 'Renforcée', en: 'Strengthened', es: 'Reforzada', pt: 'Reforçada', de: 'Gestärkt'
  },
  'boosters.results.stat2.label': {
    fr: 'résistance aux stress hydrique et phytotoxique',
    en: 'resistance to water and phytotoxic stress',
    es: 'resistencia al estrés hídrico y fitotóxico',
    pt: 'resistência ao stress hídrico e fitotóxico',
    de: 'Widerstandsfähigkeit gegen Wasser- und Phytotoxizitätsstress'
  },
  'boosters.results.disclaimer': {
    fr: 'Données internes Keprea, essais agronomiques, mesurés selon un protocole inspiré des méthodologies ARVALIS. Résultats variables selon la culture et les conditions pédoclimatiques, communiqués à titre indicatif. Soilea110 : amélioration de l\'activité microbienne et de la structure du sol observée dès la 2ᵉ application.',
    en: 'Internal Keprea data, agronomic trials, measured according to a protocol inspired by ARVALIS methodologies. Results vary depending on crop and soil/climate conditions, provided for indicative purposes only. Soilea110: improvement in microbial activity and soil structure observed from the 2nd application onward.',
    es: 'Datos internos de Keprea, ensayos agronómicos, medidos según un protocolo inspirado en las metodologías de ARVALIS. Resultados variables según el cultivo y las condiciones edafoclimáticas, comunicados a título indicativo. Soilea110: mejora de la actividad microbiana y de la estructura del suelo observada desde la 2ª aplicación.',
    pt: 'Dados internos Keprea, ensaios agronómicos, medidos segundo um protocolo inspirado nas metodologias ARVALIS. Resultados variáveis consoante a cultura e as condições edafoclimáticas, comunicados a título indicativo. Soilea110: melhoria da atividade microbiana e da estrutura do solo observada a partir da 2ª aplicação.',
    de: 'Interne Keprea-Daten, agronomische Versuche, gemessen nach einem an ARVALIS-Methoden angelehnten Protokoll. Ergebnisse variieren je nach Kultur und Boden-/Klimabedingungen, nur zur Orientierung. Soilea110: Verbesserung der mikrobiellen Aktivität und der Bodenstruktur ab der 2. Anwendung beobachtet.'
  },
  'boosters.faq.title': {
    fr: 'Questions fréquentes', en: 'Frequently asked questions', es: 'Preguntas frecuentes', pt: 'Perguntas frequentes', de: 'Häufig gestellte Fragen'
  },
  'boosters.faq1.q': {
    fr: 'Les biostimulants Keprea sont-ils compatibles avec les engrais minéraux ?',
    en: 'Are Keprea biostimulants compatible with mineral fertilizers?',
    es: '¿Son compatibles los bioestimulantes Keprea con los fertilizantes minerales?',
    pt: 'Os bioestimulantes Keprea são compatíveis com os fertilizantes minerais?',
    de: 'Sind Keprea-Biostimulanzien mit Mineraldüngern kompatibel?'
  },
  'boosters.faq1.a': {
    fr: 'Oui, nos boosters peuvent être mélangés avec un autre intrant organique ou de synthèse (engrais, produits phytosanitaires). Un test de miscibilité est recommandé avant tout mélange en cuve. Notre équipe technique vous accompagne.',
    en: 'Yes, our boosters can be mixed with another organic or synthetic input (fertilizers, plant protection products). A miscibility test is recommended before any tank mix. Our technical team supports you.',
    es: 'Sí, nuestros potenciadores pueden mezclarse con otro insumo orgánico o de síntesis (fertilizantes, productos fitosanitarios). Se recomienda una prueba de miscibilidad antes de cualquier mezcla en tanque. Nuestro equipo técnico le acompaña.',
    pt: 'Sim, os nossos potenciadores podem ser misturados com outro insumo orgânico ou de síntese (fertilizantes, produtos fitossanitários). Recomenda-se um teste de miscibilidade antes de qualquer mistura em cuba. A nossa equipa técnica acompanha-o.',
    de: 'Ja, unsere Booster können mit einem anderen organischen oder synthetischen Betriebsmittel gemischt werden (Düngemittel, Pflanzenschutzmittel). Ein Mischbarkeitstest wird vor jeder Tankmischung empfohlen. Unser technisches Team begleitet Sie.'
  },
  'boosters.faq2.q': {
    fr: 'En combien de temps observe-t-on les effets des biostimulants ?',
    en: 'How long does it take to see the effects of biostimulants?',
    es: '¿En cuánto tiempo se observan los efectos de los bioestimulantes?',
    pt: 'Em quanto tempo se observam os efeitos dos bioestimulantes?',
    de: 'Wie lange dauert es, bis die Wirkung der Biostimulanzien sichtbar wird?'
  },
  'boosters.faq2.a': {
    fr: 'Les premiers effets (meilleur enracinement, reprise de vigueur) sont observables en 10 à 21 jours. Les bénéfices sur rendement et résistance aux stress abiotiques (sécheresse, gel tardif) se mesurent en fin de cycle.',
    en: 'The first effects (better rooting, renewed vigor) are observable within 10 to 21 days. Benefits on yield and resistance to abiotic stress (drought, late frost) are measured at the end of the cycle.',
    es: 'Los primeros efectos (mejor enraizamiento, recuperación del vigor) son observables en 10 a 21 días. Los beneficios sobre el rendimiento y la resistencia al estrés abiótico (sequía, helada tardía) se miden al final del ciclo.',
    pt: 'Os primeiros efeitos (melhor enraizamento, retoma do vigor) são observáveis em 10 a 21 dias. Os benefícios no rendimento e na resistência ao stress abiótico (seca, gelo tardio) medem-se no final do ciclo.',
    de: 'Die ersten Effekte (bessere Verwurzelung, neue Vitalität) sind innerhalb von 10 bis 21 Tagen sichtbar. Die Vorteile bei Ertrag und Resistenz gegen abiotischen Stress (Trockenheit, Spätfrost) werden am Ende des Zyklus gemessen.'
  },
  'boosters.faq3.q': {
    fr: 'Boostea13 et Soilea110 sont-ils utilisables en agriculture biologique ?',
    en: 'Can Boostea13 and Soilea110 be used in organic farming?',
    es: '¿Se pueden utilizar Boostea13 y Soilea110 en agricultura ecológica?',
    pt: 'Boostea13 e Soilea110 podem ser utilizados na agricultura biológica?',
    de: 'Können Boostea13 und Soilea110 im ökologischen Landbau verwendet werden?'
  },
  'boosters.faq3.a': {
    fr: 'Nos biostimulants à base d\'extraits d\'insectes sont compatibles avec les principes de l\'agriculture biologique. Vérifiez la conformité avec votre organisme certificateur avant utilisation.',
    en: 'Our insect-extract biostimulants are compatible with organic farming principles. Check compliance with your certification body before use.',
    es: 'Nuestros bioestimulantes a base de extractos de insectos son compatibles con los principios de la agricultura ecológica. Verifique la conformidad con su organismo certificador antes de su uso.',
    pt: 'Os nossos bioestimulantes à base de extratos de insetos são compatíveis com os princípios da agricultura biológica. Verifique a conformidade com o seu organismo certificador antes da utilização.',
    de: 'Unsere Biostimulanzien auf Basis von Insektenextrakten sind mit den Prinzipien des ökologischen Landbaus vereinbar. Prüfen Sie die Konformität vor der Verwendung mit Ihrer Zertifizierungsstelle.'
  },
  'boosters.faq4.q': {
    fr: 'Faut-il choisir entre Boostea13 et Soilea110 ou peut-on utiliser les deux ?',
    en: 'Do I need to choose between Boostea13 and Soilea110, or can I use both?',
    es: '¿Hay que elegir entre Boostea13 y Soilea110 o se pueden usar los dos?',
    pt: 'É necessário escolher entre Boostea13 e Soilea110 ou é possível usar ambos?',
    de: 'Muss ich zwischen Boostea13 und Soilea110 wählen, oder kann ich beide verwenden?'
  },
  'boosters.faq4.a': {
    fr: 'Les deux produits ciblent des leviers différents (vigueur aérienne pour Boostea13, santé du sol pour Soilea110) et sont conçus pour être utilisés ensemble sur un même itinéraire technique. En cas de budget limité pour une première saison d\'essai, privilégiez le produit correspondant à votre contrainte la plus limitante identifiée par diagnostic (foliaire ou racinaire).',
    en: 'The two products target different levers (aerial vigor for Boostea13, soil health for Soilea110) and are designed to be used together within the same crop management schedule. If budget is limited for a first trial season, favor the product matching your most limiting constraint as identified by diagnosis (foliar or root-related).',
    es: 'Los dos productos actúan sobre palancas diferentes (vigor aéreo para Boostea13, salud del suelo para Soilea110) y están diseñados para usarse juntos en el mismo itinerario técnico. En caso de presupuesto limitado para una primera temporada de prueba, priorice el producto correspondiente a su limitación más importante identificada por diagnóstico (foliar o radicular).',
    pt: 'Os dois produtos visam alavancas diferentes (vigor aéreo para Boostea13, saúde do solo para Soilea110) e são concebidos para serem utilizados em conjunto no mesmo itinerário técnico. Em caso de orçamento limitado para uma primeira época de ensaio, privilegie o produto correspondente à sua limitação mais importante identificada por diagnóstico (foliar ou radicular).',
    de: 'Die beiden Produkte zielen auf unterschiedliche Hebel ab (oberirdische Vitalität für Boostea13, Bodengesundheit für Soilea110) und sind für den gemeinsamen Einsatz im selben Anbauplan konzipiert. Bei begrenztem Budget für eine erste Testsaison bevorzugen Sie das Produkt, das Ihrer durch Diagnose ermittelten größten Einschränkung entspricht (Blatt- oder Wurzelbereich).'
  },
  'boosters.crosssell.title': {
    fr: 'Complétez votre programme avec nos autres solutions',
    en: 'Complete your program with our other solutions',
    es: 'Complete su programa con nuestras otras soluciones',
    pt: 'Complete o seu programa com as nossas outras soluções',
    de: 'Ergänzen Sie Ihr Programm mit unseren anderen Lösungen'
  },
  'boosters.crosssell.biopesticides.desc': {
    fr: 'Extraits d\'insectes pour une protection foliaire naturelle',
    en: 'Insect extracts for natural foliar protection',
    es: 'Extractos de insectos para una protección foliar natural',
    pt: 'Extratos de insetos para uma proteção foliar natural',
    de: 'Insektenextrakte für natürlichen Blattschutz'
  },
  // Biofertilisant page — additional content
  'biofertilisant.composition.title': {
    fr: 'Composition certifiée Fertea432', en: 'Certified Fertea432 composition', es: 'Composición certificada de Fertea432', pt: 'Composição certificada Fertea432', de: 'Zertifizierte Fertea432-Zusammensetzung'
  },
  'biofertilisant.composition.studyIntro': {
    fr: 'Résultats issus d\'une étude scientifique publiée dans Nature :',
    en: 'Results from a scientific study published in Nature:',
    es: 'Resultados de un estudio científico publicado en Nature:',
    pt: 'Resultados de um estudo científico publicado na Nature:',
    de: 'Ergebnisse einer in Nature veröffentlichten wissenschaftlichen Studie:'
  },
  'biofertilisant.composition.studyLink': {
    fr: 'consulter la publication', en: 'view the publication', es: 'consultar la publicación', pt: 'consultar a publicação', de: 'Veröffentlichung ansehen'
  },
  'biofertilisant.organicMatter.desc': {
    fr: 'Disponibilité rapide de l\'azote, enrichissement progressif du sol sur plusieurs années. Aucun risque de brûlure racinaire, même en cas d\'application proche du semis ou de la plantation.',
    en: 'Fast nitrogen availability, gradual soil enrichment over several years. No risk of root burn, even when applied close to sowing or planting.',
    es: 'Disponibilidad rápida del nitrógeno, enriquecimiento progresivo del suelo a lo largo de varios años. Sin riesgo de quemadura radicular, incluso en caso de aplicación cercana a la siembra o plantación.',
    pt: 'Disponibilidade rápida do azoto, enriquecimento progressivo do solo ao longo de vários anos. Sem risco de queimadura radicular, mesmo em caso de aplicação próxima da sementeira ou plantação.',
    de: 'Schnelle Stickstoffverfügbarkeit, allmähliche Bodenanreicherung über mehrere Jahre. Kein Risiko von Wurzelverbrennungen, selbst bei Anwendung nahe der Aussaat oder Pflanzung.'
  },
  'biofertilisant.organicMatter.compare1': {
    fr: 'Contrairement aux engrais minéraux concentrés (ex. NPK 15-15-15),',
    en: 'Unlike concentrated mineral fertilizers (e.g. NPK 15-15-15),',
    es: 'A diferencia de los fertilizantes minerales concentrados (por ejemplo, NPK 15-15-15),',
    pt: 'Ao contrário dos fertilizantes minerais concentrados (ex.: NPK 15-15-15),',
    de: 'Im Gegensatz zu konzentrierten Mineraldüngern (z. B. NPK 15-15-15)'
  },
  'biofertilisant.organicMatter.compare2': {
    fr: 'Fertea432 favorise les cycles naturels du sol',
    en: 'Fertea432 supports the soil\'s natural cycles',
    es: 'Fertea432 favorece los ciclos naturales del suelo',
    pt: 'O Fertea432 favorece os ciclos naturais do solo',
    de: 'fördert Fertea432 die natürlichen Kreisläufe des Bodens'
  },
  'biofertilisant.crops.title': {
    fr: 'Cultures cibles', en: 'Target crops', es: 'Cultivos objetivo', pt: 'Culturas-alvo', de: 'Zielkulturen'
  },
  'biofertilisant.crops.subtitle': {
    fr: 'Fertea432 s\'applique sur l\'ensemble des grandes cultures et productions spécialisées, en agriculture biologique comme conventionnelle.',
    en: 'Fertea432 applies to all field crops and specialty productions, in both organic and conventional farming.',
    es: 'Fertea432 se aplica en todos los cultivos extensivos y producciones especializadas, tanto en agricultura ecológica como convencional.',
    pt: 'O Fertea432 aplica-se a todas as culturas extensivas e produções especializadas, tanto na agricultura biológica como convencional.',
    de: 'Fertea432 wird auf alle Ackerkulturen und Sonderkulturen angewendet, sowohl im ökologischen als auch im konventionellen Landbau.'
  },
  'biofertilisant.crop1': {
    fr: 'Grandes cultures : blé, maïs, colza, tournesol, betterave',
    en: 'Field crops: wheat, corn, rapeseed, sunflower, sugar beet',
    es: 'Cultivos extensivos: trigo, maíz, colza, girasol, remolacha',
    pt: 'Culturas extensivas: trigo, milho, colza, girassol, beterraba',
    de: 'Ackerkulturen: Weizen, Mais, Raps, Sonnenblume, Zuckerrübe'
  },
  'biofertilisant.crop2': {
    fr: 'Légumineuses : soja, pois, féverole',
    en: 'Legumes: soybean, peas, faba beans',
    es: 'Leguminosas: soja, guisante, haba',
    pt: 'Leguminosas: soja, ervilha, fava',
    de: 'Hülsenfrüchte: Soja, Erbsen, Ackerbohnen'
  },
  'biofertilisant.crop3': {
    fr: 'Maraîchage : tomate, courgette, poivron, laitue, aubergine, carotte, oignon',
    en: 'Market gardening: tomato, zucchini, pepper, lettuce, eggplant, carrot, onion',
    es: 'Horticultura: tomate, calabacín, pimiento, lechuga, berenjena, zanahoria, cebolla',
    pt: 'Horticultura: tomate, curgete, pimento, alface, beringela, cenoura, cebola',
    de: 'Gemüsebau: Tomate, Zucchini, Paprika, Salat, Aubergine, Karotte, Zwiebel'
  },
  'biofertilisant.crop4': {
    fr: 'Arboriculture : pommier, poirier, cerisier, vigne',
    en: 'Fruit growing: apple, pear, cherry trees, vines',
    es: 'Fruticultura: manzano, peral, cerezo, viña',
    pt: 'Fruticultura: macieira, pereira, cerejeira, videira',
    de: 'Obstbau: Apfel-, Birn-, Kirschbaum, Reben'
  },
  'biofertilisant.crop5': {
    fr: 'Prairies et cultures fourragères', en: 'Grasslands and forage crops', es: 'Praderas y cultivos forrajeros', pt: 'Prados e culturas forrageiras', de: 'Grünland und Futterkulturen'
  },
  'biofertilisant.crop6': {
    fr: 'Toutes cultures en agriculture biologique (AB)',
    en: 'All crops in organic farming',
    es: 'Todos los cultivos en agricultura ecológica',
    pt: 'Todas as culturas em agricultura biológica',
    de: 'Alle Kulturen im ökologischen Landbau'
  },
  'biofertilisant.howto.title': {
    fr: 'Mode d\'emploi', en: 'Instructions for use', es: 'Modo de empleo', pt: 'Modo de utilização', de: 'Gebrauchsanleitung'
  },
  'biofertilisant.step1.title': {
    fr: 'Dosage et conditionnement', en: 'Dosage and packaging', es: 'Dosificación y envasado', pt: 'Dosagem e embalagem', de: 'Dosierung und Verpackung'
  },
  'biofertilisant.step1.desc': {
    fr: '2 à 3 tonnes par hectare selon la culture, l\'analyse de sol et les objectifs de fertilité, ou une poignée par plant en application localisée. Disponible en big-bags de 500 kg et sacs de 25 kg, contactez-nous pour le prix à la tonne selon volume.',
    en: '2 to 3 tonnes per hectare depending on the crop, soil analysis and fertility goals, or a handful per plant for localized application. Available in 500 kg big bags and 25 kg bags; contact us for the price per tonne based on volume.',
    es: '2 a 3 toneladas por hectárea según el cultivo, el análisis de suelo y los objetivos de fertilidad, o un puñado por planta en aplicación localizada. Disponible en big-bags de 500 kg y sacos de 25 kg, contáctenos para el precio por tonelada según volumen.',
    pt: '2 a 3 toneladas por hectare consoante a cultura, a análise de solo e os objetivos de fertilidade, ou um punhado por planta em aplicação localizada. Disponível em big-bags de 500 kg e sacos de 25 kg, contacte-nos para o preço por tonelada consoante o volume.',
    de: '2 bis 3 Tonnen pro Hektar je nach Kultur, Bodenanalyse und Fruchtbarkeitszielen, oder eine Handvoll pro Pflanze bei lokaler Anwendung. Erhältlich in 500-kg-Big-Bags und 25-kg-Säcken, kontaktieren Sie uns für den Preis pro Tonne je nach Menge.'
  },
  'biofertilisant.step2.title': {
    fr: 'Moment d\'application', en: 'Timing of application', es: 'Momento de aplicación', pt: 'Momento de aplicação', de: 'Anwendungszeitpunkt'
  },
  'biofertilisant.step2.desc': {
    fr: 'Avant le semis (idéalement 2 à 4 semaines avant, pour une pré-décomposition optimale) ou après le semis, lors de la plantation ou après la plantation.',
    en: 'Before sowing (ideally 2 to 4 weeks in advance, for optimal pre-decomposition) or after sowing, at planting or after planting.',
    es: 'Antes de la siembra (idealmente 2 a 4 semanas antes, para una predescomposición óptima) o después de la siembra, en la plantación o después de la plantación.',
    pt: 'Antes da sementeira (idealmente 2 a 4 semanas antes, para uma pré-decomposição ótima) ou depois da sementeira, na plantação ou depois da plantação.',
    de: 'Vor der Aussaat (idealerweise 2 bis 4 Wochen vorher, für eine optimale Vorzersetzung) oder nach der Aussaat, bei der Pflanzung oder danach.'
  },
  'biofertilisant.step3.title': {
    fr: 'Incorporation au sol', en: 'Soil incorporation', es: 'Incorporación al suelo', pt: 'Incorporação no solo', de: 'Bodeneinarbeitung'
  },
  'biofertilisant.step3.desc': {
    fr: 'Un griffage superficiel du sol après épandage optimise la vitesse d\'absorption des nutriments. Recommandé mais pas indispensable : un simple épandage en surface reste efficace.',
    en: 'Light surface tillage after spreading optimizes nutrient absorption speed. Recommended but not essential: simple surface spreading remains effective.',
    es: 'Un rastrillado superficial del suelo después del esparcido optimiza la velocidad de absorción de los nutrientes. Recomendado pero no indispensable: un simple esparcido en superficie sigue siendo eficaz.',
    pt: 'Uma sacha superficial do solo após a aplicação otimiza a velocidade de absorção dos nutrientes. Recomendado mas não indispensável: uma simples aplicação à superfície continua a ser eficaz.',
    de: 'Eine oberflächliche Bodenbearbeitung nach der Ausbringung optimiert die Geschwindigkeit der Nährstoffaufnahme. Empfohlen, aber nicht zwingend: eine einfache Oberflächenausbringung bleibt wirksam.'
  },
  'biofertilisant.step4.title': {
    fr: 'Compatibilité', en: 'Compatibility', es: 'Compatibilidad', pt: 'Compatibilidade', de: 'Kompatibilität'
  },
  'biofertilisant.step4.desc': {
    fr: 'Compatible avec d\'autres amendements organiques. Peut compléter un programme de fertilisation conventionnel ou biologique.',
    en: 'Compatible with other organic amendments. Can complement a conventional or organic fertilization program.',
    es: 'Compatible con otras enmiendas orgánicas. Puede complementar un programa de fertilización convencional o ecológico.',
    pt: 'Compatível com outras alterações orgânicas. Pode complementar um programa de fertilização convencional ou biológico.',
    de: 'Kompatibel mit anderen organischen Bodenverbesserern. Kann ein konventionelles oder ökologisches Düngeprogramm ergänzen.'
  },
  'biofertilisant.step5.title': {
    fr: 'Fréquence d\'application', en: 'Application frequency', es: 'Frecuencia de aplicación', pt: 'Frequência de aplicação', de: 'Anwendungshäufigkeit'
  },
  'biofertilisant.step5.desc': {
    fr: 'Une application par an maintient et améliore la fertilité du sol. Le taux de matière organique augmente progressivement sur plusieurs années.',
    en: 'One application per year maintains and improves soil fertility. Organic matter content increases gradually over several years.',
    es: 'Una aplicación al año mantiene y mejora la fertilidad del suelo. El contenido de materia orgánica aumenta progresivamente a lo largo de varios años.',
    pt: 'Uma aplicação por ano mantém e melhora a fertilidade do solo. A taxa de matéria orgânica aumenta progressivamente ao longo de vários anos.',
    de: 'Eine Anwendung pro Jahr erhält und verbessert die Bodenfruchtbarkeit. Der Gehalt an organischer Substanz steigt über mehrere Jahre allmählich an.'
  },
  'biofertilisant.results.title': {
    fr: 'Résultats mesurés sur le terrain', en: 'Results measured in the field', es: 'Resultados medidos en campo', pt: 'Resultados medidos no terreno', de: 'Im Feld gemessene Ergebnisse'
  },
  'biofertilisant.results.stat1.label': {
    fr: 'sur la biomasse aérienne et racinaire du colza',
    en: 'on rapeseed aerial and root biomass',
    es: 'sobre la biomasa aérea y radicular de la colza',
    pt: 'na biomassa aérea e radicular da colza',
    de: 'bei ober- und unterirdischer Biomasse von Raps'
  },
  'biofertilisant.results.stat2.label': {
    fr: 'sur l\'activité bactérienne du sol', en: 'on soil bacterial activity', es: 'sobre la actividad bacteriana del suelo', pt: 'na atividade bacteriana do solo', de: 'bei der bakteriellen Aktivität des Bodens'
  },
  'biofertilisant.results.disclaimer': {
    fr: 'Données internes Keprea, mesurées selon des méthodes d\'analyse de sol inspirées des référentiels Comifer. Résultats variables selon le type de sol et l\'historique cultural, communiqués à titre indicatif.',
    en: 'Internal Keprea data, measured using soil analysis methods inspired by Comifer reference standards. Results vary depending on soil type and cropping history; provided for indicative purposes only.',
    es: 'Datos internos de Keprea, medidos según métodos de análisis de suelo inspirados en los referenciales Comifer. Resultados variables según el tipo de suelo y el historial de cultivo, comunicados a título indicativo.',
    pt: 'Dados internos Keprea, medidos segundo métodos de análise de solo inspirados nos referenciais Comifer. Resultados variáveis consoante o tipo de solo e o histórico cultural, comunicados a título indicativo.',
    de: 'Interne Keprea-Daten, gemessen nach Bodenanalysemethoden in Anlehnung an die Comifer-Referenzstandards. Ergebnisse variieren je nach Bodentyp und Anbaugeschichte; nur zur Orientierung.'
  },
  'biofertilisant.faq.title': {
    fr: 'Questions fréquentes', en: 'Frequently asked questions', es: 'Preguntas frecuentes', pt: 'Perguntas frequentes', de: 'Häufig gestellte Fragen'
  },
  'biofertilisant.faq1.q': {
    fr: 'Fertea432 peut-il remplacer les engrais minéraux ?',
    en: 'Can Fertea432 replace mineral fertilizers?',
    es: '¿Puede Fertea432 sustituir a los fertilizantes minerales?',
    pt: 'O Fertea432 pode substituir os fertilizantes minerais?',
    de: 'Kann Fertea432 Mineraldünger ersetzen?'
  },
  'biofertilisant.faq1.a': {
    fr: 'Fertea432 enrichit la matière organique du sol et améliore sa structure. Il peut remplacer un apport d\'engrais minéral, en particulier en agriculture biologique où il constitue la base de la fertilisation, ou l\'accompagner en conventionnel pour réduire les doses d\'engrais minéraux de synthèse et améliorer durablement la structure du sol. Il améliore par ailleurs la solubilisation du phosphore déjà présent dans le sol, le rendant plus disponible pour la plante.',
    en: 'Fertea432 enriches soil organic matter and improves its structure. It can replace a mineral fertilizer input, particularly in organic farming where it forms the basis of fertilization, or accompany it in conventional farming to reduce synthetic mineral fertilizer doses and sustainably improve soil structure. It also improves the solubilization of phosphorus already present in the soil, making it more available to the plant.',
    es: 'Fertea432 enriquece la materia orgánica del suelo y mejora su estructura. Puede sustituir un aporte de fertilizante mineral, en particular en agricultura ecológica donde constituye la base de la fertilización, o acompañarlo en convencional para reducir las dosis de fertilizantes minerales de síntesis y mejorar de forma duradera la estructura del suelo. Además, mejora la solubilización del fósforo ya presente en el suelo, haciéndolo más disponible para la planta.',
    pt: 'O Fertea432 enriquece a matéria orgânica do solo e melhora a sua estrutura. Pode substituir um aporte de fertilizante mineral, em particular na agricultura biológica onde constitui a base da fertilização, ou acompanhá-lo em convencional para reduzir as doses de fertilizantes minerais de síntese e melhorar de forma duradoura a estrutura do solo. Melhora ainda a solubilização do fósforo já presente no solo, tornando-o mais disponível para a planta.',
    de: 'Fertea432 reichert die organische Substanz des Bodens an und verbessert seine Struktur. Es kann eine Mineraldüngergabe ersetzen, insbesondere im ökologischen Landbau, wo es die Grundlage der Düngung bildet, oder diese im konventionellen Anbau ergänzen, um die Dosen synthetischer Mineraldünger zu reduzieren und die Bodenstruktur nachhaltig zu verbessern. Es verbessert außerdem die Löslichkeit des bereits im Boden vorhandenen Phosphors und macht ihn für die Pflanze besser verfügbar.'
  },
  'biofertilisant.faq2.q': {
    fr: 'Puis-je épandre Fertea432 en contact direct avec les semences ?',
    en: 'Can I spread Fertea432 in direct contact with seeds?',
    es: '¿Puedo esparcir Fertea432 en contacto directo con las semillas?',
    pt: 'Posso aplicar Fertea432 em contacto direto com as sementes?',
    de: 'Kann ich Fertea432 in direktem Kontakt mit dem Saatgut ausbringen?'
  },
  'biofertilisant.faq2.a': {
    fr: 'Oui, sans risque. Fertea432 est un biofertilisant à libération lente : il ne contient pas d\'azote minéral concentré susceptible de brûler les racines ou les semences. Son application est sécurisée même en contact direct.',
    en: 'Yes, without risk. Fertea432 is a slow-release biofertilizer: it does not contain concentrated mineral nitrogen that could burn roots or seeds. Its application is safe even in direct contact.',
    es: 'Sí, sin riesgo. Fertea432 es un biofertilizante de liberación lenta: no contiene nitrógeno mineral concentrado que pueda quemar las raíces o las semillas. Su aplicación es segura incluso en contacto directo.',
    pt: 'Sim, sem risco. O Fertea432 é um biofertilizante de libertação lenta: não contém azoto mineral concentrado suscetível de queimar as raízes ou as sementes. A sua aplicação é segura mesmo em contacto direto.',
    de: 'Ja, ohne Risiko. Fertea432 ist ein Biodünger mit langsamer Freisetzung: Er enthält keinen konzentrierten Mineralstickstoff, der Wurzeln oder Saatgut verbrennen könnte. Seine Anwendung ist auch bei direktem Kontakt sicher.'
  },
  'biofertilisant.faq3.q': {
    fr: 'Comment Fertea432 améliore-t-il la structure du sol ?',
    en: 'How does Fertea432 improve soil structure?',
    es: '¿Cómo mejora Fertea432 la estructura del suelo?',
    pt: 'Como é que o Fertea432 melhora a estrutura do solo?',
    de: 'Wie verbessert Fertea432 die Bodenstruktur?'
  },
  'biofertilisant.faq3.a': {
    fr: 'En pratique : votre sol retient mieux l\'eau, les racines se développent plus facilement et le travail du sol devient progressivement moins énergivore. Avec 85% de matière organique, Fertea432 stimule l\'activité de la faune du sol (vers de terre, bactéries, champignons mycorhiziens) et améliore la rétention en eau, la porosité et la capacité d\'échange cationique (CEC) sur le long terme.',
    en: 'In practice: your soil retains water better, roots develop more easily, and tillage gradually becomes less energy-intensive. With 85% organic matter, Fertea432 stimulates soil fauna activity (earthworms, bacteria, mycorrhizal fungi) and improves water retention, porosity and cation exchange capacity (CEC) over the long term.',
    es: 'En la práctica: su suelo retiene mejor el agua, las raíces se desarrollan más fácilmente y el laboreo se vuelve progresivamente menos costoso en energía. Con un 85% de materia orgánica, Fertea432 estimula la actividad de la fauna del suelo (lombrices, bacterias, hongos micorrízicos) y mejora la retención de agua, la porosidad y la capacidad de intercambio catiónico (CIC) a largo plazo.',
    pt: 'Na prática: o seu solo retém melhor a água, as raízes desenvolvem-se mais facilmente e a mobilização do solo torna-se progressivamente menos exigente em energia. Com 85% de matéria orgânica, o Fertea432 estimula a atividade da fauna do solo (minhocas, bactérias, fungos micorrízicos) e melhora a retenção de água, a porosidade e a capacidade de troca catiónica (CTC) a longo prazo.',
    de: 'In der Praxis: Ihr Boden hält Wasser besser zurück, Wurzeln entwickeln sich leichter, und die Bodenbearbeitung wird allmählich energiesparender. Mit 85 % organischer Substanz stimuliert Fertea432 die Aktivität der Bodenfauna (Regenwürmer, Bakterien, Mykorrhizapilze) und verbessert langfristig Wasserrückhaltung, Porosität und Kationenaustauschkapazität (KAK).'
  },
  'biofertilisant.faq4.q': {
    fr: 'Quelle est la durée de conservation de Fertea432 avant épandage ?',
    en: 'What is the shelf life of Fertea432 before spreading?',
    es: '¿Cuál es la duración de conservación de Fertea432 antes de esparcirlo?',
    pt: 'Qual é o prazo de conservação do Fertea432 antes da aplicação?',
    de: 'Wie lange ist Fertea432 vor der Ausbringung haltbar?'
  },
  'biofertilisant.faq4.a': {
    fr: 'Stocké au sec, à l\'abri de l\'humidité et des rongeurs, dans son conditionnement d\'origine (big-bag ou sac fermé), Fertea432 se conserve jusqu\'à deux ans sans perte significative de valeur agronomique. Éviter le stockage prolongé en extérieur sans protection contre les intempéries.',
    en: 'Stored in a dry place, away from moisture and rodents, in its original packaging (closed big bag or sack), Fertea432 keeps for up to two years without significant loss of agronomic value. Avoid prolonged outdoor storage without protection from the weather.',
    es: 'Almacenado en un lugar seco, al abrigo de la humedad y de los roedores, en su envase de origen (big-bag o saco cerrado), Fertea432 se conserva hasta dos años sin pérdida significativa de valor agronómico. Evitar el almacenamiento prolongado en el exterior sin protección contra la intemperie.',
    pt: 'Armazenado em local seco, ao abrigo da humidade e dos roedores, na sua embalagem de origem (big-bag ou saco fechado), o Fertea432 conserva-se até dois anos sem perda significativa de valor agronómico. Evitar o armazenamento prolongado no exterior sem proteção contra as intempéries.',
    de: 'Trocken gelagert, geschützt vor Feuchtigkeit und Nagetieren, in der Originalverpackung (geschlossener Big Bag oder Sack), ist Fertea432 bis zu zwei Jahre ohne signifikanten Verlust des agronomischen Werts haltbar. Längere Lagerung im Freien ohne Witterungsschutz vermeiden.'
  },
  'biofertilisant.faq5.q': {
    fr: 'Fertea432 est-il adapté à tous les types de sol ?',
    en: 'Is Fertea432 suitable for all soil types?',
    es: '¿Es Fertea432 adecuado para todos los tipos de suelo?',
    pt: 'O Fertea432 é adequado a todos os tipos de solo?',
    de: 'Ist Fertea432 für alle Bodentypen geeignet?'
  },
  'biofertilisant.faq5.a': {
    fr: 'Fertea432 convient à la majorité des types de sol agricole français, y compris les sols pauvres en matière organique ou en cours de reconversion vers l\'agriculture biologique.',
    en: 'Fertea432 is suitable for most types of French agricultural soil, including soils low in organic matter or being converted to organic farming.',
    es: 'Fertea432 conviene a la mayoría de los tipos de suelo agrícola francés, incluidos los suelos pobres en materia orgánica o en proceso de conversión hacia la agricultura ecológica.',
    pt: 'O Fertea432 é adequado à maioria dos tipos de solo agrícola francês, incluindo solos pobres em matéria orgânica ou em processo de conversão para a agricultura biológica.',
    de: 'Fertea432 eignet sich für die meisten Typen französischer landwirtschaftlicher Böden, einschließlich Böden mit geringem Gehalt an organischer Substanz oder solchen, die auf ökologischen Landbau umgestellt werden.'
  },
  'biofertilisant.faq6.q': {
    fr: 'Quelle différence entre Fertea432 et un compost classique ?',
    en: 'What is the difference between Fertea432 and conventional compost?',
    es: '¿Cuál es la diferencia entre Fertea432 y un compost clásico?',
    pt: 'Qual é a diferença entre o Fertea432 e um composto clássico?',
    de: 'Was ist der Unterschied zwischen Fertea432 und herkömmlichem Kompost?'
  },
  'biofertilisant.faq6.a': {
    fr: 'Contrairement à un compost dont la composition varie selon les intrants et le processus de compostage, Fertea432 présente une composition standardisée et constante (85% de matière organique, NPK 4-3-2) grâce à une matière première homogène issue de l\'élevage d\'insectes contrôlé. C\'est aussi un produit sec et inodore, facile à intégrer dans un épandeur ou à épandre à la main, sans les contraintes de manipulation d\'un compost humide. Cette régularité facilite le calcul des doses et la planification de la fertilisation d\'une campagne à l\'autre.',
    en: 'Unlike compost, whose composition varies depending on inputs and the composting process, Fertea432 has a standardized, consistent composition (85% organic matter, NPK 4-3-2) thanks to a homogeneous raw material from controlled insect rearing. It is also a dry, odorless product, easy to load into a spreader or apply by hand, without the handling constraints of wet compost. This consistency makes it easier to calculate doses and plan fertilization from one season to the next.',
    es: 'A diferencia de un compost cuya composición varía según los insumos y el proceso de compostaje, Fertea432 presenta una composición estandarizada y constante (85% de materia orgánica, NPK 4-3-2) gracias a una materia prima homogénea procedente de la cría de insectos controlada. Es también un producto seco e inodoro, fácil de integrar en una esparcidora o de esparcir a mano, sin las limitaciones de manipulación de un compost húmedo. Esta regularidad facilita el cálculo de las dosis y la planificación de la fertilización de una campaña a otra.',
    pt: 'Ao contrário de um composto cuja composição varia consoante os insumos e o processo de compostagem, o Fertea432 apresenta uma composição padronizada e constante (85% de matéria orgânica, NPK 4-3-2) graças a uma matéria-prima homogénea proveniente da criação de insetos controlada. É também um produto seco e inodoro, fácil de integrar num espalhador ou de aplicar à mão, sem as limitações de manuseamento de um composto húmido. Esta regularidade facilita o cálculo das doses e o planeamento da fertilização de uma campanha para outra.',
    de: 'Im Gegensatz zu Kompost, dessen Zusammensetzung je nach Ausgangsstoffen und Kompostierungsprozess variiert, weist Fertea432 dank eines homogenen Rohstoffs aus kontrollierter Insektenzucht eine standardisierte, konstante Zusammensetzung auf (85 % organische Substanz, NPK 4-3-2). Es ist zudem ein trockenes, geruchloses Produkt, das sich leicht in einen Streuer laden oder von Hand ausbringen lässt, ohne die Handhabungsprobleme von feuchtem Kompost. Diese Konstanz erleichtert die Dosisberechnung und die Düngeplanung von einer Saison zur nächsten.'
  },
  'biofertilisant.feedback.title': {
    fr: 'Retours terrain', en: 'Field feedback', es: 'Comentarios de campo', pt: 'Comentários de campo', de: 'Feldrückmeldungen'
  },
  'biofertilisant.feedback.subtitle': {
    fr: 'Vous utilisez Fertea432 ? Votre retour d\'expérience aide d\'autres agriculteurs à décider.',
    en: 'Do you use Fertea432? Your feedback helps other farmers decide.',
    es: '¿Utiliza Fertea432? Su experiencia ayuda a otros agricultores a decidir.',
    pt: 'Utiliza o Fertea432? A sua experiência ajuda outros agricultores a decidir.',
    de: 'Nutzen Sie Fertea432? Ihre Erfahrung hilft anderen Landwirten bei der Entscheidung.'
  },
  'biofertilisant.feedback.link': {
    fr: 'Partager votre expérience avec Fertea432 →',
    en: 'Share your experience with Fertea432 →',
    es: 'Comparta su experiencia con Fertea432 →',
    pt: 'Partilhe a sua experiência com o Fertea432 →',
    de: 'Teilen Sie Ihre Erfahrung mit Fertea432 →'
  },
  'boosters.feedback.title': {
    fr: 'Retours terrain', en: 'Field feedback', es: 'Comentarios de campo', pt: 'Comentários de campo', de: 'Feldrückmeldungen'
  },
  'boosters.feedback.subtitle': {
    fr: 'Vous utilisez nos boosters ? Votre retour d\'expérience aide d\'autres agriculteurs à décider.',
    en: 'Do you use our boosters? Your feedback helps other farmers decide.',
    es: '¿Utiliza nuestros potenciadores? Su experiencia ayuda a otros agricultores a decidir.',
    pt: 'Utiliza os nossos potenciadores? A sua experiência ajuda outros agricultores a decidir.',
    de: 'Nutzen Sie unsere Booster? Ihre Erfahrung hilft anderen Landwirten bei der Entscheidung.'
  },
  'boosters.feedback.link': {
    fr: 'Partager votre expérience avec nos boosters →',
    en: 'Share your experience with our boosters →',
    es: 'Comparta su experiencia con nuestros potenciadores →',
    pt: 'Partilhe a sua experiência com os nossos potenciadores →',
    de: 'Teilen Sie Ihre Erfahrung mit unseren Boostern →'
  },
  'biofertilisant.cta.secondary': {
    fr: 'Notre processus de production', en: 'Our production process', es: 'Nuestro proceso de producción', pt: 'O nosso processo de produção', de: 'Unser Produktionsprozess'
  },
  'biofertilisant.crosssell.title': {
    fr: 'Complétez votre programme avec nos autres solutions',
    en: 'Complete your program with our other solutions',
    es: 'Complete su programa con nuestras otras soluciones',
    pt: 'Complete o seu programa com as nossas outras soluções',
    de: 'Ergänzen Sie Ihr Programm mit unseren anderen Lösungen'
  },
  // Cookie banner
  'cookie.ariaLabel': {
    fr: 'Gestion des cookies', en: 'Cookie management', es: 'Gestión de cookies', pt: 'Gestão de cookies', de: 'Cookie-Verwaltung'
  },
  'cookie.text': {
    fr: 'Nous utilisons des cookies d\'analyse pour améliorer votre expérience et mesurer l\'audience de notre site. Votre consentement est requis avant tout dépôt.',
    en: 'We use analytics cookies to improve your experience and measure our site\'s audience. Your consent is required before any cookies are placed.',
    es: 'Utilizamos cookies de análisis para mejorar su experiencia y medir la audiencia de nuestro sitio. Se requiere su consentimiento antes de cualquier depósito.',
    pt: 'Utilizamos cookies de análise para melhorar a sua experiência e medir a audiência do nosso site. O seu consentimento é necessário antes de qualquer depósito.',
    de: 'Wir verwenden Analyse-Cookies, um Ihre Erfahrung zu verbessern und die Besucherzahlen unserer Website zu messen. Ihre Zustimmung ist vor jeder Speicherung erforderlich.'
  },
  'cookie.learnMore': {
    fr: 'En savoir plus', en: 'Learn more', es: 'Saber más', pt: 'Saber mais', de: 'Mehr erfahren'
  },
  'cookie.refuse': {
    fr: 'Refuser', en: 'Refuse', es: 'Rechazar', pt: 'Recusar', de: 'Ablehnen'
  },
  'cookie.accept': {
    fr: 'Accepter', en: 'Accept', es: 'Aceptar', pt: 'Aceitar', de: 'Akzeptieren'
  },
  'bv.targetedTooltip': {
    fr: 'Ciblé par nos solutions de bioprotection',
    en: 'Targeted by our bioprotection solutions',
    es: 'Objetivo de nuestras soluciones de bioprotección',
    pt: 'Visado pelas nossas soluções de bioproteção',
    de: 'Ziel unserer Bioschutzlösungen'
  },
  'bv.results.stat3.value': {
    fr: '0 résidu', en: '0 residue', es: '0 residuos', pt: '0 resíduos', de: '0 Rückstände'
  },
  // Image alt texts
  'alt.logoAB': {
    fr: 'Logo Agriculture Biologique (AB)',
    en: 'Organic Farming (AB) logo',
    es: 'Logotipo de Agricultura Ecológica (AB)',
    pt: 'Logótipo de Agricultura Biológica (AB)',
    de: 'Logo Ökologischer Landbau (AB)'
  },
  'alt.kepreaLogo': {
    fr: 'Keprea Logo',
    en: 'Keprea Logo',
    es: 'Logo de Keprea',
    pt: 'Logótipo Keprea',
    de: 'Keprea Logo'
  },
  'alt.kepreaFooterLogo': {
    fr: 'Keprea : Biosolutions Agricoles',
    en: 'Keprea: Agricultural Biosolutions',
    es: 'Keprea: Biosoluciones Agrícolas',
    pt: 'Keprea: Biosoluções Agrícolas',
    de: 'Keprea: Landwirtschaftliche Biolösungen'
  },
  'alt.productionSite': {
    fr: 'Site de production Keprea à Damparis, bâtiment d\'élevage et de transformation',
    en: 'Keprea production site in Damparis, rearing and processing facility',
    es: 'Sitio de producción Keprea en Damparis, edificio de cría y transformación',
    pt: 'Local de produção Keprea em Damparis, edifício de criação e transformação',
    de: 'Keprea-Produktionsstandort in Damparis, Zucht- und Verarbeitungsgebäude'
  },
  'alt.productionLine': {
    fr: 'Ligne de production Keprea : plateforme industrielle de séparation et de transformation',
    en: 'Keprea production line: industrial separation and processing platform',
    es: 'Línea de producción Keprea: plataforma industrial de separación y transformación',
    pt: 'Linha de produção Keprea: plataforma industrial de separação e transformação',
    de: 'Keprea-Produktionslinie: industrielle Trenn- und Verarbeitungsplattform'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

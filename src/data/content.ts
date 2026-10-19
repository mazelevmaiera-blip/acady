import { ActivityInfo, BrainRegion, CreatureStage, Language } from '../types';

export const ACTIVITIES_DATA: Record<Language, ActivityInfo[]> = {
  FR: [
    {
      id: 'lab',
      name: 'Agora Lab',
      category: 'Code et robotique',
      tagline: 'Construire, câbler, coder et donner vie aux machines.',
      color: '#10B981', // Emerald / Green
      accentBg: '#ECFDF5',
      borderColor: '#059669',
      textColor: '#065F46',
      icon: 'bot',
      description:
        "Votre enfant ne regarde pas la technologie : il la construit. Des robots qu'il touche, puis des programmes, des jeux, des sites et des objets connectés.",
      benefits: [
        {
          title: 'Penser',
          desc: 'Découper un gros problème en petites étapes, raisonner avec logique, chercher et corriger ses erreurs.',
          icon: 'brain',
        },
        {
          title: 'Confiance',
          desc: "Un robot qui ne marche pas, on le répare. L'erreur devient normale, la persévérance une habitude.",
          icon: 'shield',
        },
        {
          title: 'Ensemble',
          desc: 'Construire en binôme, se répartir les rôles, expliquer son code à un camarade.',
          icon: 'users',
        },
        {
          title: 'Faire',
          desc: "Passer de l'idée à l'objet : construire, câbler, tester, améliorer.",
          icon: 'wrench',
        },
      ],
      deepDiveTitle: "Arduino, c'est quoi ?",
      deepDiveDesc:
        "Une petite carte électronique programmable. Avec elle, les enfants fabriquent de vrais objets intelligents : une lumière qui s'allume seule, une alarme, un robot qui évite les obstacles.",
      tools: ['Scratch', 'VEX GO', 'VEX IQ', 'Arduino', 'Python', 'Raspberry Pi', 'Unity', 'HTML · CSS · JS'],
      specialties: ['Robotique autonome & Capteurs', 'Conception de jeux vidéo 2D/3D', 'Objets connectés & Domotique junior'],
      levels: [
        { sem: 'Semestre 1', name: 'Explorateur Débutant', project: 'Premier robot suiveur de ligne et manette de jeu Scratch' },
        { sem: 'Semestre 2', name: 'Explorateur Confirmé', project: 'Station météo connectée avec affichage LED et alarme' },
        { sem: 'Semestre 3', name: 'Leader Maker', project: 'Bras robotique articulé à servomoteurs piloté par joystick' },
        { sem: 'Semestre 4', name: 'Leader Développeur', project: 'Jeu d’arcade multijoueur sur microcontrôleur' },
        { sem: 'Semestre 5', name: 'Expert Hardware', project: 'Système domotique complet pour maquette intelligente' },
        { sem: 'Semestre 6', name: 'Expert Startup', project: 'Prototype hardware commercialisable pour le Pitch Day' },
      ],
      firstSemesterFocus:
        'Prise en main des composants électriques, sécurité, programmation par blocs sur Scratch et pilotage de leur premier châssis motorisé autonome.',
      researchBasis:
        "S'appuie sur le constructivisme de Seymour Papert (MIT Media Lab) : l'apprentissage par manipulation physique ancre les concepts computationnels profonds.",
    },
    {
      id: 'voices',
      name: 'Agora Voices',
      category: 'Anglais, scène et leadership',
      tagline: 'Prendre la parole, s’exprimer sans peur, rayonner en anglais.',
      color: '#EC4899', // Pink / Magenta
      accentBg: '#FDF2F8',
      borderColor: '#DB2777',
      textColor: '#9D174D',
      icon: 'mic',
      description:
        'Monter sur scène, captiver une audience, improviser et dialoguer naturellement en anglais. De la timidité initiale au pitch percutant devant 200 personnes.',
      benefits: [
        {
          title: 'Aisance',
          desc: 'Apprivoiser le regard des autres, poser sa voix et libérer son langage corporel.',
          icon: 'sparkles',
        },
        {
          title: 'Anglais vivant',
          desc: 'Pratiquer un anglais d’action et de conviction, loin des exercices grammaticaux passifs.',
          icon: 'globe',
        },
        {
          title: 'Écoute active',
          desc: 'Savoir écouter son partenaire de scène, rebondir en impro et respecter le temps de parole.',
          icon: 'headphones',
        },
        {
          title: 'Leadership',
          desc: 'Guider une équipe, formuler une vision claire et inspirer ses pairs.',
          icon: 'crown',
        },
      ],
      deepDiveTitle: 'Le théâtre d’improvisation en anglais',
      deepDiveDesc:
        "En jouant des scènes spontanées sans texte imposé, le cerveau cesse de 'traduire mot à mot' et active les automatismes de fluidité linguistique et de répartie.",
      tools: ['Improvisation théâtrale', 'Storytelling TED-style', 'Techniques vocales', 'Microphones de studio', 'Téléprompteur', 'Podcasting'],
      specialties: ['Art oratoire & Débat académique', 'Journalisme & Création de podcast', 'Théâtre & Acting bilingue'],
      levels: [
        { sem: 'Semestre 1', name: 'Découverte de la scène', project: 'Courte saynète bilingue et présentation personnelle face caméra' },
        { sem: 'Semestre 2', name: 'Explorers Musical Show', project: 'Spectacle théâtral en anglais avec chansons et dialogues' },
        { sem: 'Semestre 3', name: 'Le Journal Télévisé', project: 'Présentation d’un JT d’actualités en plateau filmé' },
        { sem: 'Semestre 4', name: 'Podcast Leaders', project: 'Enregistrement d’une émission audio avec interview d’invités' },
        { sem: 'Semestre 5', name: 'Campagne & Débat', project: 'Discours de campagne électorale avec joute oratoire courtoise' },
        { sem: 'Semestre 6', name: 'Pitch Day Finale', project: 'Pitch d’entreprise de 5 minutes en anglais devant jury' },
      ],
      firstSemesterFocus:
        'Posture, respiration diaphragmatique, diction en anglais, jeux de mime et présentation de son premier objet fétiche devant ses camarades.',
      researchBasis:
        "Basé sur l'approche communicative Krashen et la psychologie dramatique : la baisse du filtre affectif multiplie par 3 la vitesse d'acquisition linguistique orale.",
    },
    {
      id: 'tactics',
      name: 'Agora Tactics',
      category: 'Échecs et stratégie',
      tagline: 'Anticiper, garder son calme, maîtriser le temps et la décision.',
      color: '#3B82F6', // Blue
      accentBg: '#EFF6FF',
      borderColor: '#2563EB',
      textColor: '#1E40AF',
      icon: 'crown',
      description:
        'Le noble jeu d’échecs et les grands jeux de stratégie pour forger la concentration, la vision spatiale, la patience et le respect de l’adversaire.',
      benefits: [
        {
          title: 'Anticipation',
          desc: 'Calculer plusieurs coups à l’avance, évaluer les conséquences de chaque choix.',
          icon: 'compass',
        },
        {
          title: 'Maîtrise de soi',
          desc: 'Gérer la pression du chronomètre, accepter la défaite pour en tirer une leçon.',
          icon: 'heart',
        },
        {
          title: 'Concentration',
          desc: 'Maintenir une attention focalisée et soutenue pendant des parties intenses.',
          icon: 'target',
        },
        {
          title: 'Pensée stratégique',
          desc: 'Équilibrer l’attaque et la défense, sacrifier du matériel pour un avantage positionnel.',
          icon: 'award',
        },
      ],
      deepDiveTitle: 'La pendule d’échecs et le calcul temporel',
      deepDiveDesc:
        "Jouer avec une pendule enseigne la gestion d'une ressource précieuse et limitée : le temps. L'enfant apprend à ne pas agir sous impulsion mais avec discernement.",
      tools: ['Échiquiers de tournoi', 'Pendules électroniques FIDE', 'Plateaux d’analyse muraux', 'Casse-têtes tactiques', 'Jeux de stratégie historique'],
      specialties: ['Tactique de haut niveau & Finales', 'Théorie des ouvertures & Arbres de variantes', 'Psychologie de tournoi & Fair-play'],
      levels: [
        { sem: 'Semestre 1', name: 'Apprenti Tacticien', project: 'Maîtrise des mats élémentaires et premier mini-tournoi interne' },
        { sem: 'Semestre 2', name: 'Stratège Junior', project: 'Partie commentée enregistrée et tournoi open homologué club' },
        { sem: 'Semestre 3', name: 'Leader de l’Échiquier', project: 'Organisation et arbitrage d’une ronde de tournoi' },
        { sem: 'Semestre 4', name: 'Analyste Stratégique', project: 'Publication d’un livret de parties historiques analysées' },
        { sem: 'Semestre 5', name: 'Maître Tacticien', project: 'Partie simultanée contre 5 camarades avec explications' },
        { sem: 'Semestre 6', name: 'Directeur de Tournoi', project: 'Direction complète de la coupe inter-académies' },
      ],
      firstSemesterFocus:
        'Déplacements fluides, valeur relative des pièces, les 4 règles d’or de l’ouverture, et gestion de l’échec et mat du berger.',
      researchBasis:
        "Études cognitives de Gobet & Simon : la pratique des échecs développe la mémoire de travail et renforce l'inhibition des impulsions motrices chez l'enfant.",
    },
    {
      id: 'numbers',
      name: 'Agora Numbers',
      category: 'Calcul mental',
      tagline: 'Vitesse, visualisation du soroban, magie des nombres et logique.',
      color: '#F97316', // Orange
      accentBg: '#FFF7ED',
      borderColor: '#EA580C',
      textColor: '#9A3412',
      icon: 'calculator',
      description:
        'Dépasser la peur des maths par le jeu, la manipulation du boulier japonais (Soroban) et des techniques de calcul mental ultra-rapides.',
      benefits: [
        {
          title: 'Visualisation',
          desc: 'Créer un boulier virtuel dans son esprit pour calculer plus vite qu’une calculatrice.',
          icon: 'eye',
        },
        {
          title: 'Agilité',
          desc: 'Manipuler les ordres de grandeur, les pourcentages et les probabilités avec aisance.',
          icon: 'zap',
        },
        {
          title: 'Mémoire de travail',
          desc: 'Retenir plusieurs opérations intermédiaires sans bloc-notes.',
          icon: 'layers',
        },
        {
          title: 'Plaisir des maths',
          desc: 'Transformer les chiffres en un univers ludique, stimulant et gratifiant.',
          icon: 'smile',
        },
      ],
      deepDiveTitle: 'Le Soroban : le boulier japonais',
      deepDiveDesc:
        "En manipulant les perles physiques du soroban, les enfants matérialisent les dizaines et les unités. Puis, par 'Anzan', ils visualisent le boulier dans l'espace mental et calculent à une vitesse stupéfiante.",
      tools: ['Bouliers Soroban traditionnels', 'Logiciels de flash anzan', 'Cartes de défi mental', 'Enigmes mathématiques', 'Jeux de probabilités'],
      specialties: ['Anzan (calcul mental imagé)', 'Cryptographie & Algèbre ludique', 'Mathématiques financières pour enfants'],
      levels: [
        { sem: 'Semestre 1', name: 'Initiation Soroban', project: 'Additions et soustractions rapides à 2 chiffres sans calculette' },
        { sem: 'Semestre 2', name: 'Calculateur Flash', project: 'Défi flash Anzan de 20 additions successives projetées' },
        { sem: 'Semestre 3', name: 'Multiplications d’Or', project: 'Tables de multiplication jusqu’à 99 de tête' },
        { sem: 'Semestre 4', name: 'Maître des Décimales', project: 'Gestion de budget fictif et pourcentages de mini-marché' },
        { sem: 'Semestre 5', name: 'Analyste Financier', project: 'Modélisation des coûts d’une startup étudiante' },
        { sem: 'Semestre 6', name: 'Grand Défi Calcul', project: 'Olympiade de calcul mental chronométrée' },
      ],
      firstSemesterFocus:
        'Tenue du soroban, doigté pouce-index, complément à 5 et à 10, et transition vers les premières additions mentales simples.',
      researchBasis:
        "Neuro-imagerie (Hatano et al.) : le calcul mental par boulier recrute les circuits pariétaux bilatéraux visuo-spatiaux, évitant la surcharge linguistique.",
    },
    {
      id: 'studio',
      name: 'Agora Studio',
      category: 'Arts, calligraphie et création',
      tagline: 'Donner forme à ses idées, maîtriser le geste et créer la beauté.',
      color: '#14B8A6', // Teal / Cyan
      accentBg: '#F0FDFA',
      borderColor: '#0D9488',
      textColor: '#115E59',
      icon: 'palette',
      description:
        'De la précision du tracé calligraphique au modelage 3D et à l’identité visuelle. Les mains pensent, la créativité s’exprime avec fierté.',
      benefits: [
        {
          title: 'Précision',
          desc: 'Contrôler la motricité fine, la pression du calame et l’harmonie des proportions.',
          icon: 'feather',
        },
        {
          title: 'Sens esthétique',
          desc: 'Comprendre la théorie des couleurs, la composition et l’équilibre visuel.',
          icon: 'sun',
        },
        {
          title: 'Patience & Zen',
          desc: 'Un état de flow créatif où le calme et la minutie remplacent l’agitation.',
          icon: 'moon',
        },
        {
          title: 'Design d’impact',
          desc: 'Créer des logos, affiches et packaging pour la Startup League d’Agora.',
          icon: 'sparkles',
        },
      ],
      deepDiveTitle: 'La calligraphie arabe et latine : école de patience',
      deepDiveDesc:
        "Tenir le calame ou la plume à angle droit, doser l'encre, respirer avec le trait. La calligraphie développe une discipline du geste et un respect profond de l'artisanat.",
      tools: ['Calames en bambou & encres de Chine', 'Argile & pâtes à modeler polymères', 'Aquarelle & gouache fine', 'Tablettes graphiques numériques', 'Typographie & Sérigraphie manuelle'],
      specialties: ['Calligraphie d’art & Lettrage moderne', 'Design graphique & Branding', 'Sculpture & Modélisation d’objets'],
      levels: [
        { sem: 'Semestre 1', name: 'Le Geste et la Forme', project: 'Tableau calligraphique personnalisé de son prénom avec enluminures' },
        { sem: 'Semestre 2', name: 'Galerie d’Artistes', project: 'Exposition d’œuvres en argile et aquarelle pour l’Explorers Show' },
        { sem: 'Semestre 3', name: 'Design Graphique', project: 'Création d’une affiche de festival avec composition typographique' },
        { sem: 'Semestre 4', name: 'Identité de Marque', project: 'Charte graphique complète pour la mini-entreprise (logo, couleurs)' },
        { sem: 'Semestre 5', name: 'Design de Produit', project: 'Prototype de packaging écologique 3D réalisé à la main' },
        { sem: 'Semestre 6', name: 'Exposition Finale', project: 'Vernissage public des portfolios créatifs complets' },
      ],
      firstSemesterFocus:
        'Postures, maniement du calame et du pinceau, dégradés d’encre, géométrie des lettres et création d’un premier blason personnel.',
      researchBasis:
        "Neurosciences motrices : le geste calligraphique active le cortex moteur primaire et les noyaux gris centraux, stabilisant l'attention et le contrôle émotionnel.",
    },
  ],
  EN: [
    {
      id: 'lab',
      name: 'Agora Lab',
      category: 'Coding & Robotics',
      tagline: 'Build, wire, code, and bring machines to life.',
      color: '#10B981',
      accentBg: '#ECFDF5',
      borderColor: '#059669',
      textColor: '#065F46',
      icon: 'bot',
      description:
        "Your child doesn't just watch technology: they build it. Real robots they touch, then programs, video games, websites, and connected smart devices.",
      benefits: [
        {
          title: 'Thinking',
          desc: 'Break big problems into small steps, reason with logic, find and fix errors with resilience.',
          icon: 'brain',
        },
        {
          title: 'Confidence',
          desc: 'A robot that does not work gets repaired. Mistakes become normal, perseverance becomes second nature.',
          icon: 'shield',
        },
        {
          title: 'Together',
          desc: 'Build in pairs, distribute roles, explain code to a teammate with clarity.',
          icon: 'users',
        },
        {
          title: 'Making',
          desc: 'Turn ideas into tangible objects: construct, solder/wire, test, iterate, improve.',
          icon: 'wrench',
        },
      ],
      deepDiveTitle: 'What is Arduino?',
      deepDiveDesc:
        'A small programmable electronic board. Children use it to create real smart devices: an automatic lamp, a laser intruder alarm, an obstacle-avoiding autonomous rover.',
      tools: ['Scratch', 'VEX GO', 'VEX IQ', 'Arduino', 'Python', 'Raspberry Pi', 'Unity', 'HTML · CSS · JS'],
      specialties: ['Autonomous Robotics & Sensors', '2D/3D Game Development', 'Junior IoT & Home Automation'],
      levels: [
        { sem: 'Semester 1', name: 'Beginner Explorer', project: 'First line-following robot & interactive Scratch arcade controller' },
        { sem: 'Semester 2', name: 'Confirmed Explorer', project: 'Connected weather station with LED display and alarm' },
        { sem: 'Semester 3', name: 'Maker Leader', project: 'Articulated servo-motor robotic arm controlled with analog joystick' },
        { sem: 'Semester 4', name: 'Developer Leader', project: 'Multiplayer arcade video game on microcontroller' },
        { sem: 'Semester 5', name: 'Hardware Expert', project: 'Full smart-home automation system on miniature architectural model' },
        { sem: 'Semester 6', name: 'Startup Expert', project: 'Market-ready hardware product prototype for final Pitch Day' },
      ],
      firstSemesterFocus:
        'Electrical components, safety, block coding on Scratch, and autonomous motorized buggy navigation.',
      researchBasis:
        "Based on Seymour Papert's Constructionism (MIT Media Lab): physical manipulation cements deep computational reasoning.",
    },
    {
      id: 'voices',
      name: 'Agora Voices',
      category: 'English, Stage & Leadership',
      tagline: 'Speak up, overcome stage fright, and shine in English.',
      color: '#EC4899',
      accentBg: '#FDF2F8',
      borderColor: '#DB2777',
      textColor: '#9D174D',
      icon: 'mic',
      description:
        'Step onto the stage, captivate an audience, improvise, and dialogue fluently in English. From initial shyness to a persuasive keynote in front of 200 parents.',
      benefits: [
        {
          title: 'Poise',
          desc: 'Embrace the gaze of others, project the voice, and command confident body language.',
          icon: 'sparkles',
        },
        {
          title: 'Living English',
          desc: 'Practice actionable English through conviction and drama, not dry textbook grammar.',
          icon: 'globe',
        },
        {
          title: 'Active Listening',
          desc: 'Listen to scene partners, react in real-time improv, and respect speaking turns.',
          icon: 'headphones',
        },
        {
          title: 'Leadership',
          desc: 'Guide a team, articulate an inspiring vision, and uplift peers.',
          icon: 'crown',
        },
      ],
      deepDiveTitle: 'Improv Theater in English',
      deepDiveDesc:
        "By playing spontaneous scenes without rigid scripts, the brain stops translating word-by-word and unlocks instinctive fluency and wit.",
      tools: ['Improv Theater', 'TED-style Storytelling', 'Vocal Techniques', 'Studio Microphones', 'Teleprompter', 'Podcasting'],
      specialties: ['Public Speaking & Academic Debate', 'Journalism & Podcast Production', 'Bilingual Theater & Acting'],
      levels: [
        { sem: 'Semester 1', name: 'Stage Discovery', project: 'Short bilingual sketch & on-camera personal introduction' },
        { sem: 'Semester 2', name: 'Explorers Musical Show', project: 'Live English theater performance with songs and sketches' },
        { sem: 'Semester 3', name: 'TV News Studio', project: 'Live TV news broadcast recorded in studio with co-anchors' },
        { sem: 'Semester 4', name: 'Leaders Podcast', project: 'Studio podcast episode recorded with guest interviews' },
        { sem: 'Semester 5', name: 'Campaign & Debate', project: 'Council campaign keynote and structured parliamentary debate' },
        { sem: 'Semester 6', name: 'Pitch Day Finale', project: '5-minute startup pitch delivered in English before a live jury' },
      ],
      firstSemesterFocus:
        'Posture, diaphragmatic breath control, clear pronunciation, mime games, and presentation of a personal show-and-tell item.',
      researchBasis:
        "Krashen's Affective Filter Hypothesis: lowering performance anxiety accelerates oral second language acquisition by 3x.",
    },
    {
      id: 'tactics',
      name: 'Agora Tactics',
      category: 'Chess & Strategy',
      tagline: 'Anticipate, keep calm, master clock management and strategic choices.',
      color: '#3B82F6',
      accentBg: '#EFF6FF',
      borderColor: '#2563EB',
      textColor: '#1E40AF',
      icon: 'crown',
      description:
        'The royal game of chess and classic strategy games to cultivate deep focus, spatial awareness, patience, and mutual respect.',
      benefits: [
        {
          title: 'Anticipation',
          desc: 'Calculate multiple moves ahead, weighing the consequences of every action.',
          icon: 'compass',
        },
        {
          title: 'Composure',
          desc: 'Manage clock pressure, embrace defeats as constructive lessons.',
          icon: 'heart',
        },
        {
          title: 'Focus',
          desc: 'Maintain unwavering concentration across multi-phase competitive matches.',
          icon: 'target',
        },
        {
          title: 'Strategic Vision',
          desc: 'Balance offense and defense, sacrifice material for positional advantage.',
          icon: 'award',
        },
      ],
      deepDiveTitle: 'The Chess Clock & Temporal Decision Making',
      deepDiveDesc:
        'Playing with a tournament clock teaches youth how to respect a finite resource: time. Children learn to replace rash impulses with deliberate judgment.',
      tools: ['FIDE Tournament Boards', 'Electronic Chess Clocks', 'Demonstration Boards', 'Tactical Puzzles', 'Historic Strategy Games'],
      specialties: ['Master Tactics & Endgames', 'Opening Principles & Variant Trees', 'Tournament Psychology & Sportsmanship'],
      levels: [
        { sem: 'Semester 1', name: 'Tactical Apprentice', project: 'Checkmate patterns mastery & first internal academy tournament' },
        { sem: 'Semester 2', name: 'Junior Strategist', project: 'Recorded annotated game & official club blitz tournament' },
        { sem: 'Semester 3', name: 'Board Leader', project: 'Arbitrating and organizing tournament rounds for junior peers' },
        { sem: 'Semester 4', name: 'Strategic Analyst', project: 'Publishing an analysis booklet of iconic grandmaster games' },
        { sem: 'Semester 5', name: 'Tactical Master', project: 'Simultaneous exhibition match playing 5 peers with live commentary' },
        { sem: 'Semester 6', name: 'Tournament Director', project: 'Full direction of the inter-academy championship cup' },
      ],
      firstSemesterFocus:
        'Piece coordinates, piece valuation, the 4 golden rules of the opening, and defending against Scholar’s Mate.',
      researchBasis:
        'Cognitive studies by Gobet & Simon: chess training builds working memory and strengthens inhibitory control in school-age children.',
    },
    {
      id: 'numbers',
      name: 'Agora Numbers',
      category: 'Mental Math',
      tagline: 'Speed, Soroban visualization, math magic, and numerical intuition.',
      color: '#F97316',
      accentBg: '#FFF7ED',
      borderColor: '#EA580C',
      textColor: '#9A3412',
      icon: 'calculator',
      description:
        'Overcoming math anxiety through playful challenges, Japanese Soroban abacus mastery, and lightning-fast mental math heuristics.',
      benefits: [
        {
          title: 'Visualization',
          desc: 'Construct a virtual abacus in the mind’s eye to calculate faster than a pocket calculator.',
          icon: 'eye',
        },
        {
          title: 'Agility',
          desc: 'Handle orders of magnitude, percentages, and probabilistic reasoning effortlessly.',
          icon: 'zap',
        },
        {
          title: 'Working Memory',
          desc: 'Retain multiple intermediate operations mentally without pen and paper.',
          icon: 'layers',
        },
        {
          title: 'Love of Numbers',
          desc: 'Transform arithmetic into a stimulating, game-like adventure.',
          icon: 'smile',
        },
      ],
      deepDiveTitle: 'The Soroban: Japanese Abacus',
      deepDiveDesc:
        "By tactilely sliding the beads, children physicalize tens and units. Through 'Anzan', they project the beads in mind-space and execute rapid-fire operations without touching any device.",
      tools: ['Traditional Soroban Abaci', 'Flash Anzan Software', 'Mental Math Challenge Decks', 'Logic Puzzles', 'Probability Games'],
      specialties: ['Anzan (Mental Bead Visualization)', 'Playful Cryptography & Algebra', 'Junior Financial Math & Economics'],
      levels: [
        { sem: 'Semester 1', name: 'Soroban Initiation', project: 'Rapid 2-digit addition and subtraction without paper or calculator' },
        { sem: 'Semester 2', name: 'Flash Calculator', project: 'Anzan flash challenge: 20 sequential numbers added on screen' },
        { sem: 'Semester 3', name: 'Golden Multiplication', project: 'Mental multi-digit multiplication up to 99' },
        { sem: 'Semester 4', name: 'Decimal Commander', project: 'Mock economy budget management and margin calculations' },
        { sem: 'Semester 5', name: 'Financial Analyst', project: 'Unit economics and pricing model for student mini-startup' },
        { sem: 'Semester 6', name: 'Math Olympiad', project: 'Timed mental arithmetic championship tournament' },
      ],
      firstSemesterFocus:
        'Bead finger technique, 5-complements and 10-complements, and transitioning to mental abacus projections.',
      researchBasis:
        'Neuroimaging by Hatano et al.: abacus math recruits bilateral visuospatial parietal circuits, bypassing verbal calculation bottlenecks.',
    },
    {
      id: 'studio',
      name: 'Agora Studio',
      category: 'Arts, Calligraphy & Creative Making',
      tagline: 'Give tangible form to ideas, master physical craft, and celebrate beauty.',
      color: '#14B8A6',
      accentBg: '#F0FDFA',
      borderColor: '#0D9488',
      textColor: '#115E59',
      icon: 'palette',
      description:
        'From the rhythmic precision of Arabic and Latin calligraphy to 3D clay modeling and brand design. Hands think, creativity shines with pride.',
      benefits: [
        {
          title: 'Precision',
          desc: 'Fine motor control, calamus pen pressure, and delicate geometric proportions.',
          icon: 'feather',
        },
        {
          title: 'Aesthetic Sense',
          desc: 'Mastery of color harmonies, visual hierarchy, and balanced compositions.',
          icon: 'sun',
        },
        {
          title: 'Mindful Flow',
          desc: 'A calm, deeply satisfying creative flow state where patience replaces rush.',
          icon: 'moon',
        },
        {
          title: 'Impact Design',
          desc: 'Craft logos, posters, and packaging for the Agora Junior Startup League.',
          icon: 'sparkles',
        },
      ],
      deepDiveTitle: 'Calligraphy: The School of Patience',
      deepDiveDesc:
        'Holding the reed calamus pen, dipping into sumi ink, harmonizing breath with each stroke. Calligraphy instills physical mindfulness and reverence for craftsmanship.',
      tools: ['Bamboo Calami & Sumi Inks', 'Polymer Clay & Modeling Tools', 'Fine Watercolors & Gouache', 'Digital Graphic Tablets', 'Manual Printmaking & Typography'],
      specialties: ['Fine Art Calligraphy & Modern Lettering', 'Graphic Design & Brand Creation', '3D Object Sculpture & Prototyping'],
      levels: [
        { sem: 'Semester 1', name: 'Gesture & Form', project: 'Illuminated custom calligraphic art piece of their own name' },
        { sem: 'Semester 2', name: 'Artist Gallery', project: 'Sculptural clay and watercolor art exhibition for the Explorers Show' },
        { sem: 'Semester 3', name: 'Graphic Design', project: 'Concert/festival poster with typographic balance and layout' },
        { sem: 'Semester 4', name: 'Brand Identity', project: 'Complete visual identity guidelines for mini-startup (logo, color palette)' },
        { sem: 'Semester 5', name: 'Product Packaging', project: 'Eco-friendly 3D structural package prototype crafted by hand' },
        { sem: 'Semester 6', name: 'Final Vernissage', project: 'Public gallery exhibition of the completed 3-year creative portfolio' },
      ],
      firstSemesterFocus:
        'Holding the reed pen, ink flow control, letter geometry, and creating an ornamental family crest.',
      researchBasis:
        'Motor neuroscience: calligraphic brushstrokes activate the primary motor cortex and basal ganglia, stabilizing attention span and emotional regulation.',
    },
  ],
};

export const BRAIN_REGIONS: Record<Language, BrainRegion[]> = {
  FR: [
    {
      id: 'frontal',
      number: 1,
      name: 'Lobe frontal',
      color: '#F59E0B', // Amber / Yellow
      activities: ['lab', 'tactics', 'voices', 'numbers'],
      functions: 'Fonctions exécutives',
      description: 'Planifier, rester attentif, garder une information en tête, se contrôler, changer de stratégie quand une idée échoue.',
    },
    {
      id: 'temporal',
      number: 2,
      name: 'Lobe temporal',
      color: '#EC4899', // Pink
      activities: ['voices', 'studio'],
      functions: 'Langage et mémoire',
      description: 'Comprendre, retenir les mots et le vocabulaire en anglais, mémoriser des poèmes, dialogues et histoires.',
    },
    {
      id: 'limbique',
      number: 3,
      name: 'Système limbique',
      color: '#EF4444', // Red/Coral
      activities: ['voices', 'tactics', 'studio'],
      functions: 'Gestion des émotions',
      description: 'Gérer le trac face au public, apprivoiser la frustration d’une défaite aux échecs, développer l’empathie pour ses camarades.',
    },
    {
      id: 'parietal',
      number: 4,
      name: 'Lobe pariétal',
      color: '#3B82F6', // Blue
      activities: ['numbers', 'tactics', 'lab'],
      functions: 'Nombres et repérage spatial',
      description: 'Calculer de tête, manipuler les grandeurs, visualiser mentalement un plateau d’échecs ou un schéma de câblage robotique.',
    },
    {
      id: 'occipital',
      number: 5,
      name: 'Lobe occipital',
      color: '#10B981', // Emerald
      activities: ['studio', 'tactics', 'lab'],
      functions: 'Vision et motifs',
      description: 'Observer les formes, analyser les contrastes et les couleurs, repérer instantanément une opportunité tactique sur l’échiquier.',
    },
    {
      id: 'cervelet',
      number: 6,
      name: 'Cervelet',
      color: '#14B8A6', // Teal
      activities: ['studio', 'lab', 'voices', 'numbers'],
      functions: 'Coordination et motricité fine',
      description: 'Tracer une lettre au calame, brancher un cavalier miniature sur Arduino, faire glisser les perles du soroban, occuper l’espace scénique.',
    },
  ],
  EN: [
    {
      id: 'frontal',
      number: 1,
      name: 'Frontal Lobe',
      color: '#F59E0B',
      activities: ['lab', 'tactics', 'voices', 'numbers'],
      functions: 'Executive Functions',
      description: 'Planning, maintaining sustained focus, working memory, impulse control, and pivoting strategies when ideas encounter obstacles.',
    },
    {
      id: 'temporal',
      number: 2,
      name: 'Temporal Lobe',
      color: '#EC4899',
      activities: ['voices', 'studio'],
      functions: 'Language & Auditory Memory',
      description: 'Comprehending and storing English vocabulary, memorizing dialogue, poems, storytelling rhythms, and sound recognition.',
    },
    {
      id: 'limbique',
      number: 3,
      name: 'Limbic System',
      color: '#EF4444',
      activities: ['voices', 'tactics', 'studio'],
      functions: 'Emotional Regulation & Empathy',
      description: 'Taming stage fright, overcoming the sting of losing a chess match, and developing genuine social empathy with peers.',
    },
    {
      id: 'parietal',
      number: 4,
      name: 'Parietal Lobe',
      color: '#3B82F6',
      activities: ['numbers', 'tactics', 'lab'],
      functions: 'Spatial Reasoning & Numbers',
      description: 'Mental arithmetic, spatial mapping, rotating 3D objects mentally, and visualizing board positions multiple moves ahead.',
    },
    {
      id: 'occipital',
      number: 5,
      name: 'Occipital Lobe',
      color: '#10B981',
      activities: ['studio', 'tactics', 'lab'],
      functions: 'Visual Processing & Pattern Recognition',
      description: 'Discerning geometric shapes, color harmonies, line quality, and detecting subtle tactical weaknesses on a board.',
    },
    {
      id: 'cervelet',
      number: 6,
      name: 'Cerebellum',
      color: '#14B8A6',
      activities: ['studio', 'lab', 'voices', 'numbers'],
      functions: 'Fine Motor Coordination & Precision',
      description: 'Delicate calamus pen strokes, breadboard jumper wiring, rapid-fire Soroban bead sliding, and synchronized stage movements.',
    },
  ],
};

export const CREATURE_STAGES: Record<Language, CreatureStage[]> = {
  FR: [
    { level: 1, name: 'Œuf Magique', minXp: 0, maxXp: 30, imageAlt: 'Œuf vert moucheté qui palpite doucement', description: "Votre créature attend ses premières séances pour éclore." },
    { level: 2, name: 'Nouveau-né', minXp: 30, maxXp: 60, imageAlt: 'Bébé dragon curieux aux petites cornes dorées', description: "La créature sort de sa coquille et découvre l'académie !" },
    { level: 3, name: 'Jeune Dragon', minXp: 60, maxXp: 90, imageAlt: 'Jeune dragon joyeux aux ailes turquoise', description: "Ses ailes grandissent : il commence à coder, jouer et s'exprimer." },
    { level: 4, name: 'Adolescent Agile', minXp: 90, maxXp: 130, imageAlt: 'Dragon confiant portant un micro et un badge', description: "Prend de l'assurance sur scène et résout des défis complexes." },
    { level: 5, name: 'Forme Finale', minXp: 130, maxXp: 180, imageAlt: 'Grand dragon majestueux couronné', description: "Un vrai Leader qui guide ses camarades et monte sa startup." },
    { level: 6, name: 'Légende Agora', minXp: 180, maxXp: 250, imageAlt: 'Dragon mythique étincelant aux ailes d’or', description: "L'Expert accompli : 3 ans de projets, prêt pour le monde !" },
  ],
  EN: [
    { level: 1, name: 'Magic Egg', minXp: 0, maxXp: 30, imageAlt: 'Speckled green egg glowing gently', description: 'Your creature awaits the first classes to hatch.' },
    { level: 2, name: 'Newborn Hatchling', minXp: 30, maxXp: 60, imageAlt: 'Curious baby dragon with golden horns', description: 'The hatchling breaks free and explores the academy!' },
    { level: 3, name: 'Young Dragon', minXp: 60, maxXp: 90, imageAlt: 'Joyful young dragon with turquoise wings', description: 'Wings are growing: coding, playing chess, and speaking English.' },
    { level: 4, name: 'Agile Teen', minXp: 90, maxXp: 130, imageAlt: 'Confident dragon with microphone and badge', description: 'Takes the stage with poise and solves tough technical puzzles.' },
    { level: 5, name: 'Final Champion', minXp: 130, maxXp: 180, imageAlt: 'Majestic crowned dragon leader', description: 'A true team leader steering projects and building a startup.' },
    { level: 6, name: 'Agora Legend', minXp: 180, maxXp: 250, imageAlt: 'Mythical radiant dragon with golden wings', description: 'Accomplished expert: 3 years of proud public presentations!' },
  ],
};

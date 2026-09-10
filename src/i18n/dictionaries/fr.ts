import type { Dictionary } from "./en";

export const fr: Dictionary = {
  meta: {
    siteName: "PROSANA Clinic",
    title: "PROSANA Clinic — Tourisme médical à Istanbul",
    titleTemplate: "%s | PROSANA Clinic Istanbul",
    description:
      "PROSANA organise l'intégralité de votre parcours de soins à Istanbul — greffe de cheveux, soins dentaires et chirurgie esthétique, avec transferts VIP, hôtel et accompagnement dans votre langue, du premier message jusqu'à votre retour en toute sécurité.",
    keywords: [
      "tourisme médical Istanbul",
      "greffe de cheveux Turquie",
      "soins dentaires Istanbul",
      "chirurgie esthétique Turquie",
      "PROSANA Clinic",
      "clinique Istanbul",
    ],
  },

  common: {
    consultation: "Consultation gratuite",
    consultationLong: "Demander une consultation gratuite",
    whatsapp: "WhatsApp",
    whatsappLong: "Discuter sur WhatsApp",
    whatsappMessage:
      "Bonjour PROSANA, je souhaite une consultation gratuite au sujet d'un traitement à Istanbul.",
    learnMore: "En savoir plus",
    viewGallery: "Voir toute la galerie",
    viewAll: "Tout voir",
    readMore: "Lire la suite",
    call: "Appelez-nous",
    email: "Écrivez-nous",
    menu: "Menu",
    close: "Fermer",
    openMenu: "Ouvrir le menu",
    language: "Langue",
    chooseLanguage: "Choisir la langue",
    skipToContent: "Aller au contenu",
    backHome: "Retour à l'accueil",
    before: "Avant",
    after: "Après",
    result: "Résultat",
    monthsAfter: "{months} mois après le traitement",
    oneMonthAfter: "1 mois après le traitement",
    resultsDisclaimer:
      "Les résultats varient d'un patient à l'autre. Les images sont illustratives et publiées avec le consentement des patients.",
    stepOf: "Étape {n}",
    home: "Accueil",
    breadcrumb: "Fil d'Ariane",
    footerNav: "Navigation du pied de page",
    mainNav: "Navigation principale",
  },

  nav: {
    home: "Accueil",
    hairTransplant: "Greffe de cheveux",
    dentalTreatments: "Soins dentaires",
    plasticSurgery: "Chirurgie esthétique",
    about: "À propos",
    whyProsana: "Pourquoi PROSANA",
    beforeAfter: "Avant / Après",
    testimonials: "Témoignages",
    treatmentJourney: "Parcours de soins",
    hotelsVip: "Hôtels et services VIP",
    contact: "Contact",
  },

  announcement: {
    text: "Évaluation médicale gratuite sous 24 heures — en arabe, en anglais ou en turc.",
    cta: "Commencer",
  },

  home: {
    hero: {
      eyebrow: "Istanbul · Médical + Esthétique",
      title: "Votre parcours de soins à Istanbul,",
      titleAccent: "orchestré par des experts.",
      text: "De votre premier message à votre retour en toute sécurité, PROSANA planifie chaque étape — clinique, médecin, voyage, hôtel et suivi.",
      note: "Sans engagement. Vos données médicales restent confidentielles.",
      stats: [
        { value: "12 000+", label: "Patients accompagnés" },
        { value: "38", label: "Pays desservis" },
        { value: "4,9/5", label: "Note moyenne des patients" },
      ],
    },
    trust: {
      title: "La confiance de patients venus de 38 pays",
      items: [
        "Hôpitaux partenaires accrédités JCI",
        "Chirurgiens diplômés et certifiés",
        "Équipe arabophone, anglophone et turcophone",
        "Plan de traitement écrit avant votre départ",
      ],
    },
    services: {
      eyebrow: "Traitements",
      title: "Trois spécialités. Un seul standard de soin.",
      text: "Chaque plan est construit autour de votre diagnostic, de votre calendrier et du résultat que vous souhaitez.",
      items: {
        hairTransplant: {
          title: "Greffe de cheveux",
          text: "FUE saphir et DHI réalisées par des chirurgiens dédiés à la restauration capillaire, avec une ligne frontale dessinée pour votre visage.",
          points: ["FUE saphir", "DHI", "Sans rasage"],
        },
        dentalTreatments: {
          title: "Soins dentaires",
          text: "Conception numérique du sourire, implants, facettes et réhabilitation complète — la plupart des cas se règlent en un seul séjour.",
          points: ["Implants", "Facettes", "Hollywood Smile"],
        },
        plasticSurgery: {
          title: "Chirurgie esthétique et plastique",
          text: "Interventions du visage et du corps avec une préparation préopératoire rigoureuse et une convalescence entièrement encadrée à Istanbul.",
          points: ["Rhinoplastie", "Liposuccion", "Mommy makeover"],
        },
      },
    },
    why: {
      eyebrow: "Pourquoi PROSANA",
      title: "Le soin qui inspire confiance.",
      text: "Nous ne sommes pas une plateforme de réservation. Nous sommes l'équipe qui reste à vos côtés à Istanbul.",
      items: [
        {
          title: "Cliniques partenaires expérimentées",
          text: "Des hôpitaux et des chirurgiens accrédités, choisis sur leurs résultats et non sur leur commission.",
        },
        {
          title: "Assistance dans votre langue",
          text: "En arabe, en anglais et en turc — le même coordinateur du premier message jusqu'au suivi.",
        },
        {
          title: "Services VIP",
          text: "Chauffeurs privés, rendez-vous en toute discrétion et un accompagnant dès que vous en avez besoin.",
        },
        {
          title: "Transferts aéroport",
          text: "Accueil à l'arrivée, transfert vers votre hôtel et accompagnement à chaque rendez-vous.",
        },
        {
          title: "Aide à l'hébergement",
          text: "Des hôtels quatre et cinq étoiles adaptés à la convalescence, à quelques minutes de la clinique.",
        },
        {
          title: "Plans de traitement personnalisés",
          text: "Un plan écrit précisant la technique, le calendrier et le coût total avant même de réserver un vol.",
        },
      ],
    },
    journey: {
      eyebrow: "Comment ça se passe",
      title: "Sept étapes, entièrement organisées.",
      text: "Vous vous concentrez sur votre traitement. Nous prenons en charge tout le reste.",
      cta: "Découvrir le parcours de soins complet",
    },
    testimonials: {
      eyebrow: "Histoires de patients",
      title: "Les résultats qu'ils étaient venus chercher.",
      text: "Des parcours réels de patients venus à Istanbul avec PROSANA.",
      cta: "Lire tous les témoignages",
    },
    gallery: {
      eyebrow: "Avant / après",
      title: "Des transformations documentées.",
      text: "Une sélection de cas récents en greffe capillaire, soins dentaires et chirurgie esthétique.",
      cta: "Voir toute la galerie",
    },
    cta: {
      eyebrow: "Consultation gratuite",
      title: "Commencez par une conversation.",
      text: "Envoyez-nous quelques informations : un coordinateur médical vous répond sous 24 heures avec une évaluation honnête — y compris si le traitement n'est pas indiqué pour vous.",
      points: [
        "Dossier examiné par un médecin agréé",
        "Plan écrit et coût total",
        "Aucune obligation de réserver",
      ],
    },
  },

  services: {
    hairTransplant: {
      hero: {
        eyebrow: "Greffe de cheveux",
        title: "Une ligne frontale dessinée pour votre visage.",
        text: "FUE saphir et DHI dans des hôpitaux accrédités d'Istanbul, par des chirurgiens qui ne pratiquent que cela.",
      },
      intro: {
        eyebrow: "Introduction",
        title: "Une densité retrouvée, naturellement.",
        body: [
          "La greffe capillaire déplace vos propres follicules permanents de la zone donneuse vers les zones dégarnies. Bien réalisée, le résultat est invisible : on dirait simplement que vos cheveux ont repoussé.",
          "PROSANA vous oriente vers le chirurgien adapté selon la qualité de votre zone donneuse, votre type d'alopécie et la densité souhaitée, puis organise tout le séjour autour d'une seule journée d'intervention.",
        ],
        highlights: [
          { title: "1 jour", text: "Durée habituelle de l'intervention" },
          { title: "3 nuits", text: "Séjour recommandé à Istanbul" },
          { title: "12 mois", text: "Résultat définitif" },
        ],
      },
      primary: {
        eyebrow: "Avantages",
        title: "Pourquoi les patients choisissent Istanbul.",
        text: "L'expérience, la spécialisation et le prix se rejoignent dans une même ville — avec le suivi postopératoire qui manque habituellement.",
        items: [
          {
            title: "Vos propres cheveux, de façon définitive",
            text: "Les follicules donneurs résistent génétiquement à la chute : les cheveux greffés continuent de pousser à vie.",
          },
          {
            title: "Ligne frontale naturelle",
            text: "L'angle, la direction et la densité sont planifiés sur votre visage avant le prélèvement du premier greffon.",
          },
          {
            title: "Équipes dirigées par le chirurgien",
            text: "Votre chirurgien réalise lui-même les incisions et le dessin — jamais délégués aux seuls techniciens.",
          },
          {
            title: "Suivi postopératoire complet",
            text: "Premier lavage à la clinique, trousse de médicaments à emporter et douze mois de contrôles.",
          },
        ],
      },
      secondary: {
        eyebrow: "Techniques",
        title: "La méthode adaptée à votre cas.",
        text: "Nous ne recommandons une technique qu'après avoir examiné vos photographies et votre zone donneuse.",
        items: [
          {
            title: "FUE saphir",
            text: "Les lames en saphir ouvrent des canaux plus fins : implantation plus dense, moins de traumatisme et cicatrisation plus rapide.",
          },
          {
            title: "DHI (implanteur Choi)",
            text: "Les greffons sont implantés directement, sans canaux préouverts — idéal pour un travail de précision et pour densifier entre les cheveux existants.",
          },
          {
            title: "FUE sans rasage",
            text: "Pour les patients qui ne peuvent pas se raser. Nombre de greffons limité, résultat discret, aucune convalescence visible.",
          },
          {
            title: "Barbe et sourcils",
            text: "Les mêmes principes appliqués à la pilosité du visage, avec une attention particulière à l'angle et à la densité.",
          },
        ],
      },
      gallery: {
        eyebrow: "Avant / après",
        title: "Résultats de greffe capillaire.",
        text: "Des cas documentés, photographiés sous le même éclairage entre 9 et 14 mois.",
      },
      faq: {
        eyebrow: "FAQ",
        title: "Questions sur la greffe de cheveux.",
        text: "Tout ce que les patients demandent avant de réserver.",
        items: [
          {
            q: "De combien de greffons ai-je besoin ?",
            a: "La plupart des cas nécessitent entre 2 500 et 4 500 greffons. Le nombre exact dépend de votre type d'alopécie et de la densité de votre zone donneuse — votre coordinateur le confirme gratuitement après examen de vos photographies.",
          },
          {
            q: "L'intervention est-elle douloureuse ?",
            a: "Le cuir chevelu est totalement anesthésié localement, à l'aide d'un dispositif sans aiguille dans la plupart de nos cliniques partenaires. Les patients regardent généralement des films ou dorment pendant la séance.",
          },
          {
            q: "Combien de temps dois-je rester à Istanbul ?",
            a: "Trois nuits. Le premier jour est consacré à la consultation et aux analyses sanguines, le deuxième à l'intervention, le troisième au premier lavage et aux consignes de sortie.",
          },
          {
            q: "Quand verrai-je le résultat ?",
            a: "Les cheveux greffés tombent entre la deuxième et la sixième semaine, repoussent à partir du troisième mois et atteignent leur résultat définitif au douzième mois.",
          },
          {
            q: "Restera-t-il des cicatrices visibles ?",
            a: "La FUE laisse dans la zone donneuse de minuscules marques ponctuelles, invisibles dès que les cheveux atteignent quelques millimètres. Il n'y a aucune cicatrice linéaire.",
          },
        ],
      },
      form: {
        eyebrow: "Consultation gratuite",
        title: "Obtenez votre estimation de greffons.",
        text: "Envoyez-nous des photographies de votre ligne frontale, de votre vertex et de votre zone donneuse. Un médecin les examine et vous répond sous 24 heures.",
      },
    },

    dentalTreatments: {
      hero: {
        eyebrow: "Soins dentaires",
        title: "Un sourire achevé en un seul séjour.",
        text: "Planification numérique, implants, facettes et réhabilitation complète dans des hôpitaux dentaires accrédités d'Istanbul.",
      },
      intro: {
        eyebrow: "Introduction",
        title: "Planifié numériquement, posé avec précision.",
        body: [
          "Chaque dossier commence par un scan 3D et une conception numérique du sourire : vous validez la forme, la teinte et les proportions de votre nouveau sourire avant le moindre acte.",
          "Comme la planification est réalisée avant votre arrivée, la plupart des traitements se terminent en deux rendez-vous, au cours d'un unique séjour à Istanbul.",
        ],
        highlights: [
          { title: "5 à 7 jours", text: "Durée habituelle du traitement" },
          { title: "2 rendez-vous", text: "Essayage puis pose définitive" },
          { title: "10 ans et +", text: "Durée de vie attendue des facettes" },
        ],
      },
      primary: {
        eyebrow: "Prestations proposées",
        title: "Une prise en charge dentaire complète.",
        text: "D'un implant unitaire à la réhabilitation complète de la bouche.",
        items: [
          {
            title: "Implants dentaires",
            text: "Implants en titane Straumann, Nobel Biocare et ITI, posés sous guide chirurgical.",
          },
          {
            title: "Facettes porcelaine et E-max",
            text: "Facettes à préparation minimale, dont la forme et la teinte sont ajustées à votre visage, et non à un modèle standard.",
          },
          {
            title: "Couronnes zircone",
            text: "Des couronnes sans métal qui laissent passer la lumière comme l'émail naturel et résistent aux colorations.",
          },
          {
            title: "Hollywood Smile",
            text: "Une refonte esthétique complète associant facettes, couronnes et blanchiment.",
          },
          {
            title: "All-on-4 et All-on-6",
            text: "Une arcade complète fixe soutenue par quatre ou six implants — avec un bridge provisoire posé le jour même.",
          },
          {
            title: "Blanchiment et hygiène",
            text: "Blanchiment professionnel au cabinet et détartrage profond, généralement en une seule séance.",
          },
        ],
      },
      secondary: {
        eyebrow: "Déroulé du traitement",
        title: "Comment votre sourire est construit.",
        text: "Quatre étapes, chacune validée avec vous avant de poursuivre.",
        items: [
          {
            title: "1 · Évaluation numérique",
            text: "Vous envoyez des photographies et vos radiographies récentes. Nos dentistes vous transmettent un plan et un prix indicatifs.",
          },
          {
            title: "2 · Scan et conception",
            text: "À votre arrivée, une séance de scan 3D et de conception du sourire fixe la forme et la teinte exactes que vous validez.",
          },
          {
            title: "3 · Préparation et provisoires",
            text: "Les dents sont préparées et des restaurations provisoires posées : vous testez réellement votre nouveau sourire.",
          },
          {
            title: "4 · Pose définitive",
            text: "Les restaurations définitives sont collées, ajustées à l'occlusion et polies avant votre retour.",
          },
        ],
      },
      gallery: {
        eyebrow: "Galerie de sourires",
        title: "Des sourires que nous avons reconstruits.",
        text: "Cas de facettes, de couronnes et d'implants photographiés avant le traitement et à la pose définitive.",
      },
      faq: {
        eyebrow: "FAQ",
        title: "Questions sur les soins dentaires.",
        text: "Les détails qui comptent avant de partir.",
        items: [
          {
            q: "Combien de temps dure une refonte complète du sourire ?",
            a: "Entre cinq et sept jours à Istanbul, répartis sur deux rendez-vous. Les cas implantaires nécessitant une cicatrisation sont divisés en deux séjours, espacés de trois à six mois.",
          },
          {
            q: "Utilisez-vous des marques d'implants d'origine ?",
            a: "Oui. Nos cliniques partenaires travaillent avec Straumann, Nobel Biocare et ITI, et chaque patient reçoit le certificat d'implant et les documents de garantie.",
          },
          {
            q: "Mes facettes auront-elles l'air artificielles ?",
            a: "Pas si elles sont correctement conçues. La forme, la longueur et la teinte sont choisies pour votre visage lors de la séance de conception numérique, et vous validez les provisoires avant la fabrication du jeu définitif.",
          },
          {
            q: "Le traitement est-il douloureux ?",
            a: "Les actes sont réalisés sous anesthésie locale. Une sédation est disponible pour les séances longues ou pour les patients anxieux.",
          },
          {
            q: "Quelle garantie ai-je ?",
            a: "Les implants bénéficient d'une garantie fabricant à vie et les restaurations d'une garantie clinique de cinq ans, sous réserve de vos contrôles annuels.",
          },
        ],
      },
      form: {
        eyebrow: "Consultation gratuite",
        title: "Recevez votre plan dentaire.",
        text: "Envoyez une photographie de votre sourire et vos radiographies récentes. Notre équipe dentaire vous répond avec un plan indicatif sous 24 heures.",
      },
    },

    plasticSurgery: {
      hero: {
        eyebrow: "Chirurgie esthétique et plastique",
        title: "Un résultat raffiné, jamais excessif.",
        text: "Chirurgie du visage et du corps avec des chirurgiens certifiés, un bilan préopératoire complet et une convalescence encadrée.",
      },
      intro: {
        eyebrow: "Introduction",
        title: "Une chirurgie mérite d'être préparée.",
        body: [
          "La chirurgie esthétique reste une véritable chirurgie. Chaque patient PROSANA est examiné, vu en consultation physique et validé par un anesthésiste avant qu'une date opératoire ne soit confirmée.",
          "Nous planifions avec prudence, expliquons ce qu'une intervention ne peut pas accomplir et refusons les dossiers où le risque l'emporte sur le bénéfice.",
        ],
        highlights: [
          { title: "7 à 10 jours", text: "Séjour habituel à Istanbul" },
          { title: "24 h/24", text: "Coordinateur joignable pendant la convalescence" },
          { title: "12 mois", text: "Suivi inclus" },
        ],
      },
      primary: {
        eyebrow: "Interventions",
        title: "Ce que nous pratiquons.",
        text: "Des interventions du visage et du corps, toutes réalisées dans des hôpitaux chirurgicaux pleinement agréés.",
        items: [
          {
            title: "Rhinoplastie",
            text: "Technique ouverte et fermée, y compris la rhinoplastie de préservation et les cas de reprise.",
          },
          {
            title: "Liposuccion et VASER",
            text: "Remodelage ciblé de l'abdomen, des flancs, des bras et des cuisses, drainage lymphatique inclus.",
          },
          {
            title: "Abdominoplastie",
            text: "Plastie abdominale avec réparation musculaire, pour les patientes après une grossesse ou une perte de poids importante.",
          },
          {
            title: "Chirurgie mammaire",
            text: "Augmentation, réduction, lifting et changement d'implants, avec des implants certifiés.",
          },
          {
            title: "Lifting du visage et du cou",
            text: "Options de lifting profond ou de mini-lifting, planifiées selon la qualité de la peau et l'âge.",
          },
          {
            title: "Mommy makeover",
            text: "Un programme combiné — généralement abdominoplastie et chirurgie mammaire — réalisé en une seule séance.",
          },
        ],
      },
      secondary: {
        eyebrow: "Informations sur la convalescence",
        title: "À quoi ressemble vraiment la convalescence.",
        text: "Des délais honnêtes, pour organiser votre travail et vos déplacements.",
        items: [
          {
            title: "Jours 1–2 · À l'hôpital",
            text: "Une à deux nuits sous surveillance. La douleur est contrôlée par médicaments et l'œdème est attendu.",
          },
          {
            title: "Jours 3–7 · Convalescence à l'hôtel",
            text: "Contact quotidien avec le coordinateur, changements de pansements à la clinique, courtes marches encouragées.",
          },
          {
            title: "Jours 7–10 · Autorisation de voyager",
            text: "Retrait des fils ou des attelles, examen final et consignes écrites de soins à domicile.",
          },
          {
            title: "Semaines 2–6 · Retour à la normale",
            text: "Travail de bureau dès la deuxième semaine, activité physique légère dès la quatrième, activité complète dès la sixième.",
          },
          {
            title: "Mois 3–12 · Résultat définitif",
            text: "L'œdème se résorbe progressivement. Les cicatrices s'estompent au cours de la première année et sont évaluées à chaque contrôle.",
          },
        ],
      },
      gallery: {
        eyebrow: "Avant / après",
        title: "Résultats de chirurgie esthétique.",
        text: "Des cas photographiés avant l'intervention et après une convalescence complète.",
      },
      faq: {
        eyebrow: "FAQ",
        title: "Questions sur la chirurgie.",
        text: "Ce que les patients demandent avant de se décider.",
        items: [
          {
            q: "Suis-je un bon candidat ?",
            a: "C'est précisément ce que détermine la consultation gratuite. Nous examinons vos photographies, vos antécédents médicaux et vos attentes, et nous disons non lorsque la chirurgie n'est pas la bonne réponse.",
          },
          {
            q: "Qui réalise l'intervention ?",
            a: "Un chirurgien plasticien certifié et enregistré auprès du ministère turc de la Santé. Vous recevez son nom et ses qualifications avant toute réservation.",
          },
          {
            q: "Quand pourrai-je reprendre l'avion ?",
            a: "La plupart des patients sont autorisés à voyager sept à dix jours après l'intervention, une fois que le chirurgien confirme que la cicatrisation évolue normalement.",
          },
          {
            q: "Peut-on combiner plusieurs interventions ?",
            a: "Souvent oui, si la durée opératoire totale et votre état de santé le permettent. L'anesthésiste a le dernier mot sur les séances combinées.",
          },
          {
            q: "Que se passe-t-il en cas de complication ?",
            a: "Vous êtes couvert par la police chirurgicale de l'hôpital et par notre suivi de douze mois. Les conditions de reprise sont inscrites dans votre plan de traitement avant l'intervention.",
          },
        ],
      },
      form: {
        eyebrow: "Consultation gratuite",
        title: "Demandez une évaluation chirurgicale.",
        text: "Partagez vos objectifs et des photographies récentes. Un chirurgien étudie votre dossier et vous répond sous 24 heures.",
      },
    },
  },

  about: {
    hero: {
      eyebrow: "À propos de PROSANA",
      title: "Pour la santé. Pour la confiance.",
      text: "PROSANA est né d'un constat simple : les patients qui voyagent pour se soigner n'ont pas besoin de plus de choix — ils ont besoin d'un interlocuteur responsable.",
    },
    mission: {
      eyebrow: "Notre mission",
      title: "Une seule équipe, responsable de bout en bout.",
      body: [
        "PROSANA organise et gère l'intégralité du parcours de soins à Istanbul : la clinique, le chirurgien, le voyage, l'hôtel, les transferts et le suivi. Un coordinateur unique prend en charge votre dossier, du premier message au dernier contrôle.",
        "Nous ne travaillons qu'avec des hôpitaux accrédités et des chirurgiens agréés, et nous disons clairement ce qu'une intervention peut et ne peut pas accomplir — y compris lorsque la réponse honnête est que vous ne devriez pas la faire.",
      ],
    },
    values: {
      eyebrow: "Ce que nous défendons",
      title: "La rigueur clinique, sans la froideur.",
      items: [
        {
          title: "Le patient d'abord",
          text: "C'est votre diagnostic qui guide le plan. Nous ne vendons jamais une intervention dont vous n'avez pas besoin.",
        },
        {
          title: "Expertise du tourisme médical",
          text: "Douze années à coordonner des patients internationaux dans les hôpitaux d'Istanbul.",
        },
        {
          title: "Des prix transparents",
          text: "Un seul montant écrit couvrant le traitement, l'hôtel, les transferts et le suivi. Aucune surprise à l'arrivée.",
        },
        {
          title: "Exigence de qualité",
          text: "Des établissements accrédités, des matériaux certifiés et des résultats documentés — sans quoi nous déclinons le dossier.",
        },
      ],
    },
    stats: {
      title: "PROSANA en chiffres",
      items: [
        { value: "12", label: "Années de coordination de patients" },
        { value: "12 000+", label: "Parcours de soins" },
        { value: "38", label: "Pays desservis" },
        { value: "4,9/5", label: "Note moyenne" },
      ],
    },
    identity: {
      eyebrow: "Notre nom",
      title: "Pro + Sana.",
      text: "Pro évoque l'accompagnement professionnel et le progrès. Sana porte la santé, la guérison et le bien-être. Ensemble, ils décrivent une clinique précise sans être froide, et esthétique sans être superficielle.",
    },
  },

  whyProsana: {
    hero: {
      eyebrow: "Pourquoi choisir PROSANA",
      title: "La différence, c'est qui reste à vos côtés.",
      text: "N'importe qui peut prendre un rendez-vous. Très peu d'organisations assument la responsabilité de tout le parcours.",
    },
    reasons: {
      eyebrow: "Six raisons",
      title: "Ce que vous obtenez réellement.",
      text: "Non pas des promesses, mais le standard appliqué à chaque patient PROSANA.",
      items: [
        {
          title: "Des cliniques de confiance",
          text: "Des hôpitaux accrédités JCI et des centres chirurgicaux agréés, audités chaque année par notre équipe médicale.",
        },
        {
          title: "Des médecins expérimentés",
          text: "Des spécialistes certifiés qui pratiquent votre intervention chaque semaine, et non occasionnellement.",
        },
        {
          title: "Une communication transparente",
          text: "Plans écrits, chirurgiens nommés, coûts détaillés et délais réalistes — avant tout engagement.",
        },
        {
          title: "Un accompagnement personnalisé",
          text: "Un coordinateur unique, joignable sur WhatsApp pendant tout votre séjour et durant les douze mois suivants.",
        },
        {
          title: "Une expérience VIP",
          text: "Transferts privés, hôtels adaptés à la convalescence et discrétion des rendez-vous : un standard, pas une option payante.",
        },
        {
          title: "Une assistance dans votre langue",
          text: "En arabe, en anglais et en turc, avec traduction lors de chaque rendez-vous médical.",
        },
      ],
    },
    comparison: {
      eyebrow: "La différence",
      title: "PROSANA face à une organisation par vos propres moyens.",
      columns: {
        feature: "Ce qui compte",
        prosana: "Avec PROSANA",
        alone: "Par vous-même",
      },
      rows: [
        {
          feature: "Choix de la clinique",
          prosana: "Partenaires accrédités et audités",
          alone: "Avis en ligne et suppositions",
        },
        {
          feature: "Traduction médicale",
          prosana: "Incluse à chaque rendez-vous",
          alone: "À organiser et à payer séparément",
        },
        {
          feature: "Clarté du coût",
          prosana: "Un total écrit, convenu à l'avance",
          alone: "Des devis qui changent à l'arrivée",
        },
        {
          feature: "Transferts et hôtel",
          prosana: "Organisés et inclus",
          alone: "À réserver et coordonner vous-même",
        },
        {
          feature: "Après votre retour",
          prosana: "12 mois de suivi programmé",
          alone: "Le plus souvent rien",
        },
      ],
    },
  },

  beforeAfter: {
    hero: {
      eyebrow: "Avant / après",
      title: "Des résultats documentés.",
      text: "Chaque cas présenté ci-dessous a été photographié sous un éclairage constant et publié avec le consentement écrit du patient.",
    },
    filters: {
      label: "Filtrer par traitement",
      all: "Tous les traitements",
      hair: "Greffe de cheveux",
      dental: "Dentaire",
      aesthetic: "Chirurgie esthétique",
    },
    empty: "Aucun cas dans cette catégorie pour le moment.",
    cta: {
      eyebrow: "À votre tour",
      title: "Vous voulez savoir ce qui est réaliste pour vous ?",
      text: "Envoyez vos photographies. Un médecin les examine et vous dit honnêtement quel résultat espérer.",
    },
  },

  testimonialsPage: {
    hero: {
      eyebrow: "Témoignages de patients",
      title: "Dans leurs propres mots.",
      text: "Des patients venus à Istanbul avec PROSANA racontent comment le parcours s'est réellement déroulé.",
    },
    ratingSummary: {
      title: "Note moyenne des patients",
      basedOn: "Sur la base de {count} avis vérifiés",
    },
    video: {
      eyebrow: "Témoignages vidéo",
      title: "Regardez les récits complets des patients.",
      text: "Des entretiens plus longs enregistrés à la clinique lors des visites de contrôle.",
      placeholder: "Témoignage vidéo à venir",
    },
  },

  testimonialItems: {
    t1: {
      name: "Khalid A.",
      country: "Arabie saoudite",
      quote:
        "J'ai envoyé mes photographies un dimanche et j'avais un plan écrit le lundi soir. La ligne frontale qu'ils ont dessinée correspond exactement à ma demande — personne au travail ne s'en est aperçu.",
    },
    t2: {
      name: "Sophie M.",
      country: "France",
      quote:
        "Deux rendez-vous, six jours, et je suis rentrée avec le sourire que je repoussais depuis des années. Ma coordinatrice m'a traduit chaque mot du dentiste.",
    },
    t3: {
      name: "Amina R.",
      country: "Émirats arabes unis",
      quote:
        "Ce qui m'a convaincue, c'est que le chirurgien m'a dit ce qu'il ne ferait pas. C'est cette honnêteté qui m'a fait choisir PROSANA plutôt que le devis le moins cher.",
    },
    t4: {
      name: "Tom B.",
      country: "Royaume-Uni",
      quote:
        "Un chauffeur à l'arrivée, un hôtel à deux minutes de la clinique et quelqu'un qui prenait de mes nouvelles chaque jour. C'était organisé, pas commercial.",
    },
    t5: {
      name: "Elif K.",
      country: "Allemagne",
      quote:
        "Le prix annoncé est le prix que j'ai payé. Après quatre consultations ailleurs, cela justifiait à lui seul le déplacement.",
    },
    t6: {
      name: "Nadia H.",
      country: "Maroc",
      quote:
        "La convalescence a été plus difficile que prévu et ils m'ont accompagnée sur toute la ligne — visites à la clinique, médicaments, et même des appels après mon retour.",
    },
  },

  journeyPage: {
    hero: {
      eyebrow: "Parcours de soins",
      title: "Huit étapes, rien laissé au hasard.",
      text: "Voici exactement ce qui se passe, de votre premier message à votre dernier appel de suivi.",
    },
    intro: {
      title: "Vous vous concentrez sur votre traitement.",
      text: "PROSANA prend en charge la clinique, les documents, le voyage, l'hôtel et chaque rendez-vous intermédiaire.",
    },
    cta: {
      eyebrow: "Lancez la première étape",
      title: "Votre parcours commence par un message.",
      text: "Dites-nous ce que vous souhaitez traiter. Tout le reste est organisé pour vous.",
    },
  },

  journeySteps: {
    consultation: {
      title: "Consultation gratuite",
      text: "Envoyez vos photographies et vos antécédents médicaux via le formulaire ou WhatsApp. Le dossier est examiné par un médecin agréé.",
    },
    evaluation: {
      title: "Évaluation médicale",
      text: "Notre équipe médicale évalue votre éligibilité, signale tout risque et vous oriente vers le bon spécialiste.",
    },
    plan: {
      title: "Plan de traitement",
      text: "Vous recevez un plan écrit : technique, chirurgien, durée, convalescence et un prix unique tout compris.",
    },
    travel: {
      title: "Organisation du voyage",
      text: "Nous confirmons les dates, vous conseillons sur les vols, réservons votre hôtel et préparons votre lettre d'invitation si un visa est requis.",
    },
    arrival: {
      title: "Arrivée et transfert",
      text: "Un chauffeur privé vous accueille à l'aéroport d'Istanbul et vous conduit à votre hôtel. Votre coordinateur vous rencontre le jour même.",
    },
    treatment: {
      title: "Traitement",
      text: "Examens préopératoires, puis votre intervention dans un hôpital accrédité, avec traduction du début à la fin.",
    },
    recovery: {
      title: "Convalescence et suivi",
      text: "Convalescence encadrée à votre hôtel, contrôles à la clinique et un coordinateur joignable à toute heure.",
    },
    home: {
      title: "Retour chez vous",
      text: "Un examen final, des consignes écrites de soins à domicile et douze mois de suivi programmé.",
    },
  },

  hotels: {
    hero: {
      eyebrow: "Hôtels et services VIP",
      title: "La convalescence doit ressembler à du repos.",
      text: "Des chambres confortables, un transport privé et quelqu'un à vos côtés à chaque rendez-vous.",
    },
    intro: {
      eyebrow: "Inclus par défaut",
      title: "Tout ce qui entoure votre traitement.",
      text: "Ces services font partie de votre plan de traitement : ce ne sont pas des suppléments vendus à l'arrivée.",
    },
    services: [
      {
        title: "Accueil à l'aéroport",
        text: "Vous êtes accueilli dans le hall d'arrivée avec une pancarte à votre nom et conduit directement à votre hôtel. Les vols sont suivis, les retards sont donc couverts.",
      },
      {
        title: "Réservation d'hôtel",
        text: "Des hôtels quatre et cinq étoiles à quelques minutes de la clinique, choisis pour leurs étages calmes, leur service en chambre et leurs ascenseurs — des détails qui comptent pendant la convalescence.",
      },
      {
        title: "Transport VIP",
        text: "Un véhicule privé avec chauffeur pour chaque visite à la clinique, ainsi que des trajets en ville dès que vous vous sentez assez bien pour sortir.",
      },
      {
        title: "Assistance en traduction",
        text: "Un interprète arabophone, anglophone ou turcophone lors de chaque consultation : rien de votre traitement ne se perd dans la traduction.",
      },
      {
        title: "Coordination du patient",
        text: "Un coordinateur nommément désigné gère votre planning, vos documents et vos questions, et reste joignable sur WhatsApp à toute heure.",
      },
    ],
    companion: {
      eyebrow: "Voyager accompagné",
      title: "Les accompagnants sont les bienvenus.",
      text: "Les chambres accueillent un accompagnant sans supplément de chambre, et les transferts sont organisés pour vous deux.",
    },
  },

  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Commencez par une conversation.",
      text: "Dites-nous ce que vous souhaitez traiter. Un coordinateur médical vous répond sous 24 heures — en arabe, en anglais ou en turc.",
    },
    details: {
      title: "Nous joindre directement",
      addressLabel: "Adresse de la clinique",
      phoneLabel: "Téléphone",
      emailLabel: "E-mail",
      whatsappLabel: "WhatsApp",
      hoursLabel: "Horaires d'ouverture",
      hoursValue: "Du lundi au samedi, 9h00 – 19h00 (GMT+3)",
      responseLabel: "Délai de réponse",
      responseValue: "Sous 24 heures, tous les jours",
      directions: "Ouvrir dans Google Maps",
    },
    formSection: {
      eyebrow: "Demande de consultation",
      title: "Demandez votre consultation gratuite.",
      text: "Plus vous partagez de détails, plus notre évaluation sera précise.",
    },
  },

  form: {
    fields: {
      name: "Nom complet",
      country: "Pays",
      phone: "Numéro de téléphone",
      whatsapp: "Numéro WhatsApp",
      email: "Adresse e-mail",
      treatment: "Traitement souhaité",
      message: "Votre message",
      consent: "J'accepte que PROSANA me contacte au sujet de ma demande.",
    },
    placeholders: {
      name: "Votre prénom et votre nom",
      country: "Sélectionnez votre pays",
      phone: "+00 000 000 0000",
      whatsapp: "Identique au téléphone, le cas échéant",
      email: "vous@exemple.com",
      treatment: "Sélectionnez un traitement",
      message:
        "Dites-nous ce que vous souhaitez traiter et ajoutez tout détail qui vous semble utile.",
    },
    treatments: {
      hairTransplant: "Greffe de cheveux",
      dentalTreatments: "Soins dentaires",
      plasticSurgery: "Chirurgie esthétique et plastique",
      other: "Autre / je ne sais pas encore",
    },
    optional: "facultatif",
    submit: "Demander une consultation",
    submitting: "Envoi en cours…",
    orWhatsApp: "ou continuer sur WhatsApp",
    privacy:
      "Vos informations servent uniquement à répondre à votre demande. Nous ne vendons jamais les données des patients.",
    success: {
      title: "Merci — nous avons bien reçu votre demande.",
      text: "Un coordinateur médical vous répondra sous 24 heures. Si c'est urgent, écrivez-nous sur WhatsApp et nous répondrons plus vite.",
      again: "Envoyer une autre demande",
    },
    errors: {
      name: "Veuillez saisir votre nom complet.",
      country: "Veuillez sélectionner votre pays.",
      phone: "Veuillez saisir un numéro de téléphone où vous joindre.",
      email: "Veuillez saisir une adresse e-mail valide.",
      treatment: "Veuillez choisir un traitement.",
      message: "Veuillez nous indiquer brièvement ce dont vous avez besoin.",
      consent: "Veuillez confirmer que nous pouvons vous contacter.",
      generic: "Une erreur est survenue. Réessayez ou écrivez-nous sur WhatsApp.",
    },
  },

  footer: {
    intro:
      "PROSANA organise et gère des parcours de soins complets à Istanbul — soins médicaux, voyage, hébergement et suivi, sous la responsabilité d'une seule équipe.",
    treatmentsTitle: "Traitements",
    companyTitle: "Entreprise",
    contactTitle: "Contact",
    emailTitle: "Écrivez-nous un e-mail",
    emailText:
      "Vous préférez l'e-mail ? Écrivez-nous ici et nous répondrons sous 24 heures.",
    emailPlaceholder: "vous@exemple.com",
    emailMessagePlaceholder: "Comment pouvons-nous vous aider ?",
    emailSubmit: "Envoyer l'e-mail",
    rights: "Tous droits réservés.",
    disclaimer:
      "PROSANA est un coordinateur de tourisme médical. Les traitements sont réalisés par des médecins agréés dans des établissements de santé turcs accrédités. Le contenu de ce site est informatif et ne remplace pas un avis médical.",
    legal: {
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
    },
  },

  notFound: {
    title: "Cette page n'est plus ici.",
    text: "La page que vous cherchiez est introuvable. Laissez-nous vous rediriger vers quelque chose d'utile.",
    cta: "Retour à l'accueil",
    secondary: "Parler à un coordinateur",
  },
};

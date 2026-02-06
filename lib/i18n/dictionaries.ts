export type Locale = "fr" | "en"

export const dictionaries = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      team: "Team",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      tagline: "Digital Consulting Duo",
      title: "We build digital products that matter.",
      description:
        "A two-person consulting group combining DevOps & Backend expertise with Design, Mobile & Frontend mastery. From idea to production, we deliver.",
      cta: "Get in touch",
      ctaSecondary: "Our services",
    },
    services: {
      label: "What we do",
      title: "Our Services",
      description:
        "We cover the full spectrum of digital product development, from strategy to deployment.",
      items: [
        {
          slug: "mobile-apps",
          title: "Mobile Applications",
          short: "Native and cross-platform mobile apps crafted with care for performance and user experience.",
          description:
            "We design and develop mobile applications for iOS and Android using modern frameworks. From concept to App Store, we handle everything: UI/UX design, development, testing, and deployment. Our approach prioritizes performance, accessibility, and beautiful user interfaces.",
          features: [
            "iOS & Android development",
            "Cross-platform with React Native or Flutter",
            "UI/UX design and prototyping",
            "App Store optimization & deployment",
            "Performance monitoring & analytics",
          ],
        },
        {
          slug: "e-commerce",
          title: "E-Commerce",
          short: "Scalable online stores built to convert visitors into loyal customers.",
          description:
            "We build e-commerce platforms that drive revenue. Whether you need a custom Shopify store, a headless commerce solution, or a fully bespoke platform, we have the expertise. Our solutions include payment integration, inventory management, and analytics dashboards.",
          features: [
            "Shopify & headless commerce",
            "Payment gateway integration",
            "Inventory & order management",
            "Performance optimization",
            "Analytics & conversion tracking",
          ],
        },
        {
          slug: "websites",
          title: "Websites",
          short: "Fast, accessible, and beautifully designed websites that tell your story.",
          description:
            "From corporate websites to creative portfolios, we build web experiences that are fast, accessible, and visually striking. We use modern technologies like Next.js, optimized for SEO and performance. Every site is responsive and built with clean, maintainable code.",
          features: [
            "Next.js & modern frameworks",
            "SEO optimization",
            "Responsive & accessible design",
            "CMS integration",
            "Hosting & deployment on Vercel",
          ],
        },
        {
          slug: "developer-missions",
          title: "Developer Missions",
          short: "Skilled developers embedded in your team to accelerate your projects.",
          description:
            "Need extra hands on deck? We integrate seamlessly into your existing teams as senior developers. Whether it's a short sprint or a long-term engagement, we bring expertise in backend, frontend, DevOps, and mobile development directly to your workflow.",
          features: [
            "Team augmentation",
            "Senior-level expertise",
            "Agile & Scrum integration",
            "Code review & mentoring",
            "Flexible engagement models",
          ],
        },
        {
          slug: "consulting",
          title: "Consulting",
          short: "Strategic technical guidance to help you make the right decisions.",
          description:
            "We provide technical consulting to help you navigate complex decisions. From architecture reviews to technology selection, CI/CD pipeline design to cloud migration strategy, we offer clear, actionable advice backed by real-world experience.",
          features: [
            "Architecture review & design",
            "Technology selection",
            "CI/CD & DevOps strategy",
            "Cloud migration planning",
            "Security & performance audits",
          ],
        },
        {
          slug: "mvp-startup",
          title: "MVP for Startups",
          short: "Launch your product fast with a lean, production-ready MVP.",
          description:
            "Time is everything for startups. We help you go from idea to a working MVP in weeks, not months. Our lean approach focuses on core features, validated architecture, and clean code that scales. We've helped startups launch, iterate, and secure funding with solid technical foundations.",
          features: [
            "Rapid prototyping",
            "Lean product development",
            "Scalable architecture from day one",
            "Investor-ready product demos",
            "Iterative development cycles",
          ],
        },
      ],
      cta: "Learn more",
    },
    team: {
      label: "Who we are",
      title: "The Team",
      description:
        "Two complementary profiles, one shared vision: building exceptional digital products.",
      members: [
        {
          name: "Partner One",
          role: "DevOps & Backend Engineer",
          bio: "Specialized in cloud infrastructure, CI/CD pipelines, API design, and backend architecture. Passionate about building reliable, scalable systems.",
          skills: ["AWS", "Docker", "Kubernetes", "Node.js", "PostgreSQL", "Go"],
        },
        {
          name: "Partner Two",
          role: "Designer & Frontend/Mobile Developer",
          bio: "Expert in UI/UX design, frontend development, and mobile applications. Focused on creating beautiful, intuitive user experiences.",
          skills: ["Figma", "React", "React Native", "TypeScript", "Next.js", "Tailwind"],
        },
      ],
    },
    blog: {
      label: "Insights",
      title: "From the Blog",
      description: "Thoughts, tutorials, and insights from our work.",
      readMore: "Read article",
      allPosts: "View all articles",
    },
    contact: {
      label: "Get in touch",
      title: "Let's Work Together",
      description:
        "Have a project in mind? Send us a message and we'll get back to you within 24 hours.",
      form: {
        name: "Full name",
        email: "Email address",
        subject: "Subject",
        message: "Your message",
        send: "Send message",
        sending: "Sending...",
        success: "Message sent successfully! We'll get back to you soon.",
        error: "Something went wrong. Please try again.",
      },
    },
    footer: {
      tagline: "Building digital products that matter.",
      rights: "All rights reserved.",
      navigation: "Navigation",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      team: "Equipe",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      tagline: "Duo de Consulting Digital",
      title: "Nous construisons des produits digitaux qui comptent.",
      description:
        "Un duo de consultants combinant expertise DevOps & Backend avec la maitrise du Design, Mobile & Frontend. De l'idee a la production, nous livrons.",
      cta: "Nous contacter",
      ctaSecondary: "Nos services",
    },
    services: {
      label: "Ce que nous faisons",
      title: "Nos Services",
      description:
        "Nous couvrons tout le spectre du developpement de produits digitaux, de la strategie au deploiement.",
      items: [
        {
          slug: "mobile-apps",
          title: "Applications Mobiles",
          short: "Applications mobiles natives et cross-platform concues avec soin pour la performance et l'experience utilisateur.",
          description:
            "Nous concevons et developpons des applications mobiles pour iOS et Android avec des frameworks modernes. Du concept a l'App Store, nous gerons tout : design UI/UX, developpement, tests et deploiement. Notre approche privilegie la performance, l'accessibilite et de belles interfaces.",
          features: [
            "Developpement iOS & Android",
            "Cross-platform avec React Native ou Flutter",
            "Design UI/UX et prototypage",
            "Optimisation App Store & deploiement",
            "Monitoring de performance & analytics",
          ],
        },
        {
          slug: "e-commerce",
          title: "E-Commerce",
          short: "Boutiques en ligne scalables concues pour convertir les visiteurs en clients fideles.",
          description:
            "Nous construisons des plateformes e-commerce qui generent du revenu. Que vous ayez besoin d'une boutique Shopify, d'une solution headless commerce ou d'une plateforme sur mesure, nous avons l'expertise. Nos solutions incluent l'integration de paiement, la gestion des stocks et les tableaux de bord analytics.",
          features: [
            "Shopify & headless commerce",
            "Integration de passerelles de paiement",
            "Gestion des stocks & commandes",
            "Optimisation de performance",
            "Analytics & suivi de conversion",
          ],
        },
        {
          slug: "websites",
          title: "Sites Web",
          short: "Sites web rapides, accessibles et magnifiquement concus qui racontent votre histoire.",
          description:
            "Des sites corporate aux portfolios creatifs, nous construisons des experiences web rapides, accessibles et visuellement percutantes. Nous utilisons des technologies modernes comme Next.js, optimisees pour le SEO et la performance. Chaque site est responsive et construit avec un code propre et maintenable.",
          features: [
            "Next.js & frameworks modernes",
            "Optimisation SEO",
            "Design responsive & accessible",
            "Integration CMS",
            "Hebergement & deploiement sur Vercel",
          ],
        },
        {
          slug: "developer-missions",
          title: "Missions Developpeur",
          short: "Des developpeurs qualifies integres a votre equipe pour accelerer vos projets.",
          description:
            "Besoin de renforts ? Nous nous integrons parfaitement dans vos equipes existantes en tant que developpeurs seniors. Que ce soit pour un sprint court ou un engagement long terme, nous apportons notre expertise en backend, frontend, DevOps et mobile directement dans votre workflow.",
          features: [
            "Renforcement d'equipe",
            "Expertise niveau senior",
            "Integration Agile & Scrum",
            "Revue de code & mentorat",
            "Modeles d'engagement flexibles",
          ],
        },
        {
          slug: "consulting",
          title: "Consulting",
          short: "Accompagnement technique strategique pour vous aider a prendre les bonnes decisions.",
          description:
            "Nous fournissons du consulting technique pour vous aider a naviguer des decisions complexes. De la revue d'architecture a la selection technologique, du design de pipelines CI/CD a la strategie de migration cloud, nous offrons des conseils clairs et actionnables.",
          features: [
            "Revue & conception d'architecture",
            "Selection technologique",
            "Strategie CI/CD & DevOps",
            "Planification de migration cloud",
            "Audits securite & performance",
          ],
        },
        {
          slug: "mvp-startup",
          title: "MVP pour Startups",
          short: "Lancez votre produit rapidement avec un MVP lean et pret pour la production.",
          description:
            "Le temps est crucial pour les startups. Nous vous aidons a passer de l'idee a un MVP fonctionnel en semaines, pas en mois. Notre approche lean se concentre sur les fonctionnalites essentielles, une architecture validee et un code propre qui scale.",
          features: [
            "Prototypage rapide",
            "Developpement produit lean",
            "Architecture scalable des le premier jour",
            "Demos produit pour investisseurs",
            "Cycles de developpement iteratifs",
          ],
        },
      ],
      cta: "En savoir plus",
    },
    team: {
      label: "Qui sommes-nous",
      title: "L'Equipe",
      description:
        "Deux profils complementaires, une vision partagee : construire des produits digitaux exceptionnels.",
      members: [
        {
          name: "Partenaire Un",
          role: "Ingenieur DevOps & Backend",
          bio: "Specialise en infrastructure cloud, pipelines CI/CD, conception d'API et architecture backend. Passionne par la construction de systemes fiables et scalables.",
          skills: ["AWS", "Docker", "Kubernetes", "Node.js", "PostgreSQL", "Go"],
        },
        {
          name: "Partenaire Deux",
          role: "Designer & Developpeur Frontend/Mobile",
          bio: "Expert en design UI/UX, developpement frontend et applications mobiles. Concentre sur la creation d'experiences utilisateur belles et intuitives.",
          skills: ["Figma", "React", "React Native", "TypeScript", "Next.js", "Tailwind"],
        },
      ],
    },
    blog: {
      label: "Insights",
      title: "Notre Blog",
      description: "Reflexions, tutoriels et insights de notre travail.",
      readMore: "Lire l'article",
      allPosts: "Voir tous les articles",
    },
    contact: {
      label: "Nous contacter",
      title: "Travaillons Ensemble",
      description:
        "Vous avez un projet en tete ? Envoyez-nous un message et nous vous repondrons sous 24 heures.",
      form: {
        name: "Nom complet",
        email: "Adresse email",
        subject: "Sujet",
        message: "Votre message",
        send: "Envoyer le message",
        sending: "Envoi en cours...",
        success: "Message envoye avec succes ! Nous vous repondrons bientot.",
        error: "Une erreur est survenue. Veuillez reessayer.",
      },
    },
    footer: {
      tagline: "Construire des produits digitaux qui comptent.",
      rights: "Tous droits reserves.",
      navigation: "Navigation",
      legal: "Legal",
      privacy: "Politique de confidentialite",
      terms: "Conditions d'utilisation",
    },
  },
} as const

export type Dictionary = (typeof dictionaries)[Locale]

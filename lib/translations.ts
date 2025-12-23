export const translations = {
  es: {
    // Hero
    tagline: 'Full Stack Developer',
    heroTitle1: 'Construyo',
    heroTitle2: 'Soluciones',
    heroTitle3: 'con código.',
    heroDescription: 'Arquitectura escalable. UI obsesiva. Performance nativa.',

    // Status
    available: 'Disponible',
    forProjects: 'PARA PROYECTOS',

    // Stack
    coreStack: 'CORE STACK',

    // CTA
    contact: 'CONTACTO',
    startProject: 'Iniciar Proyecto',

    // Code
    cleanCode: 'Clean Code',
    cleanCodeDesc: 'Mantenibilidad y escalabilidad primero.',

    // Location
    remoteWorldwide: 'REMOTE WORLDWIDE',

    // About
    aboutTitle: 'Sobre Mí',
    aboutSubtitle: 'Pasión por crear soluciones digitales innovadoras',
    aboutText1: 'Soy un <strong>solodev full stack</strong> con amplia experiencia en el desarrollo de soluciones digitales completas. Mi enfoque combina código limpio, diseño intuitivo y estrategias de negocio para crear productos que no solo se ven bien, sino que generan valor real.',
    aboutText2: 'Especializado en <strong>React, Next.js, Node.js</strong> y optimización SEO. He trabajado con diversos clientes ayudándoles a establecer su presencia digital y hacer crecer sus negocios online.',

    // Skills
    skillsTitle: 'Habilidades',
    skillsSubtitle: 'Tecnologías y expertise',
    frontendDev: 'Frontend Development',
    backendApis: 'Backend & APIs',
    responsiveDesign: 'Responsive Design',
    seoMarketing: 'SEO & Marketing',
    performanceOpt: 'Performance Optimization',
    webDev: 'Web Development',

    // Projects
    projectsTitle: 'Proyectos Destacados',
    projectsSubtitle: 'Trabajos recientes que demuestran mi experiencia',
    viewProject: 'Ver proyecto',

    // Contact
    contactTitle: '¿Listo para tu próximo proyecto?',
    contactDescription: 'Hablemos sobre cómo puedo ayudarte a alcanzar tus objetivos digitales. Estoy disponible para proyectos freelance y colaboraciones.',
    sendEmail: 'Enviar Email',

    // Footer
    footerText: 'Full Stack Developer',
    footerSubtitle: 'Creando experiencias digitales extraordinarias',

    // WhatsApp
    whatsappTitle: '¿Necesitas una Web?',
    whatsappCta: 'Solicita tu Demo Ahora',
    whatsappMessage: '¡Hola! Quiero solicitar mi DEMO GRATIS de página web. ¿Me pueden ayudar?',
  },
  en: {
    // Hero
    tagline: 'Full Stack Developer',
    heroTitle1: 'I Build',
    heroTitle2: 'Solutions',
    heroTitle3: 'with code.',
    heroDescription: 'Scalable architecture. Obsessive UI. Native performance.',

    // Status
    available: 'Available',
    forProjects: 'FOR PROJECTS',

    // Stack
    coreStack: 'CORE STACK',

    // CTA
    contact: 'CONTACT',
    startProject: 'Start Project',

    // Code
    cleanCode: 'Clean Code',
    cleanCodeDesc: 'Maintainability and scalability first.',

    // Location
    remoteWorldwide: 'REMOTE WORLDWIDE',

    // About
    aboutTitle: 'About Me',
    aboutSubtitle: 'Passion for creating innovative digital solutions',
    aboutText1: 'I am a <strong>full stack solodev</strong> with extensive experience in developing complete digital solutions. My approach combines clean code, intuitive design, and business strategies to create products that not only look good but generate real value.',
    aboutText2: 'Specialized in <strong>React, Next.js, Node.js</strong> and SEO optimization. I have worked with diverse clients helping them establish their digital presence and grow their online businesses.',

    // Skills
    skillsTitle: 'Skills',
    skillsSubtitle: 'Technologies and expertise',
    frontendDev: 'Frontend Development',
    backendApis: 'Backend & APIs',
    responsiveDesign: 'Responsive Design',
    seoMarketing: 'SEO & Marketing',
    performanceOpt: 'Performance Optimization',
    webDev: 'Web Development',

    // Projects
    projectsTitle: 'Featured Projects',
    projectsSubtitle: 'Recent work that demonstrates my expertise',
    viewProject: 'View project',

    // Contact
    contactTitle: 'Ready for your next project?',
    contactDescription: "Let's talk about how I can help you achieve your digital goals. I'm available for freelance projects and collaborations.",
    sendEmail: 'Send Email',

    // Footer
    footerText: 'Full Stack Developer',
    footerSubtitle: 'Creating extraordinary digital experiences',

    // WhatsApp
    whatsappTitle: 'Need a Website?',
    whatsappCta: 'Request your Demo Now',
    whatsappMessage: 'Hi! I want to request my FREE website DEMO. Can you help me?',
  }
}

export type Language = 'es' | 'en'
export type TranslationKey = keyof typeof translations.es

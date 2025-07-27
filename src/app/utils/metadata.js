// Utility for generating page-specific metadata
export function generateMetadata(page) {
    const baseUrl = 'https://don-interactive.com';

    const pageConfigs = {
        home: {
            title: 'DON アントニオ - Interactive Portfolio',
            description: 'Interactive portfolio showcasing retro gaming aesthetics, web development, and creative projects by DON アントニオ',
            canonical: baseUrl,
            keywords: 'interactive design, retro gaming, web development, portfolio, creative developer'
        },
        fusion: {
            title: 'Fusion Impossible - Fast-Paced Puzzle Game | DON アントニオ',
            description: 'Play Fusion Impossible, a fast-paced puzzle game where you fuse elements in a reactor. Trigger chain reactions and compete for high scores!',
            canonical: `${baseUrl}/fusion`,
            keywords: 'fusion impossible, puzzle game, mobile game, reactor, chain reactions, high scores'
        },
        'fusion-impossible': {
            title: 'Fusion Impossible - Game Details & High Scores | DON アントニオ',
            description: 'Learn about Fusion Impossible, view high scores, and download the game. Fast-paced puzzle gameplay with strategic element fusion.',
            canonical: `${baseUrl}/fusion-impossible`,
            keywords: 'fusion impossible, game details, high scores, download, puzzle game, mobile gaming'
        },
        bfos: {
            title: 'Beats from Outer Space - Retro Space Adventure | DON アントニオ',
            description: 'Experience Beats from Outer Space, a retro-inspired space adventure featuring the Vapor Falcon and mysterious radio host Midnight.',
            canonical: `${baseUrl}/bfos`,
            keywords: 'beats from outer space, retro gaming, space adventure, vapor falcon, retro aesthetics'
        },
        gdpr: {
            title: 'Privacy Policy & GDPR Compliance | DON アントニオ',
            description: 'Privacy policy and GDPR compliance information for DON アントニオ interactive portfolio and games.',
            canonical: `${baseUrl}/gdpr`,
            keywords: 'privacy policy, GDPR, data protection, compliance'
        }
    };

    const config = pageConfigs[page] || pageConfigs.home;

    return {
        title: config.title,
        description: config.description,
        keywords: config.keywords,
        canonical: config.canonical,
        openGraph: {
            title: config.title,
            description: config.description,
            url: config.canonical,
            type: 'website',
            siteName: 'DON アントニオ Interactive',
        },
        twitter: {
            card: 'summary_large_image',
            title: config.title,
            description: config.description,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}

// Utility for generating viewport configuration
export function generateViewport() {
    return {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
        userScalable: false, // Optional: prevents zooming on mobile
    };
}

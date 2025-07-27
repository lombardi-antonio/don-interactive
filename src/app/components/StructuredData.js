import { NextSeo } from 'next-seo';

export default function StructuredData({ type = "website", data }) {
    // Base structured data for the website
    const websiteData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "DON アントニオ Interactive",
        description: "Interactive portfolio showcasing retro gaming aesthetics, web development, and creative projects",
        url: "https://don-interactive.com",
        author: {
            "@type": "Person",
            name: "DON アントニオ",
            url: "https://don-interactive.com"
        },
        mainEntity: {
            "@type": "Organization",
            name: "DON アントニオ Interactive",
            description: "Creative interactive experiences and game development",
            url: "https://don-interactive.com",
            sameAs: [
                "https://github.com/lombardi-antonio"
            ]
        }
    };

    // Game-specific structured data
    const gameData = {
        "@context": "https://schema.org",
        "@type": "Game",
        name: data?.name || "Game",
        description: data?.description || "Interactive game experience",
        url: data?.url || "https://don-interactive.com",
        creator: {
            "@type": "Person",
            name: "DON アントニオ"
        },
        gameItem: {
            "@type": "Thing",
            name: data?.name || "Game"
        }
    };

    // Portfolio/Creative Work structured data
    const portfolioData = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: data?.name || "Interactive Portfolio",
        description: data?.description || "Portfolio showcasing interactive experiences",
        creator: {
            "@type": "Person",
            name: "DON アントニオ",
            jobTitle: "Interactive Developer",
            url: "https://don-interactive.com"
        }
    };

    let structuredData;
    switch (type) {
        case "game":
            structuredData = gameData;
            break;
        case "portfolio":
            structuredData = portfolioData;
            break;
        default:
            structuredData = websiteData;
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}

import avatar from '../assets/images/ppw_green.jpg';
import hero from '../assets/images/hero_gemini.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    avatar: {
        src: avatar,
        alt: 'Ethan Donovan'
    },
    title: 'PixelPenWords',
    subtitle: 'Quiet systems for loud minds',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'My Projects',
            href: '/projects'
        },
        {
            text: 'Shop',
            href: '/tools'
        },
        {
            text: 'My Insights',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About Me',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'Dribbble',
            href: 'https://dribbble.com/'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: 'Welcome to PixelPenWords!',
        text: "I'm **LABONI B**, a writer by profession and a builder by heart. Currently transitioning into the field of product design with digital products that help people manage their cognitive load. \n This space is where I will present my projects and document my learning experience openly.\n\n Excited to have you join my new journey! \n\n Feel free to explore some of my coding endeavors on [GitHub](https://github.com/JustGoodUI/dante-astro-theme) or follow me on [Twitter/X](https://twitter.com/justgoodui).",
        image: {
            src: hero,
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: true,
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 2
};

export default siteConfig;

import avatar from '../assets/images/ppw_green.jpg';
import hero from '../assets/images/hero_gemini.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://www.pixelpenwords.com',
    avatar: {
        src: avatar,
        alt: 'PixelPenWords logo'
    },
    title: 'PixelPenWords',
    subtitle: 'Notes in progress.',
    description: 'A writing platform, product experiments, and digital ecosystem',
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Shop',
            href: '/tools'
        },
        {
            text: 'Writings',
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
            text: 'View on GitHub',
            href: 'https://github.com/laboni-prod/pixelpenwords'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/laboni-bhattacharya-38784a1a2/'
        },
        {
            text: 'Pinterest',
            href: 'https://in.pinterest.com/pixelpenwords/'
        },
        {
            text: 'Gumroad',
            href: 'https://pixelpenwords.gumroad.com/'
        }
    ],
    hero: {
        title: 'From Words to Pixels. An Honest Version.',
        text: "I'm **Laboni B**, a writer by profession and a builder by heart. Currently transitioning into the field of product design with digital products that help people manage their cognitive load. \n This space is where I will present my projects and document my learning experience openly.\n\n Excited to have you join my new journey! \n\n Track my projects and progress on [GitHub](https://github.com/laboni-prod), or reach out via the [Contact](/contact) page.",
        image: {
            src: hero,
            alt: 'A desk with an open notebook, tablet, and Pantone colour swatches'
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
    subscribeProjects: {
        enabled: true,
         title: 'The Beta Tester List',
         text: 'Join the list to be first to test new tools, apps, and experiments before they go live. Your feedback helps shape what gets built.',
         form: {
            action: '#'
        }
    },
    subscribeWritings: {
         enabled: true,
         title: 'Field Notes',
         text: 'Occasional highlights from what I’ve built, broken, learned, and written - including the short version of any long posts you may have missed.',
         form: {
            action: '#'
        }
    },

    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;

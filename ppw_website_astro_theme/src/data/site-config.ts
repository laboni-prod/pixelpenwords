import avatar from '../assets/images/ppw_green.jpg';
import hero from '../assets/images/my-setup.png';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://www.pixelpenwords.com',
    avatar: {
        src: avatar,
        alt: 'PixelPenWords logo'
    },
    title: 'PixelPenWords',
    subtitle: 'Iterating out loud.',
    description: 'A writing platform, product experiments, and digital ecosystem',
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Tools',
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
        text: "I'm **Laboni B**, a writer by profession and a builder by heart. Currently transitioning into the field of product design with digital products that help people manage their cognitive load. \n This space is where I will present my projects and document my learning experience openly. \n\n **Let me help you navigate through my site.** There are low-intensity productivity tools I have already built for different purposes, fit for Notion or Google Sheets, in the [Tools](/tools) section. You can try them out; many of them are free/PWYW. \n\n I am also working on a project (my first PWA); learning as I go. I will present them in a Projects section after I have something to show. In the meantime, I will document what I am learning in the [Writings](/blog) section, if you’d like to take a look there. The [Tags](/tags) will help you navigate. \n\n I do not not know if my process is the best possible strategy, but I intend to document what I am learning honestly (partially for you and partially for me to look back on). You can read the [About](/about) page if you’re curious about my choice. \n\n **Excited to have you here!** \n\n _Track the technical side of my progress and projects on [GitHub](https://github.com/laboni-prod) or reach out via the [Contact](/contact) page._",
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

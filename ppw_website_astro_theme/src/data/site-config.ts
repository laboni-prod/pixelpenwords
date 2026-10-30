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
    description: 'A writing platform, product experiments, and digital ecosystem',
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
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
            text: 'Notion',
            href: 'https://www.notion.com/@pixelpenwords'
        }
    ],
    hero: {
        title: 'Builder Arc In Progress...',
        subtitle: 'From sentences to systems.',
        text: "I'm **Laboni B**, a writer by profession and a builder by heart. Currently transitioning into the field of product design with digital products that help people manage their cognitive load. \n This space is where I will present my projects and document my learning experience openly. \n\n **I am also working on a project (my first PWA); learning as I go.** I will present them in a Projects section after I have something to show. In the meantime, I will document what I am learning in the [Writings](/blog) section, if you’d like to take a look there. The [Tags](/tags) will help you navigate. \n\n I do not know if my process is the best possible strategy, but I intend to document what I am learning honestly (partially for you and partially for me to look back on). You can read the [About](/about) page if you’re curious about my choice. \n\n **Excited to have you here!** \n\n _Track the technical side of my progress and projects on [GitHub](https://github.com/laboni-prod) or reach out via the [Contact](/contact) page._",
        video: '/videos/temp-stock-video.mp4',
        image: {
            src: hero,
            alt: 'A laptop screen with code on bed and teacup on the side'
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

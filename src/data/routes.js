// Single source of truth for pages. Used by the router, navigation,
// the runtime SEO hook and the build script (static HTML, sitemap).
export const routes = [
  {
    key: 'home',
    path: '/',
    label: 'Home',
    title: 'SocialMint — Fresh Ideas. Stronger Connections.',
    description:
      'At SocialMint, we help businesses build their presence online through thoughtful social media marketing, creative content and meaningful performance analysis.',
  },
  {
    key: 'about',
    path: '/about',
    label: 'About Us',
    title: 'About Us | SocialMint',
    description:
      'SocialMint was built around a simple idea: businesses deserve marketing that feels genuine, looks professional and serves a clear purpose.',
  },
  {
    key: 'services',
    path: '/services',
    label: 'Our Services',
    title: 'Our Services | SocialMint',
    description:
      'Social media management, content creation, paid social advertising, analytics, branding, digital marketing strategy, search engine optimisation and reporting.',
  },
  {
    key: 'analytics',
    path: '/marketing-analytics',
    label: 'Marketing Analytics',
    title: 'Marketing Analytics | SocialMint',
    description:
      'Creative Marketing. Measurable Understanding. Know what is working and why with SocialMint marketing analytics.',
  },
  {
    key: 'industries',
    path: '/industries',
    label: 'Industries We Serve',
    title: 'Industries We Serve | SocialMint',
    description:
      'Different businesses need different conversations with their customers. We adapt our content, campaign planning and reporting to reflect the audience and priorities of each client.',
  },
  {
    key: 'why',
    path: '/why-choose-socialmint',
    label: 'Why Choose SocialMint?',
    title: 'Why Choose SocialMint? | SocialMint',
    description:
      'A marketing partner that understands your goals. Creativity with a clear purpose, marketing and analytics together, and honest expectations.',
  },
  {
    key: 'how',
    path: '/how-we-work',
    label: 'How We Work',
    title: 'How We Work | SocialMint',
    description:
      'Listen and understand, plan together, create and prepare, publish and promote, review the results, learn and improve.',
  },
  {
    key: 'faq',
    path: '/faq',
    label: 'Frequently Asked Questions',
    shortLabel: 'FAQ',
    title: 'Frequently Asked Questions | SocialMint',
    description:
      'Answers about SocialMint services, platforms, reels, paid advertising, performance measurement, approvals and monthly reports.',
  },
  {
    key: 'contact',
    path: '/contact',
    label: 'Contact Us',
    title: 'Contact Us | SocialMint',
    description:
      'Every strong marketing relationship starts with a conversation. Tell us about your business, what you want to achieve and where you need support.',
  },
];

export const notFound = {
  title: 'Page not found | SocialMint',
  description: 'The page you are looking for could not be found.',
};

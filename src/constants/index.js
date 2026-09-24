// ─── Personal Info ───────────────────────────────────────────────────────────
export const name = 'Aashlesh';
export const fullName = 'Aashlesh Dhumane';
export const tagline = 'Software Developer · Backend Engineer · Automation Enthusiast';
export const bio = `Computer Science graduate passionate about crafting robust, scalable backend systems.
I specialise in software development and automation — bringing a smart, pragmatic engineering mindset to every project I touch.`;

export const EMAIL_JS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
export const EMAIL_JS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
export const EMAIL_JS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';

export const resumeURL =
  'https://drive.google.com/file/d/1NNOUOaxYVYarKhsSfSTZzF8pcomhnxzE/view?usp=sharing';

export const socialLinks = {
  github: 'https://github.com/aashleshdhumane',
  linkedin: 'https://www.linkedin.com/in/aashleshdhumane/',
  twitter: 'https://x.com/22aashlesh',
  stackoverflow: 'https://stackoverflow.com/users/19091591/aashlesh-dhumane',
  email: 'ashleshdhumane@gmail.com',
};

// ─── Skills / Services ───────────────────────────────────────────────────────
export const services = [
  {
    title: 'Backend Development',
    icon: 'https://cdn-icons-png.flaticon.com/512/2721/2721287.png',
  },
  {
    title: 'Automation & Scripting',
    icon: 'https://cdn-icons-png.flaticon.com/512/1260/1260234.png',
  },
  {
    title: 'Data Structures & Algorithms',
    icon: 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png',
  },
  {
    title: 'Computer Vision / ML',
    icon: 'https://cdn-icons-png.flaticon.com/512/2103/2103652.png',
  },
];

export const skills = [
  { name: 'Python',       level: 90 },
  { name: 'Java',         level: 80 },
  { name: 'JavaScript',   level: 75 },
  { name: 'React',        level: 72 },
  { name: 'Flask',        level: 78 },
  { name: 'SQL',          level: 75 },
  { name: 'Git / GitHub', level: 85 },
  { name: 'OpenCV / CV2', level: 72 },
  { name: 'Automation',   level: 85 },
];

// ─── Experience ───────────────────────────────────────────────────────────────
export const experiences = [
  {
    role: 'Software Developer',
    company: 'Self-Employed / Freelance',
    duration: '2023 – Present',
    logo: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
    url: 'https://www.linkedin.com/in/aashleshdhumane/',
    points: [
      'Built full-stack and backend-heavy projects using Python, Flask, and React.',
      'Designed and shipped a Python tool that auto-generates professional marriage biodata cards (PNG) from YAML config.',
      'Developed digital wedding invitation web apps deployed on GitHub Pages.',
      'Contributed to open-source projects and practiced algorithm design.',
    ],
  },
  {
    role: 'Computer Science Graduate',
    company: 'University (B.Sc. / B.E. CS)',
    duration: '2018 – 2022',
    logo: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
    url: 'https://www.linkedin.com/in/aashleshdhumane/',
    points: [
      'Completed a full Computer Science curriculum covering algorithms, OS, networks, and databases.',
      'Built a surveillance system that detects elderly falls with ~90% accuracy using OpenCV, contour detection, and SMTP alerts.',
      'Implemented advanced data structures including Red-Black Tree (top-down insertion) in Java.',
      'Studied practical Python programming, including MCMC sampling (emcee library fork).',
    ],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    title: 'Marriage Biodata Generator',
    description:
      'A Python tool that generates professional marriage biodata cards (PNG) from a simple YAML file. Supports decorative borders, a Ganesha emblem, rounded-corner photos, and fully data-driven sections — no code changes needed.',
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&auto=format&fit=crop',
    git: 'https://github.com/aashleshdhumane/Marriage-Biodata',
    technologies: ['Python', 'Pillow', 'YAML', 'PNG'],
  },
  {
    title: 'Digital Wedding Invitation',
    description:
      'A beautiful, animated digital wedding invitation web app built for Kartikeyan & Sajni. Deployed on GitHub Pages with responsive design and smooth animations.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop',
    git: 'https://github.com/aashleshdhumane/kartikeyan-sajni-wedding-v2',
    technologies: ['React', 'JavaScript', 'CSS', 'GitHub Pages'],
  },
  {
    title: 'Elderly Fall Monitoring System',
    description:
      'A video surveillance system that monitors elderly individuals living alone. Detects falls with 90 % accuracy using background subtraction, human detection, contour detection, and sends emergency SMS/email alerts.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop',
    git: 'https://github.com/aashleshdhumane/Monitoring-the-Alone-Living-Elderly-People-at-Home-using-Surveillance-System-',
    technologies: ['Python', 'OpenCV', 'Flask', 'SMTP', 'Contours'],
  },
  {
    title: 'RB Tree – Top-Down Insertion',
    description:
      'Red-Black Tree implementation with top-down insertion, deletion, and traversal counts. Balances the tree during the downward pass without backtracking.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop',
    git: 'https://github.com/aashleshdhumane/RBTree',
    technologies: ['Java', 'Data Structures', 'Algorithms'],
  },
  {
    title: 'Knight Tour Problem',
    description:
      'A solution to the Knight Tour chess problem — the knight visits every square on the board exactly once using Warnsdorff\'s heuristic.',
    image: 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=600&auto=format&fit=crop',
    git: 'https://github.com/aashleshdhumane/Knight-Tour-Problem',
    technologies: ['Python', 'Algorithms', 'Graph Theory'],
  },
];

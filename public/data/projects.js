/**
 * =============================================================
 *  public/data/projects.js  —  Muhammad Asyraf's Project Data
 * =============================================================
 *
 *  HOW TO ADD A NEW PROJECT
 *  -------------------------
 *  1. Copy the template block below.
 *  2. Paste it at the END of the `window.PROJECTS` array (before the closing `]`).
 *  3. Fill in every field — that's all!  No HTML changes needed.
 *
 *  TEMPLATE:
 *  ---------
 *  {
 *    id:          'unique-slug',           // kebab-case, no spaces
 *    title:       'Your Project Title',
 *    category:    'Web Dev',               // must be one of:
 *                                          //   'Web Dev' | 'Mobile App' | 'Networking' | 'IoT & Hardware'
 *    emoji:       '🚀',                    // single emoji for the card
 *    tags:        ['Tag1', 'Tag2'],        // tech stack badges
 *    problem:     'What problem does this solve?',
 *    takeaways:   ['Learned X', 'Built Y', 'Improved at Z'],
 *    github:      'https://github.com/asyrafpuzi/your-repo',
 *    demo:        '',                      // live demo URL or '' to hide button
 *    featured:    false,                   // true = show in Hero "Featured" block (pick max 3)
 *    image:       'assets/images/project-placeholder.svg', // relative path from /public
 *  },
 *
 * =============================================================
 */

window.PROJECTS = [
  {
    id: 'freelancer-booking-ai-profile',
    title: 'Web-Based Freelancer Service Booking System with AI Profile Generator',
    category: 'Web Dev',
    emoji: '💼',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Node.js', 'MySQL', 'ToyyibPay', 'AI'],
    problem: '2026 · Final Year Project (CSP600 / CSP650). Built a full-stack booking and payment platform with AI profile generation, then validated the system through purposive usability testing.',
    takeaways: [
      'Built a full-stack freelancer service booking workflow',
      'Implemented AI-assisted freelancer profile generation',
      'Integrated MySQL data storage and ToyyibPay payments',
      'Validated usability through purposive testing',
    ],
    github: 'https://github.com/asyrafpuzi',
    demo: '',
    featured: true,
    image: 'assets/images//projects/flancer.png',
  },
  {
    id: 'zakat-calculator-mobile',
    title: 'Zakat Calculator Mobile Application',
    category: 'Mobile App',
    emoji: '📱',
    tags: ['Android Studio', 'Android', 'Mobile Computing', 'Calculation Logic'],
    problem: '2026 · Degree Mobile Cloud Computing Project (ITT632). Developed an Android application with a user-friendly interface and structured calculation logic to automate Zakat computations from financial inputs.',
    takeaways: [
      'Developed the application in Android Studio',
      'Designed a user-friendly financial input interface',
      'Structured the Zakat calculation logic',
      'Automated Zakat computations from user inputs',
    ],
    github: 'https://github.com/asyrafpuzi',
    demo: '',
    featured: true,
    image: 'assets/images/projects/zakatcalc.png',
  },
  {
    id: 'exhibit-showcase-system',
    title: 'Exhibit Showcase System',
    category: 'Web Dev',
    emoji: '🖥️',
    tags: ['Front-End', 'Back-End', 'Content Management', 'Web Deployment'],
    problem: '2025 · Education Technology Intern at TechDome Penang. Built and deployed an interactive front-end and back-end web showcase system to present exhibit details and streamline content management for visitors.',
    takeaways: [
      'Created an interactive exhibit presentation experience',
      'Implemented both front-end and back-end functionality',
      'Streamlined exhibit content management',
      'Built and deployed the system during my internship',
    ],
    github: 'https://github.com/asyrafpuzi',
    demo: '',
    featured: true,
    image: 'assets/images/projects/exhibitshowcase.png',
  },
  {
    id: 'sehat-healthcare-network',
    title: 'Enterprise Healthcare Network Design Proposal (SEHAT Healthcare Centre)',
    category: 'Networking',
    emoji: '🌐',
    tags: ['16 VLANs', 'Gigabit Ethernet', 'IP Addressing', 'SSL VPN', 'MFA'],
    problem: '2025 · Degree Network Design & Management Project (ITT550). Designed LAN segmentation and secure remote access as Network Infrastructure Engineer for a multi-floor healthcare branch.',
    takeaways: [
      'Designed 16 departmental VLANs',
      'Specified Gigabit Ethernet and structured IP addressing',
      'Proposed SSL VPN secure remote access',
      'Included Multi-Factor Authentication in the security design',
    ],
    github: 'https://github.com/asyrafpuzi',
    demo: '',
    featured: false,
    image: 'assets/images/projects/sehathealthcare.png',
  },
  {
    id: 'flood-sensor-alarm',
    title: 'Flood Sensor Alarm System',
    category: 'IoT & Hardware',
    emoji: '🌊',
    tags: ['ESP32 IoT Kit', 'Arduino IDE', 'Water-Level Sensor', 'IoT'],
    problem: '2024 · Diploma Internet of Things (IoT) Project. Produced a real-time water-level monitoring and early flood alert prototype using an ESP32 IoT Kit and Arduino IDE with threshold-triggered alarms.',
    takeaways: [
      'Built the prototype with an ESP32 IoT Kit',
      'Implemented real-time water-level monitoring',
      'Configured threshold-triggered early flood alarms',
      'Developed the prototype using Arduino IDE',
    ],
    github: 'https://github.com/asyrafpuzi',
    demo: '',
    featured: false,
    image: 'assets/images/projects/flancer.png',
  },
  {
    id: 'rolling-thunder-bowling-booking',
    title: 'Rolling Thunder Bowling Booking System',
    category: 'Web Dev',
    emoji: '🎳',
    tags: ['Web Booking', 'Lane Reservation', 'Relational Database', 'Scheduling'],
    problem: '2024 · Diploma in Computer Science Project. Created a web-based lane reservation and scheduling system for Rolling Thunder Bowling to manage customer bookings and time slots.',
    takeaways: [
      'Created a web-based bowling lane reservation system',
      'Managed customer bookings and available time slots',
      'Designed the relational database schema',
      'Structured the booking workflow to minimize scheduling conflicts',
    ],
    github: 'https://github.com/asyrafpuzi',
    demo: '',
    featured: false,
    image: 'assets/images/projects/rollingthunder.png',
  },
];

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';
const dev = (name, variant = 'original') => `${DEVICON}/${name}/${name}-${variant}.svg`;
const simple = (name) => `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${name}.svg`;
const local = (file) => `${import.meta.env.BASE_URL}images/${file}`;

export const CAREER_START = 2014;
export const yearsOfExperience = () => new Date().getFullYear() - CAREER_START;

export const profile = {
  name: 'Leo Felix',
  title: 'Senior Frontend Developer',
  roles: ['Angular', 'React', 'Vue.js', 'TypeScript', 'SCSS'],
  email: 'leofelixnam@gmail.com',
  phone: '+91 8438429288',
  phoneHref: 'tel:+918438429288',
  location: 'Trichy, Tamil Nadu, India',
  mapUrl: 'https://maps.google.com/?q=Tiruchirappalli,+Tamil+Nadu,+India',
  dob: '06 September 1989',
  nationality: 'Indian',
};

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/leo-felix-95b4552a/', icon: dev('linkedin', 'plain') },
  { label: 'GitHub', href: 'https://github.com/leofelixlaw', icon: dev('github') },
  { label: 'Facebook', href: 'https://www.facebook.com/leo.vpet', icon: dev('facebook', 'plain') },
  { label: 'Pinterest', href: 'https://www.pinterest.co.uk/leofelixl/', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/pinterest.svg' },
];

export const stats = [
  { value: `${yearsOfExperience()}+`, label: 'Years of experience' },
  { value: '10+', label: 'Airline client products' },
  { value: '50%', label: 'Faster page loads delivered' },
  { value: '30%', label: 'Lower initial load time' },
];

export const highlights = ['Angular 19+', 'React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'SCSS', 'RxJS', 'NgRx', 'Redux', 'REST APIs', 'Design Systems', 'Figma', 'Cursor AI', 'Claude AI'];

export const experience = [
  {
    period: 'May 2026 – Present',
    company: 'Freelance',
    role: 'Senior Frontend Developer',
    location: 'Remote',
    summary: 'Building and modernising web applications for startups and small businesses on a freelance basis.',
    points: [
      'Build responsive websites, single-page applications and admin dashboards with Angular 19+, React and Vue.js.',
      'Upgrade legacy AngularJS and jQuery code to modern frameworks, improving performance and maintainability.',
      'Take work end to end: requirements, UI design in Figma, development, testing and deployment.',
    ],
  },
  {
    period: 'Sep 2021 – Apr 2026',
    company: 'Skill Quotient Resources Sdn Bhd',
    role: 'Senior Frontend Developer',
    location: 'Kuala Lumpur, Malaysia',
    summary: 'Enterprise human resource management platform covering employee records, leave and attendance, and timesheets with multi-level approval workflows.',
    points: [
      'Developed enterprise-level frontend applications for HR, leave management and timesheet modules using TypeScript and modern component-based frameworks.',
      'Built scalable, reusable UI components (data tables, forms, date pickers, approval flows), improving code consistency and reuse across modules.',
      'Implemented role-based access with route guards and JWT authentication, and integrated REST APIs for timesheet entry, approvals and reports.',
      'Drove performance tuning (lazy loading, code splitting, optimised rendering) that reduced initial load time by over 30%.',
      'Collaborated with backend, QA and design teams to deliver high-quality, maintainable features in Agile sprints.',
    ],
  },
  {
    period: 'Sep 2020 – Aug 2021',
    company: 'Wego',
    role: 'Senior Front-end Engineer',
    location: 'Kuala Lumpur, Malaysia',
    summary: 'Leading travel metasearch platform in the Middle East and Asia Pacific, helping millions of users every month compare and book flights and hotels.',
    points: [
      'Delivered responsive pages for flight and hotel search, results listing, filters and sorting using HTML, SCSS and TypeScript in a fast-paced Agile environment.',
      'Introduced modular component patterns to optimise UI workflows, cutting feature delivery time by 20%.',
      'Worked closely with product designers on interaction models, contributing to a 10% boost in usability metrics.',
      'Drove continuous front-end improvements in code quality, test coverage and documentation.',
    ],
  },
  {
    period: 'Aug 2014 – Aug 2020',
    company: 'GoQuo (M) Sdn Bhd',
    role: 'Front-end Engineer & Product Designer',
    location: 'Kuala Lumpur, Malaysia',
    summary: 'Airline retailing technology: booking engine, dynamic packaging of flights with hotels and transfers, ancillaries, payments and an airline marketing automation tool, serving airlines such as AirAsia, Etihad Airways and Bamboo Airways.',
    roles: [
      {
        title: 'Front-end Engineer & Product Designer',
        period: 'Feb 2018 – Aug 2020',
        points: [
          'Spearheaded redesigns and front-end refactoring across GoQuo’s travel booking platforms, cutting page load times by over 50%.',
          'Created and maintained a scalable design system and icon font library, ensuring consistency across 10+ airline client products.',
          'Reduced technical debt by 40% within the first month by introducing architectural simplifications and reusable modules.',
          'Designed detailed mock-ups for screen templates, charts and graphs, leading to better product discovery.',
        ],
      },
      {
        title: 'Frontend Web Developer & UI/UX Developer',
        period: 'Jul 2016 – Jan 2018',
        points: [
          'Improved page render times from more than 8 seconds to under 2 seconds by rewriting the application.',
          'Developed and managed responsive, CMS-based websites for airline clients.',
          'Designed and built responsive email templates (MJML) for the airline marketing automation tool, contributing to a 5% revenue uplift in campaign performance.',
        ],
      },
      {
        title: 'Web Developer & Graphic Designer',
        period: 'Aug 2014 – Jun 2016',
        points: [
          'Developed fully functional responsive prototypes using HTML5, CSS3, JavaScript and jQuery.',
          'Maintained client websites on an ongoing basis.',
        ],
      },
    ],
  },
];

export const education = [
  { period: '2010 – 2012', school: 'IGNOU', degree: 'Master of Computer Application (MCA)' },
  { period: '2007 – 2010', school: 'Don Bosco College', degree: 'Bachelor of Computer Application (BCA)' },
];

export const skillBars = [
  { name: 'Angular', level: 92 },
  { name: 'React', level: 85 },
  { name: 'Vue.js', level: 90 },
  { name: 'HTML5 / SCSS', level: 95 },
  { name: 'TypeScript / JavaScript', level: 90 },
  { name: 'UI/UX Design', level: 82 },
  { name: 'AI-Assisted Development (Cursor, Claude)', level: 88 },
];

export const languages = [
  { name: 'Tamil', level: 'Native' },
  { name: 'English', level: 'Working proficiency' },
];

export const techGroups = [
  {
    name: 'Frameworks',
    items: [
      { name: 'Angular', icon: dev('angular'), url: 'https://angular.dev/' },
      { name: 'React', icon: dev('react'), url: 'https://react.dev/' },
      { name: 'Vue.js', icon: dev('vuejs'), url: 'https://vuejs.org/' },
      { name: 'AngularJS', icon: dev('angularjs'), url: 'https://angularjs.org/' },
      { name: 'Nuxt', icon: dev('nuxtjs'), url: 'https://nuxt.com/' },
      { name: 'jQuery', icon: dev('jquery'), url: 'https://jquery.com/' },
      { name: 'Bootstrap', icon: dev('bootstrap'), url: 'https://getbootstrap.com/' },
    ],
  },
  {
    name: 'AI-Assisted Development',
    items: [
      { name: 'Claude AI', icon: simple('claude'), color: '#D97757', url: 'https://claude.ai/' },
      { name: 'Claude Code', icon: simple('claude'), color: '#D97757', url: 'https://www.anthropic.com/claude-code' },
      { name: 'Cursor AI', icon: simple('cursor'), color: '#111827', url: 'https://cursor.com/' },
    ],
  },
  {
    name: 'Languages & Styling',
    items: [
      { name: 'TypeScript', icon: dev('typescript'), url: 'https://www.typescriptlang.org/' },
      { name: 'JavaScript', icon: dev('javascript'), url: 'https://developer.mozilla.org/docs/Web/JavaScript' },
      { name: 'HTML5', icon: dev('html5'), url: 'https://developer.mozilla.org/docs/Web/HTML' },
      { name: 'CSS3', icon: dev('css3'), url: 'https://developer.mozilla.org/docs/Web/CSS' },
      { name: 'SASS / SCSS', icon: dev('sass'), url: 'https://sass-lang.com/' },
      { name: 'MJML', icon: local('mjml.svg'), url: 'https://mjml.io/' },
      { name: 'JSON', icon: dev('json'), url: 'https://www.json.org/' },
    ],
  },
  {
    name: 'State & Data',
    items: [
      { name: 'RxJS', icon: dev('rxjs'), url: 'https://rxjs.dev/' },
      { name: 'NgRx', icon: dev('ngrx'), url: 'https://ngrx.io/' },
      { name: 'Redux', icon: dev('redux'), url: 'https://redux.js.org/' },
      { name: 'Postman', icon: dev('postman'), url: 'https://www.postman.com/' },
    ],
  },
  {
    name: 'Backend & Cloud',
    items: [
      { name: 'Node.js', icon: dev('nodejs'), url: 'https://nodejs.org/' },
      { name: 'Express.js', icon: dev('express'), url: 'https://expressjs.com/' },
      { name: 'NestJS', icon: dev('nestjs'), url: 'https://nestjs.com/' },
      { name: 'PostgreSQL', icon: dev('postgresql'), url: 'https://www.postgresql.org/' },
      { name: 'SQL Server', icon: dev('microsoftsqlserver'), url: 'https://www.microsoft.com/sql-server' },
      { name: 'Azure', icon: dev('azure'), url: 'https://azure.microsoft.com/' },
    ],
  },
  {
    name: 'Build & Testing',
    items: [
      { name: 'Vite', icon: dev('vitejs'), url: 'https://vitejs.dev/' },
      { name: 'Webpack', icon: dev('webpack'), url: 'https://webpack.js.org/' },
      { name: 'Gulp', icon: dev('gulp', 'plain'), url: 'https://gulpjs.com/' },
      { name: 'Grunt', icon: dev('grunt'), url: 'https://gruntjs.com/' },
      { name: 'npm', icon: dev('npm', 'original-wordmark'), url: 'https://www.npmjs.com/' },
      { name: 'Vitest', icon: dev('vitest'), url: 'https://vitest.dev/' },
      { name: 'Jasmine', icon: dev('jasmine'), url: 'https://jasmine.github.io/' },
      { name: 'Karma', icon: dev('karma'), url: 'https://karma-runner.github.io/' },
      { name: 'Protractor', icon: dev('protractor', 'plain'), url: 'https://www.protractortest.org/' },
    ],
  },
  {
    name: 'Design & Collaboration',
    items: [
      { name: 'Figma', icon: dev('figma'), url: 'https://www.figma.com/' },
      { name: 'Sketch', icon: dev('sketch'), url: 'https://www.sketch.com/' },
      { name: 'Adobe XD', icon: dev('xd'), url: 'https://helpx.adobe.com/xd/' },
      { name: 'Photoshop', icon: dev('photoshop'), url: 'https://www.adobe.com/products/photoshop.html' },
      { name: 'Dreamweaver', icon: dev('dreamweaver'), url: 'https://www.adobe.com/products/dreamweaver.html' },
      { name: 'Git', icon: dev('git'), url: 'https://git-scm.com/' },
      { name: 'GitHub', icon: dev('github'), url: 'https://github.com/' },
      { name: 'GitLab', icon: dev('gitlab'), url: 'https://about.gitlab.com/' },
      { name: 'Bitbucket', icon: dev('bitbucket'), url: 'https://bitbucket.org/' },
      { name: 'Jira', icon: dev('jira'), url: 'https://www.atlassian.com/software/jira' },
      { name: 'Slack', icon: dev('slack'), url: 'https://slack.com/' },
      { name: 'Google Maps', icon: local('google-maps.svg'), url: 'https://developers.google.com/maps' },
    ],
  },
];

export const portfolio = [
  { title: 'Travlytix', tag: 'Travel analytics', href: 'https://travlytix.com/', image: local('work01.jpg') },
  { title: 'Travlytix Admin', tag: 'Admin dashboard', href: 'https://drive.google.com/file/d/1S3OZr6IGTjAxeSF-MiTBSewl_QghCs1A/view', image: local('work02.jpg') },
  { title: 'Malindo Holidays', tag: 'Airline holidays', href: 'https://www.malindoholidays.com/', image: local('work03.jpg') },
  { title: 'Malindo Holidays Engine', tag: 'Booking engine', href: 'https://drive.google.com/file/d/1wSn2WmZZEy04MZhwq05JXzANDs4pimsq/view?usp=sharing', image: local('work04.jpg') },
  { title: 'AskHeadhunter', tag: 'Recruitment', href: 'https://askheadhunter.com/', image: local('work05.jpg') },
  { title: 'Flickpost', tag: 'Social platform', href: 'https://flickpost.in/', image: local('work06.jpg') },
  { title: 'Tripovo', tag: 'Travel website', href: 'http://www.tripovo.com/', image: local('work07.jpg') },
  { title: 'Air Arabia Holidays', tag: 'Airline holidays', href: 'https://holidays.airarabia.com/en/packages/others', image: local('work08.jpg') },
];

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'stack', label: 'Tech Stack' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
];

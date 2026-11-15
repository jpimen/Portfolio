export const profile = {
  name: 'John Lloyd Pimentel',
  roles: ['Aspiring Software Developer', 'Full-Stack Web Developer', 'Mobile Application Developer', 'BS Information Technology Student'],
  email: 'Add your public email address',
  github: 'Add your GitHub profile URL',
  linkedin: 'Add your LinkedIn profile URL',
};

export const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'Python', 'Django', 'PHP',
  'MongoDB', 'PostgreSQL', 'Flutter', 'Dart', 'Git', 'GitHub', 'REST APIs', 'Generative AI', 'AI Automation',
];

export const articles = [
  { category: 'Development', title: 'Building Full-Stack Applications: From Frontend to Backend', description: 'Notes on connecting thoughtful interfaces with reliable application logic.' },
  { category: 'AI / ML', title: 'Integrating AI into Practical Software Applications', description: 'Exploring where machine learning can make everyday tools more useful.' },
  { category: 'Project notes', title: 'What I Learned Developing a Facility Maintenance System', description: 'Lessons from shaping a reporting workflow around real campus needs.' },
  { category: 'Mobile', title: 'Designing Better User Experiences for Mobile Applications', description: 'Small interface decisions that make mobile journeys easier to follow.' },
  { category: 'Journal', title: 'My Journey as an Aspiring Software Developer', description: 'A running reflection on learning, building, and getting better through practice.' },
];

export const projects = [
  {
    number: '01', slug: 'peelsafe', name: 'PeelSafe AI', title: 'Banana Leaf Disease Detection System', image: '/projects/peelsafe-ai.png', type: 'AI / Full-stack web', role: 'Full-Stack Developer',
    description: 'A web-based AI-powered system designed to identify banana leaf diseases through image classification. Users can upload banana leaf images, receive disease predictions with confidence scores, view scan history, and access treatment and prevention recommendations.',
    features: ['AI-powered image classification', 'Confidence scores and scan history', 'Treatment and prevention guidance'],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'CNN', 'AI / ML'],
  },
  {
    number: '02', slug: 'fixit', name: 'FixIt', title: 'Facility Maintenance Reporting System', image: '/projects/fixit.png', type: 'Campus systems / AI', role: 'Full-Stack Developer',
    description: 'A facility maintenance reporting platform designed to streamline issue reporting, verification, assignment, and tracking within an academic institution.',
    features: ['Photo-based maintenance tickets', 'Administrative verification and assignment', 'Status tracking and AI-assisted image analysis'],
    technologies: ['React', 'Vite', 'Django', 'Python', 'MongoDB', 'Ollama'],
  },
  {
    number: '03', slug: 'spark-up', name: 'Spark Up', title: 'Event Seat Reservation System', image: '/projects/spark-up.png', type: 'Web / Android', role: 'Full-Stack Developer',
    description: 'A digital event seat reservation system designed to simplify event management and seat booking within a university environment.',
    features: ['Event and reservation management', 'Interactive seat selection', 'Availability monitoring and admin dashboard'],
    technologies: ['Web development', 'JavaScript', 'Android', 'Java', 'GridLayout'],
  },
  {
    number: '04', slug: 'msme', name: 'MSME Pathways', title: 'Smart Loan Support for the Informal Sector', image: '/projects/msme-pathways.png', type: 'Fintech / Mobile / AI', role: 'Full-Stack / Mobile Application Developer',
    description: 'A smart loan support platform designed to help informal microentrepreneurs understand loan requirements, access financial guidance, and receive AI-assisted support through a mobile application and administrative dashboard.',
    features: ['Mobile app and administrative dashboard', 'AI-powered chatbot and profiling', 'Loan guidance and blockchain audit references'],
    technologies: ['Flutter', 'Dart', 'React', 'Django REST Framework', 'MongoDB Atlas', 'Solidity', 'Ethereum', 'Groq AI', 'PyTorch', 'OpenCV'],
  },
];

export const journey = [
  ['Academic projects', 'Turning coursework and independent ideas into working software.'],
  ['Full-stack systems', 'Building across frontend, backend, data, and the connections between them.'],
  ['Web & mobile', 'Exploring how useful product experiences adapt to different screens and contexts.'],
  ['AI experimentation', 'Testing practical AI integrations in applications, from image analysis to assisted workflows.'],
  ['Collaborative capstone', 'Learning through shared planning, implementation, feedback, and iteration.'],
  ['Continuous learning', 'Strengthening my fundamentals through hands-on development and technical exploration.'],
];

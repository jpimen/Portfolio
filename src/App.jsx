import { useEffect, useState } from 'react';
import { articles, journey, profile, projects, skills } from './data.js';

const navigation = [
  ['intro', 'Intro'], ['writing', 'Writing'], ['projects', 'Projects'],
  ['experience', 'Experience'], ['about', 'About'], ['contact', 'Contact'],
];

const projectImageBySlug = {
  peelsafe: '/peelsafe.png',
  msme: '/Msme.png',
  'spark-up': '/sparkup.png',
  fixit: '/fixit.png',
};

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '↓'}</span>;
}

function Navigation({ active, menuOpen, setMenuOpen }) {
  return <header className="site-nav">
    <a href="#intro" className="monogram" aria-label="John Lloyd Pimentel, back to intro">JL<span>.</span></a>
    <span className="nav-note">PORTFOLIO / 2026</span>
    <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
      <span></span><span></span>
    </button>
    <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
      {navigation.map(([id, label]) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} aria-current={active === id ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{label}<span className="nav-dot" /></a>)}
    </nav>
  </header>;
}

function SectionLabel({ number, label, dark = false }) {
  return <div className={`section-label${dark ? ' on-dark' : ''}`}><span>{number}</span><span className="label-rule" /><span>{label}</span></div>;
}

function ProjectPreview({ slug, number, image, title }) {
  const [imageUnavailable, setImageUnavailable] = useState(false);
  const variants = {
    peelsafe: <div className="mock-window disease-window"><div className="mock-top"><span className="mock-brand"><i /> PeelSafe <small>AI</small></span><span className="mock-menu">OVERVIEW&nbsp;&nbsp; SCANS&nbsp;&nbsp; GUIDE</span></div><div className="mock-content"><div className="mock-caption">LATEST ANALYSIS <b>● COMPLETE</b></div><div className="leaf-report"><div className="leaf-art"><div className="leaf-shape"><span /></div><small>IMAGE PREVIEW</small></div><div className="report-copy"><small>DETECTION RESULT</small><strong>Black Sigatoka</strong><div className="confidence"><span>Confidence score</span><b>94.8%</b></div><div className="score-line"><i /></div><span className="report-note">Treatment recommendations <Arrow diagonal /></span></div></div></div></div>,
    fixit: <div className="mock-window fixit-window"><div className="fix-sidebar"><b>fix<span>it</span></b><small>WORKSPACE</small><span>◈ &nbsp; Overview</span><span>▤ &nbsp; Reports</span><span>♧ &nbsp; Team</span><small>ACCOUNT</small></div><div className="fix-main"><div className="mock-top"><span>Good morning, Admin.</span><span className="avatar-dot">A</span></div><small>MAINTENANCE OVERVIEW</small><div className="fix-stats"><div><small>OPEN REPORTS</small><b>12</b></div><div><small>IN PROGRESS</small><b>04</b></div><div><small>RESOLVED</small><b>28</b></div></div><div className="ticket-list"><div><i className="orange"/> Leaking faucet <small>ROOM 204 · HIGH</small><b>Review</b></div><div><i className="green"/> Broken light fixture <small>LIBRARY · NORMAL</small><b>Assigned</b></div><div><i className="yellow"/> Air conditioning <small>LAB 3 · NORMAL</small><b>Review</b></div></div></div></div>,
    'spark-up': <div className="mock-window spark-window"><div className="spark-head"><span>spark up<span className="spark-star">✳</span></span><small>EVENTS &nbsp; VENUE &nbsp; ABOUT</small></div><div className="spark-body"><div><small>PHINMA UNIVERSITY PRESENTS</small><h4>Campus<br/><em>Connect.</em></h4><p>Find your people.<br/>Save your seat.</p><span className="spark-button">RESERVE YOUR SEAT ↗</span></div><div className="seat-map"><div className="stage">STAGE</div><div className="seats">{Array.from({ length: 28 }, (_, i) => <i key={i} className={i === 5 || i === 13 || i === 20 ? 'taken' : i === 9 ? 'selected' : ''} />)}</div><small>12 seats remaining</small></div></div></div>,
    msme: <div className="mock-window msme-window"><div className="msme-head"><span>pathways<span>.</span></span><small>FINANCIAL TOOLS &nbsp; PROFILE</small><i>JP</i></div><div className="msme-body"><div className="msme-welcome"><small>YOUR BUSINESS, YOUR NEXT STEP</small><h4>Growing a business<br/>starts with <em>a path.</em></h4><p>Explore loan options and find guidance for your next move.</p><span>EXPLORE MY OPTIONS&nbsp; ↗</span></div><div className="path-card"><small>YOUR SUPPORT GUIDE</small><div className="path-avatar">AI</div><strong>Let's find the<br/>right path forward.</strong><div className="path-chat">Tell me what you need help with… <b>↑</b></div></div></div></div>,
  };
  const showImage = image && !imageUnavailable;
  return <div className={`project-art art-${slug}${showImage ? ' has-project-image' : ''}`} aria-label={`${title} project preview`} role="img">
    {showImage ? <>
      <img className="project-image" src={image} alt="" aria-hidden="true" onError={() => setImageUnavailable(true)} />
      <span className="project-image-caption">PROJECT SCREENSHOT / {number}</span>
    </> : <><div className="art-topline"><span>INTERFACE STUDY / {number}</span><span>VISUAL PREVIEW · NOT A PRODUCT SCREENSHOT</span></div>{variants[slug]}</>}
  </div>;
}

function Project({ project }) {
  return <article className={`project project-${project.slug}`} id={`project-${project.slug}`}>
    <div className="project-head"><span className="project-index">{project.number} <i>—</i> {project.type}</span><span className="project-role">{project.role}</span></div>
    <ProjectPreview slug={project.slug} number={project.number} image={projectImageBySlug[project.slug]} title={project.name} />
    <div className="project-copy"><div><h3>{project.name}<span className="project-period">.</span></h3><p className="project-title">{project.title}</p><p className="project-description">{project.description}</p></div><div className="project-details"><div className="detail-label">SELECTED FEATURES</div><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><div className="tech-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div></div>
  </article>;
}

export default function App() {
  const [active, setActive] = useState('intro');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const targets = navigation.map(([id]) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: '-22% 0px -60% 0px', threshold: [0, 0.15, 0.35] });
    targets.forEach((target) => observer.observe(target));
    const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); revealObserver.unobserve(entry.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((node) => revealObserver.observe(node));
    return () => { observer.disconnect(); revealObserver.disconnect(); };
  }, []);

  useEffect(() => {
    const onKey = (event) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return <>
    <Navigation active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <main>
      <section id="intro" className="hero section-dark">
        <div className="hero-top"><span className="eyebrow"><i /> BUILDING IN THE OPEN <b>/</b> WEB <b>/</b> MOBILE <b>/</b> AI</span><span className="hero-edition">AN ONGOING PRACTICE<br/>PANGASINAN, PH</span></div>
        <div className="hero-body"><div className="hero-name-wrap"><p className="hero-role">SOFTWARE DEVELOPER &amp; CURIOUS BUILDER</p><h1>JOHN LLOYD<br/><em>PIMENTEL.</em></h1></div><div className="hero-intro"><p>I build practical digital experiences, develop meaningful software, and explore how technology can solve real-world problems.</p><div className="hero-actions"><a className="button button-lime" href="#projects">Explore my work <Arrow diagonal /></a><a className="text-link" href="#about">More about me <Arrow diagonal /></a></div><div className="exploring"><span>CURRENTLY EXPLORING</span><div>{['Full-Stack Development', 'React & Flutter', 'AI Integration', 'Software Architecture'].map((item) => <span key={item}>{item}</span>)}</div></div></div></div>
        <div className="hero-bottom"><div className="availability"><i /> OPEN TO IT INTERNSHIP / OJT</div><div className="hero-social"><span>GitHub</span><span>LinkedIn</span><span>Email</span></div><a className="scroll-cue" href="#about">SCROLL TO EXPLORE <Arrow /></a></div>
        <div className="hero-aside">PORTFOLIO<br/>2026 <span>✳</span></div>
      </section>

      <section id="about" className="approach section-light">
        <SectionLabel number="01" label="THE APPROACH" />
        <div className="approach-grid"><h2 className="display-heading reveal">Building with purpose.<br/><em>Learning through experience.</em></h2><div className="approach-copy reveal"><p className="lead">I’m a fourth-year BSIT student specializing in Web and Mobile Development at PHINMA University of Pangasinan.</p><p>My development journey revolves around designing, building, and improving software applications that address practical problems. I enjoy working across frontend and backend development, exploring AI integrations, and transforming ideas into functional digital products.</p><p className="objective">Right now, I’m seeking an IT internship / On-the-Job Training opportunity where I can contribute to real-world software development, grow my technical capabilities, and learn from professional teams.</p><blockquote>“Build with curiosity. Develop with purpose. Improve with every iteration.”</blockquote></div></div>
        <div className="education-strip"><span className="detail-label">CURRENTLY STUDYING</span><span>BS Information Technology</span><span>PHINMA University of Pangasinan</span><span>Major · Web and Mobile Development</span><span>Fourth year</span></div>
        <div className="toolkit"><div className="toolkit-intro"><span className="detail-label">TOOLS IN MY PRACTICE</span><p>A growing toolkit, shaped by coursework, projects, and curiosity.</p></div><div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
      </section>

      <section id="writing" className="writing section-dark">
        <SectionLabel number="02" label="FIELD NOTES" dark />
        <div className="section-intro"><h2 className="display-heading reveal">Learning, building,<br/><em>and sharing ideas.</em></h2><p className="section-aside">A place for things I’m learning along the way.<br/>These are works in progress — more soon.</p></div>
        <div className="article-list">{articles.map((article, index) => <article className="article-row reveal" key={article.title}><span className="article-index">0{index + 1}</span><div className="article-main"><span className="article-category">{article.category}</span><h3>{article.title}</h3><p>{article.description}</p></div><span className="article-status">DRAFT / NOTES IN PROGRESS <i>↗</i></span></article>)}</div>
        <div className="section-footnote"><span>FIELD NOTES / 2026</span><span>Writing is underway. Check back soon.</span></div>
      </section>

      <section id="projects" className="work section-light">
        <SectionLabel number="03" label="BUILT IN THE OPEN" />
        <div className="section-intro"><h2 className="display-heading reveal">Ideas into applications.<br/><em>Problems into solutions.</em></h2><p className="section-aside">Selected academic and independent work<br/>in web, mobile, and applied AI.</p></div>
        <div className="projects-list">{projects.map((project) => <Project project={project} key={project.slug} />)}</div>
        <div className="work-end"><span>FOUR PROJECTS / MANY ITERATIONS</span><a href="#contact">Have a project in mind? <Arrow diagonal /></a></div>
      </section>

      <section id="experience" className="experience section-dark">
        <SectionLabel number="04" label="EXPERIENCE" dark />
        <div className="section-intro"><h2 className="display-heading reveal">Growing beyond<br/><em>the code.</em></h2><p className="section-aside">A development journey built through<br/>practice, collaboration, and curiosity.</p></div>
        <div className="journey-list">{journey.map(([title, description], index) => <article className="journey-row reveal" key={title}><span className="journey-index">0{index + 1}</span><h3>{title}</h3><p>{description}</p><span className="journey-plus">+</span></article>)}</div>
        <p className="experience-note"><i /> My experience so far comes from academic and collaborative projects — I’m looking forward to learning in a professional environment.</p>
      </section>

      <section id="contact" className="contact section-lime">
        <div className="contact-kicker"><span>LET’S START A CONVERSATION</span><span>AVAILABLE FOR IT INTERNSHIP / OJT</span></div>
        <div className="contact-main"><h2>Have an idea?<br/><em>Let’s build something.</em></h2><div className="contact-copy"><p>I’m always interested in connecting with developers, learning from experienced professionals, exploring opportunities, and collaborating on meaningful software projects.</p><a className="button button-dark" href="#contact-details">Contact details <Arrow diagonal /></a></div></div>
        <div className="contact-links" id="contact-details"><div><span>EMAIL</span><b>{profile.email}</b><small>Replace with a public contact address</small></div><div><span>GITHUB</span><b>{profile.github}</b><small>Add your profile URL</small></div><div><span>LINKEDIN</span><b>{profile.linkedin}</b><small>Add your profile URL</small></div></div>
      </section>
    </main>
    <footer className="footer section-dark"><a className="footer-mark" href="#intro">JL<span>.</span></a><p>Build thoughtfully.<br/>Keep learning. Keep creating.</p><div className="footer-links"><span>GitHub <Arrow diagonal /></span><span>LinkedIn <Arrow diagonal /></span><span>Email <Arrow diagonal /></span><a href="#intro">Back to top ↑</a></div><div className="footer-bottom"><span>© 2026 John Lloyd Pimentel. All rights reserved.</span><span>MADE WITH CURIOSITY <i>✳</i></span></div></footer>
  </>;
}

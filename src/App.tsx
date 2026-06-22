import {
  ArrowRight,
  ChevronDown,
  Clapperboard,
  Globe2,
  Hotel,
  Layers3,
  LockKeyhole,
  Map,
  Orbit,
  Play,
  Route,
  Sparkles,
  Tv,
  UsersRound,
} from 'lucide-react';

const imagePath = (name: string) => `/images/${name}`;

type CTAButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'ghost' | 'light';
};

function CTAButton({ children, variant = 'primary' }: CTAButtonProps) {
  const className =
    variant === 'primary'
      ? 'btn-primary'
      : variant === 'light'
        ? 'btn-light'
        : 'btn-ghost';

  return (
    <a href="#contact" className={className}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
    </a>
  );
}

type ImageCardProps = {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
};

function ImageCard({ src, alt, className = '', children }: ImageCardProps) {
  return (
    <article className={`image-card ${className}`}>
      <img src={src} alt={alt} />
      {children}
    </article>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Bangzuu Studios home">
        <span className="brand-mark" aria-hidden="true">
          <img src="/images/bangzuu-logo.png" alt="" />
        </span>
        <span>
          <strong>Bangzuu</strong>
          <small>Studios</small>
          <em>AI-native film studio for travel & hospitality</em>
        </span>
      </a>

      <nav className="main-nav" aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#services" className="nav-with-icon">
          Services
          <ChevronDown aria-hidden="true" size={14} />
        </a>
        <a href="#studio">Studio</a>
        <a href="#contact">Contact</a>
      </nav>

      <CTAButton>Start your project</CTAButton>
    </header>
  );
}

function HeroCollage() {
  return (
    <div className="hero-collage" id="work" aria-label="Bangzuu Studios story examples">
      <ImageCard
        className="lagoon-card"
        src={imagePath('lagoon-sunset.png')}
        alt="Cinematic tropical lagoon at magenta sunset"
      >
        <button className="play-button" type="button" aria-label="Play lagoon film preview">
          <Play aria-hidden="true" size={18} fill="currentColor" />
        </button>
      </ImageCard>

      <ImageCard
        className="arrival-card"
        src={imagePath('resort-pool-night.png')}
        alt="Luxury hotel pool at night with palms and warm reflections"
      >
        <div className="episode-copy">
          <span>Episode 03</span>
          <strong>The Arrival</strong>
          <small>9:24</small>
        </div>
      </ImageCard>

      <ImageCard
        className="window-card"
        src={imagePath('airplane-window.png')}
        alt="Airplane window view over violet sunset clouds"
      />

      <ImageCard
        className="story-card"
        src={imagePath('story-village.png')}
        alt="Traveler overlooking a Mediterranean cliffside village at sunset"
      >
        <div className="story-copy">
          <span>A story world</span>
          <strong>Your Brand. Our Universe.</strong>
        </div>
        <Sparkles className="story-spark" aria-hidden="true" size={22} />
      </ImageCard>

      <ImageCard
        className="cruise-card"
        src={imagePath('cruise-dusk.png')}
        alt="Luxury cruise ship glowing at dusk in a tropical harbor"
      />

      <ImageCard
        className="strip-card"
        src={imagePath('coastal-road.png')}
        alt="Mediterranean coastal road at sunset with cinematic light trails"
      >
        <div className="strip-badge">
          <Sparkles aria-hidden="true" size={15} />
          7 Episodes
        </div>
      </ImageCard>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <Header />

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">AI-native film studio for travel & hospitality</p>
          <h1>
            Turn your travel brand into a{' '}
            <em>story people follow.</em>
          </h1>
          <p className="lead">
            Bangzuu Studios creates AI-made mini-movies, microdramas and cinematic
            campaigns for destinations, hotels, resorts, cruise lines, airlines,
            booking platforms and travel brands.
          </p>
          <p className="supporting">
            Not ads squeezed into someone else's content.
            <br />
            <span>Original stories built around your brand.</span>
          </p>

          <div className="hero-actions">
            <CTAButton>Start Your Project</CTAButton>
            <CTAButton variant="ghost">View Showreel</CTAButton>
          </div>
        </div>

        <HeroCollage />
      </div>
    </section>
  );
}

const services = [
  {
    title: 'Mini-Movies',
    body: 'Cinematic branded films with an actual plot.',
    icon: Clapperboard,
  },
  {
    title: 'Microdramas',
    body: 'Short, episodic stories designed to make the next episode impossible to ignore.',
    icon: Tv,
  },
  {
    title: 'Campaign Systems',
    body: 'One central story developed across every format and platform.',
    icon: Layers3,
  },
];

function ServiceCards() {
  return (
    <section className="services-section" id="services" aria-label="Bangzuu services">
      {services.map(({ title, body, icon: Icon }) => (
        <article className="service-card" key={title}>
          <div className="service-icon" aria-hidden="true">
            <Icon size={34} strokeWidth={1.5} />
          </div>
          <div>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

const problemPoints = [
  {
    copy: 'Audiences have learned to skip your brand before you have finished saying it.',
    icon: Play,
  },
  {
    copy: 'The creator pauses the video. The scripted endorsement begins. The audience jumps forward thirty seconds.',
    icon: Orbit,
  },
  {
    copy: 'The creator keeps the audience. The platform keeps the distribution. You keep a collection of temporary impressions.',
    icon: UsersRound,
  },
  {
    copy: 'Bangzuu Studio flips that model.',
    icon: Sparkles,
    accent: true,
  },
];

function StoryWorldCard() {
  const episodes = [
    ['EP 01', 'The Invitation'],
    ['EP 02', 'The Detour'],
    ['EP 03', 'The Choice'],
    ['EP 04', 'Coming Soon'],
  ];

  const benefits = [
    ['Owned Story World', 'Your IP. Your Audience.', Globe2],
    ['Multi-Platform Assets', 'Built once. Scaled everywhere.', Layers3],
    ['Long-Term Value', 'Stories that keep working.', Orbit],
  ];

  return (
    <article className="story-world-card" aria-label="Original story world dashboard">
      <div className="series-layout">
        <ImageCard
          className="series-main"
          src={imagePath('coastal-road.png')}
          alt="Mediterranean coastal road key art for Beyond the Postcard"
        >
          <div className="ip-badge">
            <Sparkles aria-hidden="true" size={18} />
            Original IP
          </div>
          <div className="series-title">
            <span>The Adriatic</span>
            <h3>Beyond the Postcard</h3>
            <p>An original series by your brand</p>
          </div>
        </ImageCard>

        <div className="episode-list">
          {episodes.map(([number, title], index) => (
            <article className="episode-tile" key={number}>
              <img
                src={imagePath(index === 1 ? 'lagoon-sunset.png' : index === 2 ? 'story-village.png' : 'resort-pool-night.png')}
                alt=""
                aria-hidden="true"
              />
              <div>
                <span>{number}</span>
                <strong>{title}</strong>
              </div>
              {index === 3 ? <LockKeyhole aria-hidden="true" size={20} /> : null}
            </article>
          ))}
        </div>
      </div>

      <div className="benefit-strip">
        {benefits.map(([title, body, Icon]) => (
          <div className="benefit-item" key={title as string}>
            <span className="benefit-icon" aria-hidden="true">
              <Icon size={24} strokeWidth={1.7} />
            </span>
            <div>
              <strong>{title}</strong>
              <small>{body}</small>
            </div>
          </div>
        ))}
      </div>

      <div className="pill-row" aria-label="Story system benefits">
        {['One Story', 'Many Formats', 'Endless Journeys'].map((pill) => (
          <span key={pill}>
            <Sparkles aria-hidden="true" size={15} />
            {pill}
          </span>
        ))}
      </div>
    </article>
  );
}

function OldModelSection() {
  return (
    <section className="old-model-section" id="studio">
      <div className="old-model-copy">
        <p className="eyebrow light">The old model is broken</p>
        <h2 className="old-model-heading">
          <span>Stop buying</span>
          <span>Sponsor reads</span>
          <em>Start owning the story.</em>
        </h2>

        <div className="problem-list">
          {problemPoints.map(({ copy, icon: Icon, accent }) => (
            <div className={`problem-point ${accent ? 'accent' : ''}`} key={copy}>
              <span aria-hidden="true">
                <Icon size={24} fill={accent ? 'currentColor' : 'none'} />
              </span>
              <p>{copy}</p>
            </div>
          ))}
        </div>

        <p className="model-body">
          Your brand pays to borrow attention, appears briefly inside someone else's story,
          then disappears when the campaign ends. We create original entertainment built
          around your destination, property, route, experience or platform, giving your
          brand the story, the characters, the creative world and the campaign assets.
        </p>

        <p className="closing-line">
          Stop paying to interrupt the content people are watching, and own the content
          they can't help but come back for.
        </p>
      </div>

      <StoryWorldCard />
    </section>
  );
}

const plotExamples = [
  'A hotel becomes the location of a cinematic mystery.',
  'A destination becomes the world of an unfolding adventure.',
  'A cruise becomes the setting for a character-led series.',
  'A booking platform becomes the reason the entire journey begins.',
];

function PlotSection() {
  return (
    <section className="plot-section">
      <div className="section-kicker">
        <p className="eyebrow">Your brand should be the plot</p>
        <h2>
          Not the <em>placement.</em>
        </h2>
      </div>
      <div className="plot-copy">
        <p>
          A hotel does not need another influencer walking into the lobby and calling
          the room "stunning." A destination does not need another montage of beaches,
          markets and drone shots. A cruise line does not need another presenter reading
          out the facilities. And a booking platform does not become memorable by placing
          its logo at the end of someone else's trip.
        </p>
        <p>
          We turn the brand itself into the setting, engine and reason for the story.
        </p>
        <div className="plot-list">
          {plotExamples.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

const creationCards = [
  {
    title: 'Mini-Movies',
    body: 'Standalone cinematic stories built around a destination, property, journey or experience. Each film is developed with a clear concept, recognisable characters and a narrative designed to hold attention, not simply deliver information.',
  },
  {
    title: 'Microdrama Series',
    body: 'Short, episodic stories designed to create an open loop. Every episode gives the audience a reason to watch the next one, allowing your brand to build momentum across multiple releases.',
  },
  {
    title: 'Campaign Systems',
    body: 'One central story developed across the entire campaign: hero film, episodic extensions, trailers, teasers, social cutdowns, campaign stills and platform-specific assets from the same creative world.',
  },
];

function WhatWeCreateSection() {
  return (
    <section className="content-section dark-section">
      <div className="section-heading">
        <p className="eyebrow">What we create</p>
        <h2>One idea, built to work everywhere.</h2>
      </div>
      <div className="deep-card-grid">
        {creationCards.map((card) => (
          <article className="deep-card" key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </article>
        ))}
      </div>
      <CTAButton variant="ghost">Explore our services</CTAButton>
    </section>
  );
}

const industryCards = [
  ['Hotels, resorts and hospitality groups', 'Launch properties, introduce new experiences and give guests a reason to picture themselves inside the brand.', Hotel],
  ['Destinations and tourism boards', 'Move beyond generic destination marketing and create a story capable of changing how a place is perceived.', Map],
  ['Cruise lines and airlines', 'Turn routes, journeys and onboard experiences into narratives people actively want to enter.', Route],
  ['Booking platforms and travel technology', 'Build emotional relevance around products usually marketed through price, convenience and functionality.', Globe2],
  ['Travel operators and experience brands', 'Transform an itinerary or activity into something audiences can imagine themselves living.', Sparkles],
  ['Creative and advertising agencies', 'Add an AI-native film studio to the campaign without building an entirely new production department.', Layers3],
] as const;

function IndustriesSection() {
  return (
    <section className="content-section light-content-section">
      <div className="section-heading compact">
        <p className="eyebrow light">Built for more than destinations</p>
        <h2>Bangzuu works across the wider travel and hospitality industry.</h2>
      </div>
      <div className="industry-grid">
        {industryCards.map(([title, body, Icon]) => (
          <article className="industry-card" key={title}>
            <Icon aria-hidden="true" size={26} strokeWidth={1.6} />
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AISection() {
  return (
    <section className="ai-section">
      <ImageCard
        className="ai-image"
        src={imagePath('story-village.png')}
        alt="Cinematic destination character scene at sunset"
      />
      <div className="ai-copy">
        <p className="eyebrow">AI is how we make it possible</p>
        <h2>The story is why anyone watches.</h2>
        <p>
          AI allows us to create locations, characters, eras, environments and visual
          ideas that traditional production can make difficult, slow or commercially
          unrealistic. It allows one campaign to move across countries, worlds and
          formats without losing its visual identity.
        </p>
        <p>
          But nobody watches a film because of the software used to produce it. They
          watch because the opening creates curiosity, because the character gives them
          someone to follow, and because the story makes them need to know what happens
          next.
        </p>
        <p>
          Every Bangzuu project is developed through concept, writing, art direction,
          production, editing and sound. AI removes many of the limits that once kept
          ambitious ideas off the screen. It does not replace creative judgement.
        </p>
      </div>
    </section>
  );
}

const processSteps = [
  ['01', 'Find the hook', 'We identify the audience, the commercial objective and the idea capable of stopping the scroll.'],
  ['02', 'Build the story', 'We develop the concept, plot, characters, script and visual world around the brand. The product is embedded into the narrative from the beginning, not added awkwardly at the end.'],
  ['03', 'Create the campaign', 'We produce the central film and expand it into the episodes, trailers, cutdowns, stills and campaign assets needed across every channel.'],
];

function ProcessSection() {
  return (
    <section className="content-section process-section">
      <div className="section-heading">
        <p className="eyebrow">From commercial objective to cinematic story</p>
        <h2>One story, built to keep working for you.</h2>
      </div>
      <div className="process-grid">
        {processSteps.map(([number, title, body]) => (
          <article className="process-card" key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactBand() {
  return (
    <section className="contact-band" id="contact">
      <div>
        <p className="eyebrow">Your next campaign does not need another sponsor read</p>
        <h2>It needs a story only your brand could own.</h2>
        <p>
          Whether you are launching a hotel, repositioning a destination, promoting a
          cruise, introducing a new route or building a travel platform people remember,
          Bangzuu Studio turns the commercial objective into original entertainment.
        </p>
        <strong>Build something audiences do not skip.</strong>
      </div>
      <CTAButton>Start a project</CTAButton>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>Bangzuu Studio</strong>
        <p>AI-made mini-movies, microdramas and cinematic campaigns for travel and hospitality brands.</p>
      </div>
      <nav aria-label="Footer navigation">
        <a href="#work">Work</a>
        <a href="#services">Services</a>
        <a href="#studio">Studio</a>
        <a href="#contact">Contact</a>
      </nav>
      <small>© 2026 Bangzuu Studio.</small>
    </footer>
  );
}

function SelectedWorkSection() {
  return (
    <section className="selected-work-section">
      <div>
        <p className="eyebrow">Selected work</p>
        <h2>Original films, microdramas and campaign worlds created by Bangzuu Studios.</h2>
      </div>
      <CTAButton variant="ghost">View all work</CTAButton>
    </section>
  );
}

export function App() {
  return (
    <main>
      <HeroSection />
      <ServiceCards />
      <OldModelSection />
      <PlotSection />
      <WhatWeCreateSection />
      <SelectedWorkSection />
      <IndustriesSection />
      <AISection />
      <ProcessSection />
      <ContactBand />
      <SiteFooter />
    </main>
  );
}

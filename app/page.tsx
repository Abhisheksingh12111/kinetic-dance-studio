import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  Play,
} from "lucide-react";

const classes = [
  { number: "01", name: "Hip Hop", level: "All levels", time: "Mon · Wed · Fri", tone: "lime" },
  { number: "02", name: "Contemporary", level: "Intermediate", time: "Tue · Thu", tone: "violet" },
  { number: "03", name: "Jazz Funk", level: "Beginner", time: "Wed · Sat", tone: "orange" },
  { number: "04", name: "Bollywood", level: "All levels", time: "Fri · Sun", tone: "pink" },
];

const schedule = [
  { time: "07:00", className: "Contemporary Flow", coach: "Maya", level: "Intermediate" },
  { time: "17:30", className: "Hip Hop Foundations", coach: "Dev", level: "Beginner" },
  { time: "19:00", className: "Jazz Funk", coach: "Rhea", level: "Open" },
  { time: "20:30", className: "Urban Choreo", coach: "Arjun", level: "Advanced" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav-wrap" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Kinetic home">
          <span className="brand-mark">K</span>
          <span>KINETIC</span>
        </a>
        <div className="nav-links">
          <a href="#classes">Classes</a>
          <a href="#studio">Studio</a>
          <a href="#schedule">Schedule</a>
        </div>
        <a className="nav-cta" href="#trial">
          Book a trial <ArrowUpRight size={16} />
        </a>
      </nav>

      <section className="hero" id="top">
        <img
          className="hero-image"
          src="/hero-dancer.png"
          alt="Dancer performing a powerful leap in a dramatic studio"
        />
        <div className="hero-shade" />
        <div className="hero-orbit" aria-hidden="true">
          <span>MOVE</span><i /> <span>CREATE</span><i /> <span>REPEAT</span>
        </div>
        <div className="hero-copy">
          <p className="eyebrow"><span /> Mumbai · Est. 2018</p>
          <h1>OWN THE<br /><em>RHYTHM.</em></h1>
          <div className="hero-bottom">
            <p>Find your movement. Build your confidence.<br />Take the floor like it belongs to you.</p>
            <a className="circle-link" href="#classes" aria-label="Explore classes">
              <ArrowDown size={25} />
            </a>
          </div>
        </div>
        <div className="vertical-label">DANCE WITHOUT LIMITS — 2026</div>
      </section>

      <div className="ticker" aria-label="Dance styles available">
        <div className="ticker-track">
          HIP HOP <b>✦</b> CONTEMPORARY <b>✦</b> JAZZ FUNK <b>✦</b> BOLLYWOOD <b>✦</b> FREESTYLE <b>✦</b> HIP HOP <b>✦</b> CONTEMPORARY <b>✦</b> JAZZ FUNK
        </div>
      </div>

      <section className="classes section-pad" id="classes">
        <div className="section-head">
          <div>
            <p className="kicker">[ Choose your energy ]</p>
            <h2>FIND YOUR<br /><span>STYLE.</span></h2>
          </div>
          <p className="section-intro">Four disciplines. One floor. Classes built for total beginners, working dancers, and everyone ready to move.</p>
        </div>
        <div className="class-grid">
          {classes.map((item) => (
            <a className={`class-card ${item.tone}`} href="#schedule" key={item.name}>
              <div className="class-top">
                <span>{item.number}</span>
                <ArrowUpRight size={24} />
              </div>
              <div>
                <p>{item.level}</p>
                <h3>{item.name}</h3>
                <small>{item.time}</small>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="studio" id="studio">
        <div className="studio-image-wrap">
          <img src="/class-rehearsal.png" alt="A group rehearsing contemporary dance in the Kinetic studio" />
          <a className="play-button" href="#schedule" aria-label="See this week's classes">
            <Play fill="currentColor" size={21} />
          </a>
          <span className="image-tag">THE KINETIC METHOD</span>
        </div>
        <div className="studio-copy">
          <p className="kicker">[ More than steps ]</p>
          <h2>TRAIN HARD.<br />MOVE <span>FREE.</span></h2>
          <p>We teach technique without taking away your individuality. Every session combines foundations, musicality, and performance—so you don&apos;t just learn choreography. You learn to own it.</p>
          <div className="stats">
            <div><strong>18+</strong><span>Weekly classes</span></div>
            <div><strong>06</strong><span>Expert coaches</span></div>
            <div><strong>08</strong><span>Years moving</span></div>
          </div>
          <a className="text-link" href="#trial">Meet the studio <ArrowUpRight size={18} /></a>
        </div>
      </section>

      <section className="schedule section-pad" id="schedule">
        <div className="section-head schedule-title">
          <div>
            <p className="kicker">[ Today at Kinetic ]</p>
            <h2>STEP INTO<br /><span>THE ROOM.</span></h2>
          </div>
          <div className="date-chip"><CalendarDays size={19} /> Monday, 14 Sep</div>
        </div>
        <div className="schedule-list">
          {schedule.map((item) => (
            <a href="#trial" className="schedule-row" key={item.time}>
              <span className="schedule-time">{item.time}</span>
              <div><h3>{item.className}</h3><p>with {item.coach}</p></div>
              <span className="level">{item.level}</span>
              <ArrowUpRight className="schedule-arrow" size={22} />
            </a>
          ))}
        </div>
      </section>

      <section className="trial" id="trial">
        <div className="trial-grid" aria-hidden="true" />
        <p className="kicker">[ Your first move ]</p>
        <h2>THE FLOOR<br />IS <span>YOURS.</span></h2>
        <p>Your first class is on us. Pick a style, meet the crew, and experience Kinetic.</p>
        <a className="trial-button" href="mailto:hello@kineticdance.studio?subject=Trial class booking">
          Book a free trial <ArrowUpRight size={20} />
        </a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">K</span><span>KINETIC</span></a>
        <div className="footer-meta">
          <span><MapPin size={15} /> Bandra West, Mumbai</span>
          <span><Clock3 size={15} /> Mon–Sun · 7am–10pm</span>
        </div>
        <div className="socials"><a href="#top">Instagram</a><a href="#top">YouTube</a><a href="#top">Contact</a></div>
        <p className="copyright">© 2026 Kinetic Dance Studio</p>
      </footer>
    </main>
  );
}

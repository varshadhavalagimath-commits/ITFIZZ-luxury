
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowUpRight,
  Menu,
  Sparkles,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "100%", label: "GOOD VIBES ONLY" },
  { value: "0%", label: "BORING MOMENTS" },
  { value: "24/7", label: "FIZZ YOUR DAY" },
];

function App() {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      intro
        .from(".nav-item", {
          y: -18,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
        })
        .from(
          ".hero-letter",
          {
            yPercent: 110,
            opacity: 0,
            rotate: 4,
            duration: 0.9,
            stagger: 0.035,
          },
          "-=0.35"
        )
        .from(
          ".hero-copy",
          {
            y: 24,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        )
        .from(
          ".stat-item",
          {
            y: 24,
            opacity: 0,
            duration: 0.65,
            stagger: 0.15,
          },
          "-=0.35"
        )
        .from(
          ".product-wrap",
          {
            scale: 0.78,
            opacity: 0,
            rotate: -8,
            duration: 1.1,
            ease: "back.out(1.3)",
          },
          "-=0.75"
        );

      // Main visual movement is controlled by scroll progress.
      gsap.to(".product-wrap", {
        y: 220,
        x: 55,
        rotation: 18,
        scale: 0.78,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".orbit", {
        rotation: 100,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.from(".story-content", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".story",
          start: "top 78%",
          once: true,
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const headline = "WELCOME ITZ FIZZ";

  return (
    <main ref={pageRef}>
      <section className="hero relative min-h-screen overflow-hidden">
        <div className="background-glow" />

        <header className="nav-bar nav-item">
          <a href="#home" className="brand">
            ITZ<span>FIZZ.</span>
          </a>

          <nav className="desktop-nav">
            <a href="#home">HOME</a>
            <a href="#story">OUR VIBE</a>
            <a href="#stats">THE FIZZ</a>
          </nav>

          <a href="#story" className="nav-cta">
            EXPLORE <ArrowUpRight size={16} />
          </a>

          <button
            className="mobile-menu"
            aria-label="Explore the page"
            onClick={() =>
              document.querySelector("#story")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            <Menu size={23} />
          </button>
        </header>

        <div className="hero-inner" id="home">
          <div className="hero-text">
            <div className="eyebrow hero-copy">
              <Sparkles size={14} />
              <span>YOUR DAILY DOSE OF EXTRA</span>
            </div>

            <h1 className="hero-title" aria-label={headline}>
              <span className="headline-line">
                {"WELCOME".split("").map((letter, i) => (
                  <span
                    className="letter-mask"
                    key={`welcome-${i}`}
                  >
                    <span className="hero-letter">{letter}</span>
                  </span>
                ))}
              </span>

              <span className="headline-line second-line">
                {"ITZ FIZZ".split("").map((letter, i) => (
                  <span
                    className="letter-mask"
                    key={`fizz-${i}`}
                  >
                    <span
                      className={`hero-letter ${
                        letter === "F" || letter === "I" ||
                        letter === "Z"
                          ? "accent-letter"
                          : ""
                      }`}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </span>
                  </span>
                ))}
              </span>
            </h1>

            <p className="hero-copy hero-description">
              Pop the top. Feel the fizz. Make ordinary
              days a little more extraordinary.
            </p>

            <a href="#story" className="primary-btn hero-copy">
              CATCH THE VIBE
              <span className="btn-icon">
                <ArrowUpRight size={19} />
              </span>
            </a>
          </div>

          <div className="product-stage" aria-label="Decorative soda can">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="floating-tag tag-top">
              <Sparkles size={15} />
              <span>FRESH ENERGY</span>
            </div>

            <div className="product-wrap">
              <div className="can-shadow" />

              <div className="soda-can">
                <div className="can-top">
                  <div className="can-opening" />
                </div>

                <div className="can-body">
                  <span className="can-small-text">THE ORIGINAL</span>
                  <div className="can-brand">
                    ITZ
                    <br />
                    <span>FIZZ</span>
                  </div>
                  <div className="can-sparkle">✳</div>
                  <div className="can-flavour">BOLD. BRIGHT. BUBBLY.</div>
                  <div className="can-bottom-text">GOOD TIMES INSIDE</div>
                </div>

                <div className="can-base" />
              </div>
            </div>

            <div className="floating-tag tag-bottom">
              <span className="pulse-dot" />
              GOOD VIBES ONLY
            </div>

            <span className="decor decor-star">✳</span>
            <span className="decor decor-plus">+</span>
            <span className="decor decor-dot">●</span>
          </div>
        </div>

        <div className="hero-footer" id="stats">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div className="stat-item" key={stat.label}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <a href="#story" className="scroll-indicator">
            <span>SCROLL TO FEEL IT</span>
            <ArrowDown size={17} />
          </a>
        </div>
      </section>

      <section className="story" id="story">
        <div className="story-content">
          <span className="section-kicker">NOT JUST A DRINK. A MOOD.</span>

          <h2>
            MAKE ROOM
            <br />
            FOR <span>MORE FIZZ.</span>
          </h2>

          <p>
            A little sparkle. A little attitude. A whole lot
            of personality. ITZ FIZZ is here to turn the
            everyday into your favourite part of the day.
          </p>

          <a href="#home" className="story-link">
            BACK TO THE TOP <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="story-graphic">
          <span className="graphic-ring ring-a" />
          <span className="graphic-ring ring-b" />
          <span className="graphic-star">✳</span>
          <span className="graphic-text">STAY<br />BUBBLY.</span>
        </div>
      </section>

      <footer className="site-footer">
        <a href="#home" className="brand">
          ITZ<span>FIZZ.</span>
        </a>
        <span>GOOD TIMES. GREAT ENERGY.</span>
        <span>© 2026 ITZ FIZZ — CONCEPT WEBSITE</span>
      </footer>
    </main>
  );
}

export default App;
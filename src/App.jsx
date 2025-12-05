import React, { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "DB Plomberie a refait toute notre salle de bain en respectant délais et budget, avec un résultat digne d’un hôtel.",
    name: "Sophie & Karim",
    role: "Rénovation complète à Courbevoie",
  },
  {
    quote:
      "Intervention express un dimanche soir pour une fuite, photos avant/après et devis ultra clair. On se sent vraiment accompagnés.",
    name: "Hôtel Horizon",
    role: "Maintenance plomberie 24/7",
  },
  {
    quote:
      "Suivi digital, rapports de consommation et planning prévisionnel : nos copropriétaires ont enfin de la visibilité.",
    name: "Syndic Val de Seine",
    role: "Contrat de maintenance copropriété",
  },
];

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("services");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [stats, setStats] = useState({
    interventions: 0,
    rating: 0,
    years: 0,
  });
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [faqOpenIndex, setFaqOpenIndex] = useState(0);

  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "/";
  const isLegalPage = pathname.startsWith("/mentions-legales");
  const isFaqPage =
    pathname.startsWith("/faq") || pathname.startsWith("/foire-aux-questions");
  const isContactPage = pathname.startsWith("/contact");

  useEffect(() => {
    document.body.classList.toggle("nav-open", navOpen);
    return () => {
      document.body.classList.remove("nav-open");
    };
  }, [navOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");
    const onScroll = () => {
      let current = "services";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom > 120) {
          current = section.getAttribute("data-section") || "services";
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  // Effet parallax au scroll
  useEffect(() => {
    let ticking = false;
    const handleParallaxScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        
        // Parallax subtil sur les sections
        const sections = document.querySelectorAll(".section_header");
        sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          if (isVisible) {
            const speed = 0.15;
            const yPos = (rect.top - window.innerHeight / 2) * speed;
            section.style.transform = `translateY(${yPos}px)`;
          }
        });

        // Parallax sur les images cuisine
        const kitchenImages = document.querySelectorAll(".kitchen_image_large, .kitchen_image_small");
        kitchenImages.forEach((img, index) => {
          const rect = img.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          if (isVisible) {
            const speed = 0.08 + (index * 0.02);
            const yPos = (rect.top - window.innerHeight / 2) * speed;
            img.style.transform = `translateY(${yPos}px)`;
          }
        });

        ticking = false;
      });
    };

    if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
      window.addEventListener("scroll", handleParallaxScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleParallaxScroll);
    }
  }, [pathname]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (statsAnimated) return;
    const statsNode = document.querySelector(".hero_stats");
    if (!statsNode) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsAnimated) {
            const duration = 1500;
            const start = performance.now();
            const from = { interventions: 0, rating: 0, years: 0 };
            const to = { interventions: 1200, rating: 4.9, years: 15 };

            const step = (time) => {
              const progress = Math.min(1, (time - start) / duration);
              const eased = 1 - Math.pow(1 - progress, 3);
              setStats({
                interventions: from.interventions + (to.interventions - from.interventions) * eased,
                rating: from.rating + (to.rating - from.rating) * eased,
                years: from.years + (to.years - from.years) * eased,
              });
              if (progress < 1) {
                window.requestAnimationFrame(step);
              } else {
                setStats(to);
              }
            };

            window.requestAnimationFrame(step);
            setStatsAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(statsNode);
    return () => observer.disconnect();
  }, [statsAnimated]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY || window.pageYOffset;
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        const ratio = maxScroll > 0 ? scrollY / maxScroll : 0;
        setScrollProgress(Math.min(1, Math.max(0, ratio)));
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHeroMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x, y });
  };

  const handleHeroMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Load Jotform script for contact page
  useEffect(() => {
    if (isContactPage) {
      const script = document.createElement('script');
      script.src = 'https://form.jotform.com/jsform/253384764001353';
      script.type = 'text/javascript';
      script.async = true;
      
      const formContainer = document.getElementById('jotform-container');
      if (formContainer) {
        formContainer.appendChild(script);
      }
      
      return () => {
        // Cleanup script on unmount
        if (formContainer && formContainer.contains(script)) {
          formContainer.removeChild(script);
        }
      };
    }
  }, [isContactPage]);

  if (isContactPage) {
    return (
      <div className="page-shell">
        <header className="hero legal_hero_header">
          <div className="hero_overlay" />
          <div className="hero_inner">
            <div className="site-header">
              <div className="logo">
                <span className="logo_mark">DB</span>
                <span className="logo_text">Plomberie</span>
              </div>
              <nav className={`nav ${navOpen ? "is-open" : ""}`}>
                <a href="/" onClick={() => setNavOpen(false)}>Accueil</a>
                <a href="/faq" onClick={() => setNavOpen(false)}>FAQ</a>
                <a href="/mentions-legales" onClick={() => setNavOpen(false)}>Mentions légales</a>
              </nav>
              <button
                className="nav_mobile_toggle"
                aria-label="Menu"
                aria-expanded={navOpen}
                onClick={() => setNavOpen((prev) => !prev)}
                type="button"
              >
                <span />
                <span />
              </button>
            </div>
            <div className="legal_hero">
              <span className="eyebrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline" }}>
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Nous contacter
              </span>
              <h1>Contactez DB Plomberie</h1>
              <p className="lead">
                Une urgence ? Un projet ? Notre équipe vous répond rapidement pour
                toute demande d'information ou de devis.
              </p>
            </div>
          </div>
        </header>

        <main>
          <section className="section contact_section">
            <div className="contact_inner">
              <div className="section_header" style={{ textAlign: "center", maxWidth: "100%", margin: "0 auto 3rem" }}>
                <h2>Remplissez le formulaire</h2>
                <p className="lead" style={{ marginTop: "1rem" }}>
                  Nous vous répondons sous 2 heures en semaine et intervenons sous 30 minutes en cas d'urgence.
                </p>
              </div>
              
              <div id="jotform-container" className="jotform_wrapper"></div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="footer_content">
            <div className="footer_brand">
              <div className="logo">
                <span className="logo_mark">DB</span>
                <span className="logo_text">Plomberie</span>
              </div>
              <p className="footer_tagline">
                Votre partenaire plomberie de confiance en Île-de-France
              </p>
              <div className="footer_social">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="social_link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="social_link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social_link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="social_link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer_grid">
              <div className="footer_column">
                <h4 className="footer_column_title">Services</h4>
                <ul className="footer_column_links">
                  <li><a href="/#services">Dépannage 24/7</a></li>
                  <li><a href="/#services">Création salle de bain</a></li>
                  <li><a href="/#services">Maintenance Pro</a></li>
                  <li><a href="/#services">Plomberie cuisine</a></li>
                </ul>
              </div>

              <div className="footer_column">
                <h4 className="footer_column_title">Entreprise</h4>
                <ul className="footer_column_links">
                  <li><a href="/#engagements">Nos engagements</a></li>
                  <li><a href="/faq">FAQ</a></li>
                  <li><a href="/mentions-legales">Mentions légales</a></li>
                  <li><a href="/#devis">Demander un devis</a></li>
                </ul>
              </div>

              <div className="footer_column">
                <h4 className="footer_column_title">Contact</h4>
                <ul className="footer_column_links">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    13 rue des Artisans<br/>92400 Courbevoie
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <a href="tel:+33700000000">07 00 00 00 00</a>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    <a href="mailto:contact@dbplomberie.fr">contact@dbplomberie.fr</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer_bottom">
            <p className="small">© 2025 DB Plomberie. Tous droits réservés.</p>
            <div className="footer_bottom_links">
              <span className="small">
                Conçu avec passion par{" "}
                <a
                  href="https://microdidact.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer_credit"
                >
                  Microdidact
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  if (isFaqPage) {
    return (
      <div className="page-shell">
        <header className="hero legal_hero_header">
          <div className="hero_overlay" />
          <div className="hero_inner">
            <div className="site-header">
              <div className="logo">
                <span className="logo_mark">DB</span>
                <span className="logo_text">Plomberie</span>
              </div>
              <nav className={`nav ${navOpen ? "is-open" : ""}`}>
                <a href="/" onClick={() => setNavOpen(false)}>Accueil</a>
                <a href="/contact" onClick={() => setNavOpen(false)}>Contact</a>
                <a href="/mentions-legales" onClick={() => setNavOpen(false)}>Mentions légales</a>
              </nav>
              <button
                className="nav_mobile_toggle"
                aria-label="Menu"
                aria-expanded={navOpen}
                onClick={() => setNavOpen((prev) => !prev)}
                type="button"
              >
                <span />
                <span />
              </button>
            </div>
            <div className="legal_hero">
              <span className="eyebrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline" }}>
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M12 16h0M12 8v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Questions fréquentes
              </span>
              <h1>Foire aux questions</h1>
              <p className="lead">
                Les réponses claires aux questions que nos clients nous posent le
                plus souvent avant une intervention.
              </p>
            </div>
          </div>
        </header>

        <main>
          <section className="section faq_section">
            <div className="faq_inner">
              <div className="section_header" style={{ textAlign: "center", maxWidth: "100%", margin: "0 auto 3rem" }}>
                <span className="eyebrow" style={{ margin: "0 auto 1rem" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline" }}>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M12 16h0M12 8v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Réponses à vos questions
                </span>
                <h2>Tout ce que vous devez savoir</h2>
                <p style={{ maxWidth: "600px", margin: "0 auto" }}>
                  Des réponses claires et précises aux questions les plus fréquentes sur nos services de plomberie.
                </p>
              </div>
              <div className="faq_list">
                <article
                  className={
                    faqOpenIndex === 0 ? "faq_item is-open" : "faq_item"
                  }
                >
                  <button
                    type="button"
                    className="faq_item_header"
                    onClick={() =>
                      setFaqOpenIndex(faqOpenIndex === 0 ? -1 : 0)
                    }
                  >
                    <h3 className="faq_question">
                      Quelle différence entre un mitigeur et un mélangeur ?
                    </h3>
                    <span className="faq_icon">
                      {faqOpenIndex === 0 ? "−" : "+"}
                    </span>
                  </button>
                  <div className="faq_item_body">
                    <p className="faq_answer">
                      La différence entre les deux est une question de
                      fonctionnement. Le robinet mélangeur nécessite
                      l&apos;utilisation de deux manettes distinctes, situées de
                      part et d&apos;autre du robinet lui-même : l&apos;une pour obtenir
                      de l&apos;eau froide, l&apos;autre de l&apos;eau chaude. On atteint la
                      température voulue en combinant manuellement les deux.
                    </p>
                    <p className="faq_answer">
                      Le robinet mitigeur n&apos;a quant à lui qu&apos;une manette, qui
                      gère à la fois le débit et la température de l&apos;eau en
                      l&apos;inclinant d&apos;avant en arrière et de gauche à droite. Il
                      est généralement équipé d&apos;un réducteur de débit et d&apos;une
                      butée anti-brûlure pour plus de confort et de sécurité.
                    </p>
                  </div>
                </article>

                <article
                  className={
                    faqOpenIndex === 1 ? "faq_item is-open" : "faq_item"
                  }
                >
                  <button
                    type="button"
                    className="faq_item_header"
                    onClick={() =>
                      setFaqOpenIndex(faqOpenIndex === 1 ? -1 : 1)
                    }
                  >
                    <h3 className="faq_question">
                      Comment connaître la dureté de son eau ?
                    </h3>
                    <span className="faq_icon">
                      {faqOpenIndex === 1 ? "−" : "+"}
                    </span>
                  </button>
                  <div className="faq_item_body">
                    <p className="faq_answer">
                      La dureté de l&apos;eau correspond à sa teneur en calcaire.
                      Vous pouvez la connaître grâce aux informations fournies
                      par votre distributeur d&apos;eau, via un relevé en ligne ou
                      sur votre facture, ou à l&apos;aide de bandelettes de test
                      spécifiques.
                    </p>
                    <p className="faq_answer">
                      Lors de nos interventions, nous pouvons également mesurer
                      la dureté de votre eau pour vous conseiller sur la mise en
                      place éventuelle d&apos;un adoucisseur ou de systèmes de
                      filtration.
                    </p>
                  </div>
                </article>

                <article
                  className={
                    faqOpenIndex === 2 ? "faq_item is-open" : "faq_item"
                  }
                >
                  <button
                    type="button"
                    className="faq_item_header"
                    onClick={() =>
                      setFaqOpenIndex(faqOpenIndex === 2 ? -1 : 2)
                    }
                  >
                    <h3 className="faq_question">
                      Qu&apos;est-ce qu&apos;une recherche de fuite non destructive ?
                    </h3>
                    <span className="faq_icon">
                      {faqOpenIndex === 2 ? "−" : "+"}
                    </span>
                  </button>
                  <div className="faq_item_body">
                    <p className="faq_answer">
                      La recherche de fuite non destructive consiste à localiser
                      précisément une fuite d&apos;eau sans casser les murs, sols ou
                      plafonds. Pour cela, nous utilisons des technologies comme
                      la caméra endoscopique, l&apos;écoute acoustique ou la
                      détection par gaz traceur.
                    </p>
                    <p className="faq_answer">
                      Cette approche permet de limiter fortement les travaux de
                      reprise et donc le coût global de l&apos;intervention, tout
                      en réduisant l&apos;impact sur votre logement ou vos locaux
                      professionnels.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="footer_content">
            <div className="footer_brand">
              <div className="logo">
                <span className="logo_mark">DB</span>
                <span className="logo_text">Plomberie</span>
              </div>
              <p className="footer_tagline">
                Votre partenaire plomberie de confiance en Île-de-France
              </p>
              <div className="footer_social">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="social_link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="social_link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social_link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="social_link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer_grid">
              <div className="footer_column">
                <h4 className="footer_column_title">Services</h4>
                <ul className="footer_column_links">
                  <li><a href="/#services">Dépannage 24/7</a></li>
                  <li><a href="/#services">Création salle de bain</a></li>
                  <li><a href="/#services">Maintenance Pro</a></li>
                  <li><a href="/#services">Plomberie cuisine</a></li>
                </ul>
              </div>

              <div className="footer_column">
                <h4 className="footer_column_title">Entreprise</h4>
                <ul className="footer_column_links">
                  <li><a href="/#engagements">Nos engagements</a></li>
                  <li><a href="/faq">FAQ</a></li>
                  <li><a href="/mentions-legales">Mentions légales</a></li>
                  <li><a href="/#devis">Demander un devis</a></li>
                </ul>
              </div>

              <div className="footer_column">
                <h4 className="footer_column_title">Contact</h4>
                <ul className="footer_column_links">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    13 rue des Artisans<br/>92400 Courbevoie
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <a href="tel:+33700000000">07 00 00 00 00</a>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    <a href="mailto:contact@dbplomberie.fr">contact@dbplomberie.fr</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer_bottom">
            <p className="small">© 2025 DB Plomberie. Tous droits réservés.</p>
            <div className="footer_bottom_links">
              <span className="small">
                Conçu avec passion par{" "}
                <a
                  href="https://microdidact.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer_credit"
                >
                  Microdidact
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  if (isLegalPage) {
    return (
      <div className="page-shell">
        <header className="hero legal_hero_header">
          <div className="hero_overlay" />
          <div className="hero_inner">
            <div className="site-header">
              <div className="logo">
                <span className="logo_mark">DB</span>
                <span className="logo_text">Plomberie</span>
              </div>
              <nav className={`nav ${navOpen ? "is-open" : ""}`}>
                <a href="/" onClick={() => setNavOpen(false)}>Accueil</a>
                <a href="/contact" onClick={() => setNavOpen(false)}>Contact</a>
                <a href="/faq" onClick={() => setNavOpen(false)}>FAQ</a>
              </nav>
              <button
                className="nav_mobile_toggle"
                aria-label="Menu"
                aria-expanded={navOpen}
                onClick={() => setNavOpen((prev) => !prev)}
                type="button"
              >
                <span />
                <span />
              </button>
            </div>
            <div className="legal_hero">
              <span className="eyebrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline" }}>
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Informations légales
              </span>
              <h1>Mentions légales DB Plomberie</h1>
              <p className="lead">
                Transparence sur l&apos;éditeur du site, l&apos;hébergement et la
                protection de vos données personnelles.
              </p>
            </div>
          </div>
        </header>

        <main>
          <section className="section legal_section">
            <div className="legal_block">
              <h2>1. Éditeur du site</h2>
              <p>
                Le présent site est édité par la société DB Plomberie, entreprise
                individuelle spécialisée dans les travaux de plomberie et de
                chauffage.
              </p>
              <ul className="legal_list">
                <li>Dénomination : DB Plomberie</li>
                <li>Forme juridique : Entreprise individuelle</li>
                <li>Adresse : 13 rue des Artisans, 92400 Courbevoie</li>
                <li>Téléphone : 07 00 00 00 00</li>
                <li>Email : contact@dbplomberie.fr</li>
                <li>SIRET : 000 000 000 00000 (à compléter)</li>
                <li>Responsable de la publication : DB Plomberie</li>
              </ul>
            </div>

            <div className="legal_block">
              <h2>2. Hébergement</h2>
              <p>Le site est hébergé par :</p>
              <ul className="legal_list">
                <li>Hébergeur : (à compléter)</li>
                <li>Adresse : (à compléter)</li>
                <li>Téléphone : (à compléter)</li>
              </ul>
            </div>

            <div className="legal_block">
              <h2>3. Propriété intellectuelle</h2>
              <p>
                L&apos;ensemble des éléments présents sur ce site (textes, images,
                illustrations, logos, icônes, mises en page, etc.) sont la
                propriété exclusive de DB Plomberie ou font l&apos;objet d&apos;une
                autorisation d&apos;utilisation.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication,
                adaptation de tout ou partie des éléments du site, quel que soit
                le moyen ou le procédé utilisé, est interdite sans
                l&apos;autorisation écrite préalable de DB Plomberie.
              </p>
            </div>

            <div className="legal_block">
              <h2>4. Données personnelles</h2>
              <p>
                Les informations collectées via le formulaire de contact ou de
                demande de devis sont utilisées uniquement pour répondre à votre
                demande et vous recontacter. Elles ne sont ni vendues ni cédées à
                des tiers.
              </p>
              <p>
                Conformément au Règlement Général sur la Protection des Données
                (RGPD) et à la loi Informatique et Libertés, vous disposez d&apos;un
                droit d&apos;accès, de rectification, de suppression et
                d&apos;opposition concernant vos données. Vous pouvez exercer ces
                droits en nous écrivant à l&apos;adresse suivante :
                contact@dbplomberie.fr.
              </p>
            </div>

            <div className="legal_block">
              <h2>5. Cookies</h2>
              <p>
                Le site peut utiliser des cookies strictement nécessaires au bon
                fonctionnement de la navigation et à la mesure d&apos;audience
                anonyme. Vous pouvez configurer votre navigateur pour refuser les
                cookies, mais certaines fonctionnalités du site pourraient être
                limitées.
              </p>
            </div>

            <div className="legal_block">
              <h2>6. Responsabilité</h2>
              <p>
                DB Plomberie met tout en œuvre pour assurer l&apos;exactitude et la
                mise à jour des informations diffusées sur le site. Toutefois,
                elle ne saurait être tenue responsable des erreurs ou omissions
                éventuelles, ni d&apos;une indisponibilité du service.
              </p>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="footer_content">
            <div className="footer_brand">
              <div className="logo">
                <span className="logo_mark">DB</span>
                <span className="logo_text">Plomberie</span>
              </div>
              <p className="footer_tagline">
                Votre partenaire plomberie de confiance en Île-de-France
              </p>
              <div className="footer_social">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="social_link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="social_link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social_link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="social_link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer_grid">
              <div className="footer_column">
                <h4 className="footer_column_title">Services</h4>
                <ul className="footer_column_links">
                  <li><a href="/#services">Dépannage 24/7</a></li>
                  <li><a href="/#services">Création salle de bain</a></li>
                  <li><a href="/#services">Maintenance Pro</a></li>
                  <li><a href="/#services">Plomberie cuisine</a></li>
                </ul>
              </div>

              <div className="footer_column">
                <h4 className="footer_column_title">Entreprise</h4>
                <ul className="footer_column_links">
                  <li><a href="/#engagements">Nos engagements</a></li>
                  <li><a href="/faq">FAQ</a></li>
                  <li><a href="/mentions-legales">Mentions légales</a></li>
                  <li><a href="/#devis">Demander un devis</a></li>
                </ul>
              </div>

              <div className="footer_column">
                <h4 className="footer_column_title">Contact</h4>
                <ul className="footer_column_links">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    13 rue des Artisans<br/>92400 Courbevoie
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <a href="tel:+33700000000">07 00 00 00 00</a>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    <a href="mailto:contact@dbplomberie.fr">contact@dbplomberie.fr</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer_bottom">
            <p className="small">© 2025 DB Plomberie. Tous droits réservés.</p>
            <div className="footer_bottom_links">
              <span className="small">
                Conçu avec passion par{" "}
                <a
                  href="https://microdidact.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer_credit"
                >
                  Microdidact
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="page-shell">
      {navOpen && (
        <div 
          className="nav_overlay" 
          onClick={() => setNavOpen(false)}
          aria-hidden="true"
        />
      )}
      <div className="scroll_bar" aria-hidden="true">
        <div
          className="scroll_bar_fill"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>
      <header className="hero">
        <div
          className="hero_background"
          style={{
            transform: `translateY(${scrollProgress * 40}px) scale(1.05)`,
          }}
        />
        <div
          className="hero_overlay"
          style={{
            transform: `translateY(${scrollProgress * 20}px)`,
          }}
        />
        <div
          className="hero_inner"
          onMouseMove={handleHeroMouseMove}
          onMouseLeave={handleHeroMouseLeave}
        >
          <div className="site-header">
            <div className="logo">
              <span className="logo_mark">DB</span>
              <span className="logo_text">Plomberie</span>
            </div>
            <nav className={`nav ${navOpen ? "is-open" : ""}`}>
              <a
                href="#services"
                onClick={() => setNavOpen(false)}
                className={activeSection === "services" ? "nav-active" : ""}
              >
                Services
              </a>
              <a
                href="#engagements"
                onClick={() => setNavOpen(false)}
                className={activeSection === "engagements" ? "nav-active" : ""}
              >
                Engagements
              </a>
              <a
                href="/faq"
                onClick={() => setNavOpen(false)}
              >
                FAQ
              </a>
              <a
                href="/contact"
                onClick={() => setNavOpen(false)}
              >
                Contact
              </a>
              <a
                href="/mentions-legales"
                onClick={() => setNavOpen(false)}
              >
                Mentions légales
              </a>
            </nav>
            <button
              className="nav_mobile_toggle"
              aria-label="Menu"
              aria-expanded={navOpen}
              onClick={() => setNavOpen((prev) => !prev)}
              type="button"
            >
              <span />
              <span />
            </button>
          </div>

          <div className="hero_content">
            <div
              className="hero_copy reveal"
              data-reveal
              style={{
                transform: `translate3d(${tilt.x * -14}px, ${
                  tilt.y * -10
                }px, 0)`,
                transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <p className="eyebrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline" }}>
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="currentColor"/>
                </svg>
                Urgence, rénovation &amp; entretien
              </p>
              <h1>
                DB Plomberie,
                <span className="accent"> l&apos;artisan moderne</span> pour vos
                projets d&apos;eau.
              </h1>
              <p className="lead">
                Dépannage express 24/7, installation de salles de bain premium,
                optimisation des réseaux pour particuliers, commerces et hôtels.
                Intervention garantie sous 2h dans toute l&apos;Île-de-France.
              </p>
              <div className="hero_ctas">
                <a className="button solid" href="#devis">
                  Faire un devis express
                </a>
                <a
                  className="button ghost"
                  href="mailto:contact@dbplomberie.fr"
                >
                  contact@dbplomberie.fr
                </a>
              </div>
              <div className="hero_stats">
                <div>
                  <span className="stat_value">
                    +{Math.round(stats.interventions).toLocaleString("fr-FR")}
                  </span>
                  <span className="stat_label">Interventions réussies</span>
                </div>
                <div>
                  <span className="stat_value">
                    {stats.rating.toFixed(1).replace(".", ",")}/5
                  </span>
                  <span className="stat_label">Avis clients vérifiés</span>
                </div>
                <div>
                  <span className="stat_value">
                    {Math.round(stats.years)} ans
                  </span>
                  <span className="stat_label">Savoir-faire professionnel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section
          id="services"
          className="section services reveal"
          data-section="services"
          data-reveal
        >
          <div className="section_header">
            <span className="eyebrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline" }}>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Nos expertises
            </span>
            <h2>Des solutions de plomberie pensées pour durer.</h2>
            <p>
              Nous combinons technologies modernes et gestes traditionnels pour
              dépasser les standards de confort, d&apos;efficacité et de
              sécurité.
            </p>
          </div>
          <div className="grid service_cards">
            <article className="card">
              <h3>Dépannage premium 24/7</h3>
              <p>
                Fuites, canalisations bouchées, chauffe-eau en panne : une
                équipe prête à partir avec matériel certifié NF.
              </p>
              <ul>
                <li>Diagnostic numérique sur place</li>
                <li>Rapport photo livré sous 1h</li>
                <li>Pièces garanties 5 ans</li>
              </ul>
            </article>
            <article className="card">
              <h3>Création de salle de bain</h3>
              <p>
                Design épuré, douche italienne, robinetterie haut de gamme,
                intégration domotique pour un confort quotidien.
              </p>
              <ul>
                <li>Accompagnement architecte intérieur</li>
                <li>Projection 3D et moodboard</li>
                <li>Coordination corps de métier</li>
              </ul>
            </article>
            <article className="card">
              <h3>Maintenance Pro &amp; Bâtiments</h3>
              <p>
                Contrats pour hôtels, bureaux et copropriétés avec reporting et
                suivi consommation d&apos;eau.
              </p>
              <ul>
                <li>Visites planifiées et urgences prioritaires</li>
                <li>Tableau de bord consommation</li>
                <li>Reporting durable (normes HQE)</li>
              </ul>
            </article>
          </div>
        </section>

        <section
          id="engagements"
          className="section commitments reveal"
          data-section="engagements"
          data-reveal
        >
          <div className="section_header">
            <span className="eyebrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline" }}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
              </svg>
              Pourquoi DB Plomberie
            </span>
            <h2>Engagements transparents, résultats mesurables.</h2>
          </div>
          <div className="grid commitment_cards">
            <article>
              <h3>Clarté tarifaire</h3>
              <p>Devis signé avant intervention, aucune surprise.</p>
            </article>
            <article>
              <h3>Durabilité</h3>
              <p>Matériaux certifiés, gestion éco-responsable des déchets.</p>
            </article>
            <article>
              <h3>Suivi digital</h3>
              <p>Espace client pour suivre commandes, factures et SAV.</p>
            </article>
            <article>
              <h3>Réseau d&apos;artisans</h3>
              <p>
                Collaboration électriciens/menuisiers pour projets complets.
              </p>
            </article>
          </div>
        </section>

        <section className="section kitchen reveal" data-reveal>
          <div className="kitchen_layout">
            <div className="kitchen_text">
              <span className="eyebrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline" }}>
                  <path d="M3 3h18v18H3V3z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M9 3v18M15 3v18M3 9h18M3 15h18" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Cuisine & sanitaire
              </span>
              <h2>
                Entretien &amp; d&eacute;pannage sanitaire cuisine &agrave;
                Toulouse et sa r&eacute;gion.
              </h2>
              <p>
                Les &eacute;quipes de DB Plomberie interviennent dans les
                meilleurs d&eacute;lais pour tous vos travaux d&apos;installation,
                de d&eacute;pannage, d&apos;entretien ou d&apos;urgence en plomberie
                sanitaire de cuisine &agrave; Toulouse et ses environs et cela, en
                toute transparence avec des forfaits clairement d&eacute;finis et
                communiqu&eacute;s.
              </p>
              <p>
                Tous nos plombiers sont des professionnels du m&eacute;tier,
                qualifi&eacute;s et exp&eacute;riment&eacute;s, poss&egrave;dent
                un dipl&ocirc;me et/ou une qualification ainsi que toutes les
                comp&eacute;tences n&eacute;cessaires pour intervenir sur des
                chantiers neufs ou en r&eacute;novation de cuisine.
              </p>
              <p>
                En quelques clics vous trouvez un plombier qualifi&eacute;, pr&egrave;s
                de chez vous et disponible afin d&apos;effectuer toute r&eacute;paration
                en plomberie sanitaire cuisine : d&eacute;bouchage &eacute;vier,
                recherche de fuite, remplacement robinetterie, mitigeur, bonde,
                syst&egrave;me d&apos;&eacute;vacuation...
              </p>
              <p>
                Vous cherchez un plombier de confiance et exp&eacute;riment&eacute; pour
                vos travaux sanitaires ? Contactez-nous d&egrave;s maintenant pour
                programmer une intervention avec l&apos;un de nos techniciens.
              </p>
            </div>
            <div className="kitchen_media">
              <div className="kitchen_images">
                <figure className="kitchen_image_large">
                  <img
                    src="/8d1a0f0c555246406406c4ce7e44dd58f1d4ab73.jpg"
                    alt="Intervention plomberie cuisine - remplacement d'évier"
                  />
                </figure>
                <figure className="kitchen_image_small">
                  <img
                    src="/97d8eee5611933a91aeb57674c66913e8cfe6fbe.jpg"
                    alt="Détail de robinetterie moderne installée en cuisine"
                  />
                </figure>
                <figure className="kitchen_image_small">
                  <img
                    src="/d3297f098335c2c4e296f7cf016a7e6f3c5858dc.jpg"
                    alt="Plombier intervenant sur une installation de cuisine"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section
          id="devis"
          className="section quote reveal"
          data-section="devis"
          data-reveal
        >
          <div className="quote_wrapper quote_wrapper_centered">
            <div className="quote_content quote_content_centered">
              <span className="eyebrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline" }}>
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
                Faire un devis
              </span>
              <h2>Parlez-nous de votre projet.</h2>
              <p>
                3 questions rapides et un expert DB vous rappelle sous 30
                minutes. Les visites techniques sont gratuites et sans
                engagement.
              </p>
              <div className="quote_badge_row">
                <span className="quote_badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Devis gratuit
                </span>
                <span className="quote_badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Retour &lt; 30 min
                </span>
                <span className="quote_badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Île-de-France
                </span>
              </div>
              <ul className="quote_bullets">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                    <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1"/>
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Réponse garantie sous 30 min
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                    <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1"/>
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Suivi personnalisé par SMS ou WhatsApp
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                    <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1"/>
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Possibilité de financement partenaire
                </li>
              </ul>
              <div className="quote_cta_row">
                <a href="/contact" className="button solid">
                  Demander un devis
                </a>
                <a href="mailto:contact@dbplomberie.fr" className="button ghost">
                  Nous contacter
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section testimonials reveal" data-reveal>
          <div className="section_header">
            <span className="eyebrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline" }}>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              Ils travaillent avec nous
            </span>
            <h2>Une expérience client pensée comme un service hôtelier.</h2>
            <p>
              Du premier appel au suivi post-intervention, chaque étape est
              structurée pour inspirer confiance : transparence, ponctualité et
              communication continue.
            </p>
          </div>
          <div className="testimonials_inner">
            <div>
              <p className="testimonial_quote">
                “{testimonials[activeTestimonial].quote}”
              </p>
              <div className="testimonial_meta">
                <strong>{testimonials[activeTestimonial].name}</strong>
                <br />
                <span>{testimonials[activeTestimonial].role}</span>
              </div>
              <div className="pill-row">
                <span className="pill">4,9/5 moyenne avis</span>
                <span className="pill">+1200 interventions</span>
                <span className="pill">Île-de-France</span>
              </div>
            </div>
            <div className="testimonial_slider">
              <div className="testimonial_bubbles">
                <div className="testimonial_bubble">
                  <strong>Avant</strong>
                  <br />
                  Appels d&apos;urgence non priorisés, peu de visibilité pour
                  les clients, devis flous.
                </div>
                <div className="testimonial_bubble">
                  <strong>Avec DB Plomberie</strong>
                  <br />
                  File d&apos;attente digitale, créneaux clairs, reporting
                  client systématique après chaque intervention.
                </div>
              </div>
              <div className="testimonial_dots" aria-hidden="true">
                {testimonials.map((_, index) => (
                  <span
                    // index utilisé seulement pour l’affichage, liste figée
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    className={
                      index === activeTestimonial
                        ? "testimonial_dot is-active"
                        : "testimonial_dot"
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer_content">
          <div className="footer_brand">
            <div className="logo">
              <span className="logo_mark">DB</span>
              <span className="logo_text">Plomberie</span>
            </div>
            <p className="footer_tagline">
              Votre partenaire plomberie de confiance en Île-de-France
            </p>
            <div className="footer_social">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="social_link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="social_link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social_link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="social_link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer_grid">
            <div className="footer_column">
              <h4 className="footer_column_title">Services</h4>
              <ul className="footer_column_links">
                <li><a href="#services">Dépannage 24/7</a></li>
                <li><a href="#services">Création salle de bain</a></li>
                <li><a href="#services">Maintenance Pro</a></li>
                <li><a href="#services">Plomberie cuisine</a></li>
              </ul>
            </div>

            <div className="footer_column">
              <h4 className="footer_column_title">Entreprise</h4>
              <ul className="footer_column_links">
                <li><a href="#engagements">Nos engagements</a></li>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/mentions-legales">Mentions légales</a></li>
                <li><a href="#devis">Demander un devis</a></li>
              </ul>
            </div>

            <div className="footer_column">
              <h4 className="footer_column_title">Contact</h4>
              <ul className="footer_column_links">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  13 rue des Artisans<br/>92400 Courbevoie
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <a href="tel:+33700000000">07 00 00 00 00</a>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <a href="mailto:contact@dbplomberie.fr">contact@dbplomberie.fr</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer_bottom">
          <p className="small">© 2025 DB Plomberie. Tous droits réservés.</p>
          <div className="footer_bottom_links">
            <span className="small">
              Conçu avec passion par{" "}
              <a
                href="https://microdidact.com/"
                target="_blank"
                rel="noreferrer"
                className="footer_credit"
              >
                Microdidact
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;



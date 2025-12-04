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
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    project: "urgence",
    details: "",
  });
  const [formMessage, setFormMessage] = useState("");

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, phone, email } = formValues;

    if (!name.trim() || !phone.trim() || !email.trim()) {
      setFormMessage("Merci de renseigner les champs requis.");
      return;
    }

    setFormMessage(
      `Merci ${name.trim()} ! Un expert DB Plomberie vous rappellera dans les prochaines minutes.`
    );
    setFormValues({
      name: "",
      phone: "",
      email: "",
      project: "urgence",
      details: "",
    });
  };

  return (
    <div className="page-shell">
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
                href="#devis"
                onClick={() => setNavOpen(false)}
                className={activeSection === "devis" ? "nav-active" : ""}
              >
                Contact
              </a>
              <a
                className="button ghost"
                href="tel:+33700000000"
                onClick={() => setNavOpen(false)}
              >
                07 00 00 00 00
              </a>
              <a
                className="button solid"
                href="#devis"
                onClick={() => setNavOpen(false)}
              >
                Faire un devis
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
              }}
            >
              <p className="eyebrow">Urgence, rénovation &amp; entretien</p>
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
            <p className="eyebrow">Nos expertises</p>
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
            <p className="eyebrow">Pourquoi DB Plomberie</p>
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

        <section
          id="devis"
          className="section quote reveal"
          data-section="devis"
          data-reveal
        >
          <div className="quote_wrapper">
            <div className="quote_content">
              <p className="eyebrow">Faire un devis</p>
              <h2>Parlez-nous de votre projet.</h2>
              <p>
                3 questions rapides et un expert DB vous rappelle sous 30
                minutes. Les visites techniques sont gratuites et sans
                engagement.
              </p>
              <div className="quote_badge_row">
                <span className="quote_badge">Devis gratuit</span>
                <span className="quote_badge">Retour &lt; 30 min</span>
                <span className="quote_badge">Île-de-France</span>
              </div>
              <ul className="quote_bullets">
                <li>Réponse garantie sous 30 min</li>
                <li>Suivi personnalisé par SMS ou WhatsApp</li>
                <li>Possibilité de financement partenaire</li>
              </ul>
            </div>
            <form className="quote_form" onSubmit={handleSubmit} noValidate>
              <label>
                Nom &amp; prénom
                <input
                  type="text"
                  name="name"
                  placeholder="Alexandre Martin"
                  value={formValues.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Téléphone
                <input
                  type="tel"
                  name="phone"
                  placeholder="07 00 00 00 00"
                  value={formValues.phone}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="vous@mail.com"
                  value={formValues.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Type de projet
                <select
                  name="project"
                  value={formValues.project}
                  onChange={handleChange}
                >
                  <option value="urgence">Urgence plomberie</option>
                  <option value="renovation">Rénovation salle de bain</option>
                  <option value="maintenance">Maintenance bâtiment</option>
                  <option value="autre">Autre demande</option>
                </select>
              </label>
              <label>
                Détails
                <textarea
                  name="details"
                  rows="4"
                  placeholder="Expliquez-nous votre besoin pour une réponse précise."
                  value={formValues.details}
                  onChange={handleChange}
                />
              </label>
              <button type="submit" className="button solid full">
                Recevoir mon devis
              </button>
              <p className="small">
                En envoyant ce formulaire, vous acceptez notre politique de
                confidentialité.
              </p>
              <p className="form_success" role="status" aria-live="polite">
                {formMessage}
              </p>
            </form>
          </div>
        </section>

        <section className="section testimonials reveal" data-reveal>
          <div className="section_header">
            <p className="eyebrow">Ils travaillent avec nous</p>
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
        <div className="footer_top">
          <div>
            <div className="logo">
              <span className="logo_mark">DB</span>
              <span className="logo_text">Plomberie</span>
            </div>
            <p>13 rue des Artisans, 92400 Courbevoie</p>
          </div>
          <div className="footer_links">
            <a href="tel:+33700000000">07 00 00 00 00</a>
            <a href="mailto:contact@dbplomberie.fr">contact@dbplomberie.fr</a>
            <a href="#devis" className="button ghost">
              Planifier un rappel
            </a>
          </div>
        </div>
        <div className="footer_bottom">
          <p className="small muted">
            © 2025 DB Plomberie. Tous droits réservés.
          </p>
          <p className="small">
            Site codé par{" "}
            <a
              href="https://microdidact.com/"
              target="_blank"
              rel="noreferrer"
              className="footer_credit"
            >
              Microdidact
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;



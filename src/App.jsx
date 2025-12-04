import React, { useEffect, useState } from "react";

function App() {
  const [navOpen, setNavOpen] = useState(false);
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
      <header className="hero">
        <div className="hero_background" />
        <div className="hero_overlay" />
        <div className="hero_inner">
          <div className="site-header">
            <div className="logo">
              <span className="logo_mark">DB</span>
              <span className="logo_text">Plomberie</span>
            </div>
            <nav className={`nav ${navOpen ? "is-open" : ""}`}>
              <a href="#services" onClick={() => setNavOpen(false)}>
                Services
              </a>
              <a href="#engagements" onClick={() => setNavOpen(false)}>
                Engagements
              </a>
              <a href="#devis" onClick={() => setNavOpen(false)}>
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
            <div className="hero_copy">
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
                  <span className="stat_value">+1 200</span>
                  <span className="stat_label">Interventions réussies</span>
                </div>
                <div>
                  <span className="stat_value">4,9/5</span>
                  <span className="stat_label">Avis clients vérifiés</span>
                </div>
                <div>
                  <span className="stat_value">15 ans</span>
                  <span className="stat_label">Savoir-faire professionnel</span>
                </div>
              </div>
            </div>
            <div className="hero_card">
              <p className="hero_card_title">Disponibilité en temps réel</p>
              <ul>
                <li>
                  <span>⏱</span>
                  <div>
                    <strong>Interventions urgentes</strong>
                    <p>Secteurs Paris &amp; 92 couverts aujourd&apos;hui.</p>
                  </div>
                </li>
                <li>
                  <span>🛁</span>
                  <div>
                    <strong>Projets salles de bain</strong>
                    <p>
                      Créneaux visites techniques ouverts de 8h à 20h.
                    </p>
                  </div>
                </li>
                <li>
                  <span>💧</span>
                  <div>
                    <strong>Maintenance bâtiments</strong>
                    <p>Contrats pros personnalisés sous 48h.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="services" className="section services">
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

        <section id="engagements" className="section commitments">
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

        <section id="devis" className="section quote">
          <div className="quote_wrapper">
            <div className="quote_content">
              <p className="eyebrow">Faire un devis</p>
              <h2>Parlez-nous de votre projet.</h2>
              <p>
                3 questions rapides et un expert DB vous rappelle sous 30
                minutes. Les visites techniques sont gratuites et sans
                engagement.
              </p>
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
      </main>

      <footer className="footer">
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
        <p className="small muted">
          © 2025 DB Plomberie. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}

export default App;



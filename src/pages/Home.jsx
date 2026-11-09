import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Icon from '../components/Icon'

const services = [
  { title: 'Dépannage urgent', icon: 'alert', description: 'Intervention rapide pour fuites, canalisations bouchées et pannes.' },
  { title: 'Installation', icon: 'cog', description: 'Installation complète de sanitaires et de robinetterie.' },
  { title: 'Rénovation', icon: 'home', description: 'Rénovation de salle de bain, de la conception aux finitions.' },
  { title: 'Entretien', icon: 'refresh', description: 'Maintenance préventive pour éviter les mauvaises surprises.' },
]

const reasons = [
  { title: 'Intervention rapide', description: 'Disponible 7 j / 7 sur Toulouse et alentours', icon: 'bolt' },
  { title: 'Devis gratuit', description: 'Prix clairs, sans engagement', icon: 'euro' },
  { title: 'Travaux garantis', description: 'Un travail soigné, suivi après intervention', icon: 'shield' },
  { title: 'Artisan qualifié', description: 'Plombier professionnel et assuré', icon: 'team' },
]

const Eyebrow = ({ children, light }) => (
  <p className={`text-sm font-semibold uppercase tracking-widest mb-3 ${light ? 'text-cyan-300' : 'text-primary'}`}>{children}</p>
)

const Home = () => {
  return (
    <>
      <SEO
        title="Accueil"
        description="DB Plomberie, votre plombier expert à Toulouse et alentours. Installation sanitaire, rénovation salle de bain et cuisine. Intervention rapide, devis gratuit. 7 j / 7."
        keywords="plombier Toulouse, plomberie Toulouse, dépannage plomberie urgence Toulouse, installation sanitaire Toulouse, rénovation salle de bain Toulouse, plombier 31, fuite d'eau Toulouse, débouchage Toulouse, DB Plomberie"
        url="https://dbplomberie.fr/"
      />

      {/* Hero */}
      <section className="min-h-[90vh] flex items-center pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/plombier-toulouse-intervention.jpg"
            alt="Plombier à Toulouse en intervention sous un évier avec une clé à molette"
            className="w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-slate-900/75"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto md:mx-0 text-center md:text-left"
          >
            <Eyebrow light>DB Plomberie · Toulouse (31)</Eyebrow>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Plombier à Toulouse, <span className="text-cyan-300">dépannage, installation et rénovation</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10">
              DB Plomberie intervient 7 j / 7 à Toulouse et dans les communes alentour : fuite d'eau, débouchage, chauffe-eau, salle de bain. Devis gratuit et sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/contact"
                className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-center text-lg font-semibold"
              >
                Demander un devis gratuit
              </Link>
              <a
                href="tel:+33652085070"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg hover:bg-slate-100 transition-colors text-lg font-semibold"
              >
                <Icon name="phone" className="w-5 h-5" />
                06 52 08 50 70
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 max-w-2xl mx-auto"
          >
            <Eyebrow>Nos services</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dépannage, installation et rénovation à Toulouse</h2>
            <p className="text-lg text-gray-600">Une intervention adaptée à chaque situation, de l'urgence à la rénovation.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  to="/services"
                  className="block h-full bg-white p-7 rounded-xl border border-gray-200 hover:border-primary hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon name={service.icon} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Voir tous nos services
              <Icon name="arrow" className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Eyebrow>Pourquoi nous choisir</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Un artisan sur qui compter</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {reasons.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-11 h-11 flex-shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <Icon name={item.icon} className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/plombier-reparation-fuite-eau.jpg"
                alt="Dépannage fuite d'eau par un plombier à Toulouse"
                className="w-full h-auto rounded-xl shadow-md"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Texte SEO local */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Votre plombier à Toulouse et dans la Haute-Garonne
          </h2>
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              DB Plomberie est une entreprise de plomberie installée à Toulouse. Nous intervenons pour le
              <strong className="text-gray-900"> dépannage de plomberie</strong> (fuite d'eau, canalisation bouchée,
              WC bouché, chauffe-eau en panne), l'<strong className="text-gray-900">installation sanitaire</strong> et la
              <strong className="text-gray-900"> rénovation de salle de bain</strong> chez les particuliers.
            </p>
            <p>
              Nous nous déplaçons à Toulouse et dans les communes voisines : Blagnac, Colomiers, Tournefeuille, Balma,
              L'Union, Ramonville-Saint-Agne et alentours. Chaque intervention commence par un diagnostic clair,
              suivi d'un devis gratuit : vous savez ce que vous payez avant le début des travaux.
            </p>
            <p>
              Une fuite, une panne ou un projet de rénovation ? Appelez-nous au{' '}
              <a href="tel:+33652085070" className="text-primary font-semibold hover:underline">06 52 08 50 70</a>{' '}
              ou <Link to="/contact" className="text-primary font-semibold hover:underline">demandez votre devis en ligne</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Besoin d'un plombier ?</h2>
          <p className="text-lg text-slate-300 mb-8">
            Contactez-nous pour un devis gratuit ou une intervention d'urgence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
            >
              Demander un devis
            </Link>
            <a
              href="tel:+33652085070"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg hover:bg-slate-100 transition-colors text-lg font-semibold"
            >
              <Icon name="phone" className="w-5 h-5" />
              06 52 08 50 70
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

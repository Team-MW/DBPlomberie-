import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Icon from '../components/Icon'

const Services = () => {
  const services = [
    {
      title: 'Dépannage d\'urgence',
      icon: 'alert',
      description: 'Intervention rapide, 7 j / 7, pour tous vos problèmes de plomberie urgents.',
      features: [
        'Fuite d\'eau',
        'Canalisation bouchée',
        'Chauffe-eau en panne',
        'WC bouché',
      ],
      price: 'À partir de 80€',
    },
    {
      title: 'Installation sanitaire',
      icon: 'cog',
      description: 'Installation complète de tous types d\'équipements sanitaires avec garantie.',
      features: [
        'Lavabo et vasque',
        'Douche et baignoire',
        'WC et bidet',
        'Robinetterie',
      ],
      price: 'Devis gratuit',
    },
    {
      title: 'Rénovation salle de bain',
      icon: 'home',
      description: 'Transformation complète de votre salle de bain, du design à la réalisation.',
      features: [
        'Conception 3D',
        'Démolition',
        'Installation complète',
        'Finitions',
      ],
      price: 'Sur mesure',
    },
    {
      title: 'Détection de fuites',
      icon: 'search',
      description: 'Localisation précise des fuites cachées avec équipement de pointe.',
      features: [
        'Caméra thermique',
        'Détection électronique',
        'Rapport détaillé',
        'Réparation incluse',
      ],
      price: 'À partir de 120€',
    },
    {
      title: 'Débouchage canalisations',
      icon: 'droplet',
      description: 'Débouchage professionnel de toutes vos canalisations et évacuations.',
      features: [
        'Débouchage mécanique',
        'Hydrocurage',
        'Inspection caméra',
        'Traitement préventif',
      ],
      price: 'À partir de 90€',
    },
    {
      title: 'Entretien et maintenance',
      icon: 'refresh',
      description: 'Contrat d\'entretien pour prévenir les pannes et prolonger la durée de vie.',
      features: [
        'Vérification annuelle',
        'Détartrage',
        'Remplacement joints',
        'Priorité intervention',
      ],
      price: 'Forfait annuel',
    },
  ]

  return (
    <>
      <SEO
        title="Nos Services de Plomberie"
        description="Services de plomberie à Toulouse : dépannage d'urgence 7j/7, installation sanitaire complète, rénovation salle de bain et cuisine, détection de fuites, débouchage. DB Plomberie, experts qualifiés. Devis gratuit."
        keywords="services plomberie Toulouse, dépannage urgence Toulouse, installation sanitaire Toulouse, rénovation salle de bain Toulouse, détection fuite Toulouse, débouchage Toulouse, entretien plomberie Toulouse, plombier professionnel Toulouse"
        url="https://dbplomberie.fr/services"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Nos Services de Plomberie
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Des solutions professionnelles pour tous vos besoins en plomberie,
                de l'urgence à la rénovation complète
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-center text-lg font-semibold"
                >
                  Demander un devis
                </Link>
                <a
                  href="tel:+33652085070"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-colors text-lg font-semibold"
                >
                  <Icon name="phone" className="w-5 h-5" />
                  Appeler maintenant
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-md">
                <img
                  src="/plombier-reparation-fuite-eau.jpg"
                  alt="Plombier à Toulouse réparant une fuite sur une canalisation"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-primary hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Icon name={service.icon} className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <Icon name="check" className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="border-t pt-4 mt-4">
                  <p className="text-primary font-bold text-lg">{service.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-cyan-300">Notre processus</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, rapide et efficace</h2>
            <p className="text-lg text-slate-300">Un déroulé clair, du premier appel à la fin des travaux.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: '1', title: 'Contact', description: 'Appelez-nous ou remplissez le formulaire', icon: 'phone' },
              { step: '2', title: 'Diagnostic', description: 'Évaluation du problème et devis gratuit', icon: 'search' },
              { step: '3', title: 'Intervention', description: 'Réalisation des travaux par nos soins', icon: 'cog' },
              { step: '4', title: 'Garantie', description: 'Satisfaction garantie et suivi après intervention', icon: 'shield' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-5">
                  <Icon name={item.icon} className="w-7 h-7" />
                  <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white text-primary text-sm font-bold flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Besoin d'un service ?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contactez-nous pour un devis gratuit et sans engagement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold"
              >
                Demander un devis
              </Link>
              <a
                href="tel:+33652085070"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-lg hover:bg-slate-800 transition-colors text-lg font-semibold"
              >
                <Icon name="phone" className="w-5 h-5" />
                06 52 08 50 70
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Services


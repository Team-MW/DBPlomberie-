import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const Services = () => {
  const services = [
    {
      title: 'Dépannage d\'urgence',
      icon: '🚨',
      description: 'Intervention rapide 24h/24 et 7j/7 pour tous vos problèmes de plomberie urgents.',
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
      icon: '🔧',
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
      icon: '🏠',
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
      icon: '🔍',
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
      icon: '🌊',
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
      icon: '🛠️',
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
        title="Nos Services"
        description="Découvrez tous nos services de plomberie : dépannage d'urgence, installation, rénovation, détection de fuites et entretien."
        keywords="services plomberie, dépannage plombier, installation sanitaire, rénovation salle de bain"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-cyan-50">
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
                  href="tel:+33123456789"
                  className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-colors text-center text-lg font-semibold"
                >
                  📞 Appeler maintenant
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/Plumber repairing pipe burst.jpg" 
                  alt="Services de plomberie professionnels"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
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
                className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="text-primary mr-2">✓</span>
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

      {/* Process Section - Design Moderne */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white relative overflow-hidden">
        {/* Effets de fond */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="bg-primary/20 text-primary px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider border border-primary/30">
                Notre Processus
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, rapide et efficace</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Un processus clair et transparent pour votre tranquillité d'esprit
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
            {/* Ligne de connexion entre les étapes */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary via-cyan-500 to-primary"></div>
            
            {[
              { step: '1', title: 'Contact', description: 'Appelez-nous ou remplissez le formulaire', icon: '📞' },
              { step: '2', title: 'Diagnostic', description: 'Évaluation du problème et devis gratuit', icon: '🔍' },
              { step: '3', title: 'Intervention', description: 'Réalisation des travaux par nos experts', icon: '🔧' },
              { step: '4', title: 'Garantie', description: 'Satisfaction garantie et suivi post-intervention', icon: '✓' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                {/* Carte glassmorphism */}
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 text-center group h-full">
                  {/* Numéro de l'étape */}
                  <div className="relative inline-block mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-primary/50 group-hover:scale-110 transition-all duration-300 relative z-10">
                      <span className="text-4xl">{item.icon}</span>
                    </div>
                    {/* Badge numéro */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-cyan-500 to-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-20">
                      {item.step}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-100 transition-colors leading-relaxed">
                    {item.description}
                  </p>

                  {/* Barre de progression au bottom */}
                  <div className="mt-6 h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full bg-gradient-to-r from-primary to-cyan-500"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-700 text-white">
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
                href="tel:+33123456789"
                className="bg-secondary text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-colors text-lg font-semibold"
              >
                📞 01 23 45 67 89
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Services


import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { useEffect, useRef } from 'react'

const Home = () => {
  const sectionRefs = useRef([])

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in')
            }
          })
        },
        { threshold: 0.1 }
      )
      if (ref) observer.observe(ref)
      return observer
    })

    return () => observers.forEach((observer) => observer.disconnect())
  }, [])

  const services = [
    { title: 'Dépannage urgent', icon: '🚨', description: 'Intervention rapide 24h/24 et 7j/7' },
    { title: 'Installation', icon: '🔧', description: 'Installation complète de sanitaires' },
    { title: 'Rénovation', icon: '🏠', description: 'Rénovation de salle de bain' },
    { title: 'Entretien', icon: '🛠️', description: 'Maintenance préventive régulière' },
  ]

  const testimonials = [
    { name: 'Marie Dubois', text: 'Service excellent et rapide ! Je recommande vivement.', rating: 5 },
    { name: 'Jean Martin', text: 'Très professionnel, travail soigné et propre.', rating: 5 },
    { name: 'Sophie Lefebvre', text: 'Intervention en urgence, problème résolu en 1h. Parfait !', rating: 5 },
  ]

  return (
    <>
      <SEO
        title="Accueil"
        description="DB Plomberie, votre plombier expert à Toulouse et alentours. Installation sanitaire, rénovation salle de bain et cuisine. Intervention rapide, devis gratuit. Du lundi au samedi de 9h à 19h."
        keywords="plombier Toulouse, plomberie Toulouse, dépannage plomberie urgence Toulouse, installation sanitaire Toulouse, rénovation salle de bain Toulouse, plombier 31, fuite d'eau Toulouse, débouchage Toulouse, DB Plomberie"
        url="https://dbplomberie.fr/"
      />

      {/* Hero Section - Fond avec image */}
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
      >
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <img
            src="/plumbing-professional-doing-his-job.jpg"
            alt="Expert plombier professionnel au travail"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Overlay pour améliorer la lisibilité du texte */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-blue-50/60 to-cyan-50/70"></div>
        </div>

        {/* Contenu */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Votre Expert en <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">Plomberie</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8">
                Intervention rapide à Toulouse et alentours. Service de qualité disponible du lundi au samedi de 9h à 19h.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-primary to-cyan-500 text-white px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-105 text-center text-lg font-semibold"
                >
                  Demander un devis gratuit
                </Link>
                <a
                  href="tel:+33652085070"
                  className="bg-white/80 backdrop-blur text-primary border-2 border-primary px-8 py-4 rounded-xl hover:bg-primary hover:text-white transition-all hover:scale-105 shadow-xl text-center text-lg font-semibold"
                >
                  06 52 08 50 70
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Design moderne */}
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden"
      >
        {/* Effets de fond décoratifs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="bg-primary/20 text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider border border-primary/30">
                Nos Services
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Des solutions complètes pour tous vos besoins</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Une expertise reconnue et des services de qualité adaptés à chaque situation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col group">
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                    <span className="text-3xl text-white">{service.icon}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-white">
                    {service.title}
                  </h3>

                  <p className="text-gray-100/80 leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>

                  <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span>En savoir plus</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-cyan-500 text-white px-10 py-5 rounded-full hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 text-lg font-semibold group"
            >
              <span>Découvrir tous nos services</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Fond clair */}
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-xl text-gray-600">L'excellence au service de votre confort</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: '25+ ans d\'expérience', description: 'Une expertise reconnue depuis 1995', icon: '⭐' },
                  { title: 'Intervention rapide', description: 'Sur place en moins d\'1 heure', icon: '⚡' },
                  { title: 'Prix transparents', description: 'Devis gratuit et sans engagement', icon: '💰' },
                  { title: 'Garantie qualité', description: 'Travaux garantis 2 ans', icon: '✅' },
                  { title: 'Disponibilité 24/7', description: 'À votre service jour et nuit', icon: '🕐' },
                  { title: 'Équipe certifiée', description: 'Plombiers qualifiés et assurés', icon: '👨‍🔧' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                  >
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/Plumber repairing pipe burst.jpg"
                  alt="Plombier professionnel réparant une fuite d'eau"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Design Light & Premium */}
      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        className="py-24 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 relative overflow-hidden"
      >
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/5 to-cyan-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/5 to-purple-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Avis Clients</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ils nous font confiance</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">Découvrez pourquoi plus de <span className="text-primary font-bold">5000 clients</span> recommandent nos services à Toulouse.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="h-full bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-8 text-6xl text-primary/10 font-serif leading-none group-hover:text-primary/20 transition-colors">"</div>

                  {/* Stars */}
                  <div className="flex mb-6 space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-lg text-gray-700 italic mb-8 flex-grow leading-relaxed relative z-10">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center mt-auto border-t border-gray-100 pt-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-cyan-500 shadow-lg flex items-center justify-center text-white font-bold text-xl mr-4 transform group-hover:scale-110 transition-transform duration-300">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      <div className="flex items-center text-sm text-primary font-medium">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Client vérifié
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA - Fond clair */}
      <section
        ref={(el) => (sectionRefs.current[4] = el)}
        className="py-20 bg-gradient-to-br from-blue-50 to-cyan-100"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl p-12 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Besoin d'un plombier ?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contactez-nous dès maintenant pour un devis gratuit ou une intervention d'urgence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-primary to-cyan-500 text-white px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-primary/30 transition-all text-lg font-semibold"
              >
                Demander un devis
              </Link>
              <a
                href="tel:+33652085070"
                className="bg-secondary text-white px-8 py-4 rounded-xl hover:bg-cyan-600 transition-colors text-lg font-semibold"
              >
                📞 06 52 08 50 70
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home


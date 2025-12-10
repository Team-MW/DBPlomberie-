import { motion } from 'framer-motion'
import SEO from '../components/SEO'

const Contact = () => {
  

  return (
    <>
      <SEO 
        title="Contact - Devis Gratuit"
        description="Contactez DB Plomberie à Toulouse pour un devis gratuit ou une intervention d'urgence. Disponible 24h/24 et 7j/7. Réponse rapide garantie. Téléphone, email ou formulaire en ligne."
        keywords="contact plombier Toulouse, devis plomberie gratuit Toulouse, urgence plombier Toulouse 24/7, rendez-vous plombier Toulouse, intervention rapide Toulouse, demande devis plomberie Toulouse"
        url="https://dbplomberie.fr/contact"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-600">
              Une question ? Un projet ? Une urgence ? 
              Notre équipe est à votre écoute 24h/24 et 7j/7
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: '📞',
                title: 'Téléphone',
                content: '06 52 08 50 70',
                link: 'tel:+33652085070',
                description: 'Lun-Sam : 9h-19h',
              },
              {
                icon: '📧',
                title: 'Email',
                content: 'Dbplomberie31@gmail.com',
                link: 'mailto:Dbplomberie31@gmail.com',
                description: 'Réponse sous 24h',
              },
              {
                icon: '📍',
                title: 'Adresse',
                content: '9 rue Caulet',
                link: 'https://maps.google.com/?q=9+rue+Caulet+31300+Toulouse',
                description: '31300 Toulouse',
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl text-center hover:shadow-xl transition-all group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-primary font-semibold mb-1">{item.content}</p>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Form and Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Demander un devis gratuit
              </h2>
              <div className="space-y-6">
                <iframe
                  src="https://tally.so/r/RGxzbQ?transparentBackground=1&dynamicHeight=1&hideTitle=1"
                  title="Formulaire Tally"
                  width="100%"
                  height="700"
                  style={{ border: 'none' }}
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Image Section */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-64">
                <img 
                  src="/2104.i402.007.F.m004.c9.Plumber flat background.jpg" 
                  alt="Zone d'intervention Toulouse et alentours"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <p className="text-white font-bold text-xl text-center">Zone d'intervention : Toulouse et alentours</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Horaires</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-semibold text-gray-700">Lundi - Samedi</span>
                    <span className="text-primary font-bold">9h00 - 19h00</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-semibold text-gray-700">Dimanche</span>
                    <span className="text-gray-600">Fermé</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Adresse</p>
                      <p className="text-gray-600">9 rue Caulet<br />31300 Toulouse</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-primary to-blue-700 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Besoin urgent ?</h3>
                <p className="mb-6 text-blue-100">
                  Pour une intervention immédiate, appelez-nous directement
                </p>
                <a
                  href="tel:+33123456789"
                  className="block w-full bg-white text-primary py-4 rounded-lg font-semibold text-center hover:bg-blue-50 transition-colors"
                >
                  📞 Appeler maintenant
                </a>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '✓', text: 'Devis gratuit' },
                  { icon: '🛡️', text: 'Garantie 2 ans' },
                  { icon: '⚡', text: 'Intervention rapide' },
                  { icon: '👨‍🔧', text: 'Experts certifiés' },
                ].map((badge, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl shadow text-center"
                  >
                    <div className="text-3xl mb-2">{badge.icon}</div>
                    <p className="text-sm font-semibold text-gray-700">{badge.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'Quels sont vos horaires d\'intervention ?',
                a: 'Nous intervenons du lundi au samedi de 9h à 19h sur Toulouse et alentours. Nous nous engageons à répondre rapidement à toutes vos demandes.',
              },
              {
                q: 'Le devis est-il gratuit ?',
                a: 'Absolument ! Nous proposons un devis gratuit et sans engagement pour tous types de travaux. Contactez-nous pour prendre rendez-vous.',
              },
              {
                q: 'Quelle est votre zone d\'intervention ?',
                a: 'Nous intervenons sur Toulouse et alentours (rayon de 30 km). Notre adresse : 9 rue Caulet, 31300 Toulouse. N\'hésitez pas à nous contacter pour vérifier si nous couvrons votre secteur.',
              },
              {
                q: 'Quels moyens de paiement acceptez-vous ?',
                a: 'Nous acceptons les espèces, chèques, cartes bancaires et virements. Un paiement en plusieurs fois est possible pour les gros travaux.',
              },
              {
                q: 'Êtes-vous assurés ?',
                a: 'Oui, nous sommes assurés et tous nos plombiers sont qualifiés. Nous offrons également une garantie sur tous nos travaux.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact


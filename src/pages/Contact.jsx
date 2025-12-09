import { motion } from 'framer-motion'
import { useState } from 'react'
import SEO from '../components/SEO'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Logique d'envoi du formulaire
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

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
                content: '01 23 45 67 89',
                link: 'tel:+33123456789',
                description: 'Disponible 24/7',
              },
              {
                icon: '📧',
                title: 'Email',
                content: 'contact@plomberiepro.fr',
                link: 'mailto:contact@plomberiepro.fr',
                description: 'Réponse sous 24h',
              },
              {
                icon: '📍',
                title: 'Adresse',
                content: '123 Rue de la Plomberie',
                link: '#',
                description: '75001 Paris, France',
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
              
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6"
                >
                  ✓ Merci ! Nous vous recontacterons rapidement.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="jean.dupont@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="01 23 45 67 89"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">
                    Type de service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="urgence">Dépannage d'urgence</option>
                    <option value="installation">Installation</option>
                    <option value="renovation">Rénovation</option>
                    <option value="entretien">Entretien</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Décrivez votre besoin..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
                >
                  Envoyer ma demande
                </button>
              </form>
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
                  alt="Zone d'intervention Paris et Île-de-France"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <p className="text-white font-bold text-xl text-center">Zone d'intervention : Paris et Île-de-France</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Horaires</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-semibold text-gray-700">Urgences</span>
                    <span className="text-primary font-bold">24h/24 - 7j/7</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-semibold text-gray-700">Lundi - Vendredi</span>
                    <span className="text-gray-600">8h00 - 19h00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-semibold text-gray-700">Samedi</span>
                    <span className="text-gray-600">9h00 - 17h00</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-semibold text-gray-700">Dimanche</span>
                    <span className="text-gray-600">Urgences uniquement</span>
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
                q: 'Intervenez-vous en urgence ?',
                a: 'Oui, nous sommes disponibles 24h/24 et 7j/7 pour toutes les urgences. Nous nous engageons à intervenir en moins d\'1 heure sur Paris et la proche banlieue.',
              },
              {
                q: 'Le devis est-il gratuit ?',
                a: 'Absolument ! Nous proposons un devis gratuit et sans engagement pour tous types de travaux. Contactez-nous pour prendre rendez-vous.',
              },
              {
                q: 'Quels moyens de paiement acceptez-vous ?',
                a: 'Nous acceptons les espèces, chèques, cartes bancaires et virements. Un paiement en plusieurs fois est possible pour les gros travaux.',
              },
              {
                q: 'Êtes-vous assurés ?',
                a: 'Oui, nous sommes assurés et tous nos plombiers sont certifiés. Nous offrons également une garantie de 2 ans sur tous nos travaux.',
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


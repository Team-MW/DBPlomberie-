import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import Icon from '../components/Icon'

const Contact = () => {


  useEffect(() => {
    const handleIFrameMessage = (e) => {
      if (typeof e.data === 'object') return;
      const args = e.data.split(":");
      if (args.length > 2) {
        const iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]);
        if (!iframe) return;
        switch (args[0]) {
          case "scrollIntoView":
            iframe.scrollIntoView();
            break;
          case "setHeight":
            iframe.style.height = args[1] + "px";
            break;
          case "collapseErrorPage":
            if (iframe.clientHeight > window.innerHeight) {
              iframe.style.height = window.innerHeight + "px";
            }
            break;
          case "reloadPage":
            window.location.reload();
            break;
        }
      }
    };

    window.addEventListener("message", handleIFrameMessage, false);
    return () => {
      window.removeEventListener("message", handleIFrameMessage, false);
    };
  }, []);

  return (
    <>
      <SEO
        title="Contact - Devis Gratuit"
        description="Contactez DB Plomberie à Toulouse pour un devis gratuit ou une intervention d'urgence. Disponible 7 j / 7. Réponse rapide garantie. Téléphone, email ou formulaire en ligne."
        keywords="contact plombier Toulouse, devis plomberie gratuit Toulouse, urgence plombier Toulouse, rendez-vous plombier Toulouse, intervention rapide Toulouse, demande devis plomberie Toulouse"
        url="https://dbplomberie.fr/contact"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-50">
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
              Nous sommes à votre écoute 7 j / 7
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
                icon: 'phone',
                title: 'Téléphone',
                content: '06 52 08 50 70',
                link: 'tel:+33652085070',
                description: '7 j / 7',
              },
              {
                icon: 'mail',
                title: 'Email',
                content: 'Db.plomberie31@gmail.com',
                link: 'mailto:Db.plomberie31@gmail.com',
                description: 'Réponse sous 24h',
              },
              {
                icon: 'pin',
                title: 'Adresse',
                content: 'Toulouse et alentours',
                link: 'https://maps.google.com/?q=Toulouse',
                description: 'Haute-Garonne',
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:border-primary hover:shadow-md transition-all group"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon name={item.icon} className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-primary font-semibold mb-1 break-words">{item.content}</p>
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
              className="bg-white p-8 rounded-xl border border-gray-200"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Demander un devis gratuit
              </h2>
              <div className="space-y-6">
                <iframe
                  id="JotFormIFrame-260532857861363"
                  title="Formulaire de contact"
                  allow="geolocation; microphone; camera; fullscreen"
                  src="https://form.jotform.com/260532857861363?isIframeEmbed=1"
                  frameBorder="0"
                  style={{ minWidth: '100%', height: '700px', border: 'none' }}
                  scrolling="no"
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
                  src="/plombier-zone-intervention-toulouse.jpg"
                  alt="Plombier DB Plomberie, intervention à Toulouse, Blagnac, Colomiers et Tournefeuille"
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
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Horaires</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-semibold text-gray-700">7 j / 7</span>
                    <span className="text-primary font-bold">9h00 - 19h00</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-primary text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Besoin urgent ?</h3>
                <p className="mb-6 text-blue-100">
                  Pour une intervention immédiate, appelez-nous directement
                </p>
                <a
                  href="tel:+33652085070"
                  className="flex items-center justify-center gap-2 w-full bg-white text-primary py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  <Icon name="phone" className="w-5 h-5" />
                  Appeler maintenant
                </a>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: 'checkCircle', text: 'Devis gratuit' },
                  { icon: 'shield', text: 'Travaux garantis' },
                  { icon: 'bolt', text: 'Intervention rapide' },
                  { icon: 'team', text: 'Artisan qualifié' },
                ].map((badge, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl border border-gray-200 text-center"
                  >
                    <Icon name={badge.icon} className="w-7 h-7 text-primary mx-auto mb-2" />
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
                a: 'Nous intervenons 7 j / 7 sur Toulouse et alentours. Nous nous engageons à répondre rapidement à toutes vos demandes.',
              },
              {
                q: 'Le devis est-il gratuit ?',
                a: 'Absolument ! Nous proposons un devis gratuit et sans engagement pour tous types de travaux. Contactez-nous pour prendre rendez-vous.',
              },
              {
                q: 'Quelle est votre zone d\'intervention ?',
                a: 'Nous intervenons sur Toulouse et alentours (rayon de 30 km). N\'hésitez pas à nous contacter pour vérifier si nous couvrons votre secteur.',
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


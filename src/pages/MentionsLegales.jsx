import { motion } from 'framer-motion'
import SEO from '../components/SEO'

const MentionsLegales = () => {
  return (
    <>
      <SEO 
        title="Mentions Légales"
        description="Mentions légales de DB Plomberie - Informations sur l'entreprise, hébergeur et conditions d'utilisation du site."
        keywords="mentions légales, DB Plomberie, conditions utilisation, RGPD"
        url="https://dbplomberie.fr/mentions-legales"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Mentions Légales
            </h1>
            <p className="text-xl text-blue-100">
              Informations légales concernant DB Plomberie
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contenu des Mentions Légales */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {/* Éditeur du site */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <svg className="w-8 h-8 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Éditeur du site
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-primary">
                <p className="mb-3"><strong className="text-gray-900">Raison sociale :</strong> <span className="text-gray-700">DB Plomberie</span></p>
                <p className="mb-3"><strong className="text-gray-900">Gérant :</strong> <span className="text-gray-700">Djivan Bruno</span></p>
                <p className="mb-3"><strong className="text-gray-900">Adresse :</strong> <span className="text-gray-700">9 rue Caulet, 31300 Toulouse</span></p>
                <p className="mb-3"><strong className="text-gray-900">Téléphone :</strong> <a href="tel:+33652085070" className="text-primary hover:text-primary-dark transition-colors">06 52 08 50 70</a></p>
                <p className="mb-3"><strong className="text-gray-900">Email :</strong> <a href="mailto:Dbplomberie31@gmail.com" className="text-primary hover:text-primary-dark transition-colors">Dbplomberie31@gmail.com</a></p>
                <p className="mb-0"><strong className="text-gray-900">Horaires :</strong> <span className="text-gray-700">Du lundi au samedi de 9h à 19h</span></p>
              </div>
            </div>

            {/* Directeur de publication */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <svg className="w-8 h-8 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Directeur de publication
              </h2>
              <p className="text-gray-700">Le directeur de la publication du site est <strong>Djivan Bruno</strong>, gérant de DB Plomberie.</p>
            </div>

            {/* Hébergement */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <svg className="w-8 h-8 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
                Hébergement
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">Le site <strong>dbplomberie.fr</strong> est hébergé par :</p>
                <p className="text-gray-600 text-sm italic">
                  [À compléter avec les informations de votre hébergeur : nom, adresse, téléphone]
                </p>
              </div>
            </div>

            {/* Conception */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <svg className="w-8 h-8 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Conception et réalisation
              </h2>
              <p className="text-gray-700">
                Le site a été conçu et développé par{' '}
                <a 
                  href="https://microdidact.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark font-semibold transition-colors"
                >
                  Microdidact
                </a>
                , agence de communication digitale à Toulouse.
              </p>
            </div>

            {/* Propriété intellectuelle */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <svg className="w-8 h-8 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Propriété intellectuelle
              </h2>
              <p className="text-gray-700 mb-4">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, etc.) est la propriété exclusive de DB Plomberie ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p className="text-gray-700">
                Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit est interdite sans l'autorisation écrite préalable de DB Plomberie.
              </p>
            </div>

            {/* Données personnelles */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <svg className="w-8 h-8 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Protection des données personnelles (RGPD)
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Collecte des données</h3>
              <p className="text-gray-700 mb-4">
                DB Plomberie collecte des données personnelles uniquement dans le cadre de demandes de devis, de contact ou de demandes d'intervention. Les données collectées sont :
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Adresse postale (si nécessaire pour l'intervention)</li>
                <li>Message et détails de la demande</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Utilisation des données</h3>
              <p className="text-gray-700 mb-4">
                Les données personnelles collectées sont utilisées exclusivement pour :
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Répondre à vos demandes de devis ou d'information</li>
                <li>Planifier et réaliser les interventions</li>
                <li>Assurer le suivi de la relation client</li>
                <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Conservation des données</h3>
              <p className="text-gray-700 mb-4">
                Vos données personnelles sont conservées pendant la durée nécessaire à la réalisation des finalités mentionnées ci-dessus et conformément aux obligations légales.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Vos droits</h3>
              <p className="text-gray-700 mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Droit d'accès :</strong> obtenir la confirmation que vos données sont traitées et en obtenir une copie</li>
                <li><strong>Droit de rectification :</strong> faire corriger des données inexactes ou incomplètes</li>
                <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                <li><strong>Droit de limitation :</strong> demander la limitation du traitement de vos données</li>
              </ul>
              <p className="text-gray-700">
                Pour exercer ces droits, vous pouvez nous contacter par email à{' '}
                <a href="mailto:Dbplomberie31@gmail.com" className="text-primary hover:text-primary-dark font-semibold">
                  Dbplomberie31@gmail.com
                </a>
                {' '}ou par courrier à l'adresse : 9 rue Caulet, 31300 Toulouse.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <svg className="w-8 h-8 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Cookies
              </h2>
              <p className="text-gray-700 mb-4">
                Le site dbplomberie.fr utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic du site.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Types de cookies utilisés</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
                <li><strong>Cookies analytiques :</strong> pour mesurer l'audience et améliorer nos services</li>
              </ul>
              <p className="text-gray-700">
                Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur.
              </p>
            </div>

            {/* Responsabilité */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <svg className="w-8 h-8 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Limitation de responsabilité
              </h2>
              <p className="text-gray-700 mb-4">
                DB Plomberie s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, DB Plomberie ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
              </p>
              <p className="text-gray-700">
                DB Plomberie ne saurait être tenue responsable des dommages directs ou indirects qui pourraient résulter de l'accès au site ou de l'utilisation du site et/ou des informations qui y sont contenues.
              </p>
            </div>

            {/* Liens externes */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <svg className="w-8 h-8 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Liens hypertextes
              </h2>
              <p className="text-gray-700">
                Le site peut contenir des liens hypertextes vers d'autres sites. DB Plomberie n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à l'accès, au contenu ou à l'utilisation de ces sites, ainsi qu'aux dommages pouvant en résulter.
              </p>
            </div>

            {/* Droit applicable */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <svg className="w-8 h-8 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
                Droit applicable et juridiction
              </h2>
              <p className="text-gray-700">
                Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux compétents.
              </p>
            </div>

            {/* Date de mise à jour */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-sm italic">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>

            {/* Contact */}
            <div className="mt-12 bg-gradient-to-r from-primary to-blue-600 p-8 rounded-xl text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Une question sur nos mentions légales ?</h3>
              <p className="mb-6 text-blue-100">
                Notre équipe est à votre disposition pour répondre à toutes vos questions.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Nous contacter
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default MentionsLegales


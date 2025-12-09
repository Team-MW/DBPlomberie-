import { motion } from 'framer-motion'
import { useState } from 'react'
import SEO from '../components/SEO'

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'bathroom', label: 'Salles de bain' },
    { id: 'kitchen', label: 'Cuisines' },
    { id: 'emergency', label: 'Dépannages' },
    { id: 'installation', label: 'Installations' },
  ]

  const projects = [
    {
      id: 1,
      title: 'Rénovation salle de bain moderne',
      category: 'bathroom',
      location: 'Toulouse Centre',
      duration: '2 semaines',
      description: 'Transformation complète avec douche italienne et carrelage haut de gamme',
      image: '🚿',
      tags: ['Rénovation', 'Design moderne', 'Douche italienne'],
    },
    {
      id: 2,
      title: 'Installation cuisine complète',
      category: 'kitchen',
      location: 'Colomiers',
      duration: '1 semaine',
      description: 'Installation de plomberie pour cuisine équipée avec îlot central',
      image: '🍴',
      tags: ['Installation', 'Cuisine', 'Îlot central'],
    },
    {
      id: 3,
      title: 'Dépannage fuite urgente',
      category: 'emergency',
      location: 'Toulouse Capitole',
      duration: '2 heures',
      description: 'Intervention rapide pour fuite importante, réparation définitive',
      image: '🚨',
      tags: ['Urgence', 'Fuite', 'Intervention rapide'],
    },
    {
      id: 4,
      title: 'Salle de bain familiale',
      category: 'bathroom',
      location: 'Blagnac',
      duration: '3 semaines',
      description: 'Création d\'une grande salle de bain avec baignoire et double vasque',
      image: '🛁',
      tags: ['Rénovation', 'Famille', 'Double vasque'],
    },
    {
      id: 5,
      title: 'Installation chauffe-eau solaire',
      category: 'installation',
      location: 'Tournefeuille',
      duration: '3 jours',
      description: 'Installation écologique avec système solaire thermique',
      image: '☀️',
      tags: ['Écologique', 'Solaire', 'Installation'],
    },
    {
      id: 6,
      title: 'Rénovation WC suspendu',
      category: 'bathroom',
      location: 'Toulouse Compans',
      duration: '2 jours',
      description: 'Installation de WC suspendu avec bâti-support et carrelage',
      image: '🚽',
      tags: ['Rénovation', 'WC suspendu', 'Moderne'],
    },
    {
      id: 7,
      title: 'Débouchage canalisation immeuble',
      category: 'emergency',
      location: 'Toulouse Minimes',
      duration: '4 heures',
      description: 'Hydrocurage complet des canalisations d\'un immeuble de 6 étages',
      image: '🌊',
      tags: ['Débouchage', 'Hydrocurage', 'Immeuble'],
    },
    {
      id: 8,
      title: 'Installation système de filtration',
      category: 'installation',
      location: 'Balma',
      duration: '1 jour',
      description: 'Système de filtration d\'eau pour toute la maison',
      image: '💧',
      tags: ['Installation', 'Filtration', 'Eau potable'],
    },
    {
      id: 9,
      title: 'Salle de bain PMR',
      category: 'bathroom',
      location: 'Courbevoie',
      duration: '2 semaines',
      description: 'Adaptation salle de bain pour personne à mobilité réduite',
      image: '♿',
      tags: ['PMR', 'Accessibilité', 'Adaptation'],
    },
  ]

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <>
      <SEO 
        title="Portfolio - Nos Réalisations"
        description="Découvrez les réalisations de DB Plomberie à Toulouse : rénovations de salles de bain modernes, installations sanitaires de qualité, cuisines équipées. Plus de 500 projets réussis depuis 2008."
        keywords="portfolio plomberie Toulouse, réalisations plombier Toulouse, rénovation salle de bain Toulouse exemples, projets plomberie Toulouse, avant après plomberie, travaux plomberie Toulouse photos"
        url="https://dbplomberie.fr/portfolio"
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
              Notre Portfolio
            </h1>
            <p className="text-xl text-gray-600">
              Plus de 5000 projets réalisés avec succès. 
              Découvrez quelques-unes de nos réalisations les plus emblématiques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '5000+', label: 'Projets réalisés' },
              { number: '25+', label: 'Années d\'expérience' },
              { number: '98%', label: 'Clients satisfaits' },
              { number: '24/7', label: 'Disponibilité' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white sticky top-20 z-30 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
              >
                <div className="h-64 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform">
                  {project.image}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4 space-x-4">
                    <span className="flex items-center">
                      <span className="mr-1">📍</span>
                      {project.location}
                    </span>
                    <span className="flex items-center">
                      <span className="mr-1">⏱️</span>
                      {project.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-50 text-primary text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
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
              Votre projet sera le prochain ?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contactez-nous pour discuter de votre projet et obtenir un devis gratuit
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold"
              >
                Demander un devis
              </a>
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

export default Portfolio


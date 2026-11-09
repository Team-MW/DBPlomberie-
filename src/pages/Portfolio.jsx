import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Icon from '../components/Icon'

// Photos d'ambiance : déposer les fichiers dans public/images/ (voir public/images/LISEZMOI.txt)
const CategoryImage = ({ category, icon, alt }) => {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div className="h-48 bg-slate-100 text-primary/60 flex items-center justify-center">
        <Icon name={icon} className="w-14 h-14" />
      </div>
    )
  }
  return (
    <img
      src={`/images/${category}.jpg`}
      alt={alt}
      className="h-48 w-full object-cover"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

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
      icon: 'droplet',
      tags: ['Rénovation', 'Design moderne', 'Douche italienne'],
    },
    {
      id: 2,
      title: 'Installation cuisine complète',
      category: 'kitchen',
      location: 'Colomiers',
      duration: '1 semaine',
      description: 'Installation de plomberie pour cuisine équipée avec îlot central',
      icon: 'cog',
      tags: ['Installation', 'Cuisine', 'Îlot central'],
    },
    {
      id: 3,
      title: 'Dépannage fuite urgente',
      category: 'emergency',
      location: 'Toulouse Capitole',
      duration: '2 heures',
      description: 'Intervention rapide pour fuite importante, réparation définitive',
      icon: 'alert',
      tags: ['Urgence', 'Fuite', 'Intervention rapide'],
    },
    {
      id: 4,
      title: 'Salle de bain familiale',
      category: 'bathroom',
      location: 'Blagnac',
      duration: '3 semaines',
      description: 'Création d\'une grande salle de bain avec baignoire et double vasque',
      icon: 'droplet',
      tags: ['Rénovation', 'Famille', 'Double vasque'],
    },
    {
      id: 5,
      title: 'Installation chauffe-eau solaire',
      category: 'installation',
      location: 'Tournefeuille',
      duration: '3 jours',
      description: 'Installation écologique avec système solaire thermique',
      icon: 'bolt',
      tags: ['Écologique', 'Solaire', 'Installation'],
    },
    {
      id: 6,
      title: 'Rénovation WC suspendu',
      category: 'bathroom',
      location: 'Toulouse Compans',
      duration: '2 jours',
      description: 'Installation de WC suspendu avec bâti-support et carrelage',
      icon: 'home',
      tags: ['Rénovation', 'WC suspendu', 'Moderne'],
    },
    {
      id: 7,
      title: 'Débouchage canalisation immeuble',
      category: 'emergency',
      location: 'Toulouse Minimes',
      duration: '4 heures',
      description: 'Hydrocurage complet des canalisations d\'un immeuble de 6 étages',
      icon: 'droplet',
      tags: ['Débouchage', 'Hydrocurage', 'Immeuble'],
    },
    {
      id: 8,
      title: 'Installation système de filtration',
      category: 'installation',
      location: 'Balma',
      duration: '1 jour',
      description: 'Système de filtration d\'eau pour toute la maison',
      icon: 'droplet',
      tags: ['Installation', 'Filtration', 'Eau potable'],
    },
    {
      id: 9,
      title: 'Salle de bain PMR',
      category: 'bathroom',
      location: 'Toulouse Rangueil',
      duration: '2 semaines',
      description: 'Adaptation salle de bain pour personne à mobilité réduite',
      icon: 'team',
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
        description="Découvrez les réalisations de DB Plomberie à Toulouse : rénovations de salles de bain modernes, installations sanitaires de qualité, cuisines équipées. "
        keywords="portfolio plomberie Toulouse, réalisations plombier Toulouse, rénovation salle de bain Toulouse exemples, projets plomberie Toulouse, avant après plomberie, travaux plomberie Toulouse photos"
        url="https://dbplomberie.fr/portfolio"
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
              Notre Portfolio
            </h1>
            <p className="text-xl text-gray-600">
              Découvrez quelques-unes de nos réalisations les plus emblématiques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Savoir-faire */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <figure>
              <img src="/plombier-toulouse-intervention.jpg" alt="Plombier DB Plomberie en intervention à Toulouse" className="w-full h-72 object-cover rounded-xl" loading="lazy" />
              <figcaption className="mt-3 text-sm text-gray-600">Dépannage et réparation chez les particuliers à Toulouse</figcaption>
            </figure>
            <figure>
              <img src="/plombier-reparation-fuite-eau.jpg" alt="Réparation d'une fuite d'eau sur canalisation par un plombier toulousain" className="w-full h-72 object-cover rounded-xl" loading="lazy" />
              <figcaption className="mt-3 text-sm text-gray-600">Recherche et réparation de fuite d'eau</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-5 bg-white sticky top-16 md:top-20 z-30 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-lg font-semibold transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
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
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-all"
              >
                <CategoryImage category={project.category} icon={project.icon} alt={`${project.title} à ${project.location}`} />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4 space-x-4">
                    <span className="flex items-center gap-1.5 text-sm">
                      <Icon name="pin" className="w-4 h-4" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm">
                      <Icon name="clock" className="w-4 h-4" />
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
      <section className="py-20 bg-primary text-white">
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

export default Portfolio


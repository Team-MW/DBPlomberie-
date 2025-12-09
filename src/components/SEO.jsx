import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title = 'Accueil', 
  description = 'DB Plomberie, votre plombier de confiance à Toulouse et sa région. Intervention rapide, dépannage d\'urgence 24/7, installation sanitaire, rénovation salle de bain. Devis gratuit.',
  keywords = 'plombier Toulouse, plomberie Toulouse, dépannage plomberie Toulouse, urgence plombier Toulouse, installation sanitaire Toulouse, rénovation salle de bain Toulouse, fuite d\'eau Toulouse, débouchage Toulouse, plombier 31, DB Plomberie',
  image = '/og-image.jpg',
  url = 'https://dbplomberie.fr',
  type = 'website'
}) => {
  const fullTitle = title === 'Accueil' 
    ? 'DB Plomberie - Plombier Expert à Toulouse | Dépannage 24/7'
    : `${title} | DB Plomberie - Plombier à Toulouse`
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="DB Plomberie" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://dbplomberie.fr${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://dbplomberie.fr${image}`} />

      {/* Additional SEO */}
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="fr-FR" />
      <meta name="author" content="DB Plomberie" />
      <meta name="geo.region" content="FR-31" />
      <meta name="geo.placename" content="Toulouse" />
    </Helmet>
  )
}

export default SEO


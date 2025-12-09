# Site Web Plomberie Pro 🔧

Site web professionnel pour une entreprise de plomberie, développé avec React, React Router, TailwindCSS et Framer Motion.

## ✨ Fonctionnalités

### 1. Structure Multi-pages
- ✅ 4 pages principales : Accueil, Services, Portfolio, Contact
- ✅ Navigation avec React Router
- ✅ URLs propres et SEO-friendly
- ✅ Optimisation SEO avec balises meta dynamiques

### 2. Design Responsive
- ✅ Header avec menu de navigation adaptatif
- ✅ Menu horizontal sur desktop
- ✅ Menu burger animé sur mobile avec panneau latéral
- ✅ Design moderne avec TailwindCSS

### 3. Animations et Transitions
- ✅ Animations fluides avec Framer Motion
- ✅ Effets de slide/fade entre les pages
- ✅ Animations au scroll
- ✅ Transitions douces sur tous les éléments interactifs

### 4. Alternance des Fonds de Section
- ✅ Sections avec fonds variés (clair/sombre)
- ✅ Alternance harmonieuse pour éviter la monotonie
- ✅ Dégradés et couleurs modernes

### 5. Optimisation SEO et Performance
- ✅ Balises meta dynamiques par page
- ✅ Titres H1/H2 optimisés
- ✅ Attributs alt sur les images
- ✅ sitemap.xml et robots.txt
- ✅ Lazy loading des pages (code splitting)
- ✅ Code splitting avec Vite
- ✅ Bundle optimisé

### 6. Footer et CTA
- ✅ Footer complet avec informations de contact
- ✅ Liens vers les réseaux sociaux
- ✅ Formulaire de newsletter
- ✅ Bouton CTA flottant "Demander un devis" sur toutes les pages

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

## 📦 Technologies utilisées

- **React 18** - Framework JavaScript
- **React Router 6** - Gestion de la navigation
- **TailwindCSS** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides
- **React Helmet Async** - Gestion des balises meta pour SEO
- **Vite** - Build tool rapide

## 📁 Structure du projet

```
plomberieteste/
├── public/
│   ├── robots.txt          # Configuration pour les moteurs de recherche
│   └── sitemap.xml         # Plan du site pour SEO
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Header responsive avec menu burger
│   │   ├── Footer.jsx      # Footer avec newsletter et liens
│   │   ├── CTAButton.jsx   # Bouton CTA flottant
│   │   ├── PageTransition.jsx  # Wrapper pour transitions de page
│   │   └── SEO.jsx         # Composant pour balises meta SEO
│   ├── pages/
│   │   ├── Home.jsx        # Page d'accueil
│   │   ├── Services.jsx    # Page des services
│   │   ├── Portfolio.jsx   # Page portfolio
│   │   └── Contact.jsx     # Page contact avec formulaire
│   ├── App.jsx             # Composant principal avec routes
│   ├── main.jsx            # Point d'entrée
│   └── index.css           # Styles globaux avec Tailwind
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans `tailwind.config.js` :
- **primary**: #1e40af (bleu)
- **secondary**: #06b6d4 (cyan)
- **dark**: #1f2937 (gris foncé)

### Contenu
- Modifiez les textes et contenus dans les fichiers de pages (`src/pages/`)
- Personnalisez les services dans `Services.jsx`
- Ajoutez vos projets dans `Portfolio.jsx`

### SEO
- Mettez à jour les balises meta dans chaque page
- Modifiez `sitemap.xml` avec vos URLs
- Personnalisez `robots.txt` selon vos besoins

## 📱 Pages

### Accueil
- Hero section avec CTA
- Présentation des services
- Témoignages clients
- Section "Pourquoi nous choisir"
- Alternance de fonds clair/sombre

### Services
- Liste détaillée des services
- Tarifs et caractéristiques
- Processus de travail en 4 étapes
- CTA pour contact

### Portfolio
- Filtrage par catégorie
- 9+ projets réalisés
- Statistiques de l'entreprise
- Détails des réalisations

### Contact
- Formulaire de devis
- Coordonnées complètes
- Carte de localisation
- Horaires d'ouverture
- FAQ

## 🔧 Fonctionnalités techniques

- **Code Splitting** : Chargement optimisé des pages avec lazy loading
- **Responsive Design** : Adapté à tous les écrans (mobile, tablette, desktop)
- **Animations performantes** : GPU-accelerated avec Framer Motion
- **SEO optimisé** : Meta tags, sitemap, robots.txt
- **Accessibilité** : Structure sémantique HTML5

## 📞 Support

Pour toute question ou personnalisation, contactez l'équipe de développement.

## 📄 Licence

Ce projet est développé pour Plomberie Pro. Tous droits réservés.


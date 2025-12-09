# 🚀 Guide de Déploiement SEO - DB Plomberie

## 📋 Checklist Avant Déploiement

### 1. Configuration Domaine
- [ ] Acheter le domaine `dbplomberie.fr` (ou similaire)
- [ ] Configurer les DNS vers votre hébergeur
- [ ] Activer le certificat SSL/HTTPS
- [ ] Rediriger www vers non-www (ou inverse)

### 2. Mise à Jour des URLs
Remplacer toutes les occurrences de `https://dbplomberie.fr` par votre domaine réel dans :

- [ ] `index.html` (ligne 28, 31, 34, etc.)
- [ ] `src/components/SEO.jsx` (prop par défaut `url`)
- [ ] `public/sitemap.xml` (toutes les balises `<loc>`)
- [ ] `public/robots.txt` (ligne Sitemap)

**Commande rapide :**
```bash
# Remplacer l'URL dans tous les fichiers
find . -type f -name "*.jsx" -o -name "*.html" -o -name "*.xml" -o -name "*.txt" | \
  xargs sed -i '' 's/https:\/\/dbplomberie\.fr/https:\/\/VOTRE-DOMAINE.fr/g'
```

### 3. Informations de Contact Réelles

Dans `index.html`, mettre à jour le Schema.org (lignes 51-170) :

```json
"telephone": "+33-XX-XX-XX-XX-XX",  // Votre numéro réel
"email": "contact@dbplomberie.fr",   // Votre email réel
"address": {
  "streetAddress": "Votre adresse réelle",
  "postalCode": "31XXX"
}
```

### 4. Créer les Images Manquantes

#### Images Open Graph (1200x630px)
- [ ] `/public/og-image.jpg` - Image principale pour réseaux sociaux
- [ ] Optimisée, poids < 200KB
- [ ] Avec logo DB Plomberie et texte accrocheur

#### Icônes PWA
- [ ] `/public/icon-192x192.png` - Icône 192x192px
- [ ] `/public/icon-512x512.png` - Icône 512x512px
- [ ] `/public/favicon.ico` - Favicon classique

#### Logo
- [ ] `/public/logo.png` - Logo haute résolution pour Schema.org

**Outils recommandés :**
- [Favicon Generator](https://realfavicongenerator.net/)
- [Open Graph Image Generator](https://www.opengraph.xyz/)

### 5. Google Services

#### Google Search Console
1. Aller sur [Google Search Console](https://search.google.com/search-console)
2. Ajouter votre propriété (domaine)
3. Vérifier la propriété (méthode HTML tag ou DNS)
4. Soumettre le sitemap : `https://VOTRE-DOMAINE.fr/sitemap.xml`

#### Google Analytics 4
1. Créer un compte sur [Google Analytics](https://analytics.google.com/)
2. Créer une propriété GA4
3. Obtenir l'ID de mesure (G-XXXXXXXXXX)
4. Ajouter le code dans `index.html` :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

#### Google Business Profile
1. Créer votre fiche sur [Google Business](https://www.google.com/business/)
2. Remplir toutes les informations (horaires, photos, services)
3. Vérifier votre établissement
4. Lier à votre site web

### 6. Build de Production

```bash
# Installer les dépendances
npm install

# Build optimisé
npm run build

# Tester en local
npm run preview
```

Le dossier `dist/` contient votre site optimisé.

### 7. Hébergement Recommandé

#### Option 1 : Netlify (Gratuit, Simple)
```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Déployer
netlify deploy --prod
```

Configuration Netlify (`netlify.toml`) :
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
```

#### Option 2 : Vercel (Gratuit, Performance)
```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel --prod
```

#### Option 3 : Hébergement Classique (Apache/Nginx)
1. Uploader le contenu de `dist/` via FTP
2. Le fichier `.htaccess` est déjà configuré
3. Vérifier que `mod_rewrite` est activé

### 8. Performance & Core Web Vitals

Après déploiement, tester :

#### PageSpeed Insights
- URL : https://pagespeed.web.dev/
- Objectif : Score > 90 sur mobile et desktop

#### WebPageTest
- URL : https://www.webpagetest.org/
- Vérifier le temps de chargement

#### Lighthouse (Chrome DevTools)
```
F12 → Lighthouse → Generate report
```
Objectifs :
- Performance : 90+
- SEO : 95+
- Accessibility : 90+
- Best Practices : 95+

### 9. Schema.org Validation

Valider les données structurées :
1. [Rich Results Test](https://search.google.com/test/rich-results)
2. [Schema Markup Validator](https://validator.schema.org/)
3. Corriger les erreurs éventuelles

### 10. Indexation Rapide

#### Soumettre manuellement les URLs
Dans Google Search Console :
- Inspection d'URL
- Entrer chaque URL principale
- Cliquer "Demander une indexation"

URLs prioritaires :
- `/` (Accueil)
- `/services`
- `/contact`
- `/portfolio`

#### Créer des backlinks initiaux
- Inscrire sur annuaires locaux (Pages Jaunes, 118 712, etc.)
- Réseaux sociaux (Facebook, Instagram, LinkedIn)
- Profil Google Business

### 11. Monitoring Continu

#### Outils à mettre en place
- [ ] Google Analytics 4 (trafic)
- [ ] Google Search Console (positions)
- [ ] Uptime monitoring (ex: UptimeRobot)
- [ ] Microsoft Clarity (heatmaps gratuits)

#### KPIs à suivre
- Positions des mots-clés principaux
- Trafic organique mensuel
- Taux de conversion
- Vitesse de chargement
- Erreurs 404

### 12. Sécurité Post-Déploiement

#### Headers HTTP à vérifier
Tester sur : https://securityheaders.com/

- [ ] Strict-Transport-Security (HSTS)
- [ ] Content-Security-Policy
- [ ] X-Frame-Options
- [ ] X-Content-Type-Options

#### Certificat SSL
- [ ] HTTPS actif partout
- [ ] Redirection HTTP → HTTPS
- [ ] Certificat valide (Let's Encrypt gratuit)

### 13. Maintenance SEO

#### Hebdomadaire
- Vérifier Google Search Console (erreurs)
- Répondre aux avis Google Business
- Vérifier les positions des mots-clés

#### Mensuel
- Publier 2-4 articles de blog
- Mettre à jour le sitemap.xml
- Analyser les performances (Analytics)
- Collecter de nouveaux avis clients

#### Trimestriel
- Audit SEO complet
- Mise à jour du contenu existant
- Analyse de la concurrence
- Optimisation des conversions

## 🔧 Commandes Utiles

### Vérifier les liens cassés
```bash
npm install -g broken-link-checker
blc https://VOTRE-DOMAINE.fr -ro
```

### Générer un nouveau sitemap
```bash
# Mettre à jour la date dans sitemap.xml
sed -i '' "s/<lastmod>.*<\/lastmod>/<lastmod>$(date +%Y-%m-%d)<\/lastmod>/g" public/sitemap.xml
```

### Compresser les images
```bash
# Installer ImageMagick
brew install imagemagick  # macOS
sudo apt install imagemagick  # Linux

# Optimiser toutes les images
find public -name "*.jpg" -exec mogrify -quality 85 {} \;
find public -name "*.png" -exec mogrify -quality 85 {} \;
```

## 📞 Support

Pour toute question sur le déploiement :
- 📧 Microdidact : https://microdidact.com/
- 📚 Documentation Vite : https://vitejs.dev/guide/
- 🔍 Google SEO : https://developers.google.com/search/docs

---

**Bon déploiement ! 🚀**


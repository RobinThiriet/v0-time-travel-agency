# TimeTravel Agency - Webapp Interactive

Webapp fictive de voyage temporel, realisee pour le projet final Ynov.

## Membres du groupe

- Robin Thiriet
- Thomas Fauroux

## Apercu

L'application presente 3 destinations temporelles immersives:

- Paris 1889 (Belle Epoque / Exposition Universelle)
- Cretace -65M (dinosaures / aventure)
- Florence 1504 (Renaissance / art)

Fonctionnalites principales:

- Landing page immersive avec animations
- Galerie interactive des destinations
- Pages detaillees par destination
- Videos dediees par destination
- Chatbot "Chronos" (IA + fallback local)
- Quiz de recommandation personnalisee
- Formulaire de reservation avec validation
- FAQ

## Stack Technique

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS
- Motion (animations)
- API Mistral (optionnelle pour le chatbot)

## Outils IA Utilises

- v0 / assistant IA pour generation et iteration UI
- Mistral AI (`mistral-small-latest`) pour le chatbot (si cle configuree)

## Lancer En Local

```bash
git clone https://github.com/RobinThiriet/TimeTravelAgency.git
cd TimeTravelAgency
npm install
npm run dev
```

Application disponible sur `http://localhost:3000`.

## Variables D'Environnement (Optionnel)

Creer un fichier `.env.local`:

```env
MISTRAL_API_KEY=your_key_here
MISTRAL_MODEL=mistral-small-latest
```

Si ces variables ne sont pas definies, le chatbot fonctionne en mode mock local.

## Structure Rapide

```text
app/
  page.tsx
  destinations/
  api/chat/route.ts
components/
  hero.tsx
  destination-detail.tsx
  chatbot-widget.tsx
  travel-quiz.tsx
  reservation-section.tsx
  faq-section.tsx
lib/
  destinations.ts
  chatbot.ts
public/
  images/
  videos/
```

## Assets

- Images: `public/images/`
- Videos: `public/videos/paris.mp4`, `public/videos/cretace.mp4`, `public/videos/florence.mp4`

## Deploiement

Recommande: **Vercel** (integration directe GitHub).

Etapes:

1. Importer le repo GitHub dans Vercel.
2. Ajouter les variables d'environnement (optionnel).
3. Deploy.

## Rollback

Un tag de secours est disponible:

- `initial-stable`

Commandes utiles:

```bash
git checkout initial-stable
```

## Livrables Moodle

- URL publique de la webapp
- Lien du repository GitHub
- README technique avec stack + features + IA + membres

## Licence

Projet pedagogique Ynov.

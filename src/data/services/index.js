// Importation des services individuels depuis le dossier "services"
import logoService from './services/logo';
import digitalService from './services/digital';
import adsService from './services/ads';
import appService from './services/app';
import llcService from './services/llc';
import websiteService from './services/website';

// ✅ Fusion de tous les services réguliers en un tableau
export const RegularServices = [
  logoService,
  digitalService,
  adsService,
  appService,
  llcService,
  websiteService,
];

// ✅ Liste des offres de sites web (WebsitePlans)
export const WebsitePlans = [
  {
    type: 'standard',
    title: 'Site Standard',
    description: 'Site vitrine avec fonction de réservation.',
    price: 29,
    features: [
      'Page de présentation',
      'Formulaire de contact',
      'Réservation',
    ],
    slug: 'site-standard',
  },
  {
    type: 'pro',
    title: 'Site Pro',
    description: 'Site avec vente de produits ou services.',
    price: 59,
    features: [
      'Catalogue',
      'Paiement en ligne',
      'Gestion de commandes',
    ],
    slug: 'site-pro',
  },
  {
    type: 'premium',
    title: 'Site Premium',
    description: 'Site complet sur mesure pour les entreprises.',
    price: 99,
    features: [
      'Développement personnalisé',
      'Support prioritaire',
      'SEO avancé',
    ],
    slug: 'site-premium',
  },
];


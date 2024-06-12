// Importation de la fonction createApp depuis Vue pour créer l'application
import { createApp } from "vue";

// Importation du composant principal de l'application
import App from "./App.vue";

// Importation du routeur configuré pour la navigation de l'application
import router from "./router";

// Importation du module IonicVue pour intégrer Ionic avec Vue
import { IonicVue } from "@ionic/vue";

// Importation des fonctions et icônes nécessaires de Ionicons
import { addIcons } from "ionicons";
import { add, arrowBack, call, arrowForwardCircle } from "ionicons/icons";

// Importation des fichiers CSS nécessaires pour les composants Ionic
import "@ionic/vue/css/core.css"; // CSS de base requis pour les composants Ionic
import "@ionic/vue/css/normalize.css"; // CSS de normalisation pour uniformiser les styles entre les navigateurs
import "@ionic/vue/css/structure.css"; // CSS de structure pour la mise en page de base
import "@ionic/vue/css/typography.css"; // CSS de typographie pour le style des textes

// Importation des utilitaires CSS optionnels d'Ionic
import "@ionic/vue/css/padding.css"; // Utilitaire pour les marges internes
import "@ionic/vue/css/float-elements.css"; // Utilitaire pour le flottement des éléments
import "@ionic/vue/css/text-alignment.css"; // Utilitaire pour l'alignement des textes
import "@ionic/vue/css/text-transformation.css"; // Utilitaire pour la transformation des textes (majuscule, minuscule, etc.)
import "@ionic/vue/css/flex-utils.css"; // Utilitaire pour le flexbox
import "@ionic/vue/css/display.css"; // Utilitaire pour la gestion de l'affichage (block, inline-block, etc.)

// Importation des variables de thème personnalisées
import "./theme/variables.css";

// Ajout des icônes nécessaires à l'application
addIcons({
  add, // Icône d'ajout
  "arrow-back": arrowBack, // Icône de flèche de retour
  call, // Icône d'appel téléphonique
  "arrow-forward-circle": arrowForwardCircle, // Icône de flèche avant en cercle
});

// Création de l'application Vue, ajout d'IonicVue et du routeur
const app = createApp(App).use(IonicVue).use(router);

// Lorsque le routeur est prêt, montage de l'application sur l'élément DOM avec l'ID 'app'
router.isReady().then(() => {
  app.mount("#app");
});

// Importation de la fonction defineConfig depuis Vite pour définir la configuration de build
import { defineConfig } from 'vite';

// Importation du plugin Vue pour Vite
import vue from '@vitejs/plugin-vue';

// Exportation de la configuration Vite
export default defineConfig({
  plugins: [
    // Utilisation du plugin Vue avec des options de configuration spécifiques
    vue({
      template: {
        compilerOptions: {
          // Configuration du compilateur de template pour traiter les balises ion- comme des éléments personnalisés
          isCustomElement: tag => tag.startsWith('ion-')
        }
      }
    })
  ]
});

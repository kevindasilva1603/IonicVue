import { createRouter, createWebHistory } from "@ionic/vue-router";
// Importe les composants des différentes vues.
import Home from "../views/Home.vue";
import CreateContact from "../views/CreateContact.vue";
import EditContact from "../views/EditContact.vue";
import ContactDetail from "../views/ContactDetail.vue";

// Définit les routes.
const routes = [
    {
        path: "/", // Chemin de l'URL pour la page d'accueil.
        name: "Home", // Nom de la route, utilisé pour la référence dans le code.
        component: Home, // Composant qui sera chargé quand cette route est active.
    },
    {
        path: "/create", // Chemin pour la page de création de contact.
        name: "CreateContact",
        component: CreateContact,
    },
    {
        path: "/:id/edit", // Chemin pour éditer un contact, ':id' est un paramètre dynamique.
        name: "EditContact",
        component: EditContact,
    },
    {
        path: "/:id", // Chemin pour afficher les détails d'un contact.
        name: "ContactDetail",
        component: ContactDetail,
    },
];

// Crée l'instance du routeur en passant l'historique du navigateur et la configuration des routes.
const router = createRouter({
    history: createWebHistory(), // Utilise l'historique du navigateur pour une navigation sans rechargement de la page.
    routes, // Passe l'objet des routes défini ci-dessus.
});

// Exporte le routeur pour l'utiliser.
export default router;

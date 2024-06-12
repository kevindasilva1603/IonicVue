<template>
  <ion-page>
    <!-- En-tête avec un titre et un bouton pour naviguer vers la page de création de contact -->
    <ion-header>
      <ion-toolbar color="primary">
        <!-- Titre de la page -->
        <ion-title>Contacts</ion-title>
        <!-- Boutons à la fin de la barre d'outils -->
        <ion-buttons slot="end">
          <!-- Bouton pour ajouter un nouveau contact -->
          <ion-button @click="logCreateContact">
            <!-- Icône d'ajout sans texte supplémentaire -->
            <ion-icon slot="icon-only" name="add"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
      <!-- Barre de recherche pour filtrer les contacts -->
      <ion-toolbar>
        <ion-searchbar v-model="searchQuery" placeholder="Rechercher des contacts"></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    <!-- Contenu principal de la page -->
    <ion-content>
      <!-- Liste des contacts filtrés -->
      <ion-list>
        <!-- Chaque contact est affiché comme un élément de la liste -->
        <ion-item v-for="contact in filteredContacts" :key="contact.id" button detail @click="logContactDetails(contact.id)">
          <ion-label>
            <!-- Nom du contact -->
            <h2>{{ contact.name }}</h2>
            <!-- Email du contact -->
            <p>{{ contact.email }}</p>
          </ion-label>
          <!-- Icône indiquant plus de détails -->
          <ion-icon slot="end" name="arrow-forward-circle"></ion-icon>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonButtons,
  IonIcon,
  IonSearchbar,
} from '@ionic/vue';

export default {
  components: {
    // Déclaration des composants utilisés dans ce fichier
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonButtons,
    IonIcon,
    IonSearchbar,
  },
  data() {
    return {
      // Tableau pour stocker les contacts
      contacts: [],
      // Chaîne de recherche pour filtrer les contacts
      searchQuery: '',
    };
  },
  computed: {
    // Filtrage des contacts en fonction de la recherche
    filteredContacts() {
      if (this.searchQuery) {
        return this.contacts.filter(
          contact =>
            contact.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            contact.email.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      return this.contacts;
    },
  },
  methods: {
    // Charge les contacts depuis le stockage local
    loadContacts() {
      const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
      this.contacts = storedContacts;
    },
    // Navigue vers la page de création de contact
    logCreateContact() {
      console.log('Navigation vers la page de création de contact');
      this.$router.push('/create');
    },
    // Navigue vers la page de détails d'un contact spécifique
    logContactDetails(id) {
      console.log(`Navigation vers la page de détails du contact ID: ${id}`);
      this.$router.push(`/${id}`);
    }
  },
  // Charge les contacts lors de la création du composant
  created() {
    this.loadContacts();
  },
};
</script>

<style scoped>
/* Styles personnalisés pour la page */
ion-toolbar {
  --background: #000000; /* Fond noir pour la barre d'outils */
  --color: #ffffff; /* Texte blanc pour la barre d'outils */
}
ion-content {
  --background: #f0f0f0; /* Fond gris clair pour le contenu */
}
ion-item {
  --background: #ffffff; /* Fond blanc pour les éléments de la liste */
  margin-bottom: 10px; /* Marge en bas des éléments de la liste */
  border-radius: 8px; /* Bordure arrondie pour les éléments de la liste */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Ombre portée pour donner de la profondeur */
}
ion-searchbar {
  margin-bottom: 10px; /* Marge en bas de la barre de recherche */
}
ion-icon {
  color: #ffffff; /* Couleur blanche pour les icônes */
}
</style>

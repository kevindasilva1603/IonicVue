<template>
  <ion-page>
    <!-- Définit la page complète avec un en-tête et un contenu -->
    <ion-header>
      <!-- Barre d'outils pour placer les éléments de navigation et le titre -->
      <ion-toolbar color="primary">
        <!-- Boutons dans le coin supérieur gauche -->
        <ion-buttons slot="start">
          <!-- Bouton de retour avec une icône de flèche -->
          <ion-button @click="goBack">
            <!-- Icône placée seule sans texte -->
            <ion-icon slot="icon-only" name="arrow-back"></ion-icon>
          </ion-button>
        </ion-buttons>
        <!-- Titre de la page centré dans la barre d'outils -->
        <ion-title>Détails du contact</ion-title>
      </ion-toolbar>
    </ion-header>
    <!-- Contenu principal de la page -->
    <ion-content>
      <!-- Condition vue pour vérifier si le contact est chargé -->
      <div v-if="contact">
        <!-- Carte contenant les détails du contact -->
        <ion-card>
          <!-- En-tête de la carte avec des informations et une image -->
          <ion-card-header class="contact-info">
            <!-- Avatar du contact à gauche -->
            <ion-avatar slot="start">
              <!-- Image de l'avatar ou une image par défaut si non disponible -->
              <img :src="contact.avatar || 'https://via.placeholder.com/150'" />
            </ion-avatar>
            <!-- Conteneur pour le nom, l'email et le téléphone -->
            <div>
              <!-- Nom du contact -->
              <ion-card-title>{{ contact.name }}</ion-card-title>
              <!-- Email du contact -->
              <ion-card-subtitle>{{ contact.email }}</ion-card-subtitle>
              <!-- Numéro de téléphone avec icône de téléphone -->
              <p><ion-icon name="call"></ion-icon> {{ contact.phone }}</p>
            </div>
          </ion-card-header>
          <!-- Contenu de la carte avec des actions -->
          <ion-card-content>
            <!-- Bouton pour modifier le contact -->
            <ion-button expand="block" color="tertiary" @click="editContact">Modifier</ion-button>
            <!-- Bouton pour supprimer le contact -->
            <ion-button expand="block" color="danger" @click="deleteContact">Supprimer</ion-button>
          </ion-card-content>
        </ion-card>
      </div>
      <!-- Message affiché si aucun contact n'est trouvé -->
      <div v-else>
        <p>Contact non trouvé.</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon, IonAvatar, IonButtons
} from '@ionic/vue';

export default {
  components: {
    // Définit les composants Ionic utilisés
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader,
    IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon, IonAvatar, IonButtons
  },
  data() {
    return {
      // Donnée réactive pour le contact affiché
      contact: null,
    };
  },
  methods: {
    // Charge le contact à partir du stockage local
    loadContact() {
      const id = this.$route.params.id;
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      this.contact = contacts.find(contact => contact.id == id);
    },
    // Navigue vers la page précédente
    goBack() {
      this.$router.push('/');
    },
    // Navigue vers la page d'édition du contact
    editContact() {
      this.$router.push(`/${this.contact.id}/edit`);
    },
    // Supprime le contact après confirmation et navigue vers la page d'accueil
    deleteContact() {
      if (confirm('Êtes-vous sûr de vouloir supprimer ce contact ?')) {
        let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        contacts = contacts.filter(contact => contact.id != this.contact.id);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        this.$router.push('/');
      }
    }
  },
  created() {
    // Appelle loadContact au moment de la création du composant
    this.loadContact();
  },
};
</script>

<style scoped>
/* Styles spécifiques à cette page */
ion-toolbar {
  --background: #000000;  /* Couleur de fond de la barre d'outils */
  --color: #ffffff;       /* Couleur du texte dans la barre d'outils */
}
ion-content {
  --background: #f0f0f0;  /* Couleur de fond du contenu */
  padding: 16px;          /* Espacement autour du contenu */
}
ion-card {
  --background: #ffffff;  /* Couleur de fond des cartes */
  border-radius: 8px;     /* Arrondissement des coins de la carte */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Ombre portée pour la carte */
  margin-bottom: 16px;    /* Marge en bas de la carte */
}
.contact-info {
  display: flex;          /* Layout flex pour l'alignement des éléments */
  align-items: left;      /* Alignement des éléments à gauche */
}
ion-avatar {
  margin-right: 16px;     /* Marge à droite de l'avatar */
}
ion-card-title, ion-card-subtitle, .contact-info p {
  text-align: left;       /* Alignement du texte à gauche */
}
ion-card-content ion-icon {
  margin-right: 8px;      /* Marge à droite de l'icône */
}
ion-button {
  margin-top: 16px;       /* Marge en haut des boutons */
}
</style>

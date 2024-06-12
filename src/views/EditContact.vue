<template>
  <ion-page>
    <!-- En-tête de la page avec un bouton de retour et un titre -->
    <ion-header>
      <ion-toolbar color="primary">
        <!-- Bouton de retour dans le coin supérieur gauche -->
        <ion-buttons slot="start">
          <ion-button @click="goBack">
            <!-- Icône de retour, utilisée ici sans texte, seulement l'icône -->
            <ion-icon slot="icon-only" name="arrow-back"></ion-icon>
          </ion-button>
        </ion-buttons>
        <!-- Titre de la page -->
        <ion-title>Modifier Contact</ion-title>
      </ion-toolbar>
    </ion-header>
    <!-- Contenu principal de la page -->
    <ion-content>
      <!-- Carte contenant le formulaire de modification -->
      <ion-card>
        <ion-card-header>
          <!-- Titre de la carte -->
          <ion-card-title>Modifier les informations du contact</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <!-- Liste des champs de saisie pour la modification du contact -->
          <ion-list>
            <ion-item>
              <ion-label position="stacked">Nom</ion-label>
              <!-- Champ de saisie pour le nom -->
              <ion-input v-model="contact.name" placeholder="Entrer un nom"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="stacked">Email</ion-label>
              <!-- Champ de saisie pour l'email -->
              <ion-input v-model="contact.email" placeholder="Entrer un email"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="stacked">Téléphone</ion-label>
              <!-- Champ de saisie pour le numéro de téléphone -->
              <ion-input v-model="contact.phone" placeholder="Entrer un numéro de téléphone"></ion-input>
            </ion-item>
          </ion-list>
          <!-- Bouton pour soumettre les modifications -->
          <ion-button expand="block" color="primary" @click="updateContact">Mettre à jour</ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  // Import des composants Ionic nécessaires
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonInput, IonButton, IonIcon, IonButtons
} from '@ionic/vue';

export default {
  components: {
    // Déclaration des composants utilisés dans ce fichier
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonInput, IonButton, IonButtons, IonIcon,
  },
  data() {
    return {
      // Modèle pour le contact à modifier
      contact: {
        id: null,
        name: '',
        email: '',
        phone: '',
      },
    };
  },
  methods: {
    // Charge le contact à modifier lors de la création du composant
    loadContact() {
      const id = this.$route.params.id;
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      this.contact = contacts.find(contact => contact.id == id) || this.contact;
    },
    // Met à jour les informations du contact
    updateContact() {
      if (!this.contact.name || !this.contact.email || !this.contact.phone) {
        alert('Tous les champs sont obligatoires');
        return;
      }
      let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      const index = contacts.findIndex(contact => contact.id == this.contact.id);
      if (index !== -1) {
        contacts.splice(index, 1, this.contact);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        this.$router.push('/');
      } else {
        alert('Contact non trouvé');
      }
    },
    // Navigue vers la page précédente
    goBack() {
      this.$router.push('/');
    }
  },
  created() {
    // Appelle la méthode loadContact au moment de la création du composant
    this.loadContact();
  },
};
</script>

<style scoped>
/* Styles personnalisés pour la page */
ion-toolbar {
  --background: #000000; /* Définit la couleur de fond de la barre d'outils */
  --color: #ffffff; /* Définit la couleur du texte dans la barre d'outils */
}
ion-content {
  --background: #f0f0f0; /* Définit la couleur de fond pour le contenu */
  padding: 16px; /* Ajoute un padding autour du contenu */
}
ion-card {
  --background: #ffffff; /* Définit la couleur de fond des cartes */
  border-radius: 8px; /* Arrondit les coins des cartes */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Ajoute une ombre pour un effet de profondeur */
}
ion-button {
  margin-top: 16px; /* Ajoute un espacement au-dessus du bouton */
}
</style>

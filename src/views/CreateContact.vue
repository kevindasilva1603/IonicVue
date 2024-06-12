<template>
  <ion-page>
    <!-- En-tête de la page avec un bouton de retour et un titre -->
    <ion-header>
      <ion-toolbar color="primary">
        <!-- Bouton de retour à la gauche de la barre d'outils -->
        <ion-buttons slot="start">
          <ion-button @click="goBack">
            <!-- Icône de retour sans texte supplémentaire -->
            <ion-icon slot="icon-only" name="arrow-back"></ion-icon>
          </ion-button>
        </ion-buttons>
        <!-- Titre de la page indiquant l'action de créer un contact -->
        <ion-title>Créer un contact</ion-title>
      </ion-toolbar>
    </ion-header>
    <!-- Contenu principal de la page -->
    <ion-content>
      <!-- Carte pour le formulaire de création de contact -->
      <ion-card>
        <ion-card-header>
          <!-- Titre de la carte pour le formulaire -->
          <ion-card-title>Créer un nouveau contact</ion-card-title>
        </ion-card-header>
        <!-- Contenu de la carte avec les champs de formulaire -->
        <ion-card-content>
          <!-- Liste des champs de saisie pour les détails du contact -->
          <ion-list>
            <!-- Chaque item de la liste correspond à un champ de formulaire -->
            <ion-item>
              <ion-label position="stacked">Nom</ion-label>
              <!-- Champ pour entrer le nom du contact -->
              <ion-input v-model="contact.name" placeholder="Entrez un nom"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="stacked">Email</ion-label>
              <!-- Champ pour entrer l'email du contact -->
              <ion-input v-model="contact.email" placeholder="Entrez un email"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="stacked">Téléphone</ion-label>
              <!-- Champ pour entrer le numéro de téléphone du contact -->
              <ion-input v-model="contact.phone" placeholder="Entrez un numéro de téléphone"></ion-input>
            </ion-item>
          </ion-list>
          <!-- Boutons pour soumettre le formulaire ou retourner à la page précédente -->
          <ion-button expand="block" @click="createContact" color="primary">Créer</ion-button>
          <ion-button expand="block" @click="goBack" color="light">Retour</ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  // Import des composants Ionic nécessaires
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonInput, IonButton, IonButtons, IonIcon,
} from '@ionic/vue';

export default {
  components: {
    // Déclaration des composants utilisés dans ce fichier
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonInput, IonButton, IonButtons, IonIcon,
  },
  data() {
    return {
      // Modèle pour le nouveau contact avec des valeurs par défaut vides
      contact: {
        id: null,
        name: '',
        email: '',
        phone: '',
      },
    };
  },
  methods: {
    // Validation de l'email
    validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    // Validation du numéro de téléphone
    validatePhone(phone) {
      const re = /^\d+$/;
      return re.test(phone);
    },
    // Création du contact
    createContact() {
      if (!this.contact.name) {
        alert('Le nom est requis');
        return;
      }
      if (!this.validateEmail(this.contact.email)) {
        alert('Veuillez entrer une adresse email valide');
        return;
      }
      if (!this.validatePhone(this.contact.phone)) {
        alert('Le numéro de téléphone doit contenir uniquement des chiffres');
        return;
      }

      // Logique pour ajouter le contact au stockage local
      console.log('Création du contact:', this.contact);
      let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      this.contact.id = Date.now();
      contacts.push(this.contact);
      localStorage.setItem('contacts', JSON.stringify(contacts));
      console.log('Contact créé, navigation vers la page d\'accueil');
      this.$router.push('/');
    },
    // Méthode pour retourner à la page précédente
    goBack() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
/* Styles personnalisés pour les composants de cette page */
ion-toolbar {
  --background: #000000; /* Fond noir pour la barre d'outils */
  --color: #ffffff; /* Texte blanc pour le titre dans la barre d'outils */
}
ion-content {
  --background: #f0f0f0; /* Fond gris clair pour le contenu */
  padding: 16px; /* Padding autour du contenu pour l'espacement */
}
ion-card {
  --background: #ffffff; /* Carte avec fond blanc */
  border-radius: 8px; /* Bordures arrondies pour la carte */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Ombre portée pour donner de la profondeur */
}
ion-button {
  margin-top: 16px; /* Espacement au-dessus des boutons pour une meilleure visibilité */
}
</style>

<template>
  <ion-item>
    <!-- Affiche le nom du contact directement. Il est passé en tant que prop au composant. -->
    <ion-label>{{ contact.name }}</ion-label>
    <!-- Bouton pour éditer le contact. Déclenche la méthode 'edit' lorsqu'on clique dessus. -->
    <ion-button fill="clear" @click="edit(contact)">Edit</ion-button>
    <!-- Bouton pour supprimer le contact. Déclenche la méthode 'remove' lorsqu'on clique dessus. -->
    <ion-button fill="clear" @click="remove(contact)">Delete</ion-button>
  </ion-item>
</template>

<script>
export default {
  props: ['contact'], // Déclare que ce composant attend une prop 'contact'
  emits: ['edit-contact', 'delete-contact'], // Déclare les événements que ce composant peut émettre
  methods: {
    edit(contact) {
      this.$emit('edit-contact', contact); // Émet l'événement 'edit-contact' avec le contact en payload
    },
    remove(contact) {
      this.$emit('delete-contact', contact); // Émet l'événement 'delete-contact' avec le contact en payload
    }
  }
};
</script>

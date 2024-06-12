<template>
    <ion-list>
        <!-- Chaque ion-item est un champ de formulaire pour saisir les informations du contact -->
        <ion-item>
            <ion-label position="floating">Name</ion-label>
            <!-- Champ de texte relié à la propriété 'name' du contact local -->
            <ion-input v-model="localContact.name" />
        </ion-item>
        <ion-item>
            <ion-label position="floating">Email</ion-label>
            <!-- Champ de texte pour l'email, lié à la propriété 'email' -->
            <ion-input v-model="localContact.email" />
        </ion-item>
        <ion-item>
            <ion-label position="floating">Phone</ion-label>
            <!-- Champ de texte pour le téléphone, lié à la propriété 'phone' -->
            <ion-input v-model="localContact.phone" />
        </ion-item>
        <!-- Bouton pour soumettre le formulaire. Le texte du bouton change selon que l'ID est présent ou non -->
        <ion-button @click="handleSubmit">{{
            localContact.id ? "Update" : "Save"
        }}</ion-button>
    </ion-list>
</template>

<script>
export default {
    props: {
        contact: {
            type: Object,
            required: true, // Le contact doit être passé en tant que prop pour que le formulaire fonctionne
        },
    },
    data() {
        return {
            localContact: { ...this.contact }, // Crée une copie locale du contact pour manipuler sans altérer l'objet initial
        };
    },
    methods: {
        handleSubmit() {
            console.log("Form submitted with:", this.localContact); // Loggue les données du formulaire soumis
            this.$emit("save", this.localContact); // Émet un événement 'save' avec le contact local pour que le composant parent puisse réagir
        },
    },
    created() {
        console.log("ContactForm component créer"); // Log à la création du composant
    },
    mounted() {
        console.log("ContactForm component monté"); // Log une fois que le composant est monté
    },
};
</script>

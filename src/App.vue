<template>
  <!-- Composant principal de l'application Ionic -->
  <ion-app>
    <!-- Affiche le composant correspondant à la route actuelle -->
    <router-view></router-view>
  </ion-app>
</template>

<script>
export default {};
</script>

<style>
/* Applique la hauteur de 100% à ion-app pour s'assurer qu'il occupe toute la hauteur de la fenêtre */
ion-app {
  height: 100%;
}
/* Applique la hauteur de 100% au html, body et à l'élément #app pour une mise en page complète sur toute la hauteur */
html, body, #app {
  height: 100%;
}
</style>

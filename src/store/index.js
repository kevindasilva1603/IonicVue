// Importe la fonction createStore depuis 'vuex', qui permet de créer un store centralisé pour l'état de ton application.
import { createStore } from 'vuex';

export default createStore({
  state: {
    contacts: []  // Définit l'état initial des contacts comme un tableau vide.
  },
  mutations: {
    // Les mutations sont des fonctions qui modifient l'état de l'application de manière synchrone.
    setContacts(state, contacts) {
      state.contacts = contacts;  // Remplace l'ensemble des contacts par de nouveaux contacts.
    },
    addContact(state, contact) {
      state.contacts.push(contact);  // Ajoute un nouveau contact au tableau des contacts.
    },
    updateContact(state, updatedContact) {
      const index = state.contacts.findIndex(contact => contact.id === updatedContact.id);  // Trouve l'indice du contact à mettre à jour.
      if (index !== -1) {
        state.contacts.splice(index, 1, updatedContact);  // Remplace le contact à cet indice.
      }
    },
    deleteContact(state, contactId) {
      state.contacts = state.contacts.filter(contact => contact.id !== contactId);  // Supprime le contact par son id.
    }
  },
  actions: {
    // Les actions sont des fonctions qui peuvent contenir des opérations asynchrones et commettre des mutations.
    loadContacts({ commit }) {
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];  // Charge les contacts depuis le localStorage.
      commit('setContacts', contacts);  // Commits the 'setContacts' mutation with loaded contacts.
    },
    saveContacts({ state }) {
      localStorage.setItem('contacts', JSON.stringify(state.contacts));  // Sauvegarde les contacts dans le localStorage.
    },
    addContact({ commit, dispatch }, contact) {
      commit('addContact', contact);  // Ajoute un contact et ensuite sauvegarde les changements.
      dispatch('saveContacts');
    },
    updateContact({ commit, dispatch }, contact) {
      commit('updateContact', contact);  // Met à jour un contact et ensuite sauvegarde les changements.
      dispatch('saveContacts');
    },
    deleteContact({ commit, dispatch }, contactId) {
      commit('deleteContact', contactId);  // Supprime un contact et ensuite sauvegarde les changements.
      dispatch('saveContacts');
    }
  },
  getters: {
    // Les getters sont des fonctions utilisées pour récupérer des portions de l'état.
    contacts: state => state.contacts,  // Retourne la liste des contacts.
    contactById: state => id => state.contacts.find(contact => contact.id === id)  // Trouve un contact par son id.
  }
});

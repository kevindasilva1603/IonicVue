# Gestion de Contacts

## Description

Ce projet est une application de gestion de contacts construite avec Vue.js et le framework Ionic. Il permet aux utilisateurs d'ajouter, de modifier, de supprimer et de rechercher des contacts. L'interface utilisateur est conçue pour être intuitive et réactive, offrant une expérience utilisateur fluide sur les appareils mobiles et de bureau.

## Fonctionnalités

- **Ajouter un contact** : Permet d'ajouter un nouveau contact avec un nom, un email et un numéro de téléphone.
- **Modifier un contact** : Permet de modifier les informations d'un contact existant.
- **Supprimer un contact** : Permet de supprimer un contact de la liste.
- **Rechercher des contacts** : Permet de rechercher des contacts par nom ou par email.
- **Navigation facile** : Navigation fluide entre les pages de la liste des contacts, de création, de modification et de détail des contacts.

## Captures d'écran

![Liste des contacts](path/to/contact-list.png)
*Liste des contacts*

![Détails du contact](path/to/contact-details.png)
*Détails du contact*

![Créer un contact](path/to/create-contact.png)
*Créer un nouveau contact*

## Prérequis

- Node.js
- Vue CLI
- Ionic CLI

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/gestion-de-contacts.git

cd gestion-de-contacts

## Structure du projet 

.
├── node_modules
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── components
│   │   ├── ContactDetail.vue
│   │   ├── ContactForm.vue
│   │   ├── ContactList.vue
│   ├── router
│   │   └── index.js
│   ├── store
│   │   └── index.js
│   ├── views
│   │   ├── ContactDetails.vue
│   │   ├── CreateContact.vue
│   │   ├── EditContact.vue
│   │   ├── Home.vue
│   ├── App.vue
│   ├── main.js
├── tests
│   ├── unit
│   │   └── example.spec.js
├── .browserslistrc
├── .eslintrc.cjs
├── .gitignore
├── README.md
├── babel.config.js
├── package-lock.json
├── package.json
└── vue.config.js

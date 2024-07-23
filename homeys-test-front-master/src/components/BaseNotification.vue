<!-- COMPOSANT NOTIFICATION -->
<template>
  <div class="notification" :class="notificationClass">
    <img :src="iconSrc" alt="Description de l'image">
    <div class="content">
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
  </div>
    <img src="/icon/Cross.svg" alt="Description de l'image" class="close" @click="closeNotification">
  </div>
</template>

<script>
export default {
  name: 'BaseNotification',
  props: {
    title: String,
    message: String,
    type: {
      type: String,
      default: 'info',
      // Les 4 types valides de notifications
      validator: function(value) {
        return ['warning', 'danger', 'success', 'info'].includes(value);
      }
    }
  },
  computed: {
    //Permet d'obtenir un nom de class en fonction du type
    notificationClass() {
      return `notification-${this.type}`;
    },
    iconSrc() {
      // Map liant type de notification à l'icon associée
      const iconMap = {
        danger: '/icon/Danger.svg',
        info: '/icon/Info.svg',
        success: '/icon/CheckCircle.svg',
        warning: '/icon/Warning.svg'
      };
      return iconMap[this.type]
    }
  },
  methods: {
    // Envoie un event de type "close". L'event appelle ensuite la méthode permettant de supprimer la notification dans le composant parent.
    closeNotification() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
@import './BaseNotification.css';
</style>

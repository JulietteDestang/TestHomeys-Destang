<template>
  <div>

    <!-- Boutton pour ajouter une notification -->
    <button @click="addNotification" class="add-button">
    <p>Add Notification</p>
    </button>


    <!-- Affiche toutes les notifications de l'array 'notifications' -->
    <div class="notifications-container">
    <BaseNotification
      v-for="(notification, index) in notifications"
      :key="index"
      :title="notification.title"
      :message="notification.message"
      :type="notification.type"
      @close="removeNotification(index)"
    />
    </div>
  </div>
</template>

<script>
import BaseNotification from './components/BaseNotification.vue';

export default {
  components: {
    BaseNotification
  },
  data() {
    return {
      // Array de notifications
      notifications: []
    };
  },
  methods: {
    addNotification() {
      // Si la taille de l'array est supérieur ou égal à 5, retire le premier élément de l'array
      if (this.notifications.length >= 5) {
        this.notifications.shift();
      }
      // Ajoute une nouvelle notification à la liste
      this.notifications.push({
        title: 'Modal Warning',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
        type: 'info'
      });
    },
    removeNotification(index) {
      this.notifications.splice(index, 1); // Retire la notification de l'array à l'index 'index'
    }
  }
};
</script>

<!-- Ajout d'un css pour notre page -->
<style scoped>
@import './App.css';
</style>

<template>
  <div>

    <!-- Boutton pour ajouter une notification -->
    <button @click="addNotification" class="add-button">
    <p>Add Notification</p>
    </button>


    <!-- Affiche toutes les notifications du store Pinia -->
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

    <div >
    </div>

  </div>
</template>

<script>
import BaseNotification from './components/BaseNotification.vue';
import { NotificationsStore } from './store/notifications.js';

export default {
  components: {
    BaseNotification
  },
  setup() {
    // création d'un store pinia pour les notifications
    const notificationsStore = NotificationsStore();

    const types = ['info', 'danger', 'warning', 'success'];
    let notificationId = 0;

    //fonction appellant l'action pinia addNotification avec les paramètres de créations d'une notification
    const addNotification = () => {
      const randomIndex = Math.floor(Math.random() * types.length);
      const randomType = types[randomIndex];
      notificationsStore.addNotification({
        id: notificationId++,
        title: randomType,
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
        type: randomType
      });
    // const selectedNotification = notificationsStore.getNotificationById(0);
    const notifications = notificationsStore.allNotifications;
    console.log("LISTE", notifications);
    const notificationById = notificationsStore.getNotificationById(0);
    console.log("ID : 0", notificationById)
    };
    //fonction appellant l'action pinia removeNotification avec l'index à supprimer
    const removeNotification = (index) => {
      notificationsStore.removeNotification(index);
      };
      
      // Utilisation du getter `allNotifications`
      const notifications = notificationsStore.allNotifications;
  

    return {
      addNotification,
      removeNotification,
      notifications,
    };
  }
};
</script>

<!-- Ajout d'un css pour notre page -->
<style scoped>
@import './App.css';
</style>

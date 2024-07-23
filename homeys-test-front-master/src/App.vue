<template>
  <div>
    <!-- Affiche toutes les notifications de l'array 'notifications' -->
    <BaseNotification
      v-for="(notification, index) in notifications"
      :key="index"
      :title="notification.title"
      :message="notification.message"
      :type="notification.type"
      @close="removeNotification(index)"
    />
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
      notifications: [
        { title: 'Warning', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor', type: 'warning' },
        { title: 'Success !', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor', type: 'success' },
        { title: 'Danger...', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor', type: 'danger' },
        { title: 'Info', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor', type: 'info' },
      ]
    };
  },
  methods: {
    removeNotification(index) {
      this.notifications.splice(index, 1); // Retire la notification de l'array à l'index 'index'
    }
  }
};
</script>

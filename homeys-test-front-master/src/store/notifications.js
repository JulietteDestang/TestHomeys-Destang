import { defineStore } from 'pinia';

export const NotificationsStore = defineStore('notifications', {
    state: () => ({
        notifications: []
      }),
  actions: {
    //Ajoute une notification et supprime la dernière si il y en à 5 ou plus
    addNotification(notification) {
      if (this.notifications.length >= 5) {
        this.notifications.shift();
      }
      this.notifications.push(notification);
    },
    //Retire une notification à l'index 'index'
    removeNotification(index) {
      this.notifications.splice(index, 1);
    }
  },
  getters: {
    // retourne toutes les notifications
    allNotifications() {
      return this.notifications;
    },

    // retourne une notification par rapport à son numéro d'id
    getNotificationById: (state) => (id) => {
        return state.notifications.find(notification => notification.id === id);
      }
  }
});

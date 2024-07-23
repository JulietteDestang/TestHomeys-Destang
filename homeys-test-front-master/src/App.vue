<template>
  <main>
    <!-- Example d'utilisation du composant BaseNotification -->
    <BaseNotification title="Modal Window" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor" type="danger" />
  </main>
</template>

<script>
import BaseNotification from './components/BaseNotification.vue';

export default {
  components: {
    BaseNotification
  }
}
</script>

<style scoped>
</style>

<template>
  <main>
    <!-- Example d'utilisation du composant BaseNotification -->
    <BaseNotification title="Modal Window" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor" type="danger" />
    <BaseNotification title="Success!" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor" type="success" />
    <BaseNotification title="Warning" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor" type="warning" />
    <BaseNotification title="This is an info" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor" type="info" />
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

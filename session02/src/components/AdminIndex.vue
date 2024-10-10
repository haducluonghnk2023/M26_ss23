<template>
  <div class="admin-index">
    <Header />
    <div class="content">
      <Menu />
      <Main />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Menu from './Menu.vue';
import Main from './Main.vue';
import Footer from './Footer.vue';

export default {
  name: 'AdminIndex',
  components: {
    Header,
    Menu,
    Main,
    Footer
  }
}
</script>

<style scoped>
.admin-index {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  display: flex;
  flex-grow: 1;
}

.menu {
  flex-basis: 200px;
}

.main {
  flex-grow: 1;
}
</style>

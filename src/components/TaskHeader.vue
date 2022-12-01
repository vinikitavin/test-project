<template>
  <nav class="blue darken-3">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">Мои задачи</router-link>
      <ul class="right hide-on-med-and-down">
        <router-link
            tag="li"
            to="/"
            exact
            active-class="active"
        >
          <a href="#">Добавить задачу</a>
        </router-link>
        <router-link
            tag="li"
            to="/list"
            active-class="active"
        >
          <a href="#">Список задач</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TaskHeader"
}
</script>

<style scoped>
.nav-wrapper {
  background: grey;
  padding: 0 2rem;
}

.brand-logo {
  color: black;
}
</style>

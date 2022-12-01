<template>
  <div class="task-header">
    <nav class="blue darken-3">
      <div class="nav-wrapper">
        <router-link class="brand-logo" to="/list">Мои задачи</router-link>
        <ul class="right hide-on-med-and-down">
          <router-link
              active-class="active"
              exact
              tag="li"
              to="/create"
          >
            <a href="#">Добавить задачу</a>
          </router-link>
          <router-link
              active-class="active"
              tag="li"
              to="/list"
          >
            <a href="#">Список задач</a>
          </router-link>
        </ul>
      </div>
    </nav>
    <div v-if="this.$store.state.isTaskList" class="task-counter">
      <div class="task-counter__active">
        <p class="task-counter__quantity">Активные:</p>
        <div>{{ activeCount }};</div>
      </div>
      <div class="task-counter__outdated">
        <p class="task-counter__quantity">Просроченные:</p>
        <div>{{ outdatedCount }};</div>
      </div>
      <div class="task-counter__completed">
        <p class="task-counter__quantity">Выполненные:</p>
        <div>{{ completedCount }};</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskHeader",
  computed: {
    activeCount() {
      return this.$store.state.tasks.filter(task => task.status === 'active').length
    },
    outdatedCount() {
      return this.$store.state.tasks.filter(task => task.status === 'outdated').length
    },
    completedCount() {
      return this.$store.state.tasks.filter(task => task.status === 'completed').length
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
  background: grey;
  padding: 0 2rem;
}

.brand-logo {
  color: black;
}

.task-counter {
  display: flex;
  padding: 0 2rem;

  &__active,
  &__outdated,
  &__completed {
    display: flex;
    align-items: center;
    margin-right: 5px;
  }

  &__quantity {
    margin-right: 5px;
  }
}
</style>

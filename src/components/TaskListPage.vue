<template>
  <div>
    <div class="row">
      <div class="input-field col s6 ">
        <select ref="select" v-model="filter">
          <option disabled selected value="">Выберите статус</option>
          <option value="active">Активные</option>
          <option value="outdated">Просроченные</option>
          <option value="completed">Завершенные</option>
        </select>
        <label>Статус</label>
      </div>
    </div>

    <button v-if="filter" class="btn btn-small red" @click="filter = null">Очистить фильтр</button>

    <hr>

    <table v-if="tasks.length">
      <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Date</th>
        <th>Description</th>
        <th>Status</th>
        <th>Open</th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="(task, idx) of displayTasks"
          :key="task.id"
      >
        <td>{{ idx + 1 }}</td>
        <td>{{ task.title }}</td>
        <td>{{ new Date(task.date).toLocaleDateString() }}</td>
        <td class="td">
          <div class="text">{{ task.description }}</div>
        </td>
        <td>{{ task.status }}</td>
        <td>
          <router-link :to="'/item/' + task.id" class="btn btn-small" tag="button">
            Open
          </router-link>
        </td>
      </tr>
      </tbody>
    </table>
    <p v-else>No tasks</p>
  </div>
</template>

<script>
export default {
  name: "TaskListPage",
  data: () => ({
    filter: null
  }),
  computed: {
    tasks() {
      return this.$store.getters.tasks
    },
    displayTasks() {
      return this.tasks.filter(t => {
        if (!this.filter) {
          return true
        }
        return t.status === this.filter
      })
    }
  },
  methods: {
    openCheckboxes() {
      this.display = 'block'
    }
  },
  mounted() {
    M.FormSelect.init(this.$refs.select)
    if (this.$route.path === '/list') {
      this.$store.dispatch('changeIsTaskList', true)
    }
  },
  beforeDestroy() {
    this.$store.dispatch('changeIsTaskList', false)
  }
}
</script>

<style lang="scss" scoped>
.td {
  max-width: 400px;
}

.text {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>

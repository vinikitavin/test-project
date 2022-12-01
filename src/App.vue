<template>
  <div id="app">
    <TaskHeader/>
    <div class="main-wrapper">
      <RouterView/>
    </div>
  </div>
</template>

<script>
import TaskHeader from "@/components/TaskHeader";

export default {
  components: {TaskHeader}
}
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
.main-wrapper {
  padding: 0 2rem;
}
</style>

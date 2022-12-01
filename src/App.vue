<template>
  <div id="app">
    <TaskHeader/>
    <RouterView/>
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
</style>

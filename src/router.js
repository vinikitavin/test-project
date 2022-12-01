import Vue from 'vue'
import Router from 'vue-router'
import TaskListPage from "@/components/TaskListPage";
import TaskAddPage from "@/components/TaskAddPage";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/list' },
    { path: '/list', component: TaskListPage },
    { path: '/create', component: TaskAddPage },
  ]
})

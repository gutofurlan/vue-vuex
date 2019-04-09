import Vue from 'vue'
import HomeComponent from '../components/HomeComponent'
import TaskComponent from '../components/tasks/TaskComponent'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes =  [
    {path: '/', component: HomeComponent, name: 'home'},
    {path: '/tasks', component: TaskComponent, name: 'tasks'},
]

export default new VueRouter({
  mode: 'history',
  routes
})


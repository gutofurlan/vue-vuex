<template>
    <div>
        <h1 v-text="title"></h1>
        <task-add-component></task-add-component>
        <ul>
            <li v-for="(task, index) in getTaskSorted" :key="index">
                <a href="#" @click.prevent="completedtask(task)">Toogle</a>
                {{task.name}} - {{task.completed}}
            </li>
        </ul>
    </div>
</template>

<script>
import TaskAddComponent from './TaskAddComponent'
export default {
    data () {
        return {
            title: 'Lista de tarefas'
        }
    },
    computed: {
        getTasks() {
            return this.$store.state.tasks
        }, 
        getTaskSorted () {
            return this.$store.getters.sortedTasks // agora
        }
    }, components: {
        TaskAddComponent
    }, methods: {
        completedtask(task) {
            this.$store.commit('TOOGLE_TASK', task)
        }
    }
}
</script>

<style scoped>

</style>


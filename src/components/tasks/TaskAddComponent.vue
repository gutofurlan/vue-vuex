<template>

    <form @submit.prevent="onSubmit">
        <input type="text" placeholder="Nome da nova tarefa" v-model="task.name">
        <button type="submit">Enviar</button>
    </form>

</template>

<script>
export default {
    data() {
        return {
            task: {
                name: '',
                completed: false
            }
        }
    }, methods: {
        onSubmit() {
            //this.$store.commit('ADD_TASK', this.task) //acessa o mutation q altera o estado
            this.$store.dispatch('addTask', this.task) // dispara o action
            this.task= {
                name: '', 
                completed: false
            }
        }
    }
}
</script>


<style scoped>

</style>

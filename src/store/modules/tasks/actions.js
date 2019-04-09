let actions=  {
    addTask(context, task) { //recebe context, pois o context permite chamr mutation
        //... comunica com api externa e ao concluir chama o mutation ...   
        context.commit('ADD_TASK', task)
    }
}

export default actions
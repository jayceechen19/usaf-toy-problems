class ToDoList{
    constructor(){
        this.items = []
        this.totalTime = 0
    }
    addToDo(item){
        this.items.push(item)
        this.totalTime += item.time
    }
    getFormattedToDoList(){
        for (var item in this.items){
            console.log('${this.items[item].name} - ${this.items[item].time}')
        }
    }
}
const toDosStore = ["Shopping", "Home work", "Go to the gym"];

// Write your code here

class ToDosList {

    constructor(){
        this.toDo = []
    }

    addItem(newItemString){
        return this.toDo.push(newItemString)
    }


    addItems(newItemArray){
       return this.toDo.push(...newItemArray)

    }
    
    removeItem(orderNr){
        return this.toDo.splice((orderNr-1),1)
    }

    removeAll(){
        return this.toDo.splice(0,this.toDo.length)

    }

    editItem(orderNr, newValue){
        return this.toDo.splice(orderNr-1, 1, newValue)
    }

    updateTheList(orderNr, newValues) {
        
        for (let i = 0; i < newValues.length; i++) {

          console.log(`target item index ${orderNr[i] - 1} >> new value ==> ${newValues[i]}`);

          this.toDo[orderNr[i] - 1] = newValues[i];
        }
      };


    seeTheList() {
       console.log(this.toDo)
        }

    renderToDoListTemplate(){
        if(this.toDo.length === 0){
            console.log("To do list is empty")
        } else {
        console.log("ToDo List:")
        for(let i in this.toDo){
            console.log(`${(parseInt(i))+1}- ${this.toDo[i]}`)
        }
    }
           
        
    }

}

const newList = new ToDosList;

newList.addItems(toDosStore);
newList.addItems(["Meet friends", "Have dinner"])
newList.addItem("Call parents")

newList.removeItem(1);
// newList.removeItem(4);
newList.editItem(4,"Listen to music")

newList.seeTheList()

newList.updateTheList(
    [2, 4, 5],
    ["Meet with PR department", "By milk", "Check the internet connection"]
  );

// newList.removeAll()
// newList.seeTheList()
newList.renderToDoListTemplate()
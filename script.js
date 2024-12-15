let todo = [] ;

let req = prompt("Please enter your request") ;

while(true){
    if(req == "quit") {
        console.log("Quitting App");
        break ;
    }
    if(req == "list") {
        console.log("----------------");
        for (i=0 ; i < todo.length ; i++) {
            console.log(i, todo[i]);
        }
        console.log("----------------");
    }
    else if(req == "add") {
        let task = prompt("Please enter the task") ;
        todo.push(task) ;
        console.log("Task Added");
    }
    else if(req == "delete") {
        let index = prompt("Please enter the index of the task to be deleted") ;
        todo.splice(index, 1) ;
        console.log("Task Deleted");
    }
    else {
        console.log("Wrong Request") ;
    }
    req = prompt("Please enter your request") ;
}
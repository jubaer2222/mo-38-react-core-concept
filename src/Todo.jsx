// export default function ToDo(props){
//     return(
//         <li>Task : {props.task}</li>
//     )
// }
           
                // option 2 : conditional  rendering

// export default function ToDo({task, isDone}){
//     if(isDone === true){
//         return <li>Done : {task}</li>
//     }
//     else{
//         return <li>Pending : {task}</li>
//     }
// }

// export default function ToDo({task, isDone, time = 0}){
//     if(isDone === true){
//         return <li>Done : {task} Duration: {time}</li>
//     }
//     return <li>To be done: {task}</li>
// }

            //  option 3 : conditional rendering by ternary
            // condition ? true : false

// export default function ToDo({task, isDone, time = 0}){
//     return isDone ?
//      <li>Done : {task} time:{time}</li> 
//      : <li>Not Done:{task}</li>
// }

            //  option 4 : conditional rendering - &&

// export default function ToDo({task, isDone, time = 0}){
//     return isDone && <li>Done Task:{task} time:{time}</li>
// }     

            //  option 5 : conditional rendering - ||

// export default function ToDo({task, isDone, time = 0}){
//     return isDone || <li>Not Done Task:{task} time:{time}</li>
// }            


// export default function ToDo({task, isDone, time = 0}){
//     if(isDone === true){
//         return null;
//     }
//     return <li>To be done: {task}</li>
// }


        //    option 6 : conditional rendering - use variable

export default function ToDo({task, isDone, time}){
    const displayTime = time ? time : 100;
    let listItem ;
    if(isDone === true){
       listItem = <li>Done : {task} time :{displayTime}</li>
    }
    else{
        listItem = <li>Pending : {task}</li>
    }
    return listItem
}

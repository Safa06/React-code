// export default function ToDo({ task ,isDone}) {
//     return (
//         <li>Task: {task}</li>
//         <p>Is done: {isDone}</p>
//     )
    
// }


// -----------------------------------------------------


//conditional rendering : 1 -- using (if - else)
// export default function ToDo({ task, isDone,time=0 }) {
//         if (isDone === true) {
//             return <li>Done: {task} , Time: {time}</li>
//     }
// else {
//      return <li>Not done !!</li>
// }
// return "hello"
// }




//conditional rendering : 2 -- using ternary

// export default function ToDo({task, isDone, time=0}) {
//     return isDone ?
//         <li>Done: {task} time : {time}</li> : <li>Not done: {task}</li>
// }



//conditional rendering : 3 -- using &&

// export default function ToDo({task, isDone, time=0}) {
//     return isDone &&
//         <li>Done: {task} time : {time}</li>
// }


//conditional rendering : 4 -- using ||

export default function ToDo({task, isDone, time=0}) {
    return isDone ||
        <li>Done: {task} time : {time}</li>
}
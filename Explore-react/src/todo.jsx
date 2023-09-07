// function Todo({ task, isDone }) {
//   if (isDone === true) {
//     return <li>finished:{task}</li>;
//   } else {
//     return <li>work on:{task}</li>;
//   }
// }

// another option of conditional rendaring  option number 02

// function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>finished:{task}</li>;
//   }
//   return <li>work on:{task}</li>;
// }
// export default Todo;

// option number 03 of conditional rendering using ternary

// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {isDone ? "finished" : "work on"}:{task}
//     </li>
//   );
// }

// option number 04
export default function Todo({ task, isDone }) {
  return (
    <li>
      {task} {isDone && ":Done"}
    </li>
  );
}

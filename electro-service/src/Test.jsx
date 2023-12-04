// // import { getDatabase, set, push, ref, onValue } from "firebase/database";
// // import { useState, useEffect } from "react";
// // import { db } from "./firebase";
// // import { uid } from "uid";

// function Test() {
//   // const [testInfo, setTestInfo] = useState({
//   //   name: "",
//   //   phoneNumber: "",
//   // });

//   // const handleInputChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setTestInfo({
//   //     ...testInfo,
//   //     [name]: value,
//   //   });
//   // };

//   // const writeToDatabase = () => {
//   //   const database = getDatabase();
//   //   const infoRef = ref(database, "testInfo");

//   //   push(infoRef, testInfo);

//   //   setTestInfo({
//   //     name: "",
//   //     phoneNumber: "",
//   //   });
//   // };

//   //   const [todo, setTodo] = useState("");

//   //   const handleTodoChange = (e) => {
//   //     setTodo(e.target.value);
//   //   };

//   //   const writeToDatabase = () => {
//   //     const uuid = uid();
//   //     set(ref(db, `/${uuid}`), {
//   //       todo,
//   //       uuid,
//   //     });

//   //     setTodo("");
//   //   };

//   return (
//     <div className="test-component">
//       {/* <label htmlFor="name">Name</label>
//       <input
//         type="text"
//         name="name"
//         value={testInfo.name}
//         onChange={handleInputChange}
//       />
//       <label htmlFor="phoneNumber">Phone Number</label>
//       <input
//         type="text"
//         name="phoneNumber"
//         value={testInfo.phoneNumber}
//         onChange={handleInputChange}
//       />
//       <button type="button" onClick={writeToDatabase}>
//         Submit
//       </button> */}
//     </div>

//     // <div>
//     //   <input type="text" value={todo} onChange={handleTodoChange} />
//     //   <button onClick={writeToDatabase}>Submit</button>
//     // </div>
//   );
// }

// export default Test;

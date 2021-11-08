import { useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState([]);

  // defining string type
  let str: string;
  str = "Hello sandbox";

  // defining Interface type
  interface User {
    name: string;
    dob: number;
  }

  // declaring User Interface type
  const user: User = {
    name: "Prakash",
    dob: 1995
  };

  class UserAccount {
    name: string;
    dob: number;

    constructor(name: string, dob: number) {
      this.name = name;
      this.dob = dob;
    }

    // calcAge function return type number
    calcAge(): number {
      return 2021 - this.dob;
    }
  }

  // defining Array of User type
  let interUser: Array<User>;
  // declaring empty array
  interUser = [];

  // declaring UserAccount type to emp of User type
  let emp: User = new UserAccount("Achilles", 1994);

  interUser.push(emp);

  // function hasn't return value or void
  const increment = (): void => {
    setValue((prevState: number[]) => [...prevState, prevState.length + 1]);
  };

  // function hasn't return value or void
  const decrement = (): void => {
    setValue((prevState: number[]) => [...prevState, prevState.length - 1]);
  };

  // defining type as varible
  type visible = true | false;

  // defining type visible to isvisible
  let isvisible: visible = true;

  return (
    <div className="App">
      <h1>{str}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      {isvisible && value.map((ite: number) => <p>{ite}</p>)}
      {
        <>
          <p>{user.name}</p>
          <p>{user.dob}</p>
        </>
      }
      {
        <>
          <p>{interUser[0].name}</p>
          <p>{interUser[0].dob}</p>
        </>
      }
    </div>
  );
}

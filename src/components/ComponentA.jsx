import ComponentB from "./ComponentB.jsx";
import {useState,  createContext } from "react";

export const UserContext = createContext();

function ComponentA() { 
    const [user, setUser] = useState("Bright");

  return (
    <div className="component">
      <h1>Hello my name is {user}  in component A</h1>
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  )
}
export default ComponentA;
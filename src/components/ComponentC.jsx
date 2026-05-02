import ComponentD from "./ComponentD.jsx";
import { useContext } from "react";
import { UserContext } from "./ComponentA";



function ComponentC(){
    const user = useContext(UserContext);
    return(
        <div className="component">
            <h1>Hello, is {user} in Component C</h1>
            <ComponentD />
        </div>
    )
}
export default ComponentC;
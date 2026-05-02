import { useContext } from "react";
import { UserContext } from "./ComponentA";




function ComponentD(){
    const username = useContext(UserContext);


    return (
                <div className="component">
            <h1>Hello is {username} again in Component D</h1>
        </div>
    )
}

export default ComponentD;
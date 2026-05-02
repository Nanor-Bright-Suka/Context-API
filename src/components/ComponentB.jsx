import ComponentC from "./ComponentC.jsx";

function ComponentB(){

    return (
        <div className="component">
            <h1>Component B</h1>
            <ComponentC />   
        </div>  
    )
}

export default ComponentB;
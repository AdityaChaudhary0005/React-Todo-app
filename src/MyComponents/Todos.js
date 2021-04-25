import React from 'react'
import {TodoItems} from "./TodoItems"
export const Todos = (props) => {
    let containerStyle ={
        padding : "20px",
        marginTop: "2rem"

        
    }

    /*Fixed */
    
        var options = {
            uri: 'https://website.com/',
            formData: { field1: 'value', field2: 2 }
          };
           
    
    return (
        <div className= "container shadow rounded pad-2" style={containerStyle}>
            <h3 className = "text-center my-3">Todos List</h3>
          
            { props.todos.length ===0? <div className = "alert alert-primary">No Todos found </div>:
            props.todos.map((todo) => {

                return <TodoItems todo = {todo} key= {todo.sno} onDelete = {props.onDelete} />
                

            })
            }
            
        
            
            
            
        </div>
    )
}

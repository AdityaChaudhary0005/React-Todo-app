import React, {useState} from 'react'

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();

        if(!title || !desc){
            alert("Ttile or Description can't be blank")
        }
        else{
        props.addTodo(title, desc);
        setTitle("");
        setDesc("");
        }
        
       
    }
    return (
        <div className = "container my-3" >
            <h3 className = "text-center">Add a Todo</h3>
            <form onSubmit= {submit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Todo Title</label>
                    <input type="text" value={title} onChange = {(e) => {setTitle(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="eg. Going to market" />
                   
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Todo Description</label>
                    <input type="text"  value = {desc} onChange = {(e) => {setDesc(e.target.value)}} className="form-control" id="desc" placeholder="eg. Buing 6 eggs from market" />
                </div>
                
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
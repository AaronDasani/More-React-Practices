import React from "react"

function ToDoItem(DoWhat) {
    return(
        <div className="ToDoItem"  style={{backgroundColor: DoWhat.job.completed && "green"}} >
            <input 
                type="checkbox" 
                onChange={()=>DoWhat.checkJob(DoWhat.job.id)} 
                checked={DoWhat.job.completed}
            />

            <label>{DoWhat.job.name} on <span>{DoWhat.job.day}</span> </label>
        </div>
    )
}

export default ToDoItem;
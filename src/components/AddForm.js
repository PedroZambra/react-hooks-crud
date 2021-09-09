export default function AddForm(props) {
    return(
        <form onSubmit={props.handleSubmitAdd}>
            <input type="text" name="task" placeholder="Tarea" value={props.task.task} onChange={props.handleInputTask}/>
            <div className="range-container">
                <label> 😆 </label>
                <input type="range" name="priority" min="1" max="5" step="1" value={props.task.priority} onChange={props.handleInputTask}/>
            </div>
            <input className="btn-submit" type="submit" value="Guardar"/>
        </form>
    )
}
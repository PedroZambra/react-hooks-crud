export default function AddForm(props) {
    return(
        <form onSubmit={props.handleChange}>
            <input type="text" name="task" defaultValue={props.data.task} onChange={props.handleInputUpdate} data-id={props.data.id}/>
            <div className="range-container">
                <label> 😆 </label>
                <input type="range" name="priority" min="1" max="5" step="1" defaultValue={props.data.priority} onChange={props.handleInputUpdate} data-id={props.data.id}/>
            </div>
            <input className="btn-submit" type="submit" value="Guardar"/>
        </form>
    )
}
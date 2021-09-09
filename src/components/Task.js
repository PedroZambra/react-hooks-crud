export default function Task(props) {
    return(
        <>
            <p>{props.data.task}</p>
            <p><input type="range" min="1" max="5" step="1" value={props.data.priority} readOnly/></p>
            <div className="task-acctions">
                <input className="btn-edit" type="button" value="Editar" onClick={() => props.handlePanelUpdate(props.data.id)}/>
                <input className="btn-delete" type="button" value="Borrar" onClick={() => props.handleDelete(props.data.id)}/>
            </div>
        </>
    )
}
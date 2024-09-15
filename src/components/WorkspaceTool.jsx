const WorkspaceTool = (props) => {
    return (
        <button className="workspace-tool" type='button'>
            <img src={props.img}/>
            <p className="title">{props.title}</p>
        </button>
    );
}

export default WorkspaceTool;
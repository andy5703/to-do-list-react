const Task = (props) => {
    return(
        <div className='todo-task'>
            <img src="/assets/to-do.svg" title='This board is public, visible to all team members.' alt="to-do"/>
            <div className="title">{props.title}</div>
            <div className="empty-space"></div>
            <div className="settings-btn">
                <img src="/assets/menu-meatball.svg" alt="#"/>
            </div>
        </div>
    );
}
export default Task;
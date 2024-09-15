import ToDo from "./ToDo";

const ToDoTasks = (props) => {
    return (
        <div className="todo-tasks-list">
            <div className="header-completed-tasks">
                <button className="completed" title='Collapse group'>
                    <img src="/assets/down-arrow-blue.svg" alt="down-arrow"/>
                </button>
                <h1 className="title">{props.title}</h1>
                <p className="tasks-count">2 Tasks</p>
                <button className="settings">
                    <img src="/assets/menu-meatball.svg" alt="menu-meatball"/>
                </button>
            </div>
            <div className="to-do-tasks">
                <div className="task-top-info">
                    <div className="checkbox">
                        <input type="checkbox"/>
                    </div>
                    <div className="task-title"><p>Task</p></div>
                    <div className="task-owner"><p>Owner</p></div>
                    <div className="task-status">
                        <p>Status</p>
                        <button className="column-information" title='Column information'>
                            <img src="/assets/info.svg" alt="info"/>
                        </button>
                        <button className="settings">
                            <img src="/assets/menu-meatball.svg" alt="menu"/>
                        </button>
                    </div>
                    <div className="task-duedate">
                        <p>Due date</p>
                        <button className="column-information" title='Column information'>
                            <img src="/assets/info.svg" alt="info"/>
                        </button>
                        <button className="settings">
                            <img src="/assets/menu-meatball.svg" alt="menu"/>
                        </button>
                    </div>
                    <div className="task-add-column">
                        <button className="add-column" type='button' title='Add column'>
                            <img src="/assets/plus.svg" alt="plus"/>
                        </button>
                    </div>
                </div>
                <ToDo/>
                <ToDo/>
                <div className="item-add">
                    <div className="checkbox">
                        <input type="checkbox"/>
                    </div>
                    <div className="item-input">
                        <input type="text" placeholder='+ Add task'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToDoTasks;
import ToDo from "./ToDo";
import AddTask from "./AddTask";
import {useState} from "react";

const CompletedTasks = (props) => {
    const {title} = props;
    const [tasks, setTasks] = useState([
        {title: 'Finished', owner: '', status: ''},
        {title: 'Finished', owner: '', status: ''},
    ]);

    const taskAdded = (title) => {
        setTasks([...tasks, {
            title: title
        }]);
    }

    return (
        <div className="completed-tasks">
            <div className="header-completed-tasks">
                <button className="completed" title='Collapse group'>
                    <img src="/src/assets/down-arrow-green.svg" alt="down-arrow"/>
                </button>
                <h1 className="title">{title}</h1>
                <p className="tasks-count">2 Tasks</p>
                <button className="settings">
                    <img src="/src/assets/menu-meatball.svg" alt="menu-meatball"/>
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
                            <img src="/src/assets/info.svg" alt="info"/>
                        </button>
                        <button className="settings">
                            <img src="/src/assets/menu-meatball.svg" alt="menu"/>
                        </button>
                    </div>
                    <div className="task-duedate">
                        <p>Due date</p>
                        <button className="column-information" title='Column information'>
                            <img src="/src/assets/info.svg" alt="info"/>
                        </button>
                        <button className="settings">
                            <img src="/src/assets/menu-meatball.svg" alt="menu"/>
                        </button>
                    </div>
                    <div className="task-add-column">
                        <button className="add-column" type='button' title='Add column'>
                            <img src="/src/assets/plus.svg" alt="plus"/>
                        </button>
                    </div>
                </div>
                <ToDo/>
                <div className="item-add">
                    <div className="checkbox">
                        <input type="checkbox"/>
                    </div>
                    <AddTask onAddTask={taskAdded}/>
                </div>
            </div>
        </div>
    );
}

export default CompletedTasks;
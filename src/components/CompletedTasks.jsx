// Library Import
import {useState} from "react";

// Component Import
import ToDo from "./ToDo";
import AddTask from "./AddTask";

// Image Import
import DownArrowGreenIcon from '../assets/down-arrow-green.svg'
import MenuMeatballIcon from '../assets/menu-meatball.svg'
import InfoIcon from '../assets/info.svg'
import PlusIcon from '../assets/plug.svg'

// CompletedTasks Component
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
                    <img src={DownArrowGreenIcon} alt="down-arrow"/>
                </button>
                <h1 className="title">{title}</h1>
                <p className="tasks-count">2 Tasks</p>
                <button className="settings">
                    <img src={MenuMeatballIcon} alt="menu-meatball"/>
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
                            <img src={InfoIcon} alt="info"/>
                        </button>
                        <button className="settings">
                            <img src={MenuMeatballIcon} alt="menu"/>
                        </button>
                    </div>
                    <div className="task-duedate">
                        <p>Due date</p>
                        <button className="column-information" title='Column information'>
                            <img src={InfoIcon} alt="info"/>
                        </button>
                        <button className="settings">
                            <img src={MenuMeatballIcon} alt="menu"/>
                        </button>
                    </div>
                    <div className="task-add-column">
                        <button className="add-column" type='button' title='Add column'>
                            <img src={PlusIcon} alt="plus"/>
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
// Components Import
import ToDo from "./ToDo";

// Image Imports
import DownArrowBlueIcon from '../assets/down-arrow-blue.svg'
import MenuMeatballIcon from '../assets/menu-meatball.svg'
import InfoIcon from '../assets/info.svg'
import PlusIcon from '../assets/plus.svg'

// ToDoTasks Component
const ToDoTasks = (props) => {
    return (
        <div className="todo-tasks-list">
            <div className="header-completed-tasks">
                <button className="completed" title='Collapse group'>
                    <img src={DownArrowBlueIcon} alt="down-arrow"/>
                </button>
                <h1 className="title">{props.title}</h1>
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
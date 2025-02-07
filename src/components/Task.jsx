// Image Import
import ToDoIcon from '../assets/to-do.svg'
import MenuMeatballIcon from '../assets/menu-meatball.svg'

// Task Component
const Task = (props) => {
    return(
        <div className='todo-task'>
            <img src={ToDoIcon} title='This board is public, visible to all team members.' alt="to-do"/>
            <div className="title">{props.title}</div>
            <div className="empty-space"></div>
            <div className="settings-btn">
                <img src={MenuMeatballIcon} alt="#"/>
            </div>
        </div>
    );
}
export default Task;
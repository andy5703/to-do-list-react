//Libraries Import
import React, {useState} from "react";

// AddTask Component
const AddTask = (props) => {
    const [task, setTask] = useState('')

    const handleInputChange = (e) => {
        setTask(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && task.trim()) {
            props.onAddTask(task.trim())
            setTask(''); // Clear the input field after task is added
        }
    };

    return (
        <div className="item-input">
            <input
                className='add-item'
                type="text"
                placeholder='+ Add task'
                value={task}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            />
        </div>
    );
}

export default AddTask;
// Libraries Import
import React, {useState} from "react";

// AddTask2 Component
const AddTask = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    // Handle input change
    const handleInputChange = (e) => {
        setTask(e.target.value);
    };

    // Add task on Enter or button click
    const addTask = () => {
        if (task.trim()) {  // Ensure task is not empty
            setTasks([...tasks, task]);  // Add the new task to the task list
            setTask('');  // Clear the input field
        }
    };

    // Handle pressing "Enter" to add a task
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTask();
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
const ToDo = (props) => {
    const {tasks} = props;

    return (
        <>
            {(tasks || []).map(task => (
                <div className="todo">
                    <div className="checkbox">
                        <input type="checkbox"/>
                    </div>
                    <div className="item">
                        <div className="expand-item-container">
                            <button className="expand-item">
                                <img src="/assets/right-arrow.svg" alt="right-arrow"/>
                            </button>
                        </div>
                        <div className="item-title">
                            <div className="title">Finish project</div>
                        </div>
                        <div className="update-item">
                            <button type='button' className='black'>
                                <img src="/assets/message-plus.svg" alt="message-plus"/>
                            </button>
                            <button className="blue" type='button'>
                                <img src="/assets/message-plus-blue.svg" alt="message-plus"/>
                            </button>
                        </div>
                    </div>
                    <div className="item-owner">
                        <div className="owner-profile">
                            <img src="/assets/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf-1980929842.jpg"
                                 alt="profile-pic"/>
                        </div>
                    </div>
                    <div className="item-status">
                        <div className="status">Working on it</div>
                    </div>
                    <div className="item-due-date">
                        <button className="select-date" type='button' title='21 days left'>
                            <img src="/assets/circle.svg" alt="circle"/>
                        </button>
                        <div className="due-date">30 Sep</div>
                        <button className="delete-task" type='button'>x</button>
                    </div>
                </div>
            ))}
        </>
    );
}
export default ToDo;
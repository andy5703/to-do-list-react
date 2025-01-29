import './App.scss';
import MenuOption from "./components/MenuOption";
import Task from "./components/Task";
import ToDo from "./components/ToDo";
import WorkspaceTool from "./components/WorkspaceTool";
import CompletedTasks from "./components/CompletedTasks";
import ToDoTasks from "./components/ToDoTasks";
import NotificationIcon from './assets/notification.svg';

function App() {
    return (
        <div className="App">
            <div className="top-bar">
                <div className="page-title">
                    <img src="/assets/hyacinth.svg" alt="hyacinth"/>
                    <div className='title'><span className='bold-text'>monday</span> work management</div>
                </div>
                <button type='button'>
                    <img className='diamond-blue' src="/assets/diamond.svg" alt="diamond"/>
                    <img className='diamond-white' src="/assets/diamond-white.svg" alt="diamond"/>
                    See plans
                </button>
                <div className="empty-space"></div>
                <div className="top-bar-menu">
                    <MenuOption img={NotificationIcon} name="Notifications" title="notifications" />
                    <MenuOption img="/assets/inbox.svg" name="Update feed" title="update feed"/>
                    <MenuOption img="/assets/add-user.svg" name="Invite members" title="add-user"/>
                    <MenuOption img="/assets/puzzle-piece.svg" name="Monday marketplace" title="puzzzle-piece"/>
                    <MenuOption img="/assets/search-black.svg" name="Search everything" title="search"/>
                    <MenuOption img="/assets/question-mark.svg" name="Help" title="question-mark"/>
                </div>
                <div className="divider"></div>
                <div className="products-switcher">
                    <img src="/assets/menu.svg" title='Products switcher' alt="menu"/>
                </div>
                <div className="profile">
                    <img src="/assets/monday_logo_icon.png" alt="monday-logo"/>
                    <div className="profile-image">AA</div>
                </div>
            </div>
            <div className="container">
                <div className='manage-workspace'>
                    <div className="home section">
                        <img src="/assets/home.svg" alt="home"/>
                        <span className='title'>Home</span>
                    </div>
                    <div className="work section">
                        <img src="/assets/carry-out-task.svg" alt="work"/>
                        <span className='title'>My work</span>
                    </div>
                    <hr/>
                    <div className="favorites section">
                        <img src="/assets/star-favorite.svg" alt="favorites"/>
                        <span className='title'>Favorites</span>
                        <div className='slide-btn'>
                            <img src="/assets/down-arrow.svg" alt="expand" className="expand"/>
                        </div>
                    </div>
                    <hr/>
                    <div className="main-workspace">
                        <div className='browse-workspace'>
                            <img src="/assets/house-main.svg" alt="house"/>
                            <h1 className="title">Main workspace</h1>
                            <div className='arrow'>
                                <img src="/assets/down-arrow.svg" alt="down-arrow"/>
                            </div>
                        </div>
                        <div className="empty-space"></div>
                        <button type='button' className='settings-btn'>
                            <img src="/assets/menu-meatball.svg" alt="menu"/>
                        </button>
                    </div>
                    <div className="add-workspace">
                        <div className="search-bar">
                            <div className='search-icon'>
                                <img src="/assets/search.svg" alt="search"/>
                            </div>
                            <input type="text" placeholder='Search'/>
                            <button className='filter-btn' type='button'>
                                <img src="/assets/filter.svg" alt="filter"/>
                            </button>
                        </div>
                        <button className="add-item" type='button'>
                            <img src="/assets/plus-white.svg" alt="plus"/>
                        </button>
                    </div>
                    <Task title='My first project'/>
                </div>
                <div className='workspace'>
                    <div className="workspace-topbar">
                        <button className="project-title" type='button'>
                            <h1 className="title">My first project</h1>
                            <div className="expand-arrow">
                                <img src="/assets/down-arrow.svg" alt="down-arrow"/>
                            </div>
                        </button>
                        <div className="empty-space"></div>
                        <button className="integration-btn-content" type='button'>
                            <div className="icon">
                                <img src="/assets/plug.svg" alt="plug"/>
                            </div>
                            <p className="title">Integration</p>
                            <div className="contents">
                                <img src="/assets/gmail-icon.png" alt="gmail-icon"/>
                                <img src="/assets/facebook-ads-icon.png" alt="facebook-ads-icon"/>
                                <img src="/assets/adobe-logo-transparent.png" alt="adobe-icon"/>
                            </div>
                        </button>
                        <button className="automation-center">
                            <div className="icon">
                                <img src="/assets/robot.svg" alt="robot"/>
                            </div>
                            <p className="title">Automate</p>
                        </button>
                        <button className="chat" type='button'>
                            <img src="/assets/message-bubble.svg" alt="message-empty-bubble"/>
                        </button>
                        <div className="view-activity-log">
                            <button type='button'>AA</button>
                        </div>
                        <button className="invite-members" type='button'>Invite / 1</button>
                        <button className="options" type='button'>
                            <img src="/assets/menu-meatball.svg" alt="menu-meatball"/>
                        </button>
                    </div>
                    <div className="workspace-tabs">
                        <button className="task isActive" type='button'>
                            <img src="/assets/home.svg" alt="home"/>
                            <p className="title">Main table</p>
                        </button>
                        <button className="add-task-btn" type='button'>
                            <img src="/assets/plus.svg" alt="plus-icon"/>
                        </button>
                    </div>
                    <div className="board-header-options"   >
                        <div className="board-header-container-options">
                            <div className="create-task">
                                <button className="create-default" type='button'>New Task</button>
                                <div className="divider"></div>
                                <button className='create-custom'>
                                    <img src="/assets/down-arrow-white.svg" alt="down-arrow"/>
                                </button>
                            </div>
                            <WorkspaceTool img='/assets/search.svg' title='Search'/>
                            <WorkspaceTool img='/assets/profile-circle.svg' title='Person'/>
                            <button className="filter">
                                <button type='button' className='quick-filters'>
                                    <img src="/assets/filter.svg" alt="filter"/>
                                    <p className="title">Filter</p>
                                </button>
                                <button type='button' className='advanced-filters'>
                                    <img src="/assets/down-arrow.svg" alt="down-arrow"/>
                                </button>
                            </button>
                            <WorkspaceTool img='/assets/sort.svg' title='Sort'/>
                            <WorkspaceTool img='/assets/hide.svg' title='Hide'/>
                            <WorkspaceTool img='/assets/book.svg' title='Group by'/>
                            <button className="settings">
                                <img src="/assets/menu-meatball.svg" alt="menu-meatball"/>
                            </button>
                        </div>
                        <div className="empty-space"></div>
                        <div className="board-header-slide">
                            <button className="colapse" type='button'>
                                <img src="/assets/up-arrow.svg" alt="up-arrow" title='Colapse'/>
                            </button>
                            <button className="expand" type='button'>
                                <img src="/assets/down-arrow.svg" alt="down-arrow" title='Expand'/>
                            </button>
                        </div>
                    </div>
                    <CompletedTasks title='Completed'/>
                    <ToDoTasks title='To Do Tasks'/>
                </div>
            </div>
        </div>
    );
}

export default App;

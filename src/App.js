// Libraries or Files Imports
import './App.scss';

// Component Imports
import MenuOption from "./components/MenuOption";
import Task from "./components/Task";
import WorkspaceTool from "./components/WorkspaceTool";
import CompletedTasks from "./components/CompletedTasks";
import ToDoTasks from "./components/ToDoTasks";
import NotificationIcon from './assets/notification.svg';
import HyacinthIcon from './assets/hyacinth.svg';

// Images Imports
import Inbox from './assets/inbox.svg'
import AddUser from './assets/add-user.svg'
import PuzzlePiece from './assets/puzzle-piece.svg'
import SearchIcon from './assets/search.svg'
import SearchBlackIcon from './assets/search-black.svg'
import QuestionMark from './assets/question-mark.svg'
import MenuIcon from './assets/menu.svg'
import MondayLogo from './assets/monday_logo_icon.png'
import HomeIcon from './assets/home.svg'
import CarryTaskIcon from './assets/carry-out-task.svg'
import StarFavoriteIcon from './assets/star-favorite.svg'
import UpArrowIcon from './assets/up-arrow.svg'
import DownArrowIcon from './assets/down-arrow.svg'
import DownArrowWhiteIcon from './assets/down-arrow-white.svg'
import HouseMainIcon from './assets/house-main.svg'
import MenuMeatballIcon from './assets/menu-meatball.svg'
import FilterIcon from './assets/filter.svg'
import SortIcon from './assets/sort.svg'
import HideIcon from './assets/hide.svg'
import BookIcon from './assets/book.svg'
import PlusIcon from './assets/plug.svg'
import WhitePlusIcon from './assets/plus-white.svg'
import PlugIcon from './assets/plug.svg'
import GmailIcon from './assets/gmail-icon.png'
import FacebookIcon from './assets/facebook-ads-icon.png'
import AdobeIcon from './assets/adobe-logo-transparent.png'
import RobotIcon from './assets/robot.svg'
import MessageBubbleIcon from './assets/message-bubble.svg'
import ProfileCircle from './assets/profile-circle.svg'

function App() {
    return (
        <div className="App">
            <div className="top-bar">
                <div className="page-title">
                    <img src={HyacinthIcon} alt="hyacinth"/>
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
                    <MenuOption img={Inbox} name="Update feed" title="update feed"/>
                    <MenuOption img={AddUser} name="Invite members" title="add-user"/>
                    <MenuOption img={PuzzlePiece} name="Monday marketplace" title="puzzzle-piece"/>
                    <MenuOption img={SearchBlackIcon} name="Search everything" title="search"/>
                    <MenuOption img={QuestionMark} name="Help" title="question-mark"/>
                </div>
                <div className="divider"></div>
                <div className="products-switcher">
                    <img src={MenuIcon} title='Products switcher' alt="menu"/>
                </div>
                <div className="profile">
                    <img src={MondayLogo} alt="monday-logo"/>
                    <div className="profile-image">AA</div>
                </div>
            </div>
            <div className="container">
                <div className='manage-workspace'>
                    <div className="home section">
                        <img src={HomeIcon} alt="home"/>
                        <span className='title'>Home</span>
                    </div>
                    <div className="work section">
                        <img src={CarryTaskIcon} alt="work"/>
                        <span className='title'>My work</span>
                    </div>
                    <hr/>
                    <div className="favorites section">
                        <img src={StarFavoriteIcon} alt="favorites"/>
                        <span className='title'>Favorites</span>
                        <div className='slide-btn'>
                            <img src={DownArrowIcon} alt="expand" className="expand"/>
                        </div>
                    </div>
                    <hr/>
                    <div className="main-workspace">
                        <div className='browse-workspace'>
                            <img src={HouseMainIcon} alt="house"/>
                            <h1 className="title">Main workspace</h1>
                            <div className='arrow'>
                                <img src={DownArrowIcon} alt=""/>
                            </div>
                        </div>
                        <div className="empty-space"></div>
                        <button type='button' className='settings-btn'>
                            <img src={MenuMeatballIcon} alt=""/>
                        </button>
                    </div>
                    <div className="add-workspace">
                        <div className="search-bar">
                            <div className='search-icon'>
                                <img src={SearchIcon} alt=""/>
                            </div>
                            <input type="text" placeholder='Search'/>
                            <button className='filter-btn' type='button'>
                                <img src={FilterIcon} alt=""/>
                            </button>
                        </div>
                        <button className="add-item" type='button'>
                            <img src={WhitePlusIcon} alt=""/>
                        </button>
                    </div>
                    <Task title='My first project'/>
                </div>
                <div className='workspace'>
                    <div className="workspace-topbar">
                        <button className="project-title" type='button'>
                            <h1 className="title">My first project</h1>
                            <div className="expand-arrow">
                                <img src={DownArrowIcon} alt="down-arrow"/>
                            </div>
                        </button>
                        <div className="empty-space"></div>
                        <button className="integration-btn-content" type='button'>
                            <div className="icon">
                                <img src={PlugIcon} alt="plug"/>
                            </div>
                            <p className="title">Integration</p>
                            <div className="contents">
                                <img src={GmailIcon} alt="gmail-icon"/>
                                <img src={FacebookIcon} alt="facebook-ads-icon"/>
                                <img src={AdobeIcon} alt="adobe-icon"/>
                            </div>
                        </button>
                        <button className="automation-center">
                            <div className="icon">
                                <img src={RobotIcon} alt="robot"/>
                            </div>
                            <p className="title">Automate</p>
                        </button>
                        <button className="chat" type='button'>
                            <img src={MessageBubbleIcon} alt="message-empty-bubble"/>
                        </button>
                        <div className="view-activity-log">
                            <button type='button'>AA</button>
                        </div>
                        <button className="invite-members" type='button'>Invite / 1</button>
                        <button className="options" type='button'>
                            <img src={MenuMeatballIcon} alt="menu-meatball"/>
                        </button>
                    </div>
                    <div className="workspace-tabs">
                        <button className="task isActive" type='button'>
                            <img src={HomeIcon} alt="home"/>
                            <p className="title">Main table</p>
                        </button>
                        <button className="add-task-btn" type='button'>
                            <img src={PlusIcon} alt="plus-icon"/>
                        </button>
                    </div>
                    <div className="board-header-options"   >
                        <div className="board-header-container-options">
                            <div className="create-task">
                                <button className="create-default" type='button'>New Task</button>
                                <div className="divider"></div>
                                <button className='create-custom'>
                                    <img src={DownArrowWhiteIcon} alt="down-arrow"/>
                                </button>
                            </div>
                            <WorkspaceTool img={SearchIcon} title='Search'/>
                            <WorkspaceTool img={ProfileCircle} title='Person'/>
                            <button className="filter">
                                <button type='button' className='quick-filters'>
                                    <img src={FilterIcon} alt="filter"/>
                                    <p className="title">Filter</p>
                                </button>
                                <button type='button' className='advanced-filters'>
                                    <img src={DownArrowIcon} alt="down-arrow"/>
                                </button>
                            </button>
                            <WorkspaceTool img={SortIcon} title='Sort'/>
                            <WorkspaceTool img={HideIcon} title='Hide'/>
                            <WorkspaceTool img={BookIcon} title='Group by'/>
                            <button className="settings">
                                <img src={MenuMeatballIcon} alt="menu-meatball"/>
                            </button>
                        </div>
                        <div className="empty-space"></div>
                        <div className="board-header-slide">
                            <button className="colapse" type='button'>
                                <img src={UpArrowIcon} alt="up-arrow" title='Colapse'/>
                            </button>
                            <button className="expand" type='button'>
                                <img src={DownArrowIcon} alt="down-arrow" title='Expand'/>
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

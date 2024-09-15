const MenuOption = (props) => {
    return (
        <div className="menu-option">
            <img src={props.img} title={props.name} alt={props.title}/>
        </div>
    )
}

export default MenuOption;

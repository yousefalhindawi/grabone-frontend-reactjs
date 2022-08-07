import {NavLink} from "react-router-dom";
import "./SidebarItem.css"

const SidebarItem = (props) => {
    return (
        <>
        <li className="nav-item SidebarItem" style={{ fontSize: '15px' }}>
            <NavLink to={`/${props.content}`} className="navLink d-flex justify-content-between align-content-center align-items-center">
            <p>{props.content}</p>
            <p style={{color: '#92a2ad', fontWeight: 300, fontSize: '12px'}}>{props.count}</p>
            </NavLink>
          </li>
          <hr className="sidebar-item-divider"/>
        </>
    )
};
export default SidebarItem;
import {NavLink} from "react-router-dom";
import SidebarItem from './SidebarItem';
import './Sidebar.css'
const Sidebar = ()=>{
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 mt-2 sidebar">
        <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          
          <span className="fs-4" style={{ color: '#01b2ee' }}>Discover</span>
        </NavLink>
        <hr className="sidebar-header-divider"/>
        <ul className="nav nav-pills flex-column mb-auto">
          <SidebarItem content='Featured Auckland deals' count='173'/>
          <SidebarItem content='Collections' count='42'/>
          <SidebarItem content='Escapes' count='76'/>
          <SidebarItem content='Picked for You' count=''/>
          <SidebarItem content='Activities, Events & Outdoors' count='221'/>
          <SidebarItem content='Store' count='4929'/>
          <SidebarItem content='Restaurants, Bars, Cafes' count='26'/>
          <SidebarItem content='Beauty, Massage & Spa' count='419'/>
          <SidebarItem content='House & Garden' count='2186'/>
          <SidebarItem content='Fitness & Sports' count='78'/>
          <SidebarItem content='Automotive' count='183'/>
        </ul>
      </div>
    )
};

export default Sidebar;
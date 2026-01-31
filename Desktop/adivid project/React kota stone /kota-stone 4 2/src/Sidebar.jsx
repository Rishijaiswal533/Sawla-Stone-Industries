import React, { useState, useEffect } from 'react';
import { AiOutlineHome, AiOutlineSetting } from 'react-icons/ai';
import { BsBuilding, BsGraphUp, BsFileText, BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { FaTools, FaUsers, FaHandsHelping } from 'react-icons/fa'; 

const SIDEBAR_CSS = `
.sidebar {
  position: fixed; top:0; left:0; height:100%; width:250px; background:#fff; border-right:1px solid #e0e0e0; z-index:999; transition: transform 0.3s ease; box-shadow: 2px 0 5px rgba(0,0,0,0.05); overflow-y:auto;
}
@media (max-width:768px) { .sidebar { transform: translateX(-250px); box-shadow:2px 0 5px rgba(0,0,0,0.2);} .sidebar.open { transform: translateX(0); } }
@media (min-width:769px) { .sidebar { transform: translateX(0); } }
.sidebar-brand { display:flex; align-items:center; padding:0 20px; height:60px; font-weight:700; font-size:1.5em; color:#333; border-bottom:1px solid #e0e0e0; position:sticky; top:0; z-index:1000; }
.brand-logo-img { height:30px; width:auto; margin-right:10px; }
.sidebar-nav { list-style:none; padding:10px 0 0 0; margin:0; }
.nav-item { display:flex; align-items:center; justify-content:space-between; padding:12px 20px; cursor:pointer; color:#4A5568; font-size:1em; font-weight:500; border-radius:0 5px 5px 0; margin:0; transition:0.2s ease; }
.nav-item.dropdown-toggle { justify-content:space-between; }
.nav-item:hover { background:#F7FAF9; color:#347474; transform:translateY(-2px); box-shadow:0 4px 8px rgba(0,0,0,0.05);}
.nav-item.active { background:#E6F0F0; color:#347474; font-weight:600; transform:none; box-shadow:none; }
.nav-icon { margin-right:15px; font-size:1.3em; transition:transform 0.3s ease; }
.nav-item:hover .nav-icon { transform:rotate(5deg) scale(1.1); color:#4CAF50; }

.submenu { list-style:none; padding:5px 0; margin:0; background:#F0F5F5; overflow:hidden; transition:max-height 0.3s ease-out, opacity 0.3s ease-out; max-height:0; opacity:0; border-radius:0 0 5px 0; }
.submenu.open { max-height:500px; opacity:1; }
.submenu-item { padding:8px 20px 8px 50px; cursor:pointer; color:#5A677D; font-size:0.95em; font-weight:400; transition:0.2s ease; }
.submenu-item:hover { background:#E0EAEB; color:#2F6B6B; }
.submenu-item.active { font-weight:600; color:#347474; background:#E0EAEB; border-left:3px solid #347474; padding-left:47px; }

.mobile-overlay { position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.5); z-index:998; }
@media(min-width:769px){.mobile-overlay{display:none;}}
`;

const navItems = [
  { name: 'Dashboard', icon: AiOutlineHome },
  // 💡 DELETED: Removed the standalone 'Pricing' item: { name: 'Pricing', icon: BsGraphUp },
  
  { name: 'Mines', icon: BsBuilding, submenu:[{name:'Mines', view:'Mines'}] },

  
  { 
    name: 'Billing', icon: BsFileText,
    submenu: [
      { name:'Estimation', view:'Estimation' },
      { name:'Invoice', view:'Invoice' } 
    ]
  },
  
  { 
    name: 'Inventory', icon: FaTools,
    submenu: [
      { name:'Stone', view:'InventoryStone' },
      { name:'Machinery', view:'InventoryMachinery' },
      // 💡 ADDED: 'Pricing' moved here
      { name: 'Pricing', view: 'InventoryPricing' } 
    ]
  },
  
  { 
    name: 'Human Resources', icon: FaUsers,
    submenu: [
      { name:'Employees', view:'HREmployees' },
      { name:'Salary', view:'HRSalary' }
    ]
  },
  
  { 
    name: 'Support', icon: FaHandsHelping,
    submenu: [
      { name:'FAQ', view:'SupportFAQ' },
      { name:'Raise A Ticket', view:'SupportTicket' }
    ]
  },
];

const useInjectStyles = (id, css) => {
  useEffect(()=>{
    if(document.getElementById(id)) return;
    const style=document.createElement('style');
    style.id=id;
    style.innerHTML=css;
    document.head.appendChild(style);
    return ()=>{ const e=document.getElementById(id); if(e) e.remove(); }
  },[id, css]);
}

export default function Sidebar({ activeView, isSidebarOpen, onNavClick, onToggleSidebar }){
  useInjectStyles('sidebar-styles', SIDEBAR_CSS);
  const [openDropdowns, setOpenDropdowns] = useState({});

  useEffect(()=>{
    const newOpen = {};
    navItems.forEach(item=>{
      if(item.submenu){
        item.submenu.forEach(sub=>{ 
          // Open dropdown if a submenu item is active
          if(activeView===sub.view) newOpen[item.name]=true; 
        });
      }
    });
    setOpenDropdowns(newOpen);
  },[activeView]);

  const handleNavClick=(itemName,isDropdown=false)=>{
    if(isDropdown) setOpenDropdowns(prev=>({...prev,[itemName]:!prev[itemName]}));
    else { onNavClick(itemName); if(window.innerWidth<=768) onToggleSidebar(); }
  }

  return (
    <>
    <nav className={`sidebar ${isSidebarOpen?'open':''}`}>
      <div className="sidebar-brand">
        <img src="/logo.png" alt="Logo" className="brand-logo-img"/> Kota Stone
      </div>
      <ul className="sidebar-nav">
        {navItems.map(item=>{
          const Icon = item.icon;
          const isDropdown = !!item.submenu;
          // Check if the current view or any of its sub-views are active
          const isActive = activeView===item.name || (item.submenu && item.submenu.some(sub => sub.view === activeView));
          const Chevron = openDropdowns[item.name]? BsChevronUp: BsChevronDown;

          return(
            <React.Fragment key={item.name}>
              <li className={`nav-item ${isActive?'active':''} ${isDropdown?'dropdown-toggle':''}`}
                  onClick={()=>handleNavClick(item.name,isDropdown)}>
                <div style={{display:'flex',alignItems:'center'}}>
                  <Icon className="nav-icon"/>
                  <span>{item.name}</span>
                </div>
                {isDropdown && <Chevron style={{fontSize:'0.9em'}}/>}
              </li>
              {isDropdown && (
                <ul className={`submenu ${openDropdowns[item.name]?'open':''}`}>
                  {item.submenu.map(sub=>(
                    <li key={sub.view} className={`submenu-item ${activeView===sub.view?'active':''}`}
                        onClick={()=>handleNavClick(sub.view)}>
                      {sub.name}
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          )
        })}
      </ul>
    </nav>
    {isSidebarOpen && <div className="mobile-overlay" onClick={onToggleSidebar}></div>}
    </>
  )
}
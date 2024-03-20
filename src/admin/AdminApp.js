import { useState } from 'react'
import './adminApp.css'
import Sidebar from './Sidebar';
import AdminHeader from './adminHeader';
import AdminHome from './adminHome';

function AdminApp() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }


    return (
        <div className='grid-container'>
            <AdminHeader OpenSidebar={OpenSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <AdminHome />

        </div>
    );
}
export default AdminApp;
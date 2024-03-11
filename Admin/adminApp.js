import {useState} from 'react'
import './adminApp.css'
import Sidebar from './Sidebar'
import AdminHeader from './adminHeader'
import adminHome from './adminHome'

function App(){
    

    return (
        <div classname ='grid-container'>
            <Header />
            <Sidebar />
            <Home />

        </div>
    )
}
export default App
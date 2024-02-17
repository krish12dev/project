import { Link, Outlet } from "react-router-dom"
import logo from '../../assets/Bitmap.png'
import './Layout.css'

const Layout = () =>{
    return(
        <>
        <div className="container_service">
            <div className="img_container">
                <img src={logo} alt="logo"/>
            </div>
            <div className="icon_list">
            <ul>
                <li>
                <Link to= '/'>Service</Link>
                </li>
                <li>
                <Link to= '/aboutus'>About Us</Link>
                </li>
                <li>
                <Link to= '/blogs'>Blogs</Link>
                </li>
                <li>
                <Link to= '/casestudies'>case Studies</Link>
                </li>
                <li>
                <Link to= '/contact' className="btn-contact">Contact Us</Link>
                </li>
            </ul>
            </div>
        </div>
        <Outlet/>
        </>
    )
}
export default Layout
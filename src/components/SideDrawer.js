

import '../styles/SideDrawer.css';


function SideDrawer (props) {

    return(
    <nav className='sideDrawer'>
        <div className='topLine'>
        <div className='foodle'><span className='foodleBall'><i class="fal fa-futbol"></i></span>FOODLE</div>
        <div onClick={props.closeMenu} className='miniMenu'><i class="far fa-bars"></i></div>
        </div>
        <div className='drawerMenu'>MENU</div>
        <div className='dashFill'>
        <div className='drawerDash'><span className='sideIcon'><i class="fal fa-home-alt"></i></span>Dashboard <button className='dashButton'>01</button></div>
        </div>
        <div className='layout'><span className='sideIcon'><i class="fal fa-th"></i></span>Layouts<span className='layouts'><i class="far fa-chevron-down"></i></span></div>

        <div className='drawerMenu'>APPS</div>

        <div className='calender'><span className='sideIcon'><i class="fal fa-calendar-week"></i></span>Calender</div>
        <div className='chat'><span className='sideIcon'><i class="fal fa-comments-alt"></i></span>Chat<button className='chatButton'>New</button></div>
        <div className='ecommItem'><span className='sideIcon'><i class="fal fa-store-alt"></i></span>Ecommerce<span className='ecomm'><i class="far fa-chevron-down"></i></span></div>
        <div className='emailItem'><span className='sideIcon'><i class="fal fa-envelope"></i></span>Email<span className='email'><i class="far fa-chevron-down"></i></span></div>
        <div className='invoiceItem'><span className='sideIcon'><i class="fal fa-file-invoice-dollar"></i></span>Invoices<span className='invoices'><i class="far fa-chevron-down"></i></span></div>
        <div className='contactItem'><span className='sideIcon'><i class="fal fa-address-book"></i></span>Contacts<span className='contacts'><i class="far fa-chevron-down"></i></span></div>

        <div className='drawerMenu'>PAGES</div>
        
        <div className='authItem'><span className='sideIcon'><i class="fal fa-user-circle"></i></span>Authentication<span className='auth'><i class="far fa-chevron-down"></i></span></div>
        <div className='utility'><span className='sideIcon'><i class="fal fa-file-contract"></i></span>Utility<span className='util'><i class="far fa-chevron-down"></i></span></div>

        <div className='drawerMenu'>COMPONENTS</div>

        <div className='ui'><span className='sideIcon'><i class="fal fa-campground"></i></span>UI Elements<span className='elements'><i class="far fa-chevron-down"></i></span></div>
        <div className='forms'><span className='sideIcon'><i class="fal fa-globe"></i></span>Forms<button className='formButton'>9</button></div>
        <div className='tableItem'><span className='sideIcon'><i class="fal fa-bars"></i></span>Tables<span className='tables'><i class="far fa-chevron-down"></i></span></div>
        <div className='chartItem'><span className='sideIcon'><i class="fal fa-chart-bar"></i></span>Charts<span className='charts'><i class="far fa-chevron-down"></i></span></div>

    </nav>
)
    }


export default SideDrawer;
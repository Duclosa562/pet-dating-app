import "./NavBar.css";

function NavBar() {
    return (
        <header className='navbar'>
            <div className='navbar-title'>
                Pet Dating App
                <i class="fa-solid fa-paw navbar-icon"></i>
            </div>
            <div className='navbar-button'>Home</div>
            <div className='navbar-button'>Search</div>
            <div className='navbar-button'>Sign In</div>
        </header>
    )
}

export default NavBar
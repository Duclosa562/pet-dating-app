import "./NavBar.css";

function NavBar() {
    return (
        <header className='navbar'>
            <div className='navbar-title'>Pet Dating App</div>
            <div className="navbar-icon">
                <i class="fa-solid fa-paw"></i>
            </div>
            <div className='navbar-button'>Home</div>
            <div className='navbar-button'>Search</div>
            <div className='navbar-button'>Sign In</div>
        </header>
    )
}

export default NavBar
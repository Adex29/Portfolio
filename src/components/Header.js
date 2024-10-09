
function Header(){
    return(
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a href="/" className="btn btn-ghost text-xl">Jay-ar Baniqued</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="/">Home</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/aboutme">About</a></li>
                    <li><a href="/contactme">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
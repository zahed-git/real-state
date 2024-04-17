import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
const Nav = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Sign-out successful.")
      })
      .catch((error) => {
        console.log(error.message)
      });
  }
  const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    {user &&
      <>
        <li><NavLink to='/update'>Update profile</NavLink></li>
        <li><NavLink to='/user'>User Profile</NavLink></li>
      </>
    }

    <li><NavLink to='/blog'>Blog</NavLink></li>
    <li><NavLink to='/contact'>Contact us</NavLink></li>
  </>

  return (
    <div className="navbar bg-base-100 fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"><span className="text-red-500">Apartment</span> Avenue</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? <>
            <span className="text-sm font-bold">{user.photoURL ?
              <>
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    {/* ---------------------------- */}
                    <button data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom" ><img alt="Tailwind CSS Navbar component" src={user.photoURL} /></button>
                    <div id="tooltip-bottom" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                      tooltip
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    {/* ---------------------------- */}
                  </div>
                </div>
              </>
              : "Anonymous User"}</span>
            <button className="btn btn-primary mx-2" onClick={handleLogOut}>LogOut</button>
          </>
            :
            <Link to='/login'><button className="btn btn-primary mx-10">Sing-in</button></Link>
        }

      </div>
    </div>
  );
};

export default Nav;
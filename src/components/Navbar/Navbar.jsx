
import { IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";






const Navbar = () => {
    return (
        <div  className="w-[1300px] mx-auto">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
 <li><a> Home</a></li> 



<li>
  <a>Recipes</a>
</li>
<li><a>About</a></li>
<li><a>Search</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Recipe Calories</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a> Home</a></li> 



      <li>
        <a>Recipes</a>
      </li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
    </ul>
  </div>
  <div className="navbar-end">

    <div className="flex items-center w-[250px]  gap-3">
        <div className="border-state-300 rounded-full border-2 w-[200px]   items-center flex gap-2 h-[40px]">
       
        <IoMdSearch className="text-2xl"></IoMdSearch>
        <input className="w-[80px] px-1" placeholder="search" type="text" />
        </div>
 

    
        <CgProfile  className=" font-bold bg-green-400 rounded-full text-3xl"></CgProfile>

    </div>

   

  </div>

</div>
        </div>
    );
};

export default Navbar;
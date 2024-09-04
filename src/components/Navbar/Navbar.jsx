import { IoIosSearch } from "react-icons/io";
import  profile   from '../../assets/images/Frame 5.png';

const Navbar = () => {
    return (
        
<div className="navbar bg-base-100 border-2 border-red-400 w-[1300px] mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li>
          <a>Recipes</a>

        </li>
        <li><a>About</a></li>
        <li><a>Search</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Recipe Calories</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

    
      
        <li><a>Home</a></li>
        <li>
          <a>Recipes</a>

        </li>
        <li><a>About</a></li>
        <li><a>Search</a></li>
      
    </ul>


   
  </div>
  <div className="navbar-end">
 
  <div className="rounded-full bg-slate-200 w-[200px] h-[50px] items-center flex gap-3 mr-5">

<IoIosSearch className="text-2xl"></IoIosSearch> 
<h1>search</h1>



</div>
 <img src={profile} alt="" />

  </div>
</div>
    );
};

export default Navbar;
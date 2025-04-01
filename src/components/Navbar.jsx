import { RiUserFill } from "react-icons/ri";
import { LuBellRing } from "react-icons/lu";

const Navbar = () => {


    return (
        <div className="navbar bg-base-100 border-b">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Teacher's Center</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control mr-20">
                    <div className="flex gap-4">
                        <button className="text-2xl"><RiUserFill /></button>
                        <button className="text-2xl"><LuBellRing /></button>

                        <div className="border border-t border-black ml-10"></div>
                    </div>
                </div>

                {/* image and drop down */}
                <div className="dropdown dropdown-end flex items-center gap-4">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                        <div className="">
                            <b>Sir 1</b>
                            <p>Chemistry | Level 3</p>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
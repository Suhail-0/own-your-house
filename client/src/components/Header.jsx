import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className="bg-indigo-950 p-4 shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
            <Link to="/" >
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-blue-600">Own</span>
            <span className="text-orange-500">Your</span>
            <span className="text-green-600">House</span>
        </h1>
        </Link>
        <form className="bg-indigo-500 p-3 rounded-lg flex items-center">
            <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none w-24 sm:w-64"/>
            <FaSearch className="text-slate-900"/>
        </form>
        <ul className='flex gap-4'>
            <Link to="/" >
            <li className='hidden sm:inline text-orange-500 hover:underline'>Home</li>
            </Link>
            <Link to="/about">
            <li className='hidden sm:inline text-white hover:underline'>About</li>
            </Link>
            <Link to="/sign-in">
            <li className='text-green-600 hover:underline'>Sing-in</li>
            </Link>
        </ul>
        </div>
    </header>
  );
}

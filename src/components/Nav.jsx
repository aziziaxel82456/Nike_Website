import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          <li className="text-slate-gray font-montserrat text-lg flex flex-3 hover:text-coral-red "><a href="/">Home</a></li>
          <li className="text-slate-gray font-montserrat text-lg flex flex-3 hover:text-coral-red "><a href="/">About Us</a></li>
          <li className="text-slate-gray font-montserrat text-lg flex flex-3 hover:text-coral-red "><a href="/"> Products</a></li>
          <li className="text-slate-gray font-montserrat text-lg flex flex-3 hover:text-coral-red "><a href="/">Contact Us</a></li>
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-montserrat hover:text-coral-red text-slate-gray font-semibold max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={30} height={30} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
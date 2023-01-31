import { Link } from "react-router-dom";
// END OF IMPORTS

const Header = () => {
  return (
    <header className="w-full h-20 bg-slate-900 text-white text-xs font-semibold text-center uppercase tracking-wide leading-normal">
      <section className="w-11/12 max-w-screen-2xl h-full mx-auto flex justify-between items-center">
        <div>
          <Link aria-label="logo" to="/">
            HOME
          </Link>
        </div>
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link to="/auth/login">login</Link>
            </li>
            <li>
              <Link to="/auth/create-account">create account</Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;

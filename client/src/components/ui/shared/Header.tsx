import { Link } from "react-router-dom";
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="bg-gray-800 h-20 fixed w-full text-white">
      <div className="container mx-auto flex justify-between px-10 py-5">
        <Link to="/">
          {" "}
          <span>Home</span>
        </Link>

        <Link to="/anotherPage">
          <span>Another Page</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;

import { Chevron } from "../assets/Icons/Chevron";

const Header = () => {
  return (
    <header className="p-4  flex justify-between items-center w-full ">
      <div className="flex sm:hidden">
        <Chevron />
        <span>Back</span>
      </div>
      <div>
        <span>Dashboard</span>
      </div>
      <div>
        <span>Profile</span>
      </div>
    </header>
  );
};

export default Header;

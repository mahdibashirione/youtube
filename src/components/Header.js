import { SiInstagram, SiYoutube } from "react-icons/si";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-indigo-500 via-cyan-500 to-purple-500 px-5 py-2 text-slate-800">
      <div className="select-none w-full container flex items-center justify-center gap-x-8">
        <div className="flex items-center gap-x-2">
          <span className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-md">
            <SiYoutube className="text-3xl text-white" />
          </span>
          <p>CODE LEARNING</p>
        </div>
        <div className="flex items-center gap-x-2">
          <span className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-md">
            <SiInstagram className="text-3xl text-white" />
          </span>
          <p>mahdibashirione</p>
        </div>
      </div>
    </header>
  );
};

export default Header;

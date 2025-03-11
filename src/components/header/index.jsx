import { BiSearch } from "react-icons/bi";
import logo from "../../assets/Лого.svg";

import { FaChartBar, FaUser, FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaInstagram, FaVk, FaFacebookF } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="bg-[#212526] ">
        <header className="w-[95%] mx-auto max-w-[1440px] max-[320px]:w-[90%] text-white flex justify-between items-center  py-2">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="" />
          </div>
          <p className="max-[850px]:hidden">Время работы: 10:00–20:00</p>
          <div className="flex flex-col text-sm max-[670px]:hidden">
            <a
              href="tel:+74951203214"
              className="text-white hover:text-orange-500"
            >
              +7 495 120-32-14
            </a>
            <a href="#" className="text-orange-500 text-xs hover:underline">
              Заказать звонок
            </a>
          </div>
          <div className="flex space-x-6 items-center max-[370px]:space-x-2">
            <div className="relative cursor-pointer">
              <FaRegHeart size={24} className="text-white" />
            </div>
            <div className="relative cursor-pointer">
              <FaChartBar size={24} className="text-white" />
            </div>
            <div className=" p-2 rounded cursor-pointer">
              <FaUser size={24} className="text-white" />
            </div>
            <div className="relative cursor-pointer">
              <FaShoppingCart size={24} className="text-white" />
            </div>
            <div className="text-white text-sm flex flex-col max-[500px]:hidden ">
              <p>Товаров на сумму</p>
              <strong>2 000 ₽</strong>
            </div>
          </div>
        </header>
      </div>
      <div className=" bg-black">
        <nav className="w-[95%] mx-auto max-w-[1440px] max-[320px]:w-[90%] text-white py-3 px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 border border-orange-500 px-4 py-2 rounded-md">
              <FaBars />
              <span className="max-[500px]:hidden">Каталог товаров</span>
            </button>
          </div>
          <ul className="flex gap-10 max-[900px]:gap-6 max-[850px]:hidden ">
            <li className="hover:text-orange-500 cursor-pointer">О компании</li>
            <li className="hover:text-orange-500 cursor-pointer">Акции</li>
            <li className="hover:text-orange-500 cursor-pointer">
              Хиты сезона
            </li>
            <li className="hover:text-orange-500 cursor-pointer">Новинки</li>
          </ul>
          <div className="flex items-center gap-4 max-lg:hidden">
            <FaInstagram className="cursor-pointer text-xl hover:text-orange-500" />
            <FaVk className="cursor-pointer text-xl hover:text-orange-500" />
            <FaFacebookF className="cursor-pointer text-xl hover:text-orange-500" />
          </div>
          <div>
            <input
              type="text"
              placeholder=" Поиск по каталогу"
              className="px-4 py-2 rounded-md text-black max-[420px]:hidden bg-white block"
            />
            <div className="min-[420px]:hidden flex">
              <BiSearch size={30} />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

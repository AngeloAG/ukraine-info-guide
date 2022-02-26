import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { openMenu } from "../../globalState/slices/currentPage";
import LanguagePicker from "./LanguagePicker";
import Links from "./Links";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const page = useSelector((state) => state.currentPage);

  const toggleMenu = () => dispatch(openMenu({ menuOpen: !page.menuOpen }))

  return (
    <section>
      <div className="bg-gray-200 py-5 flex flex-row items-center">
        <div className="grow ml-2 text-xl">
          <NavLink to="/">LeaveUkraine.com</NavLink>
        </div>
        <LanguagePicker />
        <MobileMenuButton {...{ page, toggleMenu }} />
        <nav className="navbar">
          <Links t={t} />
        </nav>
      </div>
      <MobileMenu {...{ page, toggleMenu, t }} />
    </section>
  );
}
export default Navbar;

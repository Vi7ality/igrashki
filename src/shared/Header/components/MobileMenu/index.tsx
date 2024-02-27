import { NavLink } from "react-router-dom";
import CartButton from "../CartButton";
import { MobileMenuSection } from "./MobileMenu.styled";
import closeIcon from "../../../../assets/close-icon.svg";
import darkLogo from "../../../../assets/logo-dark.svg";
import { useEffect } from "react";

const MobileMenu = ({ handleMenuClick, openState }) => {
      useEffect(() => {
    if (openState) {
      const handleKeyDown = e => {
        if (e.code === 'Escape') {
          handleMenuClick();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [handleMenuClick, openState]);

  useEffect(() => {
    if (openState) {
      const scrollY = window.scrollY;

      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [openState]);
  return (

      <MobileMenuSection className={openState ? 'open' : ''}>
        <div>
          <button onClick={handleMenuClick}>
            <img src={closeIcon}></img>
          </button>
          <img src={darkLogo} alt="" />
          <CartButton />
        </div>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to={"/"}>Головна сторінка</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Каталог іграшок</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Про проєкт</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Популярні запитання</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </MobileMenuSection>
  );
};

export default MobileMenu;

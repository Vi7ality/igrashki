import { useState } from "react";
import { useAppSelector } from "../../../redux/store";
import styles from "../Header.module.scss";
import AuthModal from "./AuthModal";
import DropDownProfile from "./DropDownProfile";
import { AuthBtn } from "../Header.styled";
import icons from "../../../assets/icons.svg";

const ProfileButton = ({ mobile, darkMode }: { mobile?: boolean; darkMode?: boolean }) => {
  const { client } = useAppSelector((state) => state.client);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const handleProfileButtonClick = () => {
    setShowProfileDropdown((prev) => !prev);
  };

  const handleAuthModal = () => {
    setShowAuthModal((prev) => !prev);
  };

  const profileBtnContent = mobile ? "Вхід" : darkMode ? "Авторизація7" : "Авторизація";

  return (
    <>
      {client ? (
        <div className={styles.profileWrapper}>
          <button
            className={`${styles.profileBtn} ${darkMode && styles.dark}`}
            onClick={handleProfileButtonClick}
          >
            {client.parentName}
          </button>
          {showProfileDropdown && (
            <DropDownProfile closeDropDown={() => setShowProfileDropdown(false)} />
          )}
        </div>
      ) : (
        <AuthBtn onClick={handleAuthModal}>
          <svg>
            <use href={`${icons}#icon-user`} />
          </svg>
          {profileBtnContent}
        </AuthBtn>
      )}
      {showAuthModal && <AuthModal authClose={handleAuthModal} />}
    </>
  );
};

export default ProfileButton;

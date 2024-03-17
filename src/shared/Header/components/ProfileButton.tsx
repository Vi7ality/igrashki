import { useState } from "react";
import { useAppSelector } from "../../../redux/store";
import AuthModal from "./AuthModal";
import DropDownProfile from "./DropDownProfile";
import { AuthBtn, AuthContent, ClientProfile, DeskUserIcon, MobUserIcon } from "../Header.styled";
import icons from "../../../assets/icons.svg";

const ProfileButton = () => {
  const { client } = useAppSelector((state) => state.client);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const handleProfileButtonClick = () => {
    setShowProfileDropdown((prev) => !prev);
  };

  const handleAuthModal = () => {
    setShowAuthModal((prev) => !prev);
  };


  return (
    <>
      {client ? (
        <div>
          <ClientProfile style={{color: 'white'}}
            onClick={handleProfileButtonClick}
          >
            {client.parentName + ' ' + client.parentSurname}
          </ClientProfile>
          {showProfileDropdown && (
            <DropDownProfile closeDropDown={() => setShowProfileDropdown(false)} />
          )}
        </div>
      ) : (
          <AuthBtn onClick={handleAuthModal}>
            <MobUserIcon>
              <use href={`${icons}#icon-user-mb`} />
            </MobUserIcon>
          <DeskUserIcon>
            <use href={`${icons}#icon-user`} />
          </DeskUserIcon>
          <AuthContent>Авторизація</AuthContent>
        </AuthBtn>
      )}
      {showAuthModal && <AuthModal authClose={handleAuthModal} />}
    </>
  );
};

export default ProfileButton;

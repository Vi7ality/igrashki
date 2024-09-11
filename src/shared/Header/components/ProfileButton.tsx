import { useRef, useState } from 'react';
import { useAppSelector } from '../../../redux/store';
import AuthModal from '../../AuthModal';
import DropDownProfile from './DropDownProfile';
import {
  AuthBtn,
  AuthContent,
  ClientProfile,
  DeskUserIcon,
  MobUserIcon,
} from '../Header.styled';
import icons from '../../../assets/icons.svg';
import useClickOutside from '../../../utils/useClickOutside';

type Props = {
  showAuthModal: boolean;
  setShowAuthModal(v: boolean): void;
};

const ProfileButton = ({ showAuthModal, setShowAuthModal }: Props) => {
  const { client } = useAppSelector(state => state.client);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const handleProfileButtonClick = () => {
    setShowProfileDropdown(prev => !prev);
  };

  const handleAuthModal = () => {
    setShowAuthModal(!showAuthModal);
  };

  const DropDownProfileRef = useRef();

  useClickOutside(DropDownProfileRef, () => {
    showProfileDropdown && setShowProfileDropdown(false);
  });

  return (
    <>
      {client ? (
        <div style={{ position: 'relative' }}>
          <ClientProfile
            style={{ color: 'white' }}
            onClick={handleProfileButtonClick}
          >
            {client.parentName + ' ' + client.parentSurname}
          </ClientProfile>
          {showProfileDropdown && (
            <DropDownProfile
              modalRef={DropDownProfileRef}
              closeDropDown={() => setShowProfileDropdown(false)}
            />
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

import { useAppDispatch } from '../../../../redux/store';
import { clearClient } from '../../../../redux/slices/client.slice';
import { Link, useNavigate } from 'react-router-dom';
import { DropdownContainer, Item, ListOfItems } from './DropdownProfile.styled';
import { MutableRefObject } from 'react';

interface DropDownProfileProps {
  closeDropDown: () => void;
  modalRef: MutableRefObject<undefined>;
}

const DropDownProfile = ({ closeDropDown, modalRef }: DropDownProfileProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    closeDropDown();
    dispatch(clearClient());
    navigate('/');
  };

  return (
    <DropdownContainer ref={modalRef}>
      <ListOfItems>
        <Item>
          <Link to="/profile">Профіль</Link>
        </Item>
        <Item onClick={handleLogout}>
          Вийти
        </Item>
      </ListOfItems>
    </DropdownContainer>
  );
};

export default DropDownProfile;

import { useAppDispatch } from '../../../../redux/store';
import { clearClient } from '../../../../redux/slices/client.slice';
import { Link, useNavigate } from 'react-router-dom';
import { DropdownContainer, Item, ListOfItems } from './DropdownProfile.styled';

interface DropDownProfileProps {
  closeDropDown: () => void;
}

const DropDownProfile = ({ closeDropDown }: DropDownProfileProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    closeDropDown();
    dispatch(clearClient());
    navigate('/');
  };

  return (
    <DropdownContainer>
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

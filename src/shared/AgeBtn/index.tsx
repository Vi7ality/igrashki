import { AgeIcon, AgeText, BtnStyled } from './AgeBtn.styled';
import icons from '../../assets/icons.svg';

type Props = {
  age?: number | null;
  disabled?: boolean;
}

const AgeBtn = ({ age = 0, disabled = false }: Props) => {
  return (
    <BtnStyled disabled={disabled}>
      <AgeIcon>
        <use href={`${icons}#icon-age`} />
      </AgeIcon>
      <AgeText>{age}</AgeText>
    </BtnStyled>
  );
};

export default AgeBtn;
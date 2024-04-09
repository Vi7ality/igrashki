import { AgeIcon, AgeText, IconWrap } from './AgeBtn.styled';
import icons from '../../assets/icons.svg';

type Props = {
    age?: string
}

const AgeBtn = ({ age = '0' }: Props) => {
  return (
    <IconWrap>
      <AgeIcon>
        <use href={`${icons}#icon-age`} />
      </AgeIcon>
      <AgeText>{age}</AgeText>
    </IconWrap>
  );
};

export default AgeBtn;
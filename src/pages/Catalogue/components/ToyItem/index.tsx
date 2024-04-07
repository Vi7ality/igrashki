import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import { IToyInfo } from '../../../../models/toy';
import {
  Category,
  ContentWrap,
  FlexWrap,
  ImageWrap,
  ToyItemStyled,
  ToyName,
  AgeIcon,
  AgeText,
  IconWrap,
  FlexContainer,
} from './ToyItem.styled';
import icons from '../../../../assets/icons.svg';
import CartButton from '../CartButton';

type Props = {
  handleAddToCart(toy: IToyInfo): void;
  toy: IToyInfo;
};

const ToyItem = ({ handleAddToCart, toy }: Props) => {
  return (
    <ToyItemStyled key={nanoid(6)}>
      <Link to={`/toys/${toy.toyId}`}>
        <ImageWrap>
          <img src={toy?.images[0]} alt="toy image" />
        </ImageWrap>
      </Link>
      <ContentWrap>
        <ToyName>{toy.toyName}</ToyName>
        <FlexWrap>
          <FlexContainer>
            <IconWrap>
              <AgeIcon>
                <use href={`${icons}#icon-age`} />
              </AgeIcon>
              <AgeText>0</AgeText>
            </IconWrap>
            <Category>{toy.category}</Category>
          </FlexContainer>
          <CartButton toy={toy} handleAddToCart={handleAddToCart}/>
        </FlexWrap>
      </ContentWrap>
    </ToyItemStyled>
  );
};

export default ToyItem;

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
import defaultImg from '../../assets/default-image.svg';

type Props = {
  handleToggleToCart(toy: IToyInfo): void;
  handleCategorySelect(v: string): void;
  toy: IToyInfo;
};

const ToyItem = ({ handleToggleToCart, handleCategorySelect, toy }: Props) => {
  return (
    <ToyItemStyled key={nanoid(6)}>
      <Link to={`/toys/${toy.toyId}`}>
        <ImageWrap>
          {toy?.images[0] ? (
            <img src={toy?.images[0]} alt="toy image" />
          ) : (
            <img src={defaultImg} alt="toy image" />
          )}
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
            <Category
              type="button"
              onClick={() => handleCategorySelect(toy.category)}
            >
              {toy.category}
            </Category>
          </FlexContainer>
          <CartButton toy={toy} handleToggleToCart={handleToggleToCart} />
        </FlexWrap>
      </ContentWrap>
    </ToyItemStyled>
  );
};

export default ToyItem;

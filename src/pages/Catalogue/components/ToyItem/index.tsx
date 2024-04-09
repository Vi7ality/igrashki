import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import { IToyInfo } from '../../../../models/toy';
import {
  ContentWrap,
  FlexWrap,
  ImageWrap,
  ToyItemStyled,
  ToyName,
  FlexContainer,
} from './ToyItem.styled';
import icons from '../../../../assets/icons.svg';
import CartButton from '../CartButton';
import defaultImg from '../../assets/default-image.svg';
import CategoryBtn from '../../../../shared/CategoryBtn';
import AgeBtn from '../../../../shared/AgeBtn';

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
        <Link to={`/toys/${toy.toyId}`}>
          <ToyName>{toy.toyName}</ToyName>
        </Link>
        <FlexWrap>
          <FlexContainer>
          <AgeBtn/>
            <CategoryBtn handleCategorySelect={handleCategorySelect} categoryName={toy.category} />
          </FlexContainer>
          <CartButton toy={toy} handleToggleToCart={handleToggleToCart} />
        </FlexWrap>
      </ContentWrap>
    </ToyItemStyled>
  );
};

export default ToyItem;

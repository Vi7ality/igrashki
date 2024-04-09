import { useAppSelector } from '../../../../redux/store';
import AgeBtn from '../../../../shared/AgeBtn';
import CategoryBtn from '../../../../shared/CategoryBtn';
import {
  SectionStyled,
  PageTitle,
  RowFlex,
  CategoryWrap,
  AgeWrap,
  Title2,
  MadeName,
  InfoWrap,
  FeatureList,
  ItemStyled,
} from './ToyInfo.styled';
import icons from '../../../../assets/icons.svg'

type Props = {
  handleToggleToCart(): void;
};

const ToyInfo = ({ handleToggleToCart }: Props) => {
  const { toy } = useAppSelector(state => state.toy);
  console.log(toy?.ageFrom);
  return (
    <SectionStyled>
      <PageTitle>{toy?.toyName}</PageTitle>
      <InfoWrap>
        <RowFlex>
          <CategoryWrap>
            <p>Категорія:</p>
            <CategoryBtn categoryName={toy && toy.category} />
          </CategoryWrap>
          <AgeWrap>
            <p>Вік:</p>
            <AgeBtn age={toy && toy.ageFrom} />
          </AgeWrap>
        </RowFlex>
        <div>
          <Title2>Опис</Title2>
          <p>{toy?.description}</p>
          <MadeName>
            Виробник: <span>{toy?.manufacturer}</span>
          </MadeName>
        </div>
        {toy && toy?.features?.length > 0 && (
          <div>
            <Title2>Особливості:</Title2>
            <FeatureList>
              {toy?.features.map((feature, index) => (
                <ItemStyled key={index}>{feature}</ItemStyled>
              ))}
            </FeatureList>
          </div>
        )}
          </InfoWrap>
          <button>Додати</button>
    </SectionStyled>
  );
};

export default ToyInfo;

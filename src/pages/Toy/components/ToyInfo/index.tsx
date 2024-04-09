import { useAppSelector } from '../../../../redux/store';
import CategoryBtn from '../../../../shared/CategoryBtn';
import { SectionStyled, PageTitle } from './ToyInfo.styled';

type Props = {
  handleToggleToCart(): void;
};

const ToyInfo = ({ handleToggleToCart }: Props) => {
  const { toy } = useAppSelector(state => state.toy);
  return (
    <SectionStyled>
        <PageTitle>{toy?.toyName}</PageTitle>
          <div>
              <p>Категорія:</p>
              <CategoryBtn categoryName={toy.category} />
    </div>
      <div>
        <div>
          <div>
            <h6>Опис</h6>
            <p>{toy?.description}</p>
          </div>
          {toy && toy?.features?.length > 0 && (
            <div>
              <h6>Особливості {toy?.toyName}:</h6>
              <ul>
                {toy?.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div>
          <div>
            <h6>Характеристики:</h6>
            <div>
              <div>Виробництво</div>
              <div>{toy?.manufacturer}</div>
            </div>
            <div>
              <div>Вік </div>
              <div>
                Від {toy?.ageFrom}
                {toy?.ageTo && ` до ${toy?.ageTo}`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionStyled>
  );
};

export default ToyInfo;

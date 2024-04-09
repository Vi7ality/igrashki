import { useAppSelector } from '../../../../redux/store';

type Props = {
  handleToggleToCart(): void;
};

const ToyInfo = ({ handleToggleToCart }: Props) => {
  const { toy } = useAppSelector(state => state.toy);
  return (
    <section>
      <div>
        <h2>{toy?.toyName}</h2>
        <button onClick={handleToggleToCart}>Додати</button>
      </div>
      <button onClick={handleToggleToCart}>Додати</button>

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
    </section>
  );
};

export default ToyInfo;

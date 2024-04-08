import CategorySelector from '../CategorySelector';
import { PannelContainer, CategoryLabel, ToyCount, InputWrap } from './Filters.styled';

type Props = {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory(v: string): void;
  toysCount: number;
};

const styleSettings = {
  widthmobile: '100%',
  widthtablet: '195px',
  widthdesktop: '250px',
  backgroundcolor: '#F3F3FF',
};

const Filters = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  toysCount,
}: Props) => {
  return (
    <PannelContainer>
      <InputWrap>
        <CategoryLabel>Виберіть категорію</CategoryLabel>
        <CategorySelector
          styleSettings={styleSettings}
          categories={categories}
          selectedCategory={selectedCategory}
          handleCategorySelect={setSelectedCategory}
          placeholderName="Усі категорії"
        />
      </InputWrap>

      <ToyCount>
        Знайдено іграшок: <span>{toysCount}</span>
      </ToyCount>
    </PannelContainer>
  );
};

export default Filters;

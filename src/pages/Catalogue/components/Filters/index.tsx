import CategorySelector from '../CategorySelector';
import { PannelContainer, CategoryLabel, ToyCount, InputWrap, SelectorsContainer } from './Filters.styled';

type Props = {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory(v: string): void;
  ages: number[],
  selectedAge: number,
  setSelectedAge(v: number): void;
  toysCount: number;
};

const categoryStyleSettings = {
  widthmobile: '100%',
  widthtablet: '195px',
  widthdesktop: '250px',
  backgroundcolor: '#F3F3FF',
};

const ageStyleSettings = {
  widthmobile: '100%',
  widthtablet: '150px',
  widthdesktop: '161px',
  backgroundcolor: '#F3F3FF',
}

const Filters = ({
  categories,
  ages,
  setSelectedAge,
  selectedAge,
  selectedCategory,
  setSelectedCategory,
  toysCount,
}: Props) => {
  return (
    <PannelContainer>
      <SelectorsContainer>
        <InputWrap>
        <CategoryLabel>Виберіть категорію</CategoryLabel>
        <CategorySelector
          styleSettings={categoryStyleSettings}
          categories={categories}
          selectedCategory={selectedCategory}
          handleCategorySelect={setSelectedCategory}
          placeholderName="Усі категорії"
        />
      </InputWrap>
      <InputWrap>
        <CategoryLabel>Виберіть вік дитини</CategoryLabel>
        <CategorySelector
          styleSettings={ageStyleSettings}
          categories={ages}
          selectedCategory={`${selectedAge}+`}
          handleCategorySelect={setSelectedAge}
          placeholderName="0+"
        />
      </InputWrap>
      </SelectorsContainer>
      <ToyCount>
        Знайдено іграшок: <span>{toysCount}</span>
      </ToyCount>
    </PannelContainer>
  );
};

export default Filters;

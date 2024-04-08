import CategorySelector from '../CategorySelector';
import { PannelContainer } from './Filters.styled';

type Props = {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory(v: string): void;
  toysCount: number;
};

const styleSettings = {
    widthMobile: '100%',
    widthTablet: '195px',
    widthDesktop: '250px', 
    backgroundColor: '#F3F3FF',
}

const Filters = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  toysCount,
}: Props) => {
  return (
      <PannelContainer>
          <p>Виберіть категорію</p>
          <CategorySelector
              selectorStyles={styleSettings}
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategorySelect={setSelectedCategory}
        placeholderName="Усі категорії"
      />
      <p>
        Знайдено іграшок: <span>{toysCount}</span>
      </p>
    </PannelContainer>
  );
};

export default Filters;

import CategorySelector from '../CategorySelector';
import { PannelContainer } from './Filters.styled';

type Props = {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory(v: string): void;
  toysCount: number;
};

const selectorStyles = {
    width: {
        mobile: '100%',
        tablet: '195px',
        desktop: '250px'
    },
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
              selectorStyles={selectorStyles}
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

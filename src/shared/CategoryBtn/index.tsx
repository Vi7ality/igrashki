import { Category } from './CategoryBtn.styled';

type Props = {
  handleCategorySelect?(v: string): void;
  categoryName: string | null;
};

const CategoryBtn = ({ handleCategorySelect, categoryName }: Props) => {
  return (
    <Category
      type="button"
      onClick={() => {
        handleCategorySelect && categoryName && handleCategorySelect(categoryName);
      }}
    >
      {categoryName}
    </Category>
  );
};

export default CategoryBtn;

import { Category } from './CategoryBtn.styled';

type Props = {
  handleCategorySelect?(v: string): void;
  categoryName: string | null;
  disabled?: boolean;
};

const CategoryBtn = ({ handleCategorySelect, categoryName, disabled = false }: Props) => {
  return (
    <Category
      disabled={disabled}
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

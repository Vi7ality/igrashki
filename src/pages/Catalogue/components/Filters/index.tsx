import CategorySelector from "../CategorySelector";

type Props = {
  categories: string[];
  selectedCategory: string | null;
  setSelectedCategory(v: string): void;
};

const Filters = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: Props) => {
  return (
    <>
      <CategorySelector
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategorySelect={setSelectedCategory}
        placeholderName="Усі категорії"
      />
    </>
  );
};

export default Filters;

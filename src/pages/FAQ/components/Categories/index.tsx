import { PromiseOr } from "sass";
import styles from "../../FAQ.module.scss";
import { CategoriesWrap, CategoryBtn } from "./Categories.styled";

type ICategory = string;

type Props = {
    isSelected(arg: ICategory): boolean,
    handleCategoryClick(arg: ICategory): void;
}

const categories: ICategory[] = [
  "Як це працює",
  "Замовлення та повернення іграшок",
  "Інформація щодо іграшок",
  "Передача іграшок",
];


const Categories = ({isSelected, handleCategoryClick }: Props) => {
    return (
              <CategoriesWrap>
        {categories.map((category, index) => (
          <CategoryBtn
            key={index}
            className={`${
              isSelected(category) && styles.selected
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </CategoryBtn>
        ))}
      </CategoriesWrap>
    )
}

export default Categories;
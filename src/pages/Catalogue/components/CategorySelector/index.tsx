import { useState } from 'react';
import {
  CategoryWrapper,
  Input,
  SelectContainer,
  SelectItem,
  StyledSelect,
  WrapperArrow,
} from './CategorySelector.styled';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { nanoid } from 'nanoid';

type Props = {
  placeholderName: string;
  selectedCategory: string | null | undefined;
  categories: string[];
  handleCategorySelect(v: string): void;
  selectorStyles: any;
};

const CategorySelector = ({
  placeholderName,
  selectedCategory,
  categories,
  handleCategorySelect,
  selectorStyles
}: Props) => {
  const [isCategoryActive, setIsCategoryActive] = useState(false);
  return (
    <CategoryWrapper>
      <Input
        type="text"
        readOnly="readonly"
        placeholder={selectedCategory ? selectedCategory : placeholderName}
        {...selectorStyles}
      />
      <StyledSelect
        onClick={() => {
          setIsCategoryActive(!isCategoryActive);
        }}
      >
        <WrapperArrow>
          {!isCategoryActive ? (
            <TiArrowSortedDown
              style={{ width: '100%', height: '100%', color: '#46409C' }}
            />
          ) : (
            <TiArrowSortedUp
              style={{ width: '100%', height: '100%', color: '#46409C' }}
            />
          )}
        </WrapperArrow>
      </StyledSelect>
      {isCategoryActive && (
        <SelectContainer {...selectorStyles}>
          {categories.map((category: string) => (
            <SelectItem
              key={nanoid(6)}
              isselected={selectedCategory === category}
              onClick={() => {
                handleCategorySelect(category);
                setIsCategoryActive(false);
              }}
            >
              {category}
            </SelectItem>
          ))}
        </SelectContainer>
      )}
    </CategoryWrapper>
  );
};

export default CategorySelector;

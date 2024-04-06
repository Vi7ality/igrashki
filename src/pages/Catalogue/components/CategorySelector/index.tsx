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

type Props = {
  placeholderName: string, 
  selectedCategory: string | undefined,
  categories: any,
  handleCategorySelect(v: string): void;
}

const CategorySelector = ({ placeholderName, selectedCategory, categories, handleCategorySelect }: Props) => {
    const [isCategoryActive, setIsCategoryActive] = useState(false);
    return (
        <CategoryWrapper>
          <Input
            type="text"
            placeholder={selectedCategory ? selectedCategory : placeholderName}
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
            <SelectContainer>
              {categories.map((category: string, idx: string) => (
                <SelectItem
                  key={idx}
                  isSelected={selectedCategory === category}
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
    )
}

export default CategorySelector;
import { useEffect, useRef, useState } from 'react';
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
  selectedCategory: string | number | null | undefined;
  categories: string[] | number[];
  handleCategorySelect(v: string | number): void;
  styleSettings?: any;
};

const CategorySelector = ({
  placeholderName,
  selectedCategory,
  categories,
  handleCategorySelect,
  styleSettings
}: Props) => {
  const [isCategoryActive, setIsCategoryActive] = useState(false);
  const inputRef = useRef<HTMLDivElement>(null);
  

      useEffect(() => {
        const handler = (e: Event) => {
            if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
                setIsCategoryActive(false);
            }
        };
        window.addEventListener("click", handler);
        return () => {
            window.removeEventListener("click", handler);
        };
      });
  
  return (
    <CategoryWrapper ref={inputRef}>
      <Input
        type="text"
        readOnly="readonly"
        placeholder={selectedCategory ? selectedCategory : placeholderName}
        {...styleSettings}
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
        <SelectContainer {...styleSettings} className={isCategoryActive ? "open" : ""}>
          {categories.map((category: string | number) => (
            <SelectItem
              key={nanoid(6)}
              className={selectedCategory === category ? 'selected' : ''}
              onClick={() => {
                handleCategorySelect(category);
                setIsCategoryActive(false);
              }}
            >
              {category}
            </SelectItem>
          ))}
        </SelectContainer>
      {/* )} */}
    </CategoryWrapper>
  );
};

export default CategorySelector;

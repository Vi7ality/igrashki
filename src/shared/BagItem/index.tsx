import { memo } from "react";
import { BagItemStyled, ItemImg, FlexWrap, WrapLeft, TrashIcon, ItemName } from "./BagItem.styled";
import icons from "../../assets/icons.svg";

interface BagItemProps {
  itemId: string;
  itemName: string;
  itemImage: string;
  deleteItem: (id: string) => void;
}

const BagItem = ({ itemId, itemImage, itemName, deleteItem }: BagItemProps) => {
  return (
    <BagItemStyled>
      <FlexWrap>
        <WrapLeft to={`/toys/${itemId}`}>
          <ItemImg src={itemImage} />
          <ItemName>{itemName}</ItemName>
        </WrapLeft>
        <button onClick={() => deleteItem(itemId)}>
          <TrashIcon>
            <use href={`${icons}#icon-trash`}></use>
          </TrashIcon>
        </button>
      </FlexWrap>
    </BagItemStyled>
  );
};

export default memo(BagItem);

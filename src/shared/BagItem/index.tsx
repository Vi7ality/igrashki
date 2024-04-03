import { memo } from "react";
import { BagItemStyled, ItemImg, FlexWrap, WrapLeft, TrashIcon } from "./BagItem.styled";
import icons from '../../../../assets/icons.svg'

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
        <WrapLeft>
          <ItemImg src={itemImage} />
          <p>{itemName}</p>
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

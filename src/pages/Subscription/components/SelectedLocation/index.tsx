import { useAppSelector } from "../../../../redux/store";
import { InputStyled, InputWrap, LabelStyled } from "./SelectedLocation.styled"

const SelectedLocation = () => {
    const { selectedManagementPoint } = useAppSelector((state) => state.cart);
    return (
                      <InputWrap>
                <LabelStyled htmlFor="parentName">Локація</LabelStyled>
                <InputStyled
                  type="text"
                  name="location"
                  value={
                    selectedManagementPoint
                      ? `${selectedManagementPoint.city}, ${selectedManagementPoint.location}`
                      : ""
                  }
                  disabled
                />
              </InputWrap>
    )
}

export default SelectedLocation;
import { IoCheckbox } from "react-icons/io5";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { ClientValuesType } from "../../../../models/auth";
import { CheckWrapper, CheckedIcon, FlexWrap, LabelStyled, TextStyled, UncheckedIcon } from "./CheckboxField.styled";

type PropType = {
  clientValues: ClientValuesType;
  setClientValues(values: ClientValuesType): void;
};

export const CheckboxField = ({ clientValues, setClientValues }: PropType) => {
  return (
    <>
      <div style={{marginBottom: '20px'}}>
        <LabelStyled
          onClick={() =>
            setClientValues({ ...clientValues, acceptRules: !clientValues.acceptRules })
          }
        >
          {clientValues.acceptRules ? <CheckedIcon /> : <UncheckedIcon />}
          <TextStyled>Я надаю згоду на оброблення персональних даних</TextStyled>
        </LabelStyled>
      </div>
      <label htmlFor="messenger" style={{marginBottom: '15px'}}>
        <TextStyled>Оберіть месенджер, у якому вам зручніше продовжити спілкування:</TextStyled>
      </label>
      <FlexWrap>
        <LabelStyled style={{marginRight: '85px'}} onClick={() => setClientValues({ ...clientValues, messenger: "viber" })}>
          {clientValues.messenger === "viber" ? <CheckedIcon /> : <UncheckedIcon />}
          <span>Viber</span>
        </LabelStyled>

        <LabelStyled onClick={() => setClientValues({ ...clientValues, messenger: "telegram" })}>
          {clientValues.messenger === "telegram" ? (
            <CheckedIcon />
          ) : (
            <UncheckedIcon />
          )}
          <span>Telegram</span>
        </LabelStyled>
      </FlexWrap>
    </>
  );
};

import { Field } from "formik";
import { ClientValuesType } from "../../../../models/auth";
import {
  CheckWrapper,
  CheckedIcon,
  FlexWrap,
  HiddenCheckbox,
  LabelStyled,
  TextStyled,
  UncheckedIcon,
} from "./CheckboxField.styled";

type PropType = {
  clientValues: ClientValuesType;
  setClientValues(values: ClientValuesType): void;
  getFieldProps: any;
};

export const CheckboxField = ({ clientValues, setClientValues, getFieldProps }: PropType) => {
  return (
    <>
        <LabelStyled>
          <HiddenCheckbox type='checkbox' name="acceptRules"  onClick={() =>
            setClientValues({ ...clientValues, acceptRules: !clientValues.acceptRules })
          }></HiddenCheckbox>
          {clientValues.acceptRules ? <CheckedIcon /> : <UncheckedIcon />}
          <TextStyled>Я надаю згоду на оброблення персональних даних</TextStyled>
        </LabelStyled>
      <label htmlFor="messenger">
        <TextStyled style={{ marginBottom: "15px" }}>
          Оберіть месенджер, у якому вам зручніше продовжити спілкування:
        </TextStyled>
      </label>


      <FlexWrap>
        <LabelStyled>
          <HiddenCheckbox name='messenger' value="viber" type="radio"  onClick={() => setClientValues({ ...clientValues, messenger: "viber" })}></HiddenCheckbox>
          {clientValues.messenger === "viber" ? <CheckedIcon /> : <UncheckedIcon />}
          <span>Viber</span>
        </LabelStyled>
        <LabelStyled>
          <HiddenCheckbox name='messenger' type="radio" value="telegram" onClick={() => setClientValues({ ...clientValues, messenger: "telegram" })}></HiddenCheckbox>
          {clientValues.messenger === "telegram" ? <CheckedIcon /> : <UncheckedIcon />}
          <span>Telegram</span>
        </LabelStyled>
        {/* <LabelStyled onClick={() => setClientValues({ ...clientValues, messenger: "viber" })}>
          {clientValues.messenger === "viber" ? <CheckedIcon /> : <UncheckedIcon />}
          <span>Viber</span>
        </LabelStyled>

        <LabelStyled onClick={() => setClientValues({ ...clientValues, messenger: "telegram" })}>
          {clientValues.messenger === "telegram" ? <CheckedIcon /> : <UncheckedIcon />}
          <span>Telegram</span>
        </LabelStyled> */}
      </FlexWrap>
    </>
  );
};

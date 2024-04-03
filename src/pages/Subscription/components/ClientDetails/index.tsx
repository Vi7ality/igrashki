import { useAppSelector } from "../../../../redux/store";
import InputField from "../InputField";

type PropType = {
  getFieldProps(name: string): object;
};

const ClientDetails = ({ getFieldProps }: PropType) => {
  const { client } = useAppSelector((state) => state.client);
  return (
    <>
      <InputField
        label="Ім'я"
        type="text"
        name="parentName"
        placeholder="Ім'я"
        value={client?.parentName}
        disabled
        getFieldProps={getFieldProps}
      />
      <InputField
        label="Прізвище"
        type="text"
        name="parentSurname"
        placeholder="Прізвище"
        value={client?.parentSurname}
        disabled
        getFieldProps={getFieldProps}
      />
      <InputField
        label="Мобільний номер"
        type="tel"
        name="phoneNumber"
        placeholder="Мобільний номер"
        value={client?.phoneNumber}
        disabled
        getFieldProps={getFieldProps}
      />
    </>
  );
};

export default ClientDetails;

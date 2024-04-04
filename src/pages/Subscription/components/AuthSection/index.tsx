import Register from "../Register";
import { FormEvent } from "react";
import { SectionStyled } from "./AuthSection.styled";
import { ClientValuesType } from "../../../../models/auth";
import { useAppSelector } from "../../../../redux/store";
import ClientDetails from "../ClientDetails";


type PropType = {
  handleSubmit: (e: FormEvent) => Promise<void>;
  clientValues: ClientValuesType;
  setClientValues(values: ClientValuesType): void;
  setIsAuthModalOpen(value: boolean): void;
  initialValues: string;
};

const AuthSection = ({
  handleSubmit,
  clientValues,
  setClientValues,
  setIsAuthModalOpen,
}: PropType) => {
  const { client } = useAppSelector((state) => state.client);
  return (
    <SectionStyled>
      {!client?._id ? (
        <Register
          clientValues={clientValues}
          setClientValues={setClientValues}
          handleSubmit={handleSubmit}
          setIsAuthModalOpen={setIsAuthModalOpen}
        />
      ) : (
        <ClientDetails
          clientValues={clientValues}
          handleSubmit={handleSubmit}
          setIsAuthModalOpen={setIsAuthModalOpen}
        />
      )}
    </SectionStyled>
  );
};

export default AuthSection;

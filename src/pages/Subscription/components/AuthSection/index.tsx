import Register from "../Register";
import { SectionStyled } from "./AuthSection.styled";
import { ClientState } from "../../../../models/auth";
import { useAppSelector } from "../../../../redux/store";
import ClientDetails from "../ClientDetails";


type PropType = {
  handleSubmit(values: ClientState): Promise<void>;
  clientValues: ClientState;
  setClientValues(values: ClientState): void;
  setIsAuthModalOpen(value: boolean): void;
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

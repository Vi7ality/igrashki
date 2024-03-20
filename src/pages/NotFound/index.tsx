import HeaderBackgound from "../../shared/HeaderBackground";
import { FlexConatiner, Section, Image, MainTitle, Text, LinkToMain } from "./NotFound.styled";

const NotFound = () => {
  return (
    <>
      <HeaderBackgound />
      <Section>
        <FlexConatiner>
          <Image />
          <MainTitle>Упс, cторінку не знайдено</MainTitle>
          <Text>Ви вказали невірну адресу або перейшли за некоректним посиланням</Text>
          <LinkToMain to={"/"}>Повернутися на головну</LinkToMain>
        </FlexConatiner>
      </Section>
    </>
  );
};

export default NotFound;

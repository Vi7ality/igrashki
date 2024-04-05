import { Link } from "react-router-dom";
import HeaderBackgound from "../../shared/HeaderBackground";
import Container from "../../shared/Container";
import CheckImg from "./assets/check-illustration.svg";

const Confirmation = () => {
  return (
    <>
      <HeaderBackgound />
      <section>
        <Container>
          <img src={CheckImg} alt="confirm image"></img>
          <h1>Дякуемо за замовлення!</h1>
          <p>
            Найближчим часом наш менеджер зв’яжеться з вами у мессенджері, що ви обрали, для
            погодження вашого замовлення. Бажаємо гарного дня!
          </p>
          <Link to="/">Повернутися на головну сторінку</Link>
        </Container>
      </section>
    </>
  );
};

export default Confirmation;

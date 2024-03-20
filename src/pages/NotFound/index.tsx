import { Link } from "react-router-dom";
import Container from "../../shared/Container";

const NotFound = () => {
  return (
    <section>
      <Container>
        <img></img>
        <h1>Упс, cторінку не знайдено</h1>
        <p>Ви вказали невірну адресу або перейшли за некоректним посиланням</p>
        <Link to={"/"}>Повернутися на головну</Link>
      </Container>
    </section>
  );
};


export default NotFound;
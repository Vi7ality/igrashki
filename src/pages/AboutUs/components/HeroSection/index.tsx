import Container from "../../../../shared/Container";
import { SectionStyled, PageTitle, ImgStyled } from "./HeroSection.styled";
import trainToy from '../../assets/toy-train.svg'

const HeroSection = () => {
    return (
        <SectionStyled>
            <Container style={{position: 'relative'}}>
                <PageTitle>Про проєкт</PageTitle>
                <ImgStyled src={trainToy} alt="toy train"></ImgStyled>
            </Container>
        </SectionStyled>
    )
}

export default HeroSection;
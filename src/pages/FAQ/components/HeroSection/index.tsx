import Container from "../../../../shared/Container"
import { PageTitle, SectionStyled } from "./HeroSection.styled";

const HeroSection = () => {
    return (
        <SectionStyled>
            <Container>
                <PageTitle>Популярні запитання</PageTitle>
            </Container>
        </SectionStyled>
    )
}

export default HeroSection;
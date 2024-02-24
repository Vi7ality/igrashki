import { NavLinkAccent } from "../../../../shared/NavigateLinks/NavigateLinks.styled";
import { ContentContainer, JoinTitle, LinkList, SectionStyled, TrspLinkStyled } from "./JoinUsSection.styled";

const JoinUsSection = () => {
    return (
        <SectionStyled>
            <ContentContainer>
                <JoinTitle>Заповнюйте анкету та знаходьте найближчу до вас Дитячу точку "Спільно"!</JoinTitle>
                <LinkList>
                <li><NavLinkAccent to={'/'}>Забронювати іграшки</NavLinkAccent></li>
                <li><TrspLinkStyled to={'/'}>Заповнити анкету</TrspLinkStyled></li></LinkList>
            </ContentContainer>
        </SectionStyled>
    )
}

export default JoinUsSection;
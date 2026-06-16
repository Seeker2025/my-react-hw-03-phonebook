import { SectionTitle, SectionItem } from './Section.styled.jsx';

export const Section = ({title, children}) =>{
    return(
        <SectionItem>
            <SectionTitle>{title}</SectionTitle>
            {children}
        </SectionItem>
    )

}
    
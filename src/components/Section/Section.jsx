export const Section = ({title, children}) =>{
    return(
        <SectionItem>
            <SectionTitle>{title}</SectionTitle>
            {children}
        </SectionItem>
    )

}
    
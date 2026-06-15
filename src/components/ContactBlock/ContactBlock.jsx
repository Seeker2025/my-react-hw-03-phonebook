import { ContactBlock } from "./ContactBlock.styled"

export const ContactBl = ({filtered, toDelete}) =>{
    return(
    <ContactBlock>
                {filtered.map(itm=>{

                    return (
                            <li key={itm.id}>
                                <p>{itm.name}: {itm.number}</p>
    <button 
    type="button"
    onClick={() => toDelete(itm.id)}
    >
    Delete
    </button>  
                            </li>)
                })}
    </ContactBlock>
    )
                }
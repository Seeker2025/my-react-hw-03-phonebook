export const FindForm = ({handle, valFiltr}) =>{
    return (
        <>
        
        {/* <h2>Find contacts by name </h2> */}
                    <input 
                        type="text"
                        name="filter"
                        onChange={handle}
                        value={valFiltr}
                        
                     />
        </>             
    )

}
export const FormSub = ({onSubmit, handle, valName, valNumb})=>{
    return (
        <form onSubmit ={onSubmit}>
                    <h3>Name</h3>
                     <input 
                        type="text"
                        name="name"
                        onChange={handle}
                        value={valName}
                        required
                     />
                    <h3>Number</h3>    
                     <input
                        type="tel"
                        name="number"
                        value={valNumb}
                        onChange={handle}
                        required
                     />

                <button type="submit">Add Contact</button>     
                </form>
    )
}
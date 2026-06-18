import  React  from 'react';
import { Section        } from 'components/Section/Section';
import { PhonebookItem  } from './Phonebook.styled';
import { FormSub        } from 'components/AddContact/AddContact';
import { FindForm       } from 'components/FindContact/FindContact';
import { ContactBl      } from 'components/ContactBlock/ContactBlock';

import { nanoid         } from "nanoid";

export class Phonebook extends React.Component{
    state = {
    contacts: [
        {id: 'id-1', name: 'Rosie Simpson',  number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements',  number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
            ],
    filter: '',
    name: '',
    number: '',
            }

    componentDidMount(){
    const todos = localStorage.getItem('con');
    const parsedTodos = JSON.parse(todos);

    if(parsedTodos){
        this.setState({contacts: parsedTodos })
      }
    }   
    componentDidUpdate( prevState ){
    if(this.state.contacts !== prevState.contact);
    localStorage.setItem('con', JSON.stringify(this.state.contacts));
    }     

    toFilter = () => {
    return this.state.contacts.filter(contact =>
        contact.name
            .toLowerCase()
            .includes(this.state.filter.toLowerCase())
    );
}     

    toDelete = id => {
    this.setState(prevState => ({
        contacts: prevState.contacts.filter(
            itm => itm.id !== id
        )
    }));
}

    handleChange = e =>{
        const { name, value } = e.currentTarget;
        console.log(name);
        // console.log(value);
        // console.log(name==='filter');
        // console.log(typeof(filter));
        // console.log('filter', filter);
        
        const flag = this.state.contacts.some(itm=>itm.name===value);
        if(flag && name!=='filter'){
            alert(`${value} is already in contacts.`);
            return
        } 
        this.setState({ [name]: value });
    };

     handleSubmit = e =>{
        e.preventDefault();


         const newContact = {
            id: nanoid(),
            name: this.state.name,
            number: this.state.number,
        };
        
          this.setState(prevState => ({
            contacts: [...prevState.contacts, newContact],
            name: '',
            number: '',
        }), 
        
        () => {
            console.log(this.state.contacts);
            console.log(this.state.filter);
        }
    );
    };

    render(){
        const filteredCont = this.toFilter();
        return(
            <PhonebookItem>
                <Section title={"Phonebook"}>

                        <FormSub 
                        onSubmit={this.handleSubmit}
                        handle={this.handleChange}
                        valName={this.state.name}
                        valNumb={this.state.number}
                        />

                </Section>

                {/* <form onSubmit ={this.handleSubmit}>
                    <h3>Name</h3>
                     <input 
                        type="text" name="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                        required
                     />
                    <h3>Number</h3>    
                     <input
                        type="tel"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleChange}
                        required
                     />

                <button type="submit">Add Contact</button>     
                </form> */}
                {/* <h2>Find contacts by name </h2>
                    <input 
                        type="text"
                        name="filter"
                        onChange={this.handleChange}
                        value={this.state.filter}
                        
                     /> */}
                <Section title={"Find contacts by name"}
                >   
                    <FindForm
                    handle={this.handleChange}
                    valFiltr={this.state.filter}
                    /> 

                </Section>      

                <Section title={"Contacts"}>

                        <ContactBl 
                        filtered={filteredCont}
                        toDelete ={this.toDelete}
                        />

                </Section>  
                {/* <ContactBlock>
                {filteredCont.map(itm=>{

                    return (
                            <li key={itm.id}>
                                <p>{itm.name}: {itm.number}</p>
    <button 
    type="button"
    onClick={() => this.toDelete(itm.id)}
    >
    Delete
    </button>  
                            </li>)
                })}

                </ContactBlock> */}

            </PhonebookItem>
             
        );
    }
} 
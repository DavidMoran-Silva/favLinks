import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        /*
            TODO - set initial state for link name and URL 
        */
       this.state={
            name:"",
            URL:""
       }

    }

//updates input
      

    handleChange = (event) => {
      //  console.log(event.target)
      
      const {name,value} = event.target     //input element

      //console.log(state)



        this.setState({
            [name]: value
        })

    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
       this.props.handleSubmit(this.state)
     this.setState({name:"",URL:""})
    
    }

    render() {

        return(
            <form onSubmit={this.onFormSubmit}>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <label for="name">Name</label>
                <input 
                    name="name"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.name}
                />
                <label for ="URL">URL</label>
                <input
                    name="URL"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.URL}
                />
                    
                <button type="submit"> Submit</button>
            </form>
        )
    
    }
}

export default Form;
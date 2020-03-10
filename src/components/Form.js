import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
       this.state = {
           name: "",
           URL: ""
       }
    }

    handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
       const { name, value } = event.target;

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
       this.props.handleSubmit(this.state);
       this.setState({
           name: "",
           URL: ""
       });
    }

    render() {
        const { name, URL } = this.state;

        return(
            <form onSubmit={this.onFormSubmit}>
                {/* Updates name and URL values in state as the user updates fields
                    and handle submit upon clicking submit button
                 */}
                <fieldset>
                    <label className="label">Name:</label>
                    <input name="name" type="text" value={name} onChange={this.handleChange}/>
                    <label className="label">URL</label>
                    <input name="URL" type="text" value={URL} onChange={this.handleChange}/>
                    <input type="submit"/>
                </fieldset>
            </form>
        )
    
    }
}

export default Form;

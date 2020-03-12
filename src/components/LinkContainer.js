import React from 'react';
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={
        /* TODO - Create state object for storing favLinks */
        favLinks: []
        }
    }

    removeCharacter = index => {
        /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */

       this.setState(({favLinks})=>({
        favLinks: favLinks.filter((_, i) => i !== index)
        
    })) 
   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    }

    handleSubmit = favLink => {
        /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
       console.log("test")
       this.setState((state) => ({
           favLinks: state.favLinks.concat([favLink])
       }))
    }

    render() {

        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>
                {/*TODO - Add Table Component */}
                    <Table linkData={this.state.favLinks} removeLink={this.removeCharacter}/>
                <br/>

                <h3>Add New</h3>
                {/*TODO - Add Form Component */}
                    <Form handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default LinkContainer;
//https://stackoverflow.com/questions/52885715/how-to-pass-a-function-prop-to-be-used-within-react-tables-columns
//prop is what you pass from a parent to a child

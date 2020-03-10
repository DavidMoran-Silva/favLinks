import React from 'react';
// import Table from './Table';
// import Form from './Form';

class LinkContainer extends React.Component {
    // state = { favLinks: [] }
    constructor(props){
        super(props)

        this.state = {
            favLinks: []
        }
    }

    removeCharacter = index => {
        /*
            Filters through favLinks to see if value at index i is index
         */
        this.setState((state) => ({
            favLinks: state.favLinks.filter((value, i) => i !== index)
        }));
    }

    handleSubmit = favLink => {
        /*
            Adds new favLink to the beginning of the array
        */
       this.setState((state) => ({
           favLinks: [favLink, ...state.favLinks]
       }));
    }

    render() {

        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>
                {/*TODO - Add Table Component */}
                
                <br/>

                <h3>Add New</h3>
                {/*TODO - Add Form Component */}
            </div>
        );
    }
}

export default LinkContainer;
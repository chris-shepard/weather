import React from 'react';
import FormInput from '../../FormInput/FormInput';
import './Location-Search.scss';

class LocationSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            country: "US"
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })

    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({
            search: ''
        })
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit} className="location-search">
                <FormInput
                    type="text"
                    name="search"
                    value={this.state.search}
                    handleChange={this.handleChange}
                    label="Find a Location"
                    autoComplete="new-password" //Disables Chrome Autocomplete
                    required />
            </form>
                    
        )
    }
}

export default LocationSearch;
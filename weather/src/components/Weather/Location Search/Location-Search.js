import React from 'react';
import FormInput from '../../FormInput/FormInput';

class LocationSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: '',
            state: '',
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
            city: '',
            state: ''
        })
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <FormInput
                    type="text"
                    name="city"
                    value={this.state.city}
                    handleChange={this.handleChange}
                    label="City"
                    required />
                <FormInput
                    type="text"
                    name="state"
                    value={this.state.state}
                    handleChange={this.handleChange}
                    label="State"
                    required />
                <FormInput
                    type="text"
                    name="country"
                    value={this.state.country}
                    label="Country"
                    disabled="disabled" />
            </form>
        )
    }
}

export default LocationSearch;
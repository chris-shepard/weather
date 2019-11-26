import React from 'react';
import Spinner from '../Spinner/Spinner';
import Brand from '../Brand/Brand';
import LocationSearch from './Location Search/Location-Search';
class Weather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: null,
            long: null,
            errorMessage: null,
        };
    }

    getUserLocation() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((success) => {
                this.setState({
                    lat: success.coords.latitude,
                    long: success.coords.longitude,
                })
            }, (error) => {
                this.setState({
                    errorMessage: error.message
                })
            })
        } else {

        }
    }

    componentDidMount() {
        this.getUserLocation();
    }

    render() {
        if (this.state.errorMessage) {
            return (
                <div>
                    <Brand />
                    <span> It looks like your location data isn't available. Search for a location to get Weather.</span>
                    <LocationSearch/>
                </div>)
        }

        if (this.state.long) {
            return (
                <div>
                    <Brand />
                    <span>Success</span>
                </div>
            )
        }

        return (
            <div>
                <Spinner message="Please Allow Geolocation Services." />
            </div>
        )


    }
}




export default Weather;
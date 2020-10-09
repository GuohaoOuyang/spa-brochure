import React from 'react';
import './Contact.scss';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export function Contact() {

    const send = (e) => {
        e.preventDefault();
    }

    const containerStyle = {
        width: '550px',
        height: '350px'
        
      };
    
    const defaultCenter = {
    lat: 43.8551062, lng: -79.4392368
    }
    
    // const [map, setMap] = React.useState(null)
 
    // const onLoad = React.useCallback(function callback(map) {
    //     const bounds = new window.google.maps.LatLngBounds();
    //     map.fitBounds(bounds);
    //     setMap(map)
    // }, [])
 
    // const onUnmount = React.useCallback(function callback(map) {
    //     setMap(null)
    // }, [])
  


    return (
        <div className="contact" id ="Contact">
            <div className="background"></div>
            <div className="contact__input">
                <div className="contact__input__title">
                    <h4>Did we miss anything?</h4>
                    <p>Send us a message!</p>
                </div>
                <form className="col s6 formContainer">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate" />
                            <label htmlFor="last_name">Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate"/>
                            <label htmlFor="first_name">Email</label>
                        </div>
                    </div>
                    <div className="row">
                            <div className="input-field col s10">
                                <textarea id="textarea" type="text" className="materialize-textarea" />
                                <label htmlFor="textarea">message</label>
                            </div>
                            <div className="arrow col s2" >
                                <a onClick={send} href="/#"><i className="material-icons send">send</i></a>
                            </div>
                    </div>
                </form>
            </div>
            <div className="contact__map">
                <LoadScript googleMapsApiKey="YOUR OWN GOOGLE MAP API KEY" language="en">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={defaultCenter}
                        zoom={15}
                        // onLoad={onLoad}
                        // onUnmount={onUnmount}
                        >
                        { /* Child components, such as markers, info windows, etc. */ }
                        <Marker key= 'hillcrest mall' position={defaultCenter} />
                    </GoogleMap>
                </LoadScript>
            </div>
            
        </div>
    )
}


/**
 * Created by machenhan on 2017/12/12.
 */
import React, {Component} from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { compose, withProps,withHandlers } from "recompose"
import {MarkerClusterer} from '../node_modules/react-google-maps/lib/components/addons/MarkerClusterer.js'
import data from './photos'

export default class Footprints extends Component{
    render() {
        return (
            <Map />
        )
    }
}

const MapWithAMarkerClusterer = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA3JxbpCn5U1DpqbNlEl9Ny-pQHOW4F_CU&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `600px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withHandlers({
        onMarkerClustererClick: () => (markerClusterer) => {
            const clickedMarkers = markerClusterer.getMarkers()
            console.log(`Current clicked markers length: ${clickedMarkers.length}`)
            console.log(clickedMarkers)
        },
        onMarkerClick: () =>(marker) =>{
            console.log('Clicked on Marker')
        }
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={3}
        defaultCenter={{ lat: 25.0391667, lng: 121.525 }}
    >
        <MarkerClusterer
            onClick={props.onMarkerClustererClick}
            averageCenter
            enableRetinaIcons
            gridSize={60}
        >
            {props.markers.map(marker => (
                <Marker
                    key={marker.photo_id}
                    position={{ lat: marker.latitude, lng: marker.longitude }}
                    icon={marker.icon_url}
                    onClick={props.onMarkerClick}
                />
            ))}
        </MarkerClusterer>
    </GoogleMap>
);

class Map extends React.PureComponent {
    componentWillMount() {
        this.setState({ markers: [] })
    }

    componentDidMount() {
        // const url = [
        //     // Length issue
        //     `https://gist.githubusercontent.com`,
        //     `/farrrr/dfda7dd7fccfec5474d3`,
        //     `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
        // ].join("")
        //
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         this.setState({ markers: data.photos });
        //     });
        this.setState({ markers: data.photos });
    }

    render() {
        return (
            <MapWithAMarkerClusterer markers={this.state.markers} />
        )
    }
}


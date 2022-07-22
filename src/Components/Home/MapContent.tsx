import React from 'react';
import Map from '../Shared/Map';

// TODO: Continue trying to implement a selection option above the map
// - Make it react to the selection with a radius around the centre point

const MapContent = () => {
    return (
        <React.Fragment>
            <div className="mapOptions">
                <label htmlFor="radiusSelection">
                    <span>
                        Radius:
                    </span>
                </label>
                <select name="radiusSelection" id="radius">
                    <option value='10'>10</option>
                    <option value='25'>25</option>
                    <option value='50'>50</option>
                    <option value='100'>100</option>
                </select>
            </div>
            <Map/>
        </React.Fragment>
    )
}

export default MapContent;
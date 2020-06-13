import React from 'react';
import Heading from './style';


export default function MarketDashboard() {
    return (
        <Heading>
            <div className="left">
                <h4>Dashboard</h4>
                <p>ICE Market data</p>
                <span>|</span>
                <p>ICE Market data</p>
                <span>|</span>
                <p>ICE Market data</p>
            </div>
            <div className="left">
                <p>Settings</p>
                <span>|</span>
                <p>Analytics</p>
                <span>|</span>
                <p>Watchlist</p>
            </div> 
    </Heading>
    )
}

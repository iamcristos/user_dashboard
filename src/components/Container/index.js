import React from 'react'
import MainContainer from './style'
import Header from './header'
import ContainerWrapper from '../utility/ContainerWrapper'
import MarketDashboard from './MarketInfo';
import Line from './charts/Line';
import Revenue from './charts/Line';
import Transactions from './charts/Line';
import Market from './charts/Market';
import Invoice from './charts/Invioce';
import Event from './charts/Event';
export default function Container() {
    return (
        <MainContainer>
            <Header />
            <ContainerWrapper margin="1.2rem">
                <MarketDashboard />
                <section>
                    <div className="left">
                    <div className="full-width">
                    <Line />
                    </div>

                    <div className="full-width">
                    <div className="divided-width">
                        <Revenue />
                    </div>

                    <div className="divided-width">
                        <Transactions />
                    </div>
                    </div>

                    <div className="full-width">
                        <Market />
                    </div>

                    <div className="full-width">
                        <Invoice />
                    </div>

                    <div className="full-width">
                    <div className="divided-width">
                        <Revenue />
                    </div>

                    <div className="divided-width">
                        <Transactions />
                    </div>
                    </div>

                    <div className="full-width">
                    <div className="divided-width">
                        <Event />
                    </div>

                    <div className="divided-width">
                        <Event />
                    </div>
                    </div>
                    </div>
                    <div className="right">
                    {/* <Radar />
                    <AudienceMetric />
                    <World />
                    <World />
                    <World />
                    <World /> */}
                    </div>
                </section>
            </ContainerWrapper>
        </MainContainer>
    )
}

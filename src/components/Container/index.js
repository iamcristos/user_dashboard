import React from 'react'
import MainContainer from './style'
import Header from './header'
import ContainerWrapper from '../utility/ContainerWrapper'
import MarketDashboard from './MarketInfo';
import Line from './charts/Line';
import Sales from './charts/Sales';
import Market from './charts/Market';
import Invoice from './charts/Invioce';
import Event from './charts/Event';
import Radar from './charts/Radar';
import AveragePrice from './charts/AveragePrice';
import Metric from './charts/Metric';
import World from './charts/World';
import TopPerformers from './charts/TopPerformers';
import People from './charts/People';
import Footer from '../Footer/Footer';

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
                        <Market />
                    </div>

                    <div className="full-width">
                        <Invoice />
                    </div>

                    <div className="full-width">
                    <div className="divided-width">
                        <Sales />
                    </div>

                    <div className="divided-width">
                        <AveragePrice />
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
                        <Radar />
                        <Metric />
                        <World />
                        <TopPerformers />
                        <People />
                    </div>
                    <Footer />
                </section>
            </ContainerWrapper>
        </MainContainer>
    )
}

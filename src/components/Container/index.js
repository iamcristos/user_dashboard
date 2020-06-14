import React from 'react'
import MainContainer from './style'
import Header from './header'
import ContainerWrapper from '../utility/ContainerWrapper'
import MarketDashboard from './MarketInfo'

export default function Container() {
    return (
        <MainContainer>
            <Header />
            <ContainerWrapper margin="1.2rem">
                <MarketDashboard />
                <section>
                    <div className="left">
                    <div className="full-width">
                    {/* <LineGraph /> */}
                    </div>

                    <div className="full-width">
                    <div className="divided-width">
                        {/* <TotalRevenue /> */}
                    </div>

                    <div className="divided-width">
                        {/* <TotalTransactions /> */}
                    </div>
                    </div>

                    <div className="full-width">
                    {/* <MarketOverview /> */}
                    </div>

                    <div className="full-width">
                    {/* <Invoices /> */}
                    </div>

                    <div className="full-width">
                    <div className="divided-width">
                        {/* <TotalRevenue /> */}
                    </div>

                    <div className="divided-width">
                        {/* <TotalTransactions /> */}
                    </div>
                    </div>

                    <div className="full-width">
                    <div className="divided-width">
                        {/* <RecentEvents /> */}
                    </div>

                    <div className="divided-width">
                        {/* <RecentEvents /> */}
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

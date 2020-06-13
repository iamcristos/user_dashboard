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
            </ContainerWrapper>
        </MainContainer>
    )
}

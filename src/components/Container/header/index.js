import React from 'react'
import { HeaderSection, Left, Right } from './styles';
export default function Header() {
    return (
        <HeaderSection>
            <Left>
                <nav>Handburger</nav>
                <nav>Help</nav>
                <nav>Country</nav>
            </Left>
            <Right>
                <nav>Search</nav>
                <nav>notification</nav>
                <nav> Message </nav>
                <nav> DP </nav>
            </Right>
        </HeaderSection>
    )
}

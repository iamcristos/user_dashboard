import React from 'react'
import { SideBarContainer } from './style'
import Logo from "./Logo";
import Profile from "./Profile";
import Nav from "./Nav";
export default function SideBar() {
    return (
        <SideBarContainer>
            <div className="container">
                <Logo />
                <Profile />
                <Nav />
            </div>
        </SideBarContainer>
    )
}

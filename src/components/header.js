import React from 'react'
import { Menu } from 'react-feather'
import "./header.scss"
import logo from "../images/logo.jpg"

const notOpen = () => alert('The application deadline has passed, please check back in January 2025');

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            menuFlag: false
        }
    }

    toggleMenu = () =>
        this.setState(prevState => ({menuFlag: prevState.menuFlag ? false : true}))

    menuClasses = () =>
        this.state.menuFlag ? ['menuItemList', 'menuItemList--active'].join(' ') : ['menuItemList']

    render() {
        return (
            <div className="header">
                <div className="logo">
                    <a to="/">
                        <img src={logo} />
                    </a>
                </div>
                <div className="menu">
                    <div className="menuIcon"><Menu onClick={this.toggleMenu} /></div>
                    <div className={this.menuClasses()}>
                        <a className="menuItem" href="https://charitable-management-systems.github.io/wrn-mock/apply">Apply</a>
                        <a className="menuItem" onClick={this.toggleMenu}  href="https://charitable-management-systems.github.io/wrn-mock/#About">About</a>
                        <a className="menuItem" onClick={this.toggleMenu}  href="https://charitable-management-systems.github.io/wrn-mock/#Eligibility">Eligibility</a>
                        <a className="menuItem" onClick={this.toggleMenu}  href="https://charitable-management-systems.github.io/wrn-mock/#Apply">Application Process</a>
                        <a className="menuItem" onClick={this.toggleMenu}  href="https://charitable-management-systems.github.io/wrn-mock/#Contact">Contact</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header

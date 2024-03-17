import OutsideClickHandler from "react-outside-click-handler"
import { useState } from "react"
import { logo } from "../../assets"
import "./header.css"
import { BiMenuAltLeft } from "react-icons/bi"

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth < + 800) {
            return { right: !menuOpened && "-100%" }
        }
    }
    return (
        <section className="header__wrapper">
            <div className="flexCenter paddings innerWidth header__container">
                <img src={logo} alt="" width={100} />

                <OutsideClickHandler
                    onOutsideClick={() => {
                        setMenuOpened(false)
                    }}
                >

                    <div className="flexCenter header__menu"
                        style={getMenuStyles(menuOpened)}
                    >
                        <a href="#Residencies">Residencies</a>
                        <a href="#ContactUs">Contact Us</a>
                        <a href="#GetStarted">Get Started</a>
                        <a href="#OurValue">Our Value</a>
                        <button className="button">
                            <a href="">Contact</a>
                        </button>
                    </div>
                </OutsideClickHandler>
                <div className="menu__icon" onClick={() => setMenuOpened((prev => !prev))}>
                    <BiMenuAltLeft size={30} />
                </div>
            </div>


        </section >
    )
}

export default Header
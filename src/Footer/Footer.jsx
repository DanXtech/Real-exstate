import { logo2 } from "../assets"
import "./footer.css"
import { motion } from "framer-motion"
const Footer = () => {
    return (
        <section className="footer__wrapper">
            <div className="paddings innerWidth flexCenter footer__container">
                <motion.div
                    initial={{ y: "2rem", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 2,
                        type: "spring"
                    }}
                    className="flexColStart footer__left">
                    <img src={logo2} alt="" />
                    <span className="secondaryText">
                        Our vision is to make all people <br />
                        the best place to live for them.
                    </span>
                </motion.div>

                <motion.div
                    initial={{ x: "2rem", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 2,
                        type: "spring"
                    }}
                    className="flexColStart footer__right">
                    <span className="primaryText">Information</span>
                    <span className="secondaryText">145 New York, FL 4571, USA</span>

                    <div className="flexCenter footer__menu">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About Us</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Footer
import "./getStarted.css"
import { motion } from "framer-motion"
const GetStarted = () => {
    return (
        <section className="getstarted__wrapper" id="GetStarted">
            <div className="paddings innerWidth getstarted__container">
                <motion.div
                    initial={{ y: "2rem", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 2,
                        type: "spring"
                    }}
                    className="flexColCenter inner__container">
                    <span className="primaryText">Get Started with Homyz</span>
                    <span className="secondaryText">Subscribe and super attractive price quotes from the quotes
                        <br />
                        Find your residence soon
                    </span>
                    <button className="button">
                        <a href="mailto:adetoyedaniel2020@gmail.com">Get Started</a>
                    </button>
                </motion.div>
            </div>
        </section>
    )
}

export default GetStarted
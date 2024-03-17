import CountUp from "react-countup"
import { heroImage } from "../../assets"
import "./hero.css"
import { HiLocationMarker } from "react-icons/hi"
import { motion } from 'framer-motion'
const Hero = () => {
    return (
        <section className="hero__wrapper">
            <div className="paddings innerWidth flexCenter hero__container">
                <div className="flexColStart hero__left">
                    <div className="hero__title">
                        <div className="orange__cicle" />
                        <motion.h1
                            initial={{ y: "2rem", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 2,
                                type: "spring"
                            }}
                        >Discover <br />
                            Most Suitable <br /> Property
                        </motion.h1>
                    </div>

                    <motion.div
                        initial={{ y: "2rem", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 2,
                            type: "spring"
                        }}
                        className="flexColStart hero__des">
                        <span className="secondaryText">Find a variety of properties that suit you very easility</span>
                        <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
                    </motion.div>

                    <motion.div
                        initial={{ y: "2rem", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 2,
                            type: "spring"
                        }}
                        className="search__bar">
                        <HiLocationMarker color="var(--blue)" size={25} />
                        <input type="text" />
                        <button className="button">Search</button>
                    </motion.div>

                    <motion.div
                        initial={{ y: "2rem", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 2,
                            type: "spring"
                        }}
                        className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={8800} end={90000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Presium Products</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1950} end={2000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Happy Customers</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp end={28} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Award Winning</span>
                        </div>
                    </motion.div>
                </div>

                {/* right sider */}
                <div className="flexCenter hero__right">
                    <motion.div
                        initial={{ x: "7rem", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 2,
                            type: "spring"
                        }}
                        className="image__container">
                        <img src={heroImage} alt="" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero
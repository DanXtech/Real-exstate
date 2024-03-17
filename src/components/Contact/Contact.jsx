import "./contact.css"
import { contact } from "../../assets"
import { MdCall } from "react-icons/md"
import { BsFillChatDotsFill } from "react-icons/bs"
import { HiChatBubbleBottomCenter, HiVideoCamera } from "react-icons/hi2"
import { motion } from "framer-motion"
const Contact = () => {
    return (
        <section className="contact__wrapper" id="ContactUs">
            <div className="paddings innerWidth flexCenter contact__container">

                <motion.div
                    initial={{ y: "2rem", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 2,
                        type: "spring"
                    }}
                    className="flexColStart contact__left">
                    <span className="orangeText">Our Contacts</span>
                    <span className="primaryText">Easy to Contact us</span>
                    <span className="secondaryText">
                        We always ready to help by providing the best servies to
                        beleive a good blace to live can make your life better
                    </span>

                    <div className="flexColStart contactModes">
                        {/* first row */}
                        <div className="flexStart row">
                            <div className="flexColStart row">
                                <div className="flexColCenter mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <MdCall size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span> Call </span>
                                            <span>021 123 145 14</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">
                                        Call Now
                                    </div>
                                </div>
                            </div>
                            <div className="flexColStart row">
                                <div className="flexColCenter mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <BsFillChatDotsFill size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span> Chat </span>
                                            <span>021 123 145 14</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">
                                        Chat Now
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* second row */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiVideoCamera size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span> Video </span>
                                        <span>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Video  Call Now
                                </div>
                            </div>

                            <div className="flexColStart row">
                                <div className="flexColCenter mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <HiChatBubbleBottomCenter size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span> Message </span>
                                            <span>021 123 145 14</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">
                                        Call Now
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: "2rem", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 2,
                        type: "spring"
                    }}
                    className="contact__right">
                    <div className="image__container">
                        <img src={contact} alt="" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact



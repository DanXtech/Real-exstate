import "./value.css"
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState } from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md"
import { value } from "../../assets"
import data from "../../utils/accordion"
import { useState } from "react";
import { motion } from "framer-motion"
const Value = () => {
    const [className, setClassName] = useState(null);
    return (
        <section className="value__wrapper" id="OurValue">
            {/* left side */}
            <div className="paddings innerWidth flexCenter value__container">
                <motion.div
                    initial={{ y: "2rem", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 2,
                        type: "spring"
                    }}
                    className="value__left">
                    <div className="image__container">
                        <img src={value} alt="" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: "2rem", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 2,
                        type: "spring"
                    }}
                    className="flexColStart value__right">
                    <span className="orangeText">Our Value</span>
                    <span className="primaryText">Value We Give to you</span>
                    <span className="secondaryText">
                        We always ready to hlep by providing the best services from you.
                        <br />
                        We beleive a good blace to live can make your life better</span>

                    <Accordion
                        className="accordion"
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                    >
                        {data.map((item, i) => {

                            return (
                                <>
                                    <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className="accordionButton">

                                                {/* This state show that wether a state is open  */}
                                                <AccordionItemState>
                                                    {({ expanded }) =>
                                                        expanded
                                                            ? setClassName("expanded")
                                                            : setClassName("collapsed")
                                                    }
                                                </AccordionItemState>

                                                <div className="flexCenter icon">{item.icon}</div>
                                                <span className="primaryText">
                                                    {item.heading}
                                                </span>
                                                <div className="flexCenter icon">
                                                    <MdOutlineArrowDropDown size={20} />
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                            <p className="secondaryText">{item.detail}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </>
                            )
                        })}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    )
}

export default Value
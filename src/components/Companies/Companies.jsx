import "./companies.css"
import { prologis, tower, equinix, realty } from "../../assets"
import { motion } from "framer-motion"
const Companies = () => {
    return (
        <motion.div
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 2,
                type: "spring"
            }}
            className="companies__wrapper">
            <div className="paddings innerWidth flexCenter companies__container">
                <img src={prologis} alt="" />
                <img src={tower} alt="" />
                <img src={equinix} alt="" />
                <img src={realty} alt="" />
            </div>
        </motion.div>
    )
}

export default Companies
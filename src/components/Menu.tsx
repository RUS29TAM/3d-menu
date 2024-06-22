import React from 'react';
import styles from './Menu.module.css';
import {AiFillHome} from "react-icons/ai";
import {IoIosInformationCircleOutline} from "react-icons/io";
import {MdOutlineMiscellaneousServices} from "react-icons/md";
import {GiPhone} from "react-icons/gi";
import {FaRProject, FaTeamspeak} from "react-icons/fa";


const scrollStyle1 = {'--i': '1'} as React.CSSProperties;
const scrollStyle2 = {'--i': '2'} as React.CSSProperties;
const scrollStyle3 = {'--i': '3'} as React.CSSProperties;
const scrollStyle4 = {'--i': '4'} as React.CSSProperties;
const scrollStyle5 = {'--i': '5'} as React.CSSProperties;
const scrollStyle6 = {'--i': '6'} as React.CSSProperties;

const Menu = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.ul}>
                <li style={scrollStyle6} data-text={'Home'} className={styles.li}><a href={'##'}><span><AiFillHome /></span></a>Home</li>
                <li style={scrollStyle5} data-text={'About'} className={styles.li}><a href={'##'}><span><IoIosInformationCircleOutline /></span></a>About</li>
                <li style={scrollStyle4} data-text={'Services'} className={styles.li}><a href={'##'}><span><MdOutlineMiscellaneousServices /></span></a>Services</li>
                <li style={scrollStyle3} data-text={'Portfolio'} className={styles.li}><a href={'##'}><span><FaRProject /></span></a>Portfolio</li>
                <li style={scrollStyle2} data-text={'Team'} className={styles.li}><a href={'##'}><span><FaTeamspeak /></span></a>Team</li>
                <li style={scrollStyle1} data-text={'Contacts'} className={styles.li}><a href={'##'}><span><GiPhone /></span></a>Contacts</li>
            </ul>
        </div>
    );
};

export default Menu;

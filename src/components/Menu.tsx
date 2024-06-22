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
                <li style={scrollStyle6} data-text={'HOME'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><AiFillHome /></span>Home</a></li>
                <li style={scrollStyle5} data-text={'ABOUT'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><IoIosInformationCircleOutline /></span>About</a></li>
                <li style={scrollStyle4} data-text={'SERVICES'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><MdOutlineMiscellaneousServices /></span>Services</a></li>
                <li style={scrollStyle3} data-text={'PORTFOLIO'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><FaRProject /></span>Portfolio</a></li>
                <li style={scrollStyle2} data-text={'TEAM'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><FaTeamspeak /></span>Team</a></li>
                <li style={scrollStyle1} data-text={'CONTACTS'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><GiPhone /></span>Contacts</a></li>
            </ul>
        </div>
    );
};

export default Menu;

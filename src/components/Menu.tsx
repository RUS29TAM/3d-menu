import React from 'react';
import styles from './Menu.module.css';
import {AiFillHome} from "react-icons/ai";
import {IoIosInformationCircleOutline} from "react-icons/io";
import {MdOutlineMiscellaneousServices} from "react-icons/md";
import {GiPhone} from "react-icons/gi";
import {FaRProject, FaTeamspeak} from "react-icons/fa";


const style1 = {'--i': '1'} as React.CSSProperties;
const style2 = {'--i': '2'} as React.CSSProperties;
const style3 = {'--i': '3'} as React.CSSProperties;
const style4 = {'--i': '4'} as React.CSSProperties;
const style5 = {'--i': '5'} as React.CSSProperties;
const style6 = {'--i': '6'} as React.CSSProperties;

const Menu = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.ul}>
                <li style={style6} data-text={'HOME'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><AiFillHome /></span>Home</a></li>
                <li style={style5} data-text={'ABOUT'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><IoIosInformationCircleOutline /></span>About</a></li>
                <li style={style4} data-text={'SERVICES'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><MdOutlineMiscellaneousServices /></span>Services</a></li>
                <li style={style3} data-text={'PORTFOLIO'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><FaRProject /></span>Portfolio</a></li>
                <li style={style2} data-text={'TEAM'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><FaTeamspeak /></span>Team</a></li>
                <li style={style1} data-text={'CONTACTS'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><GiPhone /></span>Contacts</a></li>
            </ul>
        </div>
    );
};

export default Menu;

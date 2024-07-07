import React from 'react';
import styles from './Menu.module.css';
import {AiFillHome} from "react-icons/ai";
import {IoIosInformationCircleOutline} from "react-icons/io";
import {MdOutlineAddAPhoto, MdOutlineMiscellaneousServices, MdOutlinePriceCheck} from "react-icons/md";
import {GiPhone} from "react-icons/gi";
import {FaDatabase, FaRProject, FaTeamspeak} from "react-icons/fa";
import {PiAddressBookLight, PiLinkSimple} from "react-icons/pi";
import {IoDocumentsOutline} from "react-icons/io5";
import {
    style1,
    style10,
    style11,
    style12, style13, style14, style15, style16, style17, style18, style19,
    style2, style20, style21, style22, style23, style24, style25, style26, style27, style28, style29,
    style3, style30, style31, style32, style33, style34, style35, style36, style37, style38, style39,
    style4, style40, style41, style42, style43, style44, style45, style46, style47, style48, style49,
    style5, style50,
    style6, style7, style8,
    style9
} from "../constants/constants";

const Menu = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapperRight}>
                <ul className={styles.ul}>
                    <li style={style10} data-text={'HOME'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><AiFillHome /></span>Home</a></li>
                    <li style={style9} data-text={'HOME'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><AiFillHome /></span>Home</a></li>
                    <li style={style8} data-text={'HOME'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><AiFillHome /></span>Home</a></li>
                    <li style={style7} data-text={'HOME'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><AiFillHome /></span>Home</a></li>
                    <li style={style6} data-text={'HOME'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><AiFillHome /></span>Home</a></li>
                    <li style={style5} data-text={'ABOUT'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><IoIosInformationCircleOutline /></span>About</a></li>
                    <li style={style4} data-text={'SERVICES'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><MdOutlineMiscellaneousServices /></span>Services</a></li>
                    <li style={style3} data-text={'PORTFOLIO'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><FaRProject /></span>Portfolio</a></li>
                    <li style={style2} data-text={'TEAM'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><FaTeamspeak /></span>Team</a></li>
                    <li style={style1} data-text={'CONTACTS'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><GiPhone /></span>Contacts</a></li>
                </ul>
            </div>
            <div className={styles.wrapperLeft}>
                <ul className={styles.ul2}>
                    <li style={style20} data-text={'DB'} className={styles.li2}><a className={styles.a2} href={'##'}><span className={styles.span2}><FaDatabase /></span>Db</a></li>
                    <li style={style19} data-text={'DOCUMENTS'} className={styles.li2}><a className={styles.a2} href={'##'}><span className={styles.span2}><IoDocumentsOutline /></span>Documents</a></li>
                    <li style={style18} data-text={'ADDRESS'} className={styles.li2}><a className={styles.a2} href={'##'}><span className={styles.span2}><PiAddressBookLight /></span>Address</a></li>
                    <li style={style17} data-text={'PRICE'} className={styles.li2}><a className={styles.a2} href={'##'}><span className={styles.span2}><MdOutlinePriceCheck /></span>Price</a></li>
                    <li style={style16} data-text={'HOME'} className={styles.li2}><a className={styles.a2} href={'##'}><span className={styles.span2}><AiFillHome /></span>Home</a></li>
                    <li style={style15} data-text={'HOME'} className={styles.li2}><a className={styles.a2} href={'##'}><span className={styles.span2}><AiFillHome /></span>Home</a></li>
                    <li style={style14} data-text={'HOME'} className={styles.li2}><a className={styles.a2} href={'##'}><span className={styles.span2}><AiFillHome /></span>Home</a></li>
                    <li style={style13} data-text={'HOME'} className={styles.li2}><a className={styles.a2} href={'##'}><span className={styles.span2}><AiFillHome /></span>Home</a></li>
                    <li style={style12} data-text={'LINKS'} className={styles.li2}><a className={styles.a2} href={'##'}><span className={styles.span2}><PiLinkSimple /></span>Links</a></li>
                    <li style={style11} data-text={'PHOTO'} className={styles.li2}><a className={styles.a2} href={'##'}><span className={styles.span2}><MdOutlineAddAPhoto /></span>Photo</a></li>
                </ul>
            </div>
            <div className={styles.wrapperRight}>
                <ul className={styles.ul}>
                    <li style={style30} data-text={'HOME'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><AiFillHome /></span>Home</a></li>
                    <li style={style29} data-text={'HOME'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><AiFillHome /></span>Home</a></li>
                    <li style={style28} data-text={'HOME'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><AiFillHome /></span>Home</a></li>
                    <li style={style27} data-text={'HOME'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><AiFillHome /></span>Home</a></li>
                    <li style={style26} data-text={'HOME'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><AiFillHome /></span>Home</a></li>
                    <li style={style25} data-text={'ABOUT'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><IoIosInformationCircleOutline /></span>About</a></li>
                    <li style={style24} data-text={'SERVICES'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><MdOutlineMiscellaneousServices /></span>Services</a></li>
                    <li style={style23} data-text={'PORTFOLIO'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><FaRProject /></span>Portfolio</a></li>
                    <li style={style22} data-text={'TEAM'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><FaTeamspeak /></span>Team</a></li>
                    <li style={style21} data-text={'CONTACTS'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><GiPhone /></span>Contacts</a></li>
                </ul>
            </div>
            <div className={styles.wrapperLeft}>
                <ul className={styles.ul2}>
                    <li style={style40} data-text={'DB'} className={styles.li2}><a className={styles.a2} href={'##'}><span className={styles.span2}><FaDatabase /></span>Db</a></li>
                    <li style={style39} data-text={'DOCUMENTS'} className={styles.li2}><a className={styles.a2} href={'##'}><span className={styles.span2}><IoDocumentsOutline /></span>Documents</a></li>
                    <li style={style38} data-text={'ADDRESS'} className={styles.li2}><a className={styles.a2} href={'##'}><span className={styles.span2}><PiAddressBookLight /></span>Address</a></li>
                    <li style={style37} data-text={'PRICE'} className={styles.li2}><a className={styles.a2} href={'##'}><span className={styles.span2}><MdOutlinePriceCheck /></span>Price</a></li>
                    <li style={style36} data-text={'LINKS'} className={styles.li2}><a className={styles.a2} href={'##'}><span className={styles.span2}><PiLinkSimple /></span>Links</a></li>
                    <li style={style35} data-text={'PHOTO'} className={styles.li2}><a className={styles.a2} href={'##'}><span className={styles.span2}><MdOutlineAddAPhoto /></span>Photo</a></li>
                    <li style={style34} data-text={'DB'} className={styles.li2}><a className={styles.a2} href={'##'}><span className={styles.span2}><FaDatabase /></span>Db</a></li>
                    <li style={style33} data-text={'DOCUMENTS'} className={styles.li2}><a className={styles.a2} href={'##'}><span className={styles.span2}><IoDocumentsOutline /></span>Documents</a></li>
                    <li style={style32} data-text={'ADDRESS'} className={styles.li2}><a className={styles.a2} href={'##'}><span className={styles.span2}><PiAddressBookLight /></span>Address</a></li>
                    <li style={style31} data-text={'PRICE'} className={styles.li2}><a className={styles.a2} href={'##'}><span className={styles.span2}><MdOutlinePriceCheck /></span>Price</a></li>
                </ul>
            </div>
            <div className={styles.wrapperRight}>
                <ul className={styles.ul}>
                    <li style={style50} data-text={'HOME'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><AiFillHome /></span>Home</a></li>
                    <li style={style49} data-text={'ABOUT'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><IoIosInformationCircleOutline /></span>About</a></li>
                    <li style={style48} data-text={'SERVICES'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><MdOutlineMiscellaneousServices /></span>Services</a></li>
                    <li style={style47} data-text={'PORTFOLIO'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><FaRProject /></span>Portfolio</a></li>
                    <li style={style46} data-text={'TEAM'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><FaTeamspeak /></span>Team</a></li>
                    <li style={style45} data-text={'CONTACTS'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><GiPhone /></span>Contacts</a></li>
                    <li style={style44} data-text={'SERVICES'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><MdOutlineMiscellaneousServices /></span>Services</a></li>
                    <li style={style43} data-text={'PORTFOLIO'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><FaRProject /></span>Portfolio</a></li>
                    <li style={style42} data-text={'TEAM'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><FaTeamspeak /></span>Team</a></li>
                    <li style={style41} data-text={'CONTACTS'} className={styles.li}><a className={styles.a} href={'##'}><span className={styles.span}><GiPhone /></span>Contacts</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;

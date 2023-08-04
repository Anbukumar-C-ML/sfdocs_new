import React, {useEffect,useState}  from 'react';
import clsx from 'clsx';

import styles from './HomepageFeatures.module.css';
import { StageHomePageUrl } from './Constants';
const Visualization =(props)=>{
    const [over, setOver] = useState(false);
    const [overDark, setDarkOver] = useState(false)
       
        useEffect(() => {
          if (typeof window !== undefined) {
            if (window.location.host.includes('stage') || window.location.host.includes('localhost')) {
              document.querySelector('.navbar__brand').href = StageHomePageUrl
            }
          }
        }, [])
        return (  
          <div className=''>
            <div className="padding-horiz--md padLR" onMouseOver={() => {setOver(true), setDarkOver(true)}}  onMouseOut={() => {setOver(false), setDarkOver(false)}}>
              <div className={styles.panel} id={props.class}>
                <div className={styles.imageSection}>
                <img src={over ? props.lightPathOver : props.lightpath}   alt='icons' className={styles.light } /> 
                {/* <img src={props.lightPathOver} alt="hover icon" className={styles.lightOver} /> */}
                <img  src={overDark ? props.darkPathOver : props.darkpath} alt='icons' className={styles.dark} /> 
                </div>
                <div className={styles.innerPanel}> 
                    <h3>  {props.title}</h3>
                    <p title={props.content}>{props.content}</p> 
                    <a href={props.url} >Learn More <input type="image" src="img/arrow_right.svg" width="22px" className={styles.learn_more} alt="arrow" /></a> 
                </div>
              </div>
            </div>
          </div>
        );
      } 
export default Visualization;
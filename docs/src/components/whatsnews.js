import React, {useEffect,useState}  from 'react';
import clsx from 'clsx';

import styles from './HomepageFeatures.module.css';
import { StageHomePageUrl } from './Constants';

const WhatsNews =(props)=>{
    let whatsNews = [
        {
          id:'1',
          label: 'Doc Update: Kubernetes Monitoring',
          url:'/snappyflow-saas/release_note/platform/kubernetes',
          updatedDate: '18 Jul 2023'
        },
        {
          id:'2',
          label: 'New Doc: User Access Management',
          url:'/snappyflow-saas/introduction/user_access_management',
          updatedDate: '18 Jul 2023'
        },
        {
          id:'3',
          label: 'New Doc: Custom Parser',
          url:'/snappyflow-saas/Log_management/custom_log_parser',
          updatedDate: '18 Jul 2023'
        },
        {
          id:'4',
          label: 'New Doc: Identity Provider',
          url:'/snappyflow-saas/Integrations/idp/overview',
          updatedDate: '18 Jul 2023'
        },
        {
          id:'5',
          label: 'New Doc: Manage Logs',
          url:'/snappyflow-saas/Log_management/manage_logs',
          updatedDate: '18 Jul 2023'
        },
    ]
    useEffect(() => {
        if (typeof window !== undefined) {
          if (window.location.host.includes('stage') || window.location.host.includes('localhost')) {
            document.querySelector('.navbar__brand').href = StageHomePageUrl
          }
        }
      }, [])
      return (  
        <div className={styles.whats_container}>
            <div className='row'>
                    <div className='col col--6'>
                                 <ul className={styles.updatedDates}>
                                    {
                                        whatsNews.map((props)=>(
                                            <li key={props.id}><a href={props.url}><span>{props.label} <small>{props.updatedDate}</small></span> </a> </li>
                                        ))
                                    }
                                 </ul>
                    </div>
                    <div className='col col--6 mobile-view'>
                        <img src='img/whatsnews.svg' alt='whats news' className={styles.light}/>
                        <img src='img/whats_dark.svg' alt='whats news' className={styles.dark}/>
                    </div>
            </div>
        </div>
      )
}
export default WhatsNews;
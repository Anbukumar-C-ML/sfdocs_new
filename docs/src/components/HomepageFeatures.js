import React, { useEffect } from 'react'; 
import Slider from "react-slick";
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import { StageHomePageUrl } from './Constants';
import Visualization from './HomepageVisualization';
import WhatsNews from './whatsnews';
import $ from 'jquery';
const settings = {
  infinite: true,
  speed: 500, 
  autoplay: true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 750,
      settings: "unslick"
    }
  ],
}; 
const productList = [
    {
      path: 'img/snappyflow-self-saas.svg',
      title: 'Cloud',
      content: 'SnappyFlow Cloud is a full featured cloud-based offering',
      button: 'Get Started',
      classname:'saas-btn',
      url:'docs/introduction/overview'	  
    },
    {
      path: 'img/snappyflow-self-hosted.svg',
      title: 'Self-Hosted Turbo',
      content: 'SnappyFlow Self-hosted Turbo is ideal for deployment in your own environment',
      button: 'Get Started',
      classname:'lite-btn',
      url:'docs/selfhosted-turbo/Quick_Start/getting_started' 
	  
    },
	  {
      path: 'img/snappyflow-cloud.svg',
      title: 'Self-Hosted Lite',
      content: 'A low footprint version of SnappyFlow ideal for small deployments with ingest upto 500 GB per day',
      button: 'Get Started',
      classname:'turbo-btn',
      url:'docs/selfhosted-lite/introduction/overview' 
    },
  ];

  const visualizationList = [
    //{
     // id:'1',
     // lightpath: 'img/full-stack.svg',
      //lightPathOver: 'img/full-stack-over.svg',
      //darkpath: 'img/full-stack_dark.svg',
      //darkPathOver: 'img/full-stack-dark-over.svg',
      //title: 'Full Stack Monitoring',
      //content: "Full-stack monitoring has become essential in fast-paced software development, involving tracking and analyzing all layers of an application's technology stack.",
      //url: '/docs/Quick_Start/getting_started',
      //class: 'fullstact'
    //},
    {
        id:'2',
        lightpath: 'img/landing_page_icon/ft-light-logs.svg',
        lightPathOver: 'img/landing_page_icon/ft-light-logs-hover.svg',
        darkpath: 'img/landing_page_icon/ft-dark-logs.svg',
        darkPathOver: 'img/landing_page_icon/ft-dark-logs-hover.svg',
        title: 'Log Management',
        content: 'Collect, store, visualise and analyze logs from multiple sources. Extract data from logs and correlate with traces for easy troubleshooting',
        url: 'docs/Log_management/log_overview',
        class: 'log'
    },
    {
        id:'3',
        lightpath: 'img/landing_page_icon/ft-light-tracing.svg',
        lightPathOver: 'img/landing_page_icon/ft-light-tracing-hover.svg',
        darkpath: 'img/landing_page_icon/ft-dark-tracing.svg',
        darkPathOver: 'img/landing_page_icon/ft-dark-tracing-hover.svg',
        title: 'Tracing',
        content: 'Track each step of a request or transcation and get detailed visibility into the flow of requests across multiple services',
        url: 'docs/category/tracing',
        class: 'tracing'
    } ,
    {
        id:'4',
        lightpath: 'img/landing_page_icon/ft-light-alerts.svg',
        lightPathOver: 'img/landing_page_icon/ft-light-alerts-hover.svg',
        darkpath: 'img/alert_dark.svg',
        darkPathOver: 'img/landing_page_icon/ft-dark-alerts-hover.svg',
        title: 'Alerts',
        content: 'Detect specific events such as system failures, errors, security breaches or any other predefined criteria that require attention or action',
        url: 'docs/Alerts_notifications/getting_started',
        class: 'alert'
    },
	{
        id:'5',
        lightpath: 'img/landing_page_icon/ft-light-notification.svg',
        lightPathOver: 'img/landing_page_icon/ft-light-notification-hover.svg',
        darkpath: 'img/landing_page_icon/ft-dark-notification.svg',
        darkPathOver: 'img/landing_page_icon/ft-dark-notification-hover.svg',
        title: 'Notifications',
        content: 'Stay informed about the alerts generated in SnappyFlow through communication channels such as Email, Zenduty, PagerDuty etc...',
        url: 'docs/Alerts_notifications/Notifications/introduction',
        class: 'notification'
    },
	{
        id:'6',
        lightpath: 'img/landing_page_icon/ft-light-dashboard.svg',
        lightPathOver: 'img/landing_page_icon/ft-light-dashboard-hover.svg',
        darkpath: 'img/landing_page_icon/ft-dark-dashboard.svg',
        darkPathOver: 'img/landing_page_icon/ft-dark-dashboard-hover.svg',
        title: 'Dashboard',
        content: 'Bring data together to visualize key metrics and get deep insights into the performance of your application',
        url: 'docs/category/dashboards',
        class: 'dashboard'
    },
	{
        id:'7',
        lightpath: 'img/landing_page_icon/ft-light-synthetic-monitoring.svg',
        lightPathOver: 'img/landing_page_icon/ft-light-synthetic-monitoring-hover.svg',
        darkpath: 'img/landing_page_icon/ft-dark-synthetic-monitoring.svg',
        darkPathOver: 'img/landing_page_icon/ft-dark-synthetic-monitoring-hover.svg',
        title: 'Synthetic Monitoring',
        content: 'Simulate user interactions with a website to proactively identify potential issues before they impact real users',
        url: 'docs/Synthetic/overview',
        class: 'syntheticmonitoring'
    },
  ];
 
  
  function Products({ path, title, content, button, classname, url }) {
  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.location.host.includes('stage') || window.location.host.includes('localhost')) {
        console.log('home page');
        document.querySelector('.navbar__brand').href = StageHomePageUrl
      }
    }  
    setTimeout(()=>{
         $('.slick-prev').html(`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
         <rect opacity="1" x="-0.5" y="0.5" width="47" height="47" rx="9.5" transform="matrix(-1 0 0 1 47 0)" stroke="#23B5E9"/>
         <path d="M27.6562 31.3125L20.3438 24L27.6563 16.6875" stroke="#23B5E9" stroke-opacity="1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>`);
         $('.slick-next').html(`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
         <rect x="0.5" y="1.32422" width="47" height="47" rx="9.5" stroke="#23B5E9"/>
         <path d="M20.3438 32.1367L27.6562 24.8242L20.3437 17.5117" stroke="#23B5E9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>`);
    },10)
    window.addEventListener('resize', handleResize)
  }, [])
  const handleResize = ()=> {
      setTimeout(()=>{
        $('.slick-prev').html(`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect opacity="1" x="-0.5" y="0.5" width="47" height="47" rx="9.5" transform="matrix(-1 0 0 1 47 0)" stroke="#23B5E9"/>
        <path d="M27.6562 31.3125L20.3438 24L27.6563 16.6875" stroke="#23B5E9" stroke-opacity="1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`);
        $('.slick-next').html(`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
        <rect x="0.5" y="1.32422" width="47" height="47" rx="9.5" stroke="#23B5E9"/>
        <path d="M20.3438 32.1367L27.6562 24.8242L20.3437 17.5117" stroke="#23B5E9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`);
  },10)
  }

 const redirectURL = (url)=>{
  // console.log(url)
   window.location.href = url
  }
 

  return (
    <div className={clsx('col col--4 ')}>
       
      <div className="product-panel cursor" onClick={() => redirectURL(url)}>
        <div className={styles.treePanel}>
         <img src={path} alt='icons'  />  
          <h3>SnappyFlow<br/>{title}</h3>
          <p>{content}</p>
          <a href={url} className={styles.buttonPosition}><input type="button" className={classname} value={button} /> </a>
        </div>
      </div>
       
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.docContainer}> 
        <div className="container">
        <h1 className={styles.header_text_level1} style={{'margin-bottom':'6px'}}>Choose Your Product Flavor</h1>
          <div className="row panelList">
            {productList.map((props, idx) => (
              <Products key={idx} {...props} />
            ))} 
          </div> 

         <h1  className={styles.header_text_level2}>Explore SnappyFlow</h1>
         <div className='scroll-panel' >  
              <div className=''>
                <Slider {...settings}> 
                      { 
                        visualizationList.map((props, id)=>{
                          return <Visualization  key={id} {...props}/>
                        }) 
                        }  
                </Slider> 
                </div>
          </div>
          </div>
          
          <div className={styles.whatsNew_bg}>
            <div className={styles.gridImg}>
              <div className='container'>
              <h1>What’s New</h1>
                <WhatsNews></WhatsNews>
              </div>
              </div>
          </div>
        
              <div className='outer-dynamic-panel'>
                <div className='container'>
                <div className={styles.dynamicImageSection}> 
                  <h1 style={{'margin-top':'0px'}}>Need Help?</h1>
                  <div className='row'>
                    <div className='col col--6 text-center mobile-view'>
                     <img src="img/man_illastrated_image.svg" className={styles.light}  />
                     <img src='img/man_illa_dark.svg' className={styles.dark} style={{'width':'420px'}} />
                    </div>
                    <div className='col col--6'>
                           
                          <div className={styles.toolSection}>
                             <a href='https://calendly.com/snappyflowml/snappyflow-enterprise' target='_blank'>
                             <div  className={styles.imageOuter}><img src="img/book.svg" className={styles.light} /> <img src="img/book_dark.svg" className={styles.dark} /></div>
                              <div className="msg">Book a Demo</div>
                               
                             </a>
                          </div>
                          <div className={styles.toolSection}>
                            <a href='docs/Integrations/overview' target='_blank'>
                              <div className={styles.imageOuter}><img src="img/explore.svg" className={styles.light} /> <img src="img/explore_dark.svg" className={styles.dark} /></div>
                                <div className="msg">Explore Integrations</div>
                                 
                                </a>
                          </div>
						  <div className={styles.toolSection}>
                            <a href='mailto:support@snappyflow.io' target='_blank'>
                              <div className={styles.imageOuter}><img src="img/landing_page_icon/light-contact-us.svg" className={styles.light} /> <img src="img/landing_page_icon/dark-contact-us.svg" className={styles.dark} /></div>
                                <div className="msg">Contact Us</div>
                                 
                                </a>
                          </div>
                    </div>
                  </div>
                  <div className={styles.shadowRight}><img src='img/rectangle right.svg' /></div>
              </div>
                </div>
               
              </div>
              {/* <div className='contact-panel'>
                <div className='container'>
                      <div className='row'>
                      <div className='col col--8'>
                        <div className={styles.contact_text}>
                          <h2>Can't Find Something?</h2>
                          <p>Please feel free to reach out us.</p>
                        </div>
                      </div>
                      <div className='col col--4 text--right'>
                          <a href='mailto:support@snappyflow.io'> <input type="button" value="Contact Us" className='primary-btn' /></a>
                      </div>
                      </div>
                  </div>
              </div> */}
      </div>
    </section>
  );
}

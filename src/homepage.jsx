import React, { useState, useEffect, useRef, useMemo} from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import './homepage.css';
import 'react-slideshow-image/dist/styles.css'; // Import default styles

const Homepage = () => {

  //slider code below 
  const mainSliderImages = useMemo(() => [
    'https://t4.ftcdn.net/jpg/02/38/40/55/360_F_238405533_yyX4K55OmH2LiM7LQ01ITn6kl0b6J6K8.jpg', // Main slider images
    'https://cloudinary.hbs.edu/hbsit/image/upload/s--O0PXWnT3--/f_auto,c_fill,h_375,w_750,/v20200101/BDD0688FF02068E5C427B0954F8A2297.jpg',
    'https://slidechef.net/wp-content/uploads/2021/01/best-investment-PowerPoint-template.jpg',
    'https://www.ourbusinessladder.com/wp-content/uploads/2024/03/Strategies-for-winning-investors-in-Your-Business-01-scaled.jpg',
    'https://b2bblogassets.airtel.in/wp-content/uploads/2022/06/startup-company-scaled.jpg'
  ], []); // No dependencies, this array will remain the same

  const boxSliderImages = useMemo(() => [
    [ 'https://b2bblogassets.airtel.in/wp-content/uploads/2022/06/startup-company-scaled.jpg','https://t4.ftcdn.net/jpg/02/38/40/55/360_F_238405533_yyX4K55OmH2LiM7LQ01ITn6kl0b6J6K8.jpg','https://cloudinary.hbs.edu/hbsit/image/upload/s--O0PXWnT3--/f_auto,c_fill,h_375,w_750,/v20200101/BDD0688FF02068E5C427B0954F8A2297.jpg','https://slidechef.net/wp-content/uploads/2021/01/best-investment-PowerPoint-template.jpg','https://www.ourbusinessladder.com/wp-content/uploads/2024/03/Strategies-for-winning-investors-in-Your-Business-01-scaled.jpg'],
    [ 'https://www.ourbusinessladder.com/wp-content/uploads/2024/03/Strategies-for-winning-investors-in-Your-Business-01-scaled.jpg','https://b2bblogassets.airtel.in/wp-content/uploads/2022/06/startup-company-scaled.jpg','https://t4.ftcdn.net/jpg/02/38/40/55/360_F_238405533_yyX4K55OmH2LiM7LQ01ITn6kl0b6J6K8.jpg','https://cloudinary.hbs.edu/hbsit/image/upload/s--O0PXWnT3--/f_auto,c_fill,h_375,w_750,/v20200101/BDD0688FF02068E5C427B0954F8A2297.jpg','https://slidechef.net/wp-content/uploads/2021/01/best-investment-PowerPoint-template.jpg'],
    [ 'https://cloudinary.hbs.edu/hbsit/image/upload/s--O0PXWnT3--/f_auto,c_fill,h_375,w_750,/v20200101/BDD0688FF02068E5C427B0954F8A2297.jpg','https://slidechef.net/wp-content/uploads/2021/01/best-investment-PowerPoint-template.jpg','https://www.ourbusinessladder.com/wp-content/uploads/2024/03/Strategies-for-winning-investors-in-Your-Business-01-scaled.jpg','https://b2bblogassets.airtel.in/wp-content/uploads/2022/06/startup-company-scaled.jpg','https://t4.ftcdn.net/jpg/02/38/40/55/360_F_238405533_yyX4K55OmH2LiM7LQ01ITn6kl0b6J6K8.jpg'],
    [ 'https://slidechef.net/wp-content/uploads/2021/01/best-investment-PowerPoint-template.jpg','https://www.ourbusinessladder.com/wp-content/uploads/2024/03/Strategies-for-winning-investors-in-Your-Business-01-scaled.jpg','https://b2bblogassets.airtel.in/wp-content/uploads/2022/06/startup-company-scaled.jpg','https://t4.ftcdn.net/jpg/02/38/40/55/360_F_238405533_yyX4K55OmH2LiM7LQ01ITn6kl0b6J6K8.jpg','https://cloudinary.hbs.edu/hbsit/image/upload/s--O0PXWnT3--/f_auto,c_fill,h_375,w_750,/v20200101/BDD0688FF02068E5C427B0954F8A2297.jpg']
  ], []); // No dependencies, this array will remain the same

  const [mainSliderIndex, setMainSliderIndex] = useState(0);
  const [boxSliderIndices, setBoxSliderIndices] = useState([0, 0, 0, 0]);

  // Auto-slide effect for the main slider
  useEffect(() => {
    const interval = setInterval(() => {
      setMainSliderIndex((prev) => (prev === mainSliderImages.length - 1 ? 0 : prev + 1));
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [mainSliderImages.length]);

  // Auto-slide effect for each box slider
  useEffect(() => {
    const intervals = boxSliderImages.map((_, index) => {
      return setInterval(() => {
        setBoxSliderIndices((prev) => {
          const updated = [...prev];
          updated[index] = (updated[index] + 1) % boxSliderImages[index].length;
          return updated;
        });
      }, 2000); // Slide every 2 seconds for each slider
    });

    // Cleanup function to clear intervals
    return () => intervals.forEach(clearInterval);
  }, [boxSliderImages]);


  // Initial states for numbers
  const [investorsCount, setInvestorsCount] = useState(0);
  const [startupsCount, setStartupsCount] = useState(0);
  const [mentorsCount, setMentorsCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); // To track if the animation has run

  // Final counts (simulating API data)
  const finalInvestorsCount = 60;
  const finalStartupsCount = 390;
  const finalMentorsCount = 120;

  // Ref to target the container
  const containerRef = useRef(null);

  // Number animation function
  const animateNumber = (setStateFunction, finalValue, duration) => {
    let startNumber = 0;
    const incrementTime = 50; // Update every 10ms
    const step = (finalValue / (duration / incrementTime)); // Incremental step

    const timer = setInterval(() => {
      startNumber += step;
      if (startNumber >= finalValue) {
        startNumber = finalValue;
        clearInterval(timer);
      }
      setStateFunction(Math.floor(startNumber));
    }, incrementTime);
  };

  // Intersection Observer to trigger the animation when the container comes into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        // Start animation if the container is in view and hasn't animated yet
        animateNumber(setInvestorsCount, finalInvestorsCount, 2000); // 1 second animation
        animateNumber(setStartupsCount, finalStartupsCount, 2000);   // 1 second animation
        animateNumber(setMentorsCount, finalMentorsCount, 2000);     // 1 second animation
        setHasAnimated(true); // Prevent re-triggering the animation
      }
    }, { threshold: 0.5 }); // Trigger when 50% of the container is in view

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

  }, [hasAnimated]); // Dependency on `hasAnimated` to run the animation only once
  //email subscription code
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send email to backend
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("Subscribed successfully!");
      } else {
        setStatus("Subscription failed. Try again.");
      }
    } catch (error) {
      setStatus("Error occurred. Try again later.");
    }
    
  }
  return (
    <div className="home-container">
    <div className="container">
      <div className="top-section">
        <div className="main-slider">
          <img src={mainSliderImages[mainSliderIndex]} alt="Main Slider" />
        </div>
        <div className="box-sliders">
          {boxSliderImages.map((slider, index) => (
            <div key={index} className="box-slider">
              <img src={slider[boxSliderIndices[index]]}  alt="sliders" />
            </div>
            
          ))}
        </div>
      </div>
    </div>
      <center>
        {/*key initiative*/}
    <div className="key-initiative">
      <h2>Key Initiatives</h2>
      Our Startup connect platform connects  entrepreneurs, startups, investors, and mentors for 
      collaboration and networking. Users can create profiles,  showcase their businesses, and connect with others based  
      on their needs. Startups can attract investors and seek mentorship, while investors explore potential opportunities, 
      and mentors offer guidance. Our app features premium subscription plans for added services like exclusive networking 
      and advanced tools. 
    </div>
    <div className="dpiit-endorsement-container68">
      <Fade direction="up" triggerOnce>
        <section className="header-section68">
          <div className="header-content68">
            <h1>DPIIT Endorsement</h1>
            <center><p>
              Unlock DPIIT recognition through Startup Connect and enjoy exclusive benefits like tax incentives, simplified compliance, and fast-tracked IP protection. These perks are designed to remove barriers and speed up your 
              startup's success.
            </p></center><br></br><br></br>
            <Link to = "/dpiit2">
            <button className='clickdpiit'>Click Here </button>
            </Link>
          </div>
          <img src="\images\dd1.png" alt="DPIIT Logo" className="header-logo68" />
        </section>
      </Fade>
      </div>
    </center>

     {/*advertisement*/}

     <div className="advertisement">
      <img src="/images/ad.PNG"  alt="advertisement" onClick={""} />
      <img src="https://media.licdn.com/dms/image/D5622AQEbPgZLKIJwSQ/feedshare-shrink_800/0/1719988888642?e=2147483647&v=beta&t=mJuFnkh60MH9GY1utRgJSrO_n-zkVzpd5gu3QzngOrA" width="500px" height="300px" alt="advertisement" onClick={""} />
    </div>
    <div className="Users" ref={containerRef}>
      <h2>Our Happy Users</h2>
      {/*happy users container */}
    <center><div className="stats-container">
      <div className="card3">
        <p>No. of Investors</p>
        <span className="count">{investorsCount} +</span>
      </div>
      <div className="card3">
        <p>No. of Startups</p>
        <span className="count">{startupsCount} +</span>
      </div>
      <div className="card3">
        <p>No. of Mentors</p>
        <span className="count">{mentorsCount} +</span>
      </div>
    </div></center><br></br>

    {/*email subscription part */}

    <center><div className='email-subscription'>

      <form onSubmit={handleSubmit} style={{ display: "inline-block" }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email to subscribe"
          required
          style={{
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid black",
            width: "300px",
            fontSize: "16px",
          }}
        /><br></br>
        <br></br>
        <button
          type="submit"
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "10px 20px",
            borderRadius: "10px",
            border: "none",
            marginLeft: "10px",
            fontSize: "16px",
          }}
        >
          Subscribe for updates ✖
        </button>
      </form>
      {status && <p>{status}</p>}
    </div></center>
    </div>
    {/*Social Media contacts */}
    <center><div className='social-media-icons'>
      <h2>Our Social Media Platforms</h2>
    </div>
    <div className='social-icons'>
        <img src="/images/linkedin-rounded-icon.png" alt="linkedin.com"/>
        <img src="/images/insta-rounded-icon.jpg" alt="instagram.com"/>
        <img src="/images/fb-rounded-icon.jpeg" alt="facebook.com"/>
        <img src="/images/twitter-rounded-icon.jpeg" alt="twitter.com"/>
      </div></center>
    </div>
  );
}
export default Homepage;

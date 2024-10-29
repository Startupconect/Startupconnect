import React, { useState } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'; // Updated icons
import './Faq.css'; // Assuming you have the CSS file


const faqData = [
  {
    question: "What is Startup Connect?",
    answer: `Startup Connect is a platform designed to connect startups, investors, and industry experts. The platform helps startups to find resources, mentorship, and funding opportunities, while providing investors and entrepreneurs with vetted, innovative business ideas.`,
  },
  {
    question: "How do I register my startup on Startup Connect?",
    answer: `To register, simply follow these steps:
    1. Visit the Registration page.
    2. Fill in your startup's details, such as name, industry, and brief description.
    3. Submit the required documents for DPIIT recognition (if applicable).
    4. After submitting the form, our team will review your application and notify you via email.`,
  },
  {
    question: "Who can use Startup Connect?",
    answer: `Startup Connect is designed for:
    - Startups: Early-stage businesses looking for recognition, funding, and mentorship.
    - Investors: Individuals or organizations interested in funding promising startups.
    - Mentors: Industry experts and professionals offering guidance to startups.
    - Government Agencies: Agencies providing incentives and support for recognized startups.`,
  },
  {
    question: "What is DPIIT recognition, and why is it important?",
    answer: `DPIIT recognition is awarded by the Department for Promotion of Industry and Internal Trade (DPIIT) to startups that meet specific criteria. It provides startups with benefits like tax exemptions, easier access to funding, and government incentives. Recognition also increases credibility and trust among investors.`,
  },
  {
    question: "What are the benefits of DPIIT-recognized startups on this platform?",
    answer: `DPIIT-recognized startups enjoy:
    - Tax exemptions.
    - Access to government schemes and funding.
    - Networking opportunities with top investors.
    - Increased visibility on the platform.
    - Exclusive participation in Startup Connect events and programs.`,
  },
  {
    question: "What kind of funding opportunities are available on Startup Connect?",
    answer: `Startups can explore various types of funding, including:
    - Angel Investment: Early-stage investments from individual investors.
    - Venture Capital: Funding from firms looking for high-growth businesses.
    - Government Grants: Financial support from government schemes for startups.
    - Crowdfunding: Fundraising from a large number of people through the platform.`,
  },
  {
    question: "How do investors connect with startups on the platform?",
    answer: `Investors can browse startup profiles by industry, sector, or growth stage. After reviewing profiles, they can initiate conversations with startups through the platform’s communication tools, schedule meetings, or offer funding directly.`,
  },
  {
    question: "Is there a fee for startups to join the platform?",
    answer: `Basic registration on Startup Connect is free. However, premium services like featured listings, access to exclusive investor networks, or personalized mentorship may have associated fees. Pricing for these services will be listed on the platform.`,
  },
  {
    question: "How do I apply for tax exemptions through the platform?",
    answer: `If you are a DPIIT-recognized startup, you will automatically qualify for tax exemptions. You will need to provide the required documentation through the platform, and we will guide you through the application process in collaboration with relevant government agencies.`,
  },
  {
    question: "Can international investors participate in Startup Connect?",
    answer: `Yes, international investors are welcome to browse startup profiles, invest in promising businesses, and participate in various events hosted by Startup Connect.`,
  },
  {
    question: "How can startups benefit from mentorship on the platform?",
    answer: `Startups can connect with experienced mentors who offer guidance on business strategy, product development, marketing, fundraising, and more. Mentorship programs are either one-on-one or group-based, depending on the needs of the startup.`,
  },
  {
    question: "How secure is the platform for sharing startup information?",
    answer: `We prioritize the security and confidentiality of your information. All data shared on the platform is protected by advanced encryption technologies. We also offer Non-Disclosure Agreement (NDA) templates for startups and investors to use when needed.`,
  },
  {
    question: "How does the matchmaking process work between startups and investors?",
    answer: `Startup Connect uses AI-powered algorithms to match startups with investors based on mutual interests, industry focus, growth potential, and funding stage. This automated process helps to create better, more relevant connections for both parties.`,
  },
  {
    question: "Can startups from any industry join Startup Connect?",
    answer: `Yes, we welcome startups from various industries, including technology, healthcare, agriculture, fintech, education, and more. However, DPIIT recognition is available only to startups that meet the specific criteria set by the government.`,
  },
  {
    question: "What events are hosted by Startup Connect?",
    answer: `We host several events throughout the year, including:
    - Pitch Competitions: Where startups can present their ideas to investors.
    - Workshops: On topics like business growth, funding, and marketing.
    - Networking Events: For startups, investors, and mentors to connect and collaborate.`,
  },
];

const Faq = () => {
const [visibleFaqCount, setVisibleFaqCount] = useState(5); // Initially show 5 FAQs
const [currentIndex, setCurrentIndex] = useState(-1); // No question is opened initially

const loadMoreFaqs = () => {
  setVisibleFaqCount(prevCount => prevCount + 5); // Load 5 more FAQs
};

const toggleFaq = (index) => {
  setCurrentIndex(currentIndex === index ? -1 : index); // Open/close FAQ
};

const nextFaq = () => {
  if (currentIndex < visibleFaqCount - 1) {
    setCurrentIndex(currentIndex + 1);
  }
};

const prevFaq = () => {
  if (currentIndex > 0) {
    setCurrentIndex(currentIndex - 1);
  }
};

  return (
    <div className="I112">
      <h1 className="I112">Frequently Asked Questions</h1>

      <div className="I112">
        {faqData.slice(0, visibleFaqCount).map((faq, index) => (
          <div key={index} className="I112">
            <div className="I112" onClick={() => toggleFaq(index)}>
              <h2>{faq.question}</h2>
              {index === currentIndex ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
            </div>

            {index === currentIndex && (
              <div className="I112">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}

        {visibleFaqCount < faqData.length && (
          <button className="I112" onClick={loadMoreFaqs}>
            Load More
          </button>
        )}

        <div className="I112">
          {currentIndex >= 0 && (
            <>
              <AiOutlineLeft className="I112" onClick={prevFaq} />
              <AiOutlineRight className="I112" onClick={nextFaq} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;

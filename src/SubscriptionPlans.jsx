import React from 'react';
import './SubscriptionPlans.css';

const SubscriptionPlans = () => {
  const green={
      color: 'green',
    }
  const red={
    color: 'red',
  }
  const greentick={
    color:'green',
    marginRight: '10px',
  }
  const redX={
    color:'red',
    marginRight: '10px',
  }
  
  return (
    <div className="subscription-container">
      <div className="plans-row top-row">
        <div className="plan basic">
          <h3>Basic</h3>
          <ul>
            <li style={green}><span style={greentick}>✔</span> Feature 1</li>
            <li style={red}><span style={redX}>✖</span>  Feature 2</li>
            <li style={red}><span style={redX}>✖</span>  Feature 3</li>
            <li  style={green}><span style={greentick}>✔</span>  Feature 4</li>
            <li style={red}><span style={redX}>✖</span>  Feature 5</li>
          </ul>
          <div className="plan1">
          <div className="price1">₹ 79/- <span>Per Month</span></div>
        </div>
        </div>

        <div className="plan standard">
          <h3>Standard</h3>
          <ul>
            <li  style={green}><span style={greentick}>✔</span> Feature 1</li>
            <li  style={green}><span style={greentick}>✔</span> Feature 2</li>
            <li style={red}><span style={redX}>✖</span> Feature 3</li>
            <li style={red}><span style={redX}>✖</span> Feature 4</li>
            <li  style={green}><span style={greentick}>✔</span> Feature 5</li>
          </ul>
          <div className="plan1">
          <div className="price2">₹ 99/- <span>Per Month</span></div>
        </div>
        </div>

        <div className="plan premium">
          <h3>Premium</h3>
          <ul>
            <li  style={green}><span style={greentick}>✔</span> Feature 1</li>
            <li style={green}><span style={greentick}>✔</span> Feature 2</li>
            <li style={green}><span style={greentick}>✔</span> Feature 3</li>
            <li style={green}><span style={greentick}>✔</span> Feature 4</li>
            <li style={green}><span style={greentick}>✔</span> Feature 5</li>
          </ul>
          <div className="plan1">
          <div className="price3">₹ 149/- <span>Per Month</span></div>
        </div>
        </div>
         </div>

    </div>
  );
};

export default SubscriptionPlans;

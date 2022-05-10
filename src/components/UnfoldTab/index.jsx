import "./style.css";
import { useState } from 'react'

function UnfoldTab() {
    
    const [tab, updateTab] = useState(false);
    


  return (
      tab ? (
    <div className="unfoldtab">
      <div>
        <div className="unfoldtab-header">
          <div>Reliablility</div>
          <div onClick={()=> updateTab(false)}>
            <svg
              width="20"
              height="15"
              viewBox="0 5 25 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.66344 0.859489L0.530518 3.00462L12.4604 14.9233L24.3903 2.99257L22.2574 0.859489L12.4604 10.6572L2.66344 0.859489Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <p className="unfoldtab-body">teafeagagrgsfgadfadfadfadfadfadfaf</p>
    </div>
      ) : (
        <div className="unfoldtab">
        <div>
          <div className="unfoldtab-header">
            <div>Reliablility</div>
            <div onClick={()=> updateTab(true)}>
              <svg
                width="20"
                height="15"
                viewBox="0 5 25 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.66344 0.859489L0.530518 3.00462L12.4604 14.9233L24.3903 2.99257L22.2574 0.859489L12.4604 10.6572L2.66344 0.859489Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        
      </div>
      )
  );
}

export default UnfoldTab;

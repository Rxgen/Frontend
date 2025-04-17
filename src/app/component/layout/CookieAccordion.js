'use client';
import { useState } from 'react';

const COOKIE_DATA = [
  {
    category: 'Necessary',
    description: 'Necessary cookies are absolutely essential for the website to function properly. These cookies ensure basic functionalities and security features of the website, anonymously.',
    toggleDisabled: true,

    cookies: [
      {
        name: 'cookielawinfo-checbox-analytics',
        duration: '11 months',
        description: 'Stores user consent for Analytics cookies.',
      },
      {
        name: 'cookielawinfo-checbox-functional',
        duration: '11 months',
        description: 'Stores user consent for Functional cookies.',
      },
      {
        name: 'cookielawinfo-checbox-others',
        duration: '11 months',
        description: 'Stores user consent for Other cookies.',
      },
      {
        name: 'cookielawinfo-checkbox-necessary',
        duration: '11 months',
        description: 'Stores user consent for Necessary cookies.',
      },
      {
        name: 'cookielawinfo-checkbox-performance',
        duration: '11 months',
        description: 'Stores user consent for Performance cookies.',
      },
      {
        name: 'viewed_cookie_policy',
        duration: '11 months',
        description: 'Stores whether user has consented to cookies.',
      },
    ],
  },
  {
    category: 'Functional',
    description: 'Functional cookies help to perform certain functionalities like sharing the content of the website on social media platforms, collect feedbacks, and other third-party features.',
    toggleDisabled: false,
    },
  {
    category: 'Performance',
    description: 'Performance cookies are used to understand and analyze the key performance indexes of the website which helps in delivering a better user experience for the visitors.',
    toggleDisabled: false,
  },
  {
    category: 'Analytics',
    description: 'Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics the number of visitors, bounce rate, traffic source, etc.',
    toggleDisabled: false,
  },
  {
    category: 'Advertisement',
    description: 'Advertisement cookies are used to provide visitors with relevant ads and marketing campaigns. These cookies track visitors across websites and collect information to provide customized ads.',
    toggleDisabled: false,
  },
  {
    category: 'Others',
    description: 'Other uncategorized cookies are those that are being analyzed and have not been classified into a category as yet.',
    toggleDisabled: false,
  },
];

export const CookieAccordion = ({ preferences, setPreferences }) => {
  const [open, setOpen] = useState(null);

  const toggleAccordion = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="cookies_accordion">
      {COOKIE_DATA.map((item, index) => (
        <div key={item.category} className="accordion_item">
          <div className="accordion_header" onClick={() => toggleAccordion(index)}>
            <h4 className='subtitle_18'>{item.category}</h4>
            <label className="switch">
              <input
                type="checkbox"
                checked={preferences[item.category.toLowerCase()]}
                onChange={() =>
                  setPreferences((prev) => ({
                    ...prev,
                    [item.category.toLowerCase()]: !prev[item.category.toLowerCase()],
                  }))
                }
                disabled={item.toggleDisabled}
              />
              <span className="slider round"></span>
            </label>
          </div>

          {open === index && (
            <div className="accordion_content para">
               <p>{item.description}</p>

    {item.cookies && item.cookies.length > 0 && (
      <div className="cookies_table">
         <table>
        <thead>
          <tr>
            <th>Cookie</th>
            <th>Duration</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {item.cookies.map((c, idx) => (
            <tr key={idx}>
              <td>{c.name}</td>
              <td>{c.duration}</td>
              <td>{c.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
     
    )}
  </div>
)}

        </div>
      ))}
    </div>
  );
};

export default CookieAccordion;

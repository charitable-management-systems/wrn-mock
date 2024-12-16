import { Link } from "gatsby"
import { CheckCircle } from 'react-feather'
import PropTypes from "prop-types"
import React from "react"

const Eligibility = () => (
  <div className="background-white flex">
    <div className="info-segment-content vertical-split">
      <h1>Eligibility</h1>
      <p>Traditional high school students, non-traditional students, and GM dealership employees, in the US or Canada, pursuing academic degrees in automotive management, business, and technical certification in automotive education are encouraged to apply. A limited number of scholarships will be awarded for the 2025-2026 academic year in amounts up to $5,000.
      </p>
      <p>The application deadline is April 15, 2025.</p>
    </div>
    <div className="vertical-split">
      <div className="info-block">
        <div className="icon"><CheckCircle color="#1773c3" size={48} /></div>
        <p>To be considered for a GM Women's Retail Network Drive to Succeed Scholarship, a student must meet all of the following criteria:</p>
        <ul>
          <li> Must be female with a high school diploma or GED (as of fall 2025).</li>
          <li>Must be able to verify enrollment at the beginning of the 2025 fall term</li>
          <li>Must be a citizen of the United States (or Canada if attending Georgian or Centennial College), or have the ability to accept permanent employment without the need for visa sponsorship now or in the future</li>
          <li>Must be enrolled in an undergraduate, graduate or non-traditional educational institution that offers formal programs or certifications in automotive retail and/or automotive service; or, currently employed at an automotive dealership and studying in an area that will advance your career within automotive retail.</li>
        </ul>
      </div>
    </div>
  </div>
);

Eligibility.propTypes = {};
Eligibility.defaultProps = {};

export default Eligibility;


import React from 'react';  
import './QAPage.css';

function QAPage() {
  // Add a specific class to the top-level div
  return (
    <div className="qa-page-background">
      <div className="qa-page">
        <div className="qa-item">
          <h2>Questions and Answers</h2>
          <p><strong>Q: How to get ID?</strong></p>
          <p>A: There is a number at the back of the product which is the ID.</p>
        </div>
      </div>
    </div>
  );
}

export default QAPage;

// QAPage.js
import React from 'react';  
import './QAPage.css';

function QAPage() {
  return (
    <div className="qa-page">
      <h2>Questions and Answers</h2>
      <div className="qa-item">
        <p><strong>Q: How to get ID?</strong></p>
        <p>A: There is a number at the back of the product which is the ID.</p>
      </div>
    </div>
  );
}

export default QAPage;

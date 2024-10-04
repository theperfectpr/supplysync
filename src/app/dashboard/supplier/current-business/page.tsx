"use client";
import React, { useState } from "react";

const Page = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const dummyData = [
    { id: 1, name: "Company A", product: "Widget X", units: 100, documents: "View" },
    { id: 2, name: "Company B", product: "Gadget Y", units: 150, documents: "View" },
    { id: 3, name: "Company C", product: "Tool Z", units: 75, documents: "View" },
  ];

  const handleDocumentClick = (company) => {
    setSelectedCompany(company);
    setShowPopup(true);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>Current Business</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={tableHeaderStyle}>Company Name</th>
            <th style={tableHeaderStyle}>Product</th>
            <th style={tableHeaderStyle}>Number of Units</th>
            <th style={tableHeaderStyle}>Documents</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((company) => (
            <tr key={company.id}>
              <td style={tableCellStyle}>{company.name}</td>
              <td style={tableCellStyle}>{company.product}</td>
              <td style={tableCellStyle}>{company.units}</td>
              <td style={tableCellStyle}>
                <button
                  onClick={() => handleDocumentClick(company)}
                  style={documentButtonStyle}
                >
                  {company.documents}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPopup && selectedCompany && (
        <div style={popupOverlayStyle}>
          <div style={popupContentStyle}>
            <h2>{selectedCompany.name} Details</h2>
            <p>Product: {selectedCompany.product}</p>
            <p>Quantity: {selectedCompany.units}</p>
            <p>Budget: ${(selectedCompany.units * 100).toLocaleString()}</p>
            <button onClick={() => setShowPopup(false)} style={closeButtonStyle}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const tableHeaderStyle = {
  padding: '12px',
  textAlign: 'left' as const,
  borderBottom: '1px solid #ddd',
};

const tableCellStyle = {
  padding: '12px',
  borderBottom: '1px solid #ddd',
};

const documentButtonStyle = {
  padding: '6px 12px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const popupOverlayStyle = {
  position: 'fixed' as const,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const popupContentStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
};

const closeButtonStyle = {
  marginTop: '10px',
  padding: '6px 12px',
  backgroundColor: '#dc3545',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default Page;

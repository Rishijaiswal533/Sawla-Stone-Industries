// src/components/QuotationDocument.js

import React from 'react';
import CompanyFooter from './CompanyFooter'; // Assuming you reuse the footer
import { formatCurrency } from '../utils/helpers'; // Assuming this helper is available

const QuotationDocument = React.forwardRef(({ form, calculatedQuote }, ref) => {
  const {
    subtotal,
    gstAmount,
    loadingCharge,
    totalWithoutFreight,
    totalWeightQuintals,
    freightCost,
    grandTotal,
  } = calculatedQuote;
  
  const gstRateDisplay = Math.round(form.gstRate * 100);

  // NOTE: This is a simplified version of the provided image layout. 
  // You would need extensive CSS/Tailwind to perfectly match the original document image.
  
  const currentMonthDayYear = new Date().toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
  });

  return (
    <div className="quotation-print-container" ref={ref}>
      <style>
        {`
          /* Add specific print styles here, like A4 size, no background color, high contrast */
          .quotation-print-container {
            padding: 40px;
            max-width: 794px; /* A4 width in pixels */
            margin: 0 auto;
            background: white;
            color: #333;
            font-family: Arial, sans-serif;
            border: 1px solid #ccc; /* For screen view */
          }
          .header-row { display: flex; justify-content: space-between; margin-bottom: 30px; }
          .logo-title { font-size: 36px; font-weight: bold; color: #696; }
          .company-info, .client-info { font-size: 14px; line-height: 1.6; }
          .table-style { width: 100%; border-collapse: collapse; margin-top: 20px; }
          .table-style th, .table-style td { border: 1px solid #ddd; padding: 10px; text-align: left; }
          .table-style th { background-color: #f5f5f5; font-weight: bold; }
          .summary-table { width: 40%; margin-left: auto; margin-top: 20px; }
        `}
      </style>
      
      <div className="header-row">
        <h1 className="logo-title">QUOTATION</h1>
        <div>
          <p>GST: **{form.gstNumber || 'N/A'}**</p>
          <p>Date: **{currentMonthDayYear}**</p>
          <p>Quotation # **351**</p>
        </div>
      </div>
      
      <div className="header-row">
        <div className="company-info">
          <h3>Sawla Stone Industries</h3>
          <p>Industrial Area, Kudayala</p>
          <p>Ramganjmandi, Kota</p>
          <p>Rajasthan 326519</p>
          <p>Mob: **{form.mobile}**</p>
          <p><a href={`mailto:${form.email}`}>{form.email}</a></p>
        </div>
        <div className="client-info">
          <p>To</p>
          <h3>**{form.fullName}**</h3>
          <p>**{form.companyName || form.fullName}**</p>
          <p>{form.address}</p>
        </div>
      </div>
      
      {/* Stone Details Table */}
      <table className="table-style">
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity (sq ft)</th>
            <th>Unit Price (INR)</th>
            <th>Line Total (INR)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              **{form.stoneType}** ({form.status}, **{form.size}**)
              <br />
              Thickness: **{form.thickness}** inches
            </td>
            <td>{form.quantity}</td>
            <td>{formatCurrency(form.rate)} {form.rateType}</td>
            <td>{formatCurrency(subtotal)}</td>
          </tr>
        </tbody>
      </table>

      {/* Summary Table */}
      <table className="table-style summary-table">
        <tbody>
          <tr>
            <td colSpan="3" style={{ textAlign: 'right', fontWeight: 'bold' }}>Sub Total</td>
            <td>{formatCurrency(subtotal)}</td>
          </tr>
          <tr>
            <td colSpan="3" style={{ textAlign: 'right', fontWeight: 'bold' }}>Loading Charges</td>
            <td>{formatCurrency(loadingCharge)}</td>
          </tr>
          <tr>
            <td colSpan="3" style={{ textAlign: 'right', fontWeight: 'bold' }}>Sales Tax (GST: {gstRateDisplay}%)</td>
            <td>{formatCurrency(gstAmount)}</td>
          </tr>
          <tr>
            <td colSpan="3" style={{ textAlign: 'right', fontWeight: 'bold' }}>Total (Excl. Freight)</td>
            <td>{formatCurrency(totalWithoutFreight)}</td>
          </tr>
        </tbody>
      </table>

      {/* Transportation Table */}
      <h3 style={{ marginTop: '30px', marginBottom: '10px' }}>Transportation (Bhara)</h3>
      <table className="table-style">
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity (quintal)</th>
            <th>Unit Price per quintal (INR)</th>
            <th>Line Total (INR)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Freight for **{form.stoneType}**</td>
            <td>~ {totalWeightQuintals.toFixed(2)} quintal</td>
            <td>{formatCurrency(form.freightRatePerQuintal)} per quintal</td>
            <td>~ {formatCurrency(freightCost)}</td>
          </tr>
        </tbody>
      </table>
      
      <div style={{ textAlign: 'right', fontSize: '18px', fontWeight: 'bold', marginTop: '20px', paddingRight: '10px' }}>
        Total (inc. Freight): {formatCurrency(grandTotal)}
      </div>

      <div style={{ marginTop: '50px', fontSize: '14px', lineHeight: '1.6' }}>
          <p>Make all checks payable to:</p>
          <p style={{ fontWeight: 'bold', marginTop: '10px' }}>Sawla Stone Industries</p>
          <p>A/C No: 078025600000073</p>
          <p>Bank: HDFC Bank</p>
          <p>IFSC Code: HDFC0000780</p>
      </div>

      <p style={{ textAlign: 'center', fontStyle: 'italic', marginTop: '40px' }}>
        Thank you for your business!
      </p>
      
      {/* You might want to remove CompanyFooter from the printed document */}
    </div>
  );
});

export default QuotationDocument;
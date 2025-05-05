import React, { useRef, useState } from 'react';
import jsPDF from 'jspdf';
import './AdmissionForm.css';

const AdmissionForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    phone: '',
    gender: '',
    address: '',
    guardian: '',
    sport: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDownloadPDF = () => {
    const pdf = new jsPDF();

    const logo = new Image();
    logo.src = '/logo.png'; // Ensure this is placed in public/logo.png or adjust the path accordingly
    logo.onload = () => {
      pdf.addImage(logo, 'PNG', 10, 10, 30, 30);

      pdf.setFontSize(18);
      pdf.text('ARS Kreedashala Admission Form', 50, 25);

      pdf.setFontSize(12);
      const entries = [
        ['First Name', formData.firstName],
        ['Last Name', formData.lastName],
        ['Date of Birth', formData.dob],
        ['Gender', formData.gender],
        ['Email', formData.email],
        ['Phone', formData.phone],
        ['Guardian Name', formData.guardian],
        ['Address', formData.address],
        ['Sport Interested', formData.sport]
      ];

      let y = 50;
      entries.forEach(([label, value]) => {
        pdf.text(`${label}:`, 10, y);
        pdf.text(value || '-', 60, y);
        y += 10;
      });

      pdf.setFontSize(10);
      pdf.text('© ARS Kreedashala Pvt. Ltd. All rights reserved.', 10, 280);

      pdf.save('ARS_Admission_Form.pdf');
    };
  };

  return (
    <div className="admission-wrapper">
      <div className="left-panel">
        <img
          src="https://img.freepik.com/free-vector/realistic-soccer-football-yellow-background-design_1017-54727.jpg"
          alt="ARS Banner"
        />
        <span className="brand-tag">ARS Kreedashala</span>
      </div>

      <div className="form-section" ref={formRef}>
        <h2>Admission Form</h2>
        <div className="form-row">
          <input name="firstName" placeholder="First Name" onChange={handleChange} />
          <input name="lastName" placeholder="Last Name" onChange={handleChange} />
        </div>
        <div className="form-row">
          <input name="dob" type="date" placeholder="Date of Birth" onChange={handleChange} />
          <input name="gender" placeholder="Gender" onChange={handleChange} />
        </div>
        <div className="form-row">
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="phone" placeholder="Phone" onChange={handleChange} />
        </div>
        <div className="form-row">
          <input name="guardian" placeholder="Guardian Name" onChange={handleChange} />
          <input name="address" placeholder="Address" onChange={handleChange} />
        </div>
        <div className="form-row">
          <input name="sport" placeholder="Sport Interested" onChange={handleChange} />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} />
          <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} />
        </div>
        <div className="form-footer">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleDownloadPDF}>Download PDF</button>
        </div>
        <div className="footer-info">
          <img src="/logo.png" alt="Company Logo" />
          <p>© ARS Kreedashala Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;

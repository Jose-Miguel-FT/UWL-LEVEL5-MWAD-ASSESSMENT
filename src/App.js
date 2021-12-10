import React from 'react';
import './style.css';
import MedicalTreatment from './components/MedicalTreatment';
import MedicalTreatmentList from './components/MedicalTreatmentList';
import MedicalTreatmentPanel from './components/MedicalTreatmentPanel';

export default function App() {
  const medicalTreatment1 = {
    treatId: '001',
    treatCourseId: '010',
    type: 'Oncology',
    category: 'Nurse',
    name: 'John',
    startDate: new Date(2021, 10, 19).toLocaleDateString()
  };

  const normalData = [
    {
      treatId: '01', treatCourseId: '10', type: 'Oncology', 
      category: 'Nurse', name: 'Liam', startDate: new Date(2021, 0, 1).toLocaleDateString()
    }, 
    {
      treatId: '02', treatCourseId: '20', type: 'Oncology', 
      category: 'Nurse', name: 'Rachel', startDate: new Date(2021, 1, 2).toLocaleDateString()
    },
    {
      treatId: '03', treatCourseId: '30', type: 'Cardiovascular', 
      category: 'Doctor', name: 'Nefer', startDate: new Date(2021, 2, 3).toLocaleDateString()
    },
    {
      treatId: '04',  treatCourseId: '40', type: 'Cardiovascular', 
      category: 'Doctor', name: 'Rosalia', startDate: new Date(2021, 3, 4).toLocaleDateString()
    },
    {
      treatId: '05', treatCourseId: '50', type: 'Paediatrics', 
      category: 'Nurse', name: 'Oscar', startDate: new Date(2021, 4, 5).toLocaleDateString()
    },
  ];

  const jsonData = JSON.stringify(normalData);

  return (
    <div>
      <h1>LH MEDICAL COMPANY</h1>
      <br />
      <MedicalTreatment medicalTreatment={medicalTreatment1} />
      <br />
      <MedicalTreatmentList string={jsonData} />
      <br />
      <MedicalTreatmentPanel />
    </div>
  );
}

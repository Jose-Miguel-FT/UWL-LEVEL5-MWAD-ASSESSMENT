import React from 'react';

function MedicalTreatmentList(props) {
  const treatmentsJson = props.string;
  const medicalTreatmentsArray = JSON.parse(treatmentsJson);

  const listMedicalTreats = medicalTreatmentsArray.map((item) => (
    <li>
      Record {item.treatId} details:
      <div>
        Course ID = {item.treatCourseId}
        <br />
        Type = {item.type}
        <br />
        Category = {item.category}
        <br />
        Name = {item.name}
        <br />
        Date = {item.startDate}
      </div>
      <br />
    </li>
  ));

  const filtering = medicalTreatmentsArray.filter((m) 
  => m.category.includes('Nurse')).map((filteredElement) => (
      <li>
        Treat ID: {filteredElement.treatId}
        <br />
        Course ID: {filteredElement.treatCourseId}
        <br />
        Type: {filteredElement.type}
        <br />
        Name: {filteredElement.name}
        <br />
        <br />
      </li>
    ));

  return (
    <div>
      {listMedicalTreats}
      <p>CATEGORY: Nurse</p>
      {filtering}
    </div>
  );
}

export default MedicalTreatmentList;

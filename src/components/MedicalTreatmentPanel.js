import React from 'react';

function MedicalTreatmentPanel() {
  const [treatId, setTreatId] = React.useState('');
  const [treatCourseId, setTreatCourseId] = React.useState('');
  const [type, setType] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [name, setName] = React.useState('');
  const [startDate, setStartDate] = React.useState('');

  return (
    <div>
      <input
        placeholder="Treatment ID"
        type="text"
        value={treatId}
        onChange={(event) => setTreatId(event.target.value)}
      />
      <input
        placeholder="Treat Coursee ID"
        type="text"
        value={treatCourseId}
        onChange={(event) => setTreatCourseId(event.target.value)}
      />
      <input
        placeholder="Type"
        type="text"
        value={type}
        onChange={(event) => setType(event.target.value)}
      />
      <input
        placeholder="Category"
        type="text"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      />
      <input
        placeholder="Name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="date"
        value={startDate}
        onChange={(event) => setStartDate(event.target.value)}
      />
      <br />
      {treatId}
      <br />
      {treatCourseId}
      <br />
      {type}
      <br />
      {category}
      <br />
      {name}
      <br />
      {startDate}
      <br />
    </div>
  );
}

export default MedicalTreatmentPanel;

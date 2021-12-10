import React from 'react';

function MedicalTreatmentPanel() {
  const [items, setItems] = React.useState([]);
  const [treatId, setTreatId] = React.useState('');
  const [treatCourseId, setTreatCourseId] = React.useState('');
  const [type, setType] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [name, setName] = React.useState('');
  const [startDate, setStartDate] = React.useState('');

  const eventHandler = () => {
    setItems([
      ...items,
      [
        treatId,
        ' ',
        treatCourseId,
        ' ',
        type,
        ' ',
        category,
        ' ',
        name,
        ' ',
        startDate,
      ],
    ]);
  };

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
      <button onClick={eventHandler}> Click </button>
      <br />
      <div>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </div>
    </div>
  );
}

export default MedicalTreatmentPanel;

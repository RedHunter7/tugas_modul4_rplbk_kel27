import React, { useState, useEffect } from "react";
import "./index.css";
export default function Index() {
    const [title, setTitle] = useState('React Hooks at a Glance');
  const [year, setYear] = useState(2019);

  useEffect(() => {
    setTitle(`Teknik Komputer Angkatan ${year}`);
  });

  return (
    <div className="App">
      <h2>{title}</h2>
    </div>
  );
}

"use client";

import { useState } from "react";

export default function DoctorForm() {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    alert("Doctor Added");
  };

  return (
    <form>
      <input
        placeholder="Doctor Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="button" onClick={handleSubmit}>
        Save
      </button>
    </form>
  );
}
"use client";

import { useDoctors } from "../hooks/useDoctors";

export default function DoctorTable() {
  const { doctors } = useDoctors();

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Department</th>
          <th>Specialization</th>
        </tr>
      </thead>

      <tbody>
        {doctors.map((doctor) => (
          <tr key={doctor.id}>
            <td>{doctor.name}</td>
            <td>{doctor.department}</td>
            <td>{doctor.specialization}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
import { Doctor } from "../types/doctor";

interface Props {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: Props) {
  return (
    <div className="doctor-card">
      <h3>{doctor.name}</h3>
      <p>{doctor.specialization}</p>
      <p>{doctor.department}</p>
    </div>
  );
}
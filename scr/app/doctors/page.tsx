import DoctorTable from "./components/DoctorTable";
import DoctorSearch from "./components/DoctorSearch";
import DoctorStats from "./components/DoctorStats";

export default function DoctorsPage() {
  return (
    <div>
      <h1>Doctors</h1>

      <DoctorStats />
      <DoctorSearch />
      <DoctorTable />
    </div>
  );
}
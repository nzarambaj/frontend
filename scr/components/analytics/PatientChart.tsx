import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { day: "Mon", patients: 10 },
  { day: "Tue", patients: 20 },
  { day: "Wed", patients: 15 },
];

export default function PatientChart() {
  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="patients" stroke="#4f46e5" />
    </LineChart>
  );
}
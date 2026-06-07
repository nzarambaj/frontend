import StatCard from "@/components/StatCard";

export default function AnalyticsPage() {
  return (
    <div>
      <h1>Analytics</h1>

      <div className="grid">
        <StatCard title="Patients" value="120" />
        <StatCard title="Studies" value="45" />
        <StatCard title="Completed" value="30" />
      </div>
    </div>
  );
}
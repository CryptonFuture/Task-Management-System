import Card from "../components/(Dashboard)/Card";
import Chart from "../components/(Dashboard)/Chart";
import DashboardLayout from "../Layouts/dashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex flex-col h-screen bg-gray-100">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card
            title="New Task"
            value={10}
            difference="+10"
            Link="/dashboard-images/BlueLine.png"
          />
          <Card
            title="Task Completed"
            value={8}
            difference="+10"
            Link="/dashboard-images/BlueLine.png"
          />
          <Card
            title="Project Done"
            value={10}
            difference="+8"
            Link="/dashboard-images/RedLine.png"
          />
          <Card
            title="In Progress"
            value={10}
            difference="+6"
            Link="/dashboard-images/RedLine.png"
          />
        </div>

        <div>
          <Chart />
        </div>
      </div>
    </DashboardLayout>
  );
}

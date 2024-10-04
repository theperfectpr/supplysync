import DashboardGrid from '@/components/Dashboard/DashboardGrid/DashboardGrid';

const JobSeekerDashboard = () => {
  const gridItems = [
    { title: 'Applied Jobs', value: 12 },
    { title: 'Interviews Scheduled', value: 3 },
    { title: 'Profile Views', value: 45 },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Job Seeker Dashboard</h1>
      <DashboardGrid items={gridItems} />
    </>
  );
};

export default JobSeekerDashboard;
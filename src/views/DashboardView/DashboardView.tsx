import UserInfo from "@/components/UserInfo/UserInfo";

const DashboardView = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-title text-primary mb-6">Profile</h1>
      <UserInfo />
    </div>
  );
};

export default DashboardView;
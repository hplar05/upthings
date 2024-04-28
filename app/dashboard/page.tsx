import Dropzone from "@/components/Dropzone";
import { auth } from "@clerk/nextjs/server";

const Dashboard = () => {
  const { userId } = auth();
  return (
    <main className="h-[100vh]">
      <div>
        <Dropzone />
      </div>
    </main>
  );
};

export default Dashboard;

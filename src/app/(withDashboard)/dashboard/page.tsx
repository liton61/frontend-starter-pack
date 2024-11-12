import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  // console.log(session);

  return (
    <div>
      <h1 className="text-4xl text-center mt-10">
        Welcome {session?.user?.name ?? "Guest"}
      </h1>
      {session?.user?.image ? (
        <Image
          src={session.user.image}
          alt={`${session?.user?.name}'s profile picture`}
          height={100}
          width={100}
          className="mx-auto rounded-full mt-5 border-2 border-red-600 p-1"
        />
      ) : (
        <p className="text-center mt-5">No profile image available</p>
      )}
    </div>
  );
};

export default DashboardPage;

// app/profile/page.js (or app/profile/page.tsx if using TypeScript)
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const UserProfile = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
    console.log(user);
  if (!user) {
    return (
      <div className="min-h-screen items-center">
        <p>Please sign in or register!</p>
      </div>
    );
  }

  return (
    <>
    <h1 className="text-5xl font-bold text-center pt-8">Welcome to your profile.</h1>
    <div className="min-h-screen items-center flex flex-col text-3xl justify-center  ">
     
      <h2>Name: {user?.family_name}  {user?.given_name}</h2>
      
      <p>Email:{user?.email}</p>
    
    </div></>
  );
};

export default UserProfile;

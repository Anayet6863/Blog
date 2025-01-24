import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  console.log(user);

  return (
    <div className="bg-gray-100 ">
      <nav className=" h-[100px] flex justify-between sm:px-5 md:container mx-auto items-center text-2xl">
        <h1 className="text-3xl font-bold">WaveBlog</h1>
        <ul className="flex gap-3">
          <Link href="/">Home</Link>
          <Link href="/profile">profile</Link>
          {user ? (
            <LogoutLink postLoginRedirectURL="/">Log out</LogoutLink>
          ) : (
            <>
              <LoginLink postLoginRedirectURL="/profile">Sign in</LoginLink>
              <RegisterLink postLoginRedirectURL="/profile">
                Sign up
              </RegisterLink>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default page;

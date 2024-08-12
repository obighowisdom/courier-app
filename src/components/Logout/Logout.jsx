'use client'
import Cookies from "js-cookie";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useRouter } from 'next/navigation'
import { Button } from "@chakra-ui/react";



const Logout = () => {
    const router = useRouter()
    const logOut = () => {
        Cookies.remove("loggedIn");
        router.push('/login')
    };
  return (
    <div
      onClick={logOut}
      className="flex h-[100%] w-[250px] flex-col items-center justify-center gap-5 rounded-md border-none bg-dark-700 py-5 dark:bg-gray-5"
    >
      <div className="rounded-[50%] bg-gray-300 p-7">
        <RiLogoutCircleRLine size={25} color="red" />
      </div>
      <Button colorScheme="teal" variant="solid">
        Admin Logout
      </Button>
    </div>
  );
}

export default Logout
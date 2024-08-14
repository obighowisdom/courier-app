
import Link from 'next/link'
import { FaMailBulk } from "react-icons/fa";

const getUsers = async () => {
  try {
    const res = await fetch("https://www.cargoexplore.com/api/contact", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to get clients");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading clients: ", error);
  }
};


const Message = async() => {
  const { contact } = await getUsers();
  
  return (
    <div
      className="flex h-[100%] w-[250px] flex-col items-center justify-center gap-5 rounded-md border-none bg-dark-700 py-5 dark:bg-gray-5"
    >
      <div className="rounded-[50%] bg-gray-300 p-7">
        <FaMailBulk size={25} color="green" />
      </div>
      <Link href='/message' colorScheme="teal" variant="solid">
        {contact.length} {'  '} Messages
      </Link>
    </div>
  );
}

export default Message
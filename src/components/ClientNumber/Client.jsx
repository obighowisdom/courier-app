import { FaUsers } from "react-icons/fa6";

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

const Client = async () => {
  const { contact } = await getUsers();

  return (
    <div className="flex h-[100%] w-[250px] flex-col items-center justify-center gap-5 rounded-md border-none bg-dark-700 py-5 dark:bg-gray-5">
      <div className="rounded-[50%] bg-gray-300 p-7">
        <FaUsers size={25} color="blue" />
      </div>
      <div className=" flex flex-col gap-1 items-center justify-center rounded-lg bg-gray-1 p-3">
        <h3 className="font-bold text-[20px] text-red-950">{contact.length}</h3>
        Number of Clients
      </div>
    </div>
  );
};

export default Client;

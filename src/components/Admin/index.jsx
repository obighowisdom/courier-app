import { IoMdPersonAdd } from "react-icons/io";
import { Button } from "@chakra-ui/react";
import AdminTable from "@/components/AdminTable";
import { FaUserGroup } from "react-icons/fa6";

const Admin = () => {
  return (
    <section
      id="about"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex w-[100%] flex-wrap items-center justify-center gap-8 mb-10">
            <div className="flex h-[100%] w-[250px] flex-col items-center justify-center gap-5 rounded-md border-none bg-dark-700 py-5 dark:bg-gray-5">
              <div className="rounded-[50%] bg-gray-300 p-7">
                <IoMdPersonAdd size={25} color="blue" />
              </div>
              <Button colorScheme="teal" variant="solid">
                Add Client
              </Button>
            </div>
            <div className="flex h-[100%] w-[250px] flex-col items-center justify-center gap-5 rounded-md border-none bg-dark-700 py-5 dark:bg-gray-5">
              <div className="rounded-[50%] bg-gray-300 p-7">
                <FaUserGroup size={25} color="blue" />
              </div>
              <Button colorScheme="teal" variant="solid">
                25 Clients
              </Button>
            </div>
            <div className="flex h-[100%] w-[250px] flex-col items-center justify-center gap-5 rounded-md border-none bg-dark-700 py-5 dark:bg-gray-5">
              <div className="rounded-[50%] bg-gray-300 p-7">
                <IoMdPersonAdd size={25} color="blue" />
              </div>
              <Button colorScheme="teal" variant="solid">
                Contacts
              </Button>
            </div>
          </div>

          <AdminTable />
        </div>
      </div>
    </section>
  );
};

export default Admin;

import { IoMdPersonAdd } from "react-icons/io";
import AdminTable from "@/components/AdminTable";
import { GrUpdate } from "react-icons/gr";
import Message from "../Message/Message";
import Link from "next/link";
import Client from "../ClientNumber/Client";

const Admin = () => {
  return (
    <section
      id="about"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 mb-10 flex w-[100%] flex-wrap items-center justify-center gap-8">
            <div className="flex h-[100%] w-[250px] flex-col items-center justify-center gap-5 rounded-md border-none bg-dark-700 py-5 dark:bg-gray-5">
              <div className="rounded-[50%] bg-gray-300 p-7">
                <IoMdPersonAdd size={25} color="blue" />
              </div>
              <Link
                href={"/add-client"}
                colorScheme="teal"
                variant="solid"
                className="rounded-lg bg-gray-1 p-3"
              >
                Add Client
              </Link>
            </div>

            <div className="flex h-[100%] w-[250px] flex-col items-center justify-center gap-5 rounded-md border-none bg-dark-700 py-5 dark:bg-gray-5">
              <div className="rounded-[50%] bg-gray-300 p-7">
                <GrUpdate size={25} color="red" />
              </div>
              <Link
                href={"/update"}
                colorScheme="teal"
                variant="solid"
                className="rounded-lg bg-gray-1 p-3"
              >
                Update Info
              </Link>
            </div>
            <Client />

            <Message />
          </div>

          <AdminTable />
        </div>
      </div>
    </section>
  );
};

export default Admin;

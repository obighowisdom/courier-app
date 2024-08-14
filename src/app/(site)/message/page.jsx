import React from "react";
import MessageTable from "../../../components/MessageTable/MesageTable";

const page = () => {
  return (
    <div
      className="absolute right-0 top-0 z-50 flex h-[100%] w-full items-center justify-center overflow-hidden
                 backdrop-blur "
    >
      <div className="h-[600px] w-[500px]  overflow-scroll rounded-md bg-white p-8">
        <MessageTable />
      </div>
    </div>
  );
};

export default page;

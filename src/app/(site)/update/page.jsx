"use client";

import React, { useState } from "react";
import { Spinner } from "@chakra-ui/react";
import { useRouter } from "next/navigation";



const UpdateClient = () => {
 
  const router = useRouter();

  const [trackingID, setTrackingID] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

 

  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    setLoader(true);
    e.preventDefault();
    try {
      const res = await fetch("https://www.cargoexplore.com/api/update", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          trackingID,
          title,
          company,
          date,
          time,
        }),
      });
      if (res.ok) {
        alert("Added update successfully");
        setLoader(false);
        router.push("/exploreAdministration_ADMIN");
      } else {
        throw new Error("Failed to create a client");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="absolute right-0 top-0 z-50 flex h-[100vh] w-full items-center justify-center overflow-hidden
                 backdrop-blur "
    >
      <div className="h-[600px] w-[500px]  overflow-scroll rounded-md bg-white p-8">
        <form>
          <div className="flex flex-wrap items-center justify-between">
            <div className="mb-[22px]">
              <label
                htmlFor="phone"
                className="mb-4 block text-sm text-body-color dark:text-dark-6"
              >
                Tracking ID*
              </label>
              <input
                onChange={(e) => setTrackingID(e.target.value)}
                value={trackingID}
                type="text"
                placeholder="+885 1254 5211 552"
                className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
              />
            </div>
            <div className="mb-[22px]">
              <label
                htmlFor="phone"
                className="mb-4 block text-sm text-body-color dark:text-dark-6"
              >
                Title*
              </label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
                className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
              />
            </div>
            <div className="mb-[22px]">
              <label
                htmlFor="phone"
                className="mb-4 block text-sm text-body-color dark:text-dark-6"
              >
                company*
              </label>
              <input
                onChange={(e) => setCompany(e.target.value)}
                value={company}
                type="text"
                className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
              />
            </div>

            <div className="mb-[22px]">
              <label
                htmlFor="phone"
                className="mb-4 block text-sm text-body-color dark:text-dark-6"
              >
                Date*
              </label>
              <input
                onChange={(e) => setDate(e.target.value)}
                value={date}
                type="text"
                className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
              />
            </div>
            <div className="mb-[22px]">
              <label
                htmlFor="phone"
                className="mb-4 block text-sm text-body-color dark:text-dark-6"
              >
                Time*
              </label>
              <input
                onChange={(e) => setTime(e.target.value)}
                value={time}
                type="text"
                className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
              />
            </div>
          </div>

          <div className="mb-0 flex flex-wrap items-center gap-3">
            {loader ? (
              <button
                disabled
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/90"
              >
                <Spinner />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/90"
              >
                Submit
              </button>
            )}

            <button
              onClick={() => router.push("/exploreAdministration_ADMIN")}
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-red-950 px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/90"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateClient;

"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const EditForm = ({ id, status, delDate, mode, officer, comment, map }) => {
  const [newStatus, setNewStatus] = useState(status);
  const [newDelDate, setNewDelDate] = useState(delDate);
  const [newMode, setNewMode] = useState(mode);
  const [newOfficer, setNewOfficer] = useState(officer);
  const [newComment, setNewComment] = useState(comment);
  const [newMap, setNewMap] = useState(map);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newStatus,
          newDelDate,
          newMode,
          newOfficer,
          newComment,
          newMap,
        }),
      });
      if (!res.ok) {
        throw new Error("failled to update");
      }
      router.push("/exploreAdministration_ADMIN");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="absolute right-0 top-0 z-50 flex h-[100%] w-full items-center justify-center overflow-hidden
                 backdrop-blur "
    >
      <div className="h-[600px] w-[500px]  overflow-scroll rounded-md bg-white p-8">
        <form>
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex w-[100%] flex-wrap justify-between gap-3">
              <div className="mb-[22px]">
                <label
                  htmlFor="phone"
                  className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                  User ID*
                </label>
                <input
                  value={id}
                  disabled
                  type="text"
                  name="phone"
                  className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                />
              </div>

              <div className="mb-[22px]">
                <label
                  htmlFor="phone"
                  className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                  Status*
                </label>
                <select
                  className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  name=""
                  id=""
                  onChange={(e) => setNewStatus(e.target.value)}
                  value={newStatus}
                >
                  <option value="Pending">Pending</option>
                  <option value="En-Route">En-Route</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
            <div className="flex w-[100%] flex-wrap justify-between gap-3">
              <div className="mb-[22px]">
                <label
                  htmlFor="phone"
                  className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                  Expected Delivery Date*
                </label>
                <input
                  onChange={(e) => setNewDelDate(e.target.value)}
                  value={newDelDate}
                  type="text"
                  name="phone"
                  className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                />
              </div>
              <div className="mb-[22px]">
                <label
                  htmlFor="phone"
                  className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                  Freight*
                </label>
                <select
                  className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  name=""
                  id=""
                  onChange={(e) => setNewMode(e.target.value)}
                  value={newMode}
                >
                  <option value="Air">Air</option>
                  <option value="Sea">Sea</option>
                  <option value="Land">Land</option>
                  <option value="Train">Train</option>
                </select>
              </div>
            </div>

            <div className="flex w-[100%] flex-wrap justify-between gap-3">
              <div className="mb-[22px]">
                <label
                  htmlFor="phone"
                  className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                  Officer-Incharge*
                </label>
                <input
                  onChange={(e) => setNewOfficer(e.target.value)}
                  value={newOfficer}
                  type="text"
                  name="phone"
                  className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                />
              </div>
              <div className="mb-[22px]">
                <label
                  htmlFor="phone"
                  className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                  Officer Comment*
                </label>
                <input
                  onChange={(e) => setNewComment(e.target.value)}
                  value={newComment}
                  type="text"
                  name="phone"
                  className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                />
              </div>
            </div>

            <div className="mb-[22px] w-[100%]">
              <label
                htmlFor="phone"
                className="mb-4 block text-sm text-body-color dark:text-dark-6"
              >
                Map Location*
              </label>
              <input
                onChange={(e) => setNewMap(e.target.value)}
                value={newMap}
                type="text"
                name="phone"
                className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
              />
            </div>
          </div>

          <div className="mb-0 flex flex-wrap items-center gap-3">
            <button
              onClick={handleSubmit}
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/90"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm;

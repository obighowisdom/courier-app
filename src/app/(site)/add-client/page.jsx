"use client";

import React, { useState, } from "react";
import countryList from "react-select-country-list";
import {useRouter} from "next/navigation";

function createRandomString(length) {
  const chars = "ABCDEFGHIJKLMNOPQRS-TUVWXYZ-0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

const AddClient = () => {
  const trackingID = "CEXP-" + createRandomString(8).toString();
  const orderID = "CEXP-ORD-" + createRandomString(7).toString();

  const router = useRouter();

  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [clientCountry, setClientCountry] = useState("");
  const [senderName, setSenderName] = useState("");
  const [senderTel, setSenderTel] = useState("");
  const [senderCountry, setSenderCountry] = useState("");
  const [destination, setDestination] = useState("");
  const [orderDate, setOrderDate] = useState('');
  const [packageWeight, setPackageWeight] = useState("");
  const [packageDesc, setPackageDesc] = useState("");
  const [status, setStatus] = useState("");
  const [delDate, setDelDate] = useState('');
  const [mode, setMode] = useState("");
  const [officer, setOfficer] = useState("");
  const [comment, setComment] = useState("");
    const [map, setMap] = useState("");

    
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          clientName,
          email,
          state,
          clientCountry,
          trackingID,
          orderID,
          senderName,
          senderTel,
          senderCountry,
          destination,
          orderDate,
          packageWeight,
          packageDesc,
          status,
          delDate,
          mode,
          officer,
          comment,
          map,
        }),
      });
        if (res.ok) {
            alert("Added client successfully")
            router.push('/admin')
        } else {
            throw new Error("Failed to create a client")
        }
    } catch (error) {
        console.log(error)
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
                Full Name*
              </label>
              <input
                onChange={(e) => setClientName(e.target.value)}
                value={clientName}
                type="text"
                name="phone"
                placeholder="+885 1254 5211 552"
                className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
              />
            </div>
            <div className="mb-[22px]">
              <label
                htmlFor="phone"
                className="mb-4 block text-sm text-body-color dark:text-dark-6"
              >
                Email Address*
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
                State*
              </label>
              <input
                onChange={(e) => setState(e.target.value)}
                value={state}
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
                Client Country*
              </label>
              <input
                onChange={(e) => setClientCountry(e.target.value)}
                value={clientCountry}
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
                Sender Name*
              </label>
              <input
                onChange={(e) => setSenderName(e.target.value)}
                value={senderName}
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
                Sender Tel*
              </label>
              <input
                onChange={(e) => setSenderTel(e.target.value)}
                value={senderTel}
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
                Sender Country*
              </label>
              <input
                onChange={(e) => setSenderCountry(e.target.value)}
                value={senderCountry}
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
                Delivery Address*
              </label>
              <input
                onChange={(e) => setDestination(e.target.value)}
                value={destination}
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
                Ordered Date*
              </label>
              <input
                value={orderDate}
                onChange={(e) => {
                  setOrderDate(e.target.value);
                }}
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
                Package Weight*
              </label>
              <input
                onChange={(e) => setPackageWeight(e.target.value)}
                value={packageWeight}
                type="text"
                name="phone"
                placeholder="80kg"
                className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
              />
            </div>
            <div className="mb-[22px]">
              <label
                htmlFor="phone"
                className="mb-4 block text-sm text-body-color dark:text-dark-6"
              >
                Package Description*
              </label>
              <input
                onChange={(e) => setPackageDesc(e.target.value)}
                value={packageDesc}
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
                onChange={(e) => setStatus(e.target.value)}
                value={status}
              >
                <option value="Pending">Pending</option>
                <option value="En-Route">En-Route</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
            <div className="mb-[22px]">
              <label
                htmlFor="phone"
                className="mb-4 block text-sm text-body-color dark:text-dark-6"
              >
                Expected Delivery Date*
              </label>
              <input
                value={delDate}
                onChange={(e) => {
                  setDelDate(e.target.value);
                }}
                type="date"
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
                onChange={(e) => setMode(e.target.value)}
                value={mode}
              >
                <option value="Air">Air</option>
                <option value="Sea">Sea</option>
                <option value="Land">Land</option>
                <option value="Train">Train</option>
              </select>
            </div>

            <div className="mb-[22px]">
              <label
                htmlFor="phone"
                className="mb-4 block text-sm text-body-color dark:text-dark-6"
              >
                Officer-Incharge*
              </label>
              <input
                onChange={(e) => setOfficer(e.target.value)}
                value={officer}
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
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                type="text"
                name="phone"
                className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
              />
            </div>
            <div className="mb-[22px] w-[100%]">
              <label
                htmlFor="phone"
                className="mb-4 block text-sm text-body-color dark:text-dark-6"
              >
                Map Location*
              </label>
              <input
                onChange={(e) => setMap(e.target.value)}
                value={map}
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
              Submit
            </button>
            <button
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

export default AddClient;

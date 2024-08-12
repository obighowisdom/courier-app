import React from "react";
import EditForm from "../../../../components/EditForm/EditForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`https://www.cargoexplore.com/api/topics/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error('failed to fetch users')
    }
    return res.json()
  } catch (error) {
    console.log(error)
  }
};

const page = async ({ params }) => {
  const { id } = params;
  const { topic } = await getTopicById(id)
  const {status, delDate, mode, officer, comment, map}= topic
  return <EditForm id={id} status={status} delDate={delDate} mode={mode} officer={officer} comment={comment} map={map} />;
};

export default page;

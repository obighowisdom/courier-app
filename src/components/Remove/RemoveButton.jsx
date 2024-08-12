'use client'
import React from 'react'
import {useRouter} from 'next/navigation'
import { MdDeleteSweep } from "react-icons/md";

const RemoveButton = ({ id }) => {
    const router = useRouter()
    const removeUser = async () => {
        const confirmed = confirm('Do you want to delete the user?')
        if (confirmed) {
            const res = await fetch(
              `http://localhost:3000/api/topics?id=${id}`,
              { method: "DELETE" },
            );
            if (res.ok) {
                router.refresh()
            }
        }
    }
  return (
    <div onClick={removeUser}>
      <MdDeleteSweep color="red" />
    </div>
  );
}

export default RemoveButton


const GetUsers = async () => {
    const getUsers = async () => {
      try {
        const res = await fetch("https://www.cargoexplore.com/api/topics", {
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
    const { topics } = await getUsers();
    const users = topics.map((user)=>(user))

  return users;
};

export default GetUsers;

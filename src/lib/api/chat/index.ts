import instance from "../init";

const getGroupsApi = async () => {
  const res = await instance.get("/api/groups/my-groups");
  return res;
};

export { getGroupsApi };

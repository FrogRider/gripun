import { httpGet } from "@/services/http-client";

const resource = "/user-count";

const getUsersCount = async () => {
  const response = await httpGet(resource);

  return response.data.cnt;
};

export default getUsersCount

import { httpPost } from "@/services/http-client";

const resource = "/email";

const sentEmail = async email => {
  const response = await httpPost(resource, {'email': email});

  return response.data;
};

export default sentEmail;

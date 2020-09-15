import { instance } from "./config";

export async function getAccessToken(username, password) {
  try {
    const { data } = await instance.post("/access-tokens", {
      data: {
        type: "access-tokens",
        attributes: { username, password },
      },
    });

    return data.data.attributes.acessToken;
  } catch (err) {
    return null;
  }
}

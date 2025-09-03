import { baseUrl } from "$src/constants";

export const load = async ({ params }) => {
  try {
    const url = baseUrl;
    const resp = await fetch(url + `news/${params.id}`);
    const article = await resp.json();
    return {
      article
    }
  } catch (err) {
    return null
  }
};
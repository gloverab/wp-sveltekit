import { baseUrl } from "$src/constants";

const getPerformer = async (_fetch) => {
  try {
    const resp = await _fetch(baseUrl + "performers/1");
    if (resp.status === 200) {
      const data = await resp.json();
      return data;
    } else {
      throw resp;
    }
  } catch (err) {
    console.log(err);
  }
};

const getNews = async (_fetch) => {
  try {
    const resp = await _fetch(baseUrl + "performers/1/news");
    if (resp.status === 200) {
      const data = await resp.json();
      return data;
    } else {
      throw resp;
    }
  } catch (err) {
    console.log(err);
  }
};

export const load = async ({ fetch }) => {
  try {
    const data = await Promise.all([getPerformer(fetch), getNews(fetch)]);
    return {
      performer: data[0],
      news: data[1]
    }
  } catch (err) {
    return {
      performer: null,
      news: null
    }
  }
}
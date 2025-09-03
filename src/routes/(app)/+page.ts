import { baseUrl } from "$src/constants";

const getPerformer = async () => {
  try {
    const resp = await fetch(baseUrl + "performers/1");
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

const getNews = async () => {
  try {
    const resp = await fetch(baseUrl + "performers/1/news");
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

export const load = async () => {
  try {
    const data = await Promise.all([getPerformer(), getNews()]);
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
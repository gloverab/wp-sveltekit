import { baseUrl } from "$src/constants";
import { newsStore } from "$src/stores/main";
import { get } from "svelte/store";

const getArticle = (id) => {
  return new Promise(async (res, rej) => {
    try {
      const url = baseUrl
      const resp = await fetch(url + `news/${id}`)
      if (resp.status === 200) {
        const data = await resp.json()
        res(data)
      } else {
        rej(resp)
      }
    } catch (err) {
      console.log(err)
    }
  })
}


export const load = async ({ params }) => {
  const id = params.id
  const existingNews = get(newsStore)
  let article = existingNews.find(item => item.id === id)
  try {
    if (!article) {
      const data = await getArticle(id)
      console.log(data)
      article = data
    }
    return {
      article
    }
  } catch (err) {
    console.log(err)
  }
}
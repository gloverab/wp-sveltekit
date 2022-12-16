import { baseUrl } from "$src/constants";
import { newsStore } from "$src/stores/main";
const url = baseUrl

const timeoutPromise = new Promise((res, rej) => {
  setTimeout(rej, 500, 'forceTimeout')
})

const getPerformer = new Promise(async (res, rej) => {
  const resp = await fetch(url + 'performers/1')
  if (resp.status === 200) {
    const data = await resp.json()
    res(data)
  } else {
    rej(resp)
  }
})

const getNews = new Promise(async (res, rej) => {
  const resp = await fetch(url + 'performers/1/news')
  if (resp.status === 200) {
    const data = await resp.json()
    res(data)
  } else {
    rej(resp)
  }
})

const getPerformerRace = Promise.race([
  getPerformer,
  timeoutPromise
])

const getNewsRace = Promise.race([
  getNews,
  timeoutPromise
])

export const load = async () => {
  try {
    const data = await Promise.all([getPerformerRace, getNewsRace])
    newsStore.set(data)
    
    return {
      performer: data[0],
      news: data[1]
    }
  } catch (err) {
    console.log(err)
    return {}
  }
}
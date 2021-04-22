import axios from 'axios'

export const BACKEND_API_BASE_URL = 'http://localhost:3005'

export const WIKIPEDIA = 1
export const OTHER_SOURCE = 2

async function getWikiBaseItemId(title) {
  const res = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&prop=pageprops&format=json&origin=*&titles=${title.split(' ').join('_')}`)
  return Object.values(res.data.query.pages)[0].pageprops.wikibase_item
}

async function getWikiPageInfo(title, languages) {
  const wikibase_item = await getWikiBaseItemId(title)
  const res = await axios.get(`https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&origin=*&props=sitelinks&ids=${wikibase_item}`)
  
  const pageInfo = []
  const siteLinks = res.data.entities[wikibase_item].sitelinks
  await Promise.all(languages.map(async (item, index) => {
    const langCode = item.langCode
    
    const sameLangCode = Object.keys(siteLinks).filter(key => {
      if (key.slice(0, key.length - 4) === langCode) 
        return langCode
    })

    if (sameLangCode.length > 0) {
      const response = await axios.get(`http://${langCode}.wikipedia.org/w/api.php?format=json&origin=*&action=query&list=search&srwhat=nearmatch&srlimit=1&srsearch=${title.split(' ').join('_')}`)
      pageInfo.push({
        langCode: langCode, 
        langName: item.langName,
        link: `https://${langCode}.wikipedia.org/wiki/${title.split(' ').join('_')}`, 
        wordCount: response.data.query.search[0].wordcount 
      })
    } 
  }))
  return pageInfo
}

export async function getPageInfo(title, languages, source = 1) {
  switch (source) {
    case WIKIPEDIA:
      return await getWikiPageInfo(title, languages)
    case OTHER_SOURCE:
      break;
    default:
  }
}


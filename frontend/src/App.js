import React, { useContext, useEffect } from 'react';
import './App.css';
import { BACKEND_API_BASE_URL, getPageInfo } from './api/api'
import axios from 'axios'

import DataContext from './contexts/DataContext'
import StateContext from './contexts/StateContext'

import CharacterList from './components/CharacterList'
import WikipediaPageList from './components/WikipediaPageList'
import SkeletonCharacterList from './components/SkeletonCharacterList'
import SkeletonWikipediaPageList from './components/SkeletonWikipediaPageList'
import Loader from 'react-loader-spinner'

function App() {
  const { setCharacters, setLanguages } = useContext(DataContext)
  const { isLoading, setIsLoading } = useContext(StateContext)

  useEffect(() => {
    setIsLoading(true)
    axios.get(BACKEND_API_BASE_URL + '/characters').then((characterData) => {
      axios.get(BACKEND_API_BASE_URL + '/languages').then((languageData) => {
        const characters = []
        const languages = []

        languageData.data.map((language) => {
          languages.push({langCode: language.lang_code, langName: language.lang_name})
        })

        setLanguages(languages)

        Promise.all(characterData.data.map(async (character) => {
          characters.push({ name: character.name })
          return await getPageInfo(character.name, languages)
        })).then((pageInfo) => {
          characters.map((item, index) => {
            characters[index].pageInfo = pageInfo[index]
          })
          setCharacters(characters)
          setIsLoading(false)
        }).catch((error) => {
          setIsLoading(false)
          window.alert(error.message)
        })
      })
    })
  }, [])

  return (
    <div className="App">
      <div className={`loading-spinner__container ${isLoading ? 'loading' : ''}`}>
        <Loader className="loading-spinner" type="ThreeDots" color="#00BFFF" height={80} width={80} />
      </div>
      <div style={{ display: "flex" }}>
        {
          isLoading ?
            <>
              <SkeletonCharacterList/>
              <SkeletonWikipediaPageList/> 
            </> 
            :
            <>
              <CharacterList/>
              <WikipediaPageList/> 
            </> 
        }
      </div>
    </div>
  );
}

export default App;

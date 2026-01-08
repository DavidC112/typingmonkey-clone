import React, { createContext, useContext, useEffect, useState } from 'react'

type TextContextType = {
  text: string []
  currentLine: string,
  nextLine: () => void
}

const TextContext = createContext<TextContextType|undefined>(undefined)

const TextContextProvider = ({children}: {children: React.ReactNode}) => {

  const [textLines, setTextLines] = useState<string[]>([])
  const [lineIdx, setLineIdx] = useState<number>(0)


  useEffect(() => {
    fetch("data.json")
    .then(res => res.json())
    .then(data => setTextLines(data.text))
  })

  const nextLine = () =>{
    if(lineIdx < textLines.length - 1){
      setLineIdx(prev => prev + 1)
    }
  }

  return (
    <TextContext.Provider value = {{text:textLines, currentLine: textLines[lineIdx], nextLine}}>
      {children}
    </TextContext.Provider>
  )
}


export const useTextContext = () => {
  const ctx = useContext(TextContext)

  if(!ctx)
  {
    throw new Error("Something went wrong, I can feel it.")
  }

  return ctx
}

export default TextContextProvider
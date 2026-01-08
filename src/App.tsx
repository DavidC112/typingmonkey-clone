import { useContext, useState } from "react"
import { useTextContext } from "./context/TextContextProvider"

const App = () => {

  const {currentLine, text, nextLine} = useTextContext()
  const [typedText, setTypedText] = useState("")
  const matchTest = (idx:number) =>{
    
    if(currentLine[idx] === typedText[idx]) return "good"
    if(idx > typedText.length - 1) return "untouched"
    return "bad"
  }

  const changeLine = (e:React.KeyboardEvent) =>{
    if(e.key!="Enter") return
    setTypedText("")
    nextLine()
  }
  
  return (
    <div>
      <label htmlFor="textInput">{currentLine && Array.from(currentLine).map((kar, idx) => <span className={matchTest(idx)}>{kar}</span>)}</label>
      <input id="textInput" type="text" value={typedText} onChange={(e) => setTypedText(e.target.value)}/>
    </div>
  )
}

export default App
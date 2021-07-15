
import MemeContainer from "./components/MemeContainer";
import GenerateMeme from './components/GenerateMeme';
import { useEffect, useState } from "react";

const MEME_URL = "https://api.imgflip.com/get_memes";

const App = () => {
  const [memes, setMemes] = useState(null);
  const [genMeme, setGenMeme] = useState(null);
  useEffect(() =>{
      fetch(MEME_URL).then(data => data.json())
      .then(data=> {
          setMemes(data.data.memes);
      })
  }, [])

  const displayGenerateMeme = memeData => {
      setGenMeme(memeData)
  }

  const updateMemeData = newData => {
    setGenMeme(newData);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Meme Generator!</h2>
      </header>
      <div className="content">
        {memes && !genMeme ? <MemeContainer memeTemplates={memes} generateMeme={displayGenerateMeme} /> :
          (genMeme && <GenerateMeme chooseTemplate={()=>displayGenerateMeme(null)} updateMemeData={updateMemeData} memeData={genMeme} />)}
      </div>
    </div>
  );
}

export default App;

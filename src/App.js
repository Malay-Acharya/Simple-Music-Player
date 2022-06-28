import AudioPlayer from "./components/AudioPlayer";
import Playlist from "./components/Playlist";
import './App.css'

function App() {
  return (
    <div className="main-app">
      <AudioPlayer/>
      <div className="vl"></div>
      <Playlist/>
    </div>
  );
}

export default App;

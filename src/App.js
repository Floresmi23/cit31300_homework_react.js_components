import './App.css';
import Post from "./components/Post";



function App() {
  return (
    <div className="App">
      <Post data={{name1:"Michael", color1:"blue",name2:"Blake", color2:"Red", name3:"John", color3:"green"}}/>
    </div>
  );
}

export default App;

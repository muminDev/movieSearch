import { useEffect } from "react";
import "./App.css";
//bbbbbb27
const API_URL = "https://www.omdbapi.com?apikey=bbbbbb27";

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies();
  }, []);
  return <></>;
}

export default App;

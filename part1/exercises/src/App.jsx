import logo from "./logo.svg";
import "./App.css";
import MovieList from "./components/MovieList.jsx";
import ChoresList from "./components/ChoresList.jsx";
import BookList from "./components/BookList.jsx";
import HobbyList from "./components/HobbyList.jsx";

function App() {
  return (
    <div className="App">
      <MovieList />
      <ChoresList />
      <BookList />
      <HobbyList />
    </div>
  );
}

export default App;

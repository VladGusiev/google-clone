import '../App.css';
import NavBar from "./NavBar.js";
import Title from "./Title.js"
import SearchBar from "./SearchBar";
import LowerBody from "./LowerBody";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
        <NavBar />
        <Title/>
        <SearchBar/>
        <LowerBody/>
        <Footer/>
    </div>
  );
}

export default App;

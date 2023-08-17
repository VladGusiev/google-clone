import '../App.css';
import NavBar from "./NavBar.js";
import Title from "./Title.js"
import SearchBar from "./SearchBar";
import LowerBody from "./LowerBody";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
        <div className="full-width">
            <NavBar />
        </div>

        <div className="full-width">
            <Title/>
            <SearchBar/>
            <LowerBody/>
        </div>
        <div className="full-width"></div>

        <div className="full-width">
            <Footer/>
        </div>
    </div>
  );
}

export default App;

import React from "react";
import "../styles/SearchBar.css";

function SearchBar() {
    return (
        <>
            <div className="search-bar-wrapper">
                <div className="search-bar">
                    <div className="icon">🔍</div>
                    <form>
                        <input type="text"/>
                        <button type="reset">✖</button>
                    </form>
                    <div className="right-icon">⌨️</div>
                    <div className="right-icon">📷</div>
                </div>
            </div>
            <div className="btns-undr-srch-br">
                <button className="bonus-btn">Search by Google</button>
                <button className="bonus-btn">I feel lucky</button>
            </div>
        </>
    )
}
export default SearchBar;
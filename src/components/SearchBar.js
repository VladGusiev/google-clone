import React from "react";
import "../styles/SearchBar.css";

function SearchBar() {
    return (
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
    )
}
export default SearchBar;
import React from "react";
import "../styles/Footer.css";

function Footer() {
    return (
        <footer>
            <div className="footr-1st-line">United Kingdom</div>
            <div className="footr-2nd-line">
                <div className="footr-left-side">
                    <a className="footr-link" href="#">About Google</a>
                    <a className="footr-link" href="#">Advertisment</a>
                    <a className="footr-link" href="#">Firm</a>
                    <a className="footr-link" href="#">How Searching Works</a>
                </div>
                <div className="footr-right-side">
                    <a className="footr-link" href="#">Personal Safety</a>
                    <a className="footr-link" href="#">Agreement</a>
                    <a className="footr-link" href="#">Settings</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
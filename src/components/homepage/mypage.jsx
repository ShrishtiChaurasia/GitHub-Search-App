import React from "react";
import { Link } from "react-router-dom";
import "./homepages.css";

function Mypage() {
  return (
    <div className="container">
      <div className="main">
        <div className="cover">
          <div className="written">
            <h2>Welcome</h2>
            <p>SHRISHTI / GitHub-User-Search-App</p>
            <button>
              <Link to="/about">Let's Go!</Link>
            </button>
          </div>
          <div className="earthing">
            <div className="section-banner">
              <div id="star-1">
                <div className="curved-corner-star">
                  <div id="curved-corner-bottomright"></div>
                  <div id="curved-corner-bottomleft"></div>
                </div>
                <div className="curved-corner-star">
                  <div id="curved-corner-topright"></div>
                  <div id="curved-corner-topleft"></div>
                </div>
              </div>

              <div id="star-2">
                <div className="curved-corner-star">
                  <div id="curved-corner-bottomright"></div>
                  <div id="curved-corner-bottomleft"></div>
                </div>
                <div className="curved-corner-star">
                  <div id="curved-corner-topright"></div>
                  <div id="curved-corner-topleft"></div>
                </div>
              </div>

              <div id="star-3">
                <div className="curved-corner-star">
                  <div id="curved-corner-bottomright"></div>
                  <div id="curved-corner-bottomleft"></div>
                </div>
                <div className="curved-corner-star">
                  <div id="curved-corner-topright"></div>
                  <div id="curved-corner-topleft"></div>
                </div>
              </div>

              <div id="star-4">
                <div className="curved-corner-star">
                  <div id="curved-corner-bottomright"></div>
                  <div id="curved-corner-bottomleft"></div>
                </div>
                <div className="curved-corner-star">
                  <div id="curved-corner-topright"></div>
                  <div id="curved-corner-topleft"></div>
                </div>
              </div>

              <div id="star-5">
                <div className="curved-corner-star">
                  <div id="curved-corner-bottomright"></div>
                  <div id="curved-corner-bottomleft"></div>
                </div>
                <div className="curved-corner-star">
                  <div id="curved-corner-topright"></div>
                  <div id="curved-corner-topleft"></div>
                </div>
              </div>

              <div id="star-6">
                <div className="curved-corner-star">
                  <div id="curved-corner-bottomright"></div>
                  <div id="curved-corner-bottomleft"></div>
                </div>
                <div className="curved-corner-star">
                  <div id="curved-corner-topright"></div>
                  <div id="curved-corner-topleft"></div>
                </div>
              </div>

              <div id="star-7">
                <div className="curved-corner-star">
                  <div id="curved-corner-bottomright"></div>
                  <div id="curved-corner-bottomleft"></div>
                </div>
                <div className="curved-corner-star">
                  <div id="curved-corner-topright"></div>
                  <div id="curved-corner-topleft"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mypage;

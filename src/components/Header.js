import React from "react";

export default function Header() {
  return (
    <div>
      <header>
        <div className="container">
          <div id="branding">
            <h2>Hacker News</h2>
          </div>
          <nav>
            <ul>
              <li>
                <a href="index.html">new</a>
              </li>
              <li>
                <a href="#">comments</a>
              </li>
              <li>
                <a href="#">ask</a>
              </li>
              <li>
                <a href="#">show</a>
              </li>
              <li>
                <a href="#">jobs</a>
              </li>
              <li>
                <a href="#">submit</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

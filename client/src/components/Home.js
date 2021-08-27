import React from "react";

const Home = () => {
  
  return (
    <>
      <header className="page-header header container-fluid">
        <div className="home-page">
          <div className="home-cont">
            <p
              className="pt-5"
              style={{
                color: "darkviolet",
                fontFamily: "sans-serif",
                fontWeight: "700",
                letterSpacing: "2.2px",
              }}
            >
              WELCOME
            </p>
            <h1 style={{ color: "#484be9" }}>userName</h1>
            <h2>
              We are the Mern Developer
            </h2>
          </div>
        </div>
      </header>
    </>
  );
};

export default Home;
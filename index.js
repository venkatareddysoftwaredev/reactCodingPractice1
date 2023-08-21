const element = (
  <div className="main-container">
    <h1 className="heading">Super Over League</h1>
    <img
      src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
      className="image-hidden"
    ></img>
    <div className="image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
        className="image"
      ></img>
      <img
        src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
        className="image"
      ></img>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

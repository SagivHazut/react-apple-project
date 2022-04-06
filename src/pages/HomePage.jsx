import "./HomePage.css";
import { Fragment } from "react";
import iphone13 from "../../src/assets/iphone13pro.jpg";
import iphoneSE from "../../src/assets/iphoneSe.jpg";
import watch7 from "../../src/assets/watch 7.jpg";
import wwdc from "../../src/assets/wwwdc-2022.webp";
import ipadair from "../../src/assets/ipadair.png";
import macstudio from "../../src/assets/macstudio.jpg";
import studio from "../../src/assets/studio.jpg";

const HomePage = () => {
  return (
    <Fragment>
      <div className="iphone13">
        <h1>iPhone 13 Pro</h1>
        <h4>Oh.So.Pro.</h4>
        <img src={iphone13} alt="iphone13" />
      </div>
      <br />
      <div className="iphoneSE">
        <h1>iPhone SE</h1>
        <h4>Love the power.Love the price</h4>
        <img src={iphoneSE} alt="iphoneSE" />
      </div>
      <br />
      <div className="watch7">
        <h1>WATCH</h1>
        <h4>SERIES 7</h4>
        <h5>it's our largest display yet</h5>
        <img src={watch7} alt="watch7" />
      </div>
      <br />
      <div className="bothicons">
        <div className="wwdc">
          <img src={wwdc} alt="wwdc" />
        </div>
        <div className="ipadair">
          <img src={ipadair} alt="ipadair" />
        </div>
      </div>
      <br />
      <div className="studioicons">
        <div className="studio">
          <h1>Studio Display</h1>
          <h5>A sight to be bold</h5>
          <img src={studio} alt="wwdc" />
        </div>
        <div className="macstudio">
          <h1>Mac Studio</h1>
          <h5>Empower station</h5>

          <img src={macstudio} alt="ipadair" />
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;

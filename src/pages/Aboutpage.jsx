import { Fragment } from "react";
import "./Aboutpage.css";
import appleTeam from "../../src/assets/appleteam.webp";
import appleItem from "../../src/assets/appleitems.jpg";
const AboutPage = () => {
  return (
    <Fragment>
      <div className="topdiv">
        <h1>Apple makes business better.</h1>
        <p>
          Apple hardware, software, and services work together to give your
          employees the power and flexibility to do whatever needs doing —
          whether you’re running a startup, scale-up, or global enterprise.
        </p>
        <img src={appleTeam} alt="" />
      </div>
      <br />
      <div className="P">
        An apple is an edible fruit produced by an apple tree (Malus domestica).
        Apple trees are cultivated worldwide and are the most widely grown
        species in the genus Malus. The tree originated in Central Asia, where
        its wild ancestor, Malus sieversii, is still found today. Apples have
        been grown for thousands of years in Asia and Europe and were brought to
        North America by European colonists. Apples have religious and
        mythological significance in many cultures, including Norse, Greek, and
        European Christian tradition. Apples grown from seed tend to be very
        different from those of their parents, and the resultant fruit
        frequently lacks desired characteristics. Generally, apple cultivars are
        propagated by clonal grafting onto rootstocks. Apple trees grown without
        rootstocks tend to be larger and much slower to fruit after planting.
        Rootstocks are used to control the speed of growth and the size of the
        resulting tree, allowing for easier harvesting. There are more than
        7,500 known cultivars of apples. Different cultivars are bred for
        various tastes and uses, including cooking, eating raw, and cider
        production. Trees and fruit are prone to a number of fungal, bacterial,
        and pest problems, which can be controlled by a number of organic and
        non-organic means. In 2010, the fruit's genome was sequenced as part of
        research on disease control and selective breeding in apple production.
        Worldwide production of apples in 2018 was 86 million tonnes, with China
        accounting for nearly half of the total.
      </div>
      <br />
      <div className="middiv">
        <h1>
          The easy way for small businesses to manage every aspect of their
          Apple devices.
        </h1>

        <img src={appleItem} alt="" />
      </div>
    </Fragment>
  );
};
export default AboutPage;

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import CardComponent from "../components/CardComponent/CardComponent";
import { useHistory } from "react-router-dom";

const CardsPanelPage = () => {
  const history = useHistory();

  const URL = "http://localhost:8181/api/cards/";
  const location = useLocation();
  const userInfoRedux = useSelector((state) => state.auth.userData);
  const [cardsArr, setCardsArr] = useState([]);
  console.log("location.pathname", location.pathname);
  useEffect(() => {
    axios
      .get("/cards/allCards")
      .then(({ data }) => {
        setCardsArr(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDeleteCard = (id) => {
    axios.delete(`${URL}${id}`).then((res) => {
      console.log("res.data", res.data);
      const newCardsArr = cardsArr.filter((item) => item._id !== id);
      setCardsArr(newCardsArr);
    });
  };
  return (
    <div>
      <br />
      <button
        style={{ marginLeft: "80%" }}
        type="button"
        className="btn btn-secondary mb-2 mb-lg-0 btn-lg"
        onClick={() => history.push("/cardregister")}
      >
        Add a New Card
      </button>
      <br />
      <br />
      <div className="row row-cols-1 row-cols-md-5 g-5">
        {cardsArr.map((item) => {
          return (
            <CardComponent
              id={item._id}
              key={item._id}
              name={item.name}
              description={item.description}
              phone={item.phone}
              image={item.image}
              userIDCard={item.userID}
              userIDLoggedIn={userInfoRedux._id}
              onDeleteCard={() => handleDeleteCard(item._id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardsPanelPage;

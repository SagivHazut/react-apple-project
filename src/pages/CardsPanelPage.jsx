import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import CardComponent from "../components/CardComponent/CardComponent";
import { useHistory } from "react-router-dom";
import CardUpdate from "./CardUpdate";
const CardsPanelPage = (props) => {
  const history = useHistory();

  const URL = "http://localhost:8181/api/cards/";
  const userInfoRedux = useSelector((state) => state.auth.userData);
  const [cardsArr, setCardsArr] = useState([]);
  const IsloggedInRedux = useSelector((state) => state.auth.loggedIn);

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

  const [userArr] = useState([]);
  const [setSelectedUser] = useState([]);

  const handleEditUser = (id) => {
    let newUser = userArr.find((item) => {
      return item.id === id;
    });

    if (newUser) {
      setSelectedUser({ ...newUser });
    }
  };

  const handleUpdateUser = (id) => {
    let newCardsArr = cardsArr.filter((item) => item._id !== id);
    setCardsArr(newCardsArr);
  };

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

      <br />
      <br />
      <div className="row row-cols-1 row-cols-md-5 g-5">
        {cardsArr.map((item) => {
          return (
            <Fragment>
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
                onEditCard={handleEditUser}
              />
              {userInfoRedux._id === item.userID && IsloggedInRedux === true ? (
                <CardUpdate
                  name={item.name}
                  description={item.description}
                  phone={item.phone}
                  image={item.image}
                  id={item._id}
                  onUpdateUser={handleUpdateUser}
                ></CardUpdate>
              ) : (
                ""
              )}
            </Fragment>
          );
        })}
      </div>
      {userInfoRedux.biz === true && (
        <button
          style={{
            display: "flex",
            margin: "0 auto",
            marginTop: "10px",
          }}
          type="button"
          className="btn btn-secondary mb-2 mb-lg-0 btn-lg"
          onClick={() => history.push("/cardregister")}
        >
          Add a New Card
        </button>
      )}
    </div>
  );
};

export default CardsPanelPage;

import "./CardComponent.css";
import { useHistory } from "react-router-dom";

const CardComponent = (props) => {
  const history = useHistory();

  const handleDeleteClick = () => {
    props.onDeleteCard(props.id);
  };
  const handleEditClick = () => {
    props.onEditCard(props.id);
  };

  return (
    <div className="col  ">
      <div className="card h-100  ">
        <img
          style={{ textAlign: "center" }}
          src={props.image}
          className="card-img-top "
          alt="..."
        />
        <div style={{ textAlign: "center" }} className="card-body ">
          <h5 style={{ textAlign: "center" }} className="card-title">
            {props.name}
          </h5>
          <p style={{ textAlign: "center" }} className="card-text">
            {props.description}
          </p>
          <h6
            style={{ textAlign: "center" }}
            className="card-subtitle mb-2 font-bolder"
          >
            ₪{props.phone}
          </h6>
        </div>
        {props.userIDCard === props.userIDLoggedIn ? (
          <div
            style={{ justifyContent: "space-between", display: "flex" }}
            className="card-footer"
          >
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={handleEditClick}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={handleDeleteClick}
            >
              Delete
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CardComponent;

import "./CardComponent.css";

const CardComponent = (props) => {
  const handleDeleteClick = () => {
    console.log("BizCard clicked", props);
    props.onDeleteCard(props.id);
  };

  return (
    <div className="col">
      <div className="card h-100">
        <img
          style={{ textAlign: "center" }}
          src={props.image}
          className="card-img-top"
          alt="..."
        />
        <div style={{ textAlign: "center" }} className="card-body">
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
          <div style={{ textAlign: "left" }} className="card-footer">
            <button
              type="button"
              className="btn btn-danger"
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

import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const CardUpdate = (props) => {
  const history = useHistory();

  const [name, setName] = useState(props.name);
  const [description, setDescription] = useState(props.description);
  const [phone, setPhone] = useState(props.phone);
  const [image, setImage] = useState(props.image);
  const URL = "http://localhost:8181/api/cards/";

  const handleNameChange = (ev) => {
    setName(ev.target.value);
  };
  const handleDescriptionChange = (ev) => {
    setDescription(ev.target.value);
  };
  const handlePhoneChange = (ev) => {
    setPhone(ev.target.value);
  };
  const handleImageChange = (ev) => {
    setImage(ev.target.value);
  };
  const handleUpdate = (ev) => {
    ev.preventDefault();
    props.onUpdateUser(
      axios
        .patch(`${URL}${props.id}`, { name, description, phone, image })
        .then(() => {})
        .catch((err) => {
          toast.error(err.response.data);
          if (err.response) {
          }
        })
    );
  };

  return (
    <div class="wrapper fadeInDown">
      <h1>Edit Card</h1>
      <div id="formContent">
        <form onSubmit={handleUpdate}>
          <br />
          <div class="fadeIn first"></div>
          <br />
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <br />
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              onChange={handleNameChange}
              value={name}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputDescription1" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputDescription1"
              aria-describedby="DescriptionHelp"
              onChange={handleDescriptionChange}
              value={description}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPhone1" className="form-label">
              Phone
            </label>{" "}
            <br />
            <input
              type="text"
              className="form-control"
              id="exampleInputPhone1"
              onChange={handlePhoneChange}
              value={phone}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputImage1" className="form-label">
              Image
            </label>
            <br />
            <input
              type="text"
              className="form-control"
              id="exampleInputImage1"
              onChange={handleImageChange}
              value={image}
              required
            />
          </div>

          <div style={{ textAlign: "center" }}>
            <button type="submit" className="btn btn-danger btn-lg">
              Edit
            </button>
          </div>
        </form>
        <br />
      </div>
    </div>
  );
};

export default CardUpdate;

import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const CardRegister = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState();

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

  const handleSignup = (ev) => {
    ev.preventDefault();
    //add joi validation
    axios
      .post("/cards/", { name, description, phone, image })
      .then((res) => {
        console.log("res.data", res.data);
        history.push("/cardspanel", { description, phone });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div class="wrapper fadeInDown">
      <h1>New Card</h1>
      <div id="formContent">
        <form onSubmit={handleSignup}>
          <br />
          <div class="fadeIn first"></div>
          <br />
          <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">
              Name
            </label>
            <br />
            <input
              type="text"
              className="form-control"
              id="exampleInputName1"
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

          <button type="submit" className="btn btn-danger">
            Submit
          </button>
        </form>

        <br />
      </div>
    </div>
  );
};

export default CardRegister;

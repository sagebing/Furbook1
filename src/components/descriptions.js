import React from "react";
import "./css/descriptions.css";

function Descriptions() {
  return (
    <div className="container-fluid Descriptions">
      <div className="row">
        <div className="col">
          <h5 className="title-text">tigers</h5>
          <p className="sub-text">
            The tiger is the largest living cat species and a member of the
            genus Panthera. It is most recognisable for its dark vertical
            stripes on orange fur with a white underside. It is an apex
            predator, primarily preying on ungulates such as deer and wild boar.
          </p>
        </div>
        <div className="col">
          <h5 className="title-text">lions</h5>
          <p className="sub-text">lions are frendly</p>
        </div>
        <div className="col">
          <h5 className="title-text">cheetahs</h5>
          <p className="sub-text">
            s Who says cats and dogs can't get along? Here at Furbook, we
            believe all pets can be best friends. Our furbook users believe it
            doesn't matter if you are a cat, dog, rabbit, or ferret; underneath
            that fur we are all cute, wonderful pets.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Descriptions;

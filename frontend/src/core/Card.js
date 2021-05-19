import React from "react";
import Imagehelper from "./helper/imagehelper";

const Card = ({ product, addtoCart = true, removeFromCart = false }) => {
  const cartTitle = product ? product.name : "Default Title";
  const cartDescription = product ? product.description : "Default Description";
  const cartPrice = product ? product.price : "Default Price";
  return (
    <div className="card text-white bg-dark border border-info ">
      <div className="card-header lead">{cartTitle}</div>
      <div className="card-body">
        <Imagehelper product={product} />
        <p className="lead bg-success font-weight-normal text-wrap">
          {cartDescription}
        </p>
        <p className="btn btn-success rounded  btn-sm px-4">$ {cartPrice}</p>
        <div className="row">
          <div className="col-12">
            <button
              onClick={() => {}}
              className="btn btn-block btn-outline-success mt-2 mb-2"
            >
              Add to Cart
            </button>
          </div>
          <div className="col-12">
            <button
              onClick={() => {}}
              className="btn btn-block btn-outline-danger mt-2 mb-2"
            >
              Remove from cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

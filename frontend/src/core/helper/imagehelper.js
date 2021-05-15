import React from "react";

const Imagehelper = ({ product }) => {
  const imageurl = product
    ? product.image
    : `https://www.pexels.com/photo/man-wearing-yellow-crew-neck-t-shirt-and-blue-denim-jeans-1018911/`;

  return (
    <div className="rounded border border-success p-2">
      <img
        src={imageurl}
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-3 rounded"
        alt=""
      />
    </div>
  );
};

export default Imagehelper;

import React from "react";
import AccentInput from "../common/Form/AccentInput";

function ProductForm() {
  return (
    <>
      <AccentInput
        title="Title"
        placeholder="Title"
        value={""}
        onChange={() => {}}
      />
      <div className="flex gap-x-6 w-full ">
        <AccentInput
          title="Price"
          placeholder="Price"
          value={""}
          onChange={() => {}}
        />{" "}
        <AccentInput
          title="Quantity"
          placeholder="1"
          value={""}
          onChange={() => {}}
        />
      </div>
      <AccentInput
        title="Add Detail"
        placeholder="Note to your guests"
        value={""}
        onChange={() => {}}
      />
    </>
  );
}

export default ProductForm;

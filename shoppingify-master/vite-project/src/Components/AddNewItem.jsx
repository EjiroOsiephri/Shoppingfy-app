import React from "react";

const AddNewItem = () => {
  return (
    <>
      <section className="addewItemComtainer">
        <h1>Add a new item</h1>
        <div className="nameItemContainer">
          <label>Name</label>
          <input type="text" placeholder="Enter a name" />
        </div>
        <div className="noteItemContainer">
          <label>Note(optional)</label>
          <textarea type="text" placeholder="Enter a note" />
        </div>
        <div className="imageItemContainer">
          <label>Image(optional)</label>
          <input type="text" placeholder="Enter a image" />
        </div>
        <div className="categoryItemContainer">
          <label>Category</label>
          <input type="text" placeholder="Enter a Category" />
        </div>
      </section>
    </>
  );
};

export default AddNewItem;

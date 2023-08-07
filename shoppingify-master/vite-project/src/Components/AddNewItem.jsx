import React from "react";
import Classes from "../Sass/AddNewItem.module.scss";

const AddNewItem = () => {
  return (
    <>
      <section className={Classes["addewItemContainerSection"]}>
        <h1>Add a new item</h1>
        <div className={Classes["nameItemContainer"]}>
          <label>Name</label>
          <input type="text" placeholder="Enter a name" />
        </div>
        <div className={Classes["noteItemContainer"]}>
          <label>Note(optional)</label>
          <textarea type="text" placeholder="Enter a note" />
        </div>
        <div className={Classes["imageItemContainer"]}>
          <label>Image(optional)</label>
          <input type="text" placeholder="Enter a image" />
        </div>
        <div className={Classes["categoryItemContainer"]}>
          <label>Category</label>
          <input type="text" placeholder="Enter a Category" />
        </div>
        <div className={Classes["goBackContainer"]}>
          <button>cancel</button>
          <button>Save</button>
        </div>
      </section>
    </>
  );
};

export default AddNewItem;

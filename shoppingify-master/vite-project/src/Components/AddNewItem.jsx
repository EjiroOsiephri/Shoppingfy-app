import React, { useContext, useEffect, useState } from "react";
import Classes from "../Sass/AddNewItem.module.scss";
import AppWideContext from "../Context/AppContext";
import axios from "axios";
import ItemsPage from "./ItemsPage";
import ShowCategory from "./modal/ShowCategory";

const AddNewItem = () => {
  const [name, setName] = useState("");
  const [randomImage, setRandomImage] = useState("");
  const [nameValue, setNameValue] = useState("");

  const ctx = useContext(AppWideContext);

  const cancelPageHandler = () => {
    ctx.setShowNewItem(false);
  };

  const generateRandomImage = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/random?query=${name}&client_id=y0t72WfQUzbGz2yhqUqm26LureWNwpqR8pR2RtGqjYg`
      );
      setRandomImage(response.data.urls.small_s3);
    } catch (error) {
      console.log(error);
    }
  };

  function handleNameChangeHandler(e) {
    setName(e.target.value);
  }

  useEffect(() => {
    generateRandomImage();
  }, [name]);

  function navigatePage() {
    ctx.setRandomImage(randomImage);
    ctx.setNewPage(true);
  }

  const focusOnCursorHandler = () => {
    ctx.setFocus((prevValue) => !prevValue);
  };

  let formIsValid = false;

  const nameIsValid = name.trim() === "";

  if (nameIsValid) {
    formIsValid = true;
  }

  useEffect(() => {
    setNameValue(
      ctx.vegetables || ctx.MeatAndFish || ctx.pets || ctx.beverages
    );
  }, [ctx.vegetables, ctx.MeatAndFish, ctx.pets, ctx.beverages]);

  return (
    <>
      {!ctx.newPage ? (
        <section className={Classes["addewItemContainerSection"]}>
          <h1>Add a new item</h1>
          <div className={Classes["nameItemContainer"]}>
            <label> Name</label>
            <div className={Classes["errorDiv"]}>
              <input
                onChange={handleNameChangeHandler}
                type="text"
                placeholder="Enter an item name"
              />
              {formIsValid && <p>Enter an item you want to add</p>}
            </div>
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
            <input
              onFocus={focusOnCursorHandler}
              type="text"
              value={nameValue}
              placeholder="Enter a Category"
            />
            {ctx.focus && <ShowCategory />}
          </div>
          <div className={Classes["goBackContainer"]}>
            <button onClick={cancelPageHandler} className={Classes["cancel"]}>
              cancel
            </button>
            <button
              disabled={formIsValid}
              onClick={navigatePage}
              className={Classes["save"]}
            >
              Save
            </button>
          </div>
        </section>
      ) : (
        <ItemsPage name={name} />
      )}
    </>
  );
};

export default AddNewItem;

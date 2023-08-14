import React, { useContext, useEffect, useRef, useState } from "react";
import Classes from "../Sass/AddNewItem.module.scss";
import AppWideContext from "../Context/AppContext";
import axios from "axios";
import ItemsPage from "./ItemsPage";
import ShowCategory from "./modal/ShowCategory";

const AddNewItem = () => {
  const [name, setName] = useState("");
  const [randomImage, setRandomImage] = useState("");
  const [imageValue, setImageValue] = useState("");
  const [showCategoryError, setShowCategoryError] = useState(false);

  const addNewItemRef = useRef();

  const ctx = useContext(AppWideContext);

  const cancelPageHandler = () => {
    ctx.setShowNewItem(false);
  };

  const categoryChangeHandler = (e) => {
    setImageValue(e.target.value);
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

  let formIsValid = true;

  const nameIsInvalid = name.trim() === "";

  if (nameIsInvalid || ctx.categoryError) {
    formIsValid = false;
  } else {
    formIsValid = true;
  }

  function navigatePage() {
    ctx.setRandomImage(randomImage);
    ctx.setNewPage(true);
  }

  const focusOnCursorHandler = () => {
    ctx.setFocus((prevValue) => !prevValue);
  };

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
              {!formIsValid && <p>Enter an item you want to add</p>}
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
              onChange={categoryChangeHandler}
              type="text"
              ref={addNewItemRef}
              value={ctx.selectedCategory}
              placeholder="Enter a Category"
            />
            {ctx.categoryError && <p>Enter a category</p>}
            {ctx.focus && <ShowCategory />}
          </div>
          <div className={Classes["goBackContainer"]}>
            <button onClick={cancelPageHandler} className={Classes["cancel"]}>
              cancel
            </button>
            <button
              disabled={!formIsValid}
              onClick={navigatePage}
              className={Classes["save"]}
            >
              Save
            </button>
          </div>
        </section>
      ) : (
        <ItemsPage
          addNewItemRef={addNewItemRef.current?.value}
          nameValue={ctx.selectedCategory}
          name={name}
        />
      )}
    </>
  );
};

export default AddNewItem;

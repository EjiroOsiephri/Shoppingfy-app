import AppWideContext from "../Context/AppContext";
import { useContext } from "react";
import Classes from "../Sass/itemPage.module.scss";
import AddNewItem from "./AddNewItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../Store/CartSlice";

const ItemsPage = (props) => {
  const ctx = useContext(AppWideContext);

  const dispatch = useDispatch();

  function goBackToAddItemComponent() {
    ctx.setNewPage(false);
  }
  function deleteItem() {
    const currentDate = new Date();
    const dateString = currentDate.toISOString();
    const newItem = {
      name: props.name,
      id: dateString,
    };
    if (props.addNewItemRef === "Food and vegetables") {
      dispatch(cartActions.removeFoodAndVegetables(newItem));
    }
    if (props.addNewItemRef === "Meat and Fish") {
      dispatch(cartActions.removeMeatAndFish(newItem));
    }
    if (props.addNewItemRef === "Beverages") {
      dispatch(cartActions.removeBeverages(newItem));
    }
    if (props.addNewItemRef === "Pets") {
      dispatch(cartActions.removePets(newItem));
    }
    ctx.setShowNewItem(false);
  }
  let title;

  function pushToArrayHandler() {
    const currentDate = new Date();
    const dateString = currentDate.toISOString();
    if (props.addNewItemRef === "Food and vegetables") {
      title = "Food and vegetables";
    }
    if (props.addNewItemRef === "Meat and Fish") {
      title = "Meat and Fish";
    }
    if (props.addNewItemRef === "Beverages") {
      title = "Beverages";
    }
    if (props.addNewItemRef === "Pets") {
      title = "Pets";
    }
    const newItem = {
      title: title,
      name: props.name,
      id: dateString,
    };
    if (props.addNewItemRef === "Food and vegetables") {
      dispatch(cartActions.addToFoodAndVegetables(newItem));
    }
    if (props.addNewItemRef === "Meat and Fish") {
      dispatch(cartActions.addToMeatAndFish(newItem));
    }
    if (props.addNewItemRef === "Beverages") {
      dispatch(cartActions.addToBeverages(newItem));
    }
    if (props.addNewItemRef === "Pets") {
      dispatch(cartActions.addToPets(newItem));
    }
    ctx.setShowNewItem(false);
  }

  return (
    <>
      {ctx.newPage ? (
        <section className={Classes["itemsPage"]}>
          <button onClick={goBackToAddItemComponent}>go back</button>
          <div className={Classes["nameItemImage"]}>
            <img src={ctx.randomImage} alt="" />
          </div>
          <div className={Classes["nameContainerDiv"]}>
            <label>name</label>
            <h1>{props.name}</h1>
          </div>
          <div className={Classes["category"]}>
            <label>Category</label>
            <h1>{props.nameValue}</h1>
          </div>
          <div className={Classes["note"]}>
            <label>note</label>
            <h1>
              Nutrient-dense foods are those that provide substantial amounts of
              vitamins, minerals and other nutrients with relatively few
              calories. One-third of a medium avocado (50 g) has 80 calories and
              contributes nearly 20 vitamins and minerals, making it a great
              nutrient-dense food choice.
            </h1>
          </div>
          <div className={Classes["buttonComponent"]}>
            <button className={Classes["delete"]} onClick={deleteItem}>
              delete
            </button>
            <button onClick={pushToArrayHandler} className={Classes["add"]}>
              Add to lists
            </button>
          </div>
        </section>
      ) : (
        <AddNewItem />
      )}
    </>
  );
};

export default ItemsPage;

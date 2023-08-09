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

  const foodAndVegetables = useSelector(
    (state) => state.cart.foodAndVegetables
  );

  const navigate = useNavigate();

  function goBackToAddItemComponent() {
    ctx.setNewPage(false);
  }
  function deleteItem() {
    navigate("/");
  }

  function pushToArrayHandler() {
    const currentDate = new Date();
    const dateString = currentDate.toISOString();
    const newItem = {
      name: props.name,
      id: dateString,
    };
    dispatch(cartActions.addToFoodAndVegetables(newItem));
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
          <div className="category">
            <label>Category</label>
            <h1>{props.nameValue}</h1>
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

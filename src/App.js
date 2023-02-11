import "./App.css";
import React, { useCallback, useEffect, useState } from "react";
import Nav from "./components/NavBar/Nav";
import AppBody from "./components/Body/AppBody";
import useHttpFood from "./components/Context/useHttpFood";
export const DataStore = React.createContext({
  cardOpen: false,
  cardOrder: false,
  onCloseCard: () => {},
  myOrderCount: () => {},
  myOrder: [],
  onsetMyOrder: () => {},
  addFoodCard: false,
  onClickFoodCard: () => {},
  userOrder: "",
});
function App() {
  const [sendData] = useHttpFood();
  const [myOrder, setMyOrder] = useState([]);
  const [userOrder, setUserOrder] = useState([]);
  const [cardOpen, setCardOpen] = useState(false);
  const [cardOrder, setCardOrder] = useState(false);
  const [addFoodCard, setaddFoodCard] = useState(false);
  const [orderList, setOrderList] = useState(false);

  const onCloseCard = (val) => {
    setCardOpen(val);
  };

  const myOrderCount = (OrderCount) => {
    setCardOrder(OrderCount);
  };
  const onsetMyOrder = (newOrder) => {
    myOrder.map((check, i) => {
      if (check.id === newOrder.id && newOrder["true"]) {
        if (check.count === 1 && newOrder["min"]) {
          myOrder.splice(i, 1);
        }

        if (check.count > 0 && newOrder["min"]) {
          check.count += -1;
          check.price = check.orignalPrice * check.count;
        } else if (newOrder["plus"]) {
          check.count += +1;
          check.price = check.orignalPrice * check.count;
        }
        newOrder = { id: "true" };
      } else if (check.id === newOrder.id) {
        check.price = check.orignalPrice * check.count;
        check.count += newOrder.count;
        newOrder = { id: "true" };
      }
      return 0;
    });
    newOrder.id.includes("true")
      ? setMyOrder([...myOrder])
      : setMyOrder([...myOrder, newOrder]);
  };
  const clearMyOrders = () => {
    setMyOrder([]);
  };
  const onClickFoodCard = (value) => {
    setaddFoodCard(value);
  };
  const onOrderList = () => {
    setOrderList((value) => !value);
    if (!orderList) {
      getuserorder();
    }
  };

  const getuserorder = useCallback(() => {
    const applyData = (data) => {
      const foodList = [];
      for (const key in data) {
        foodList.push({
          id: key,
          name: data[key].userInfo.name,
          email: data[key].userInfo.email,
          add: data[key].userInfo.add,
          phone: data[key].userInfo.phone,
          cPin: data[key].userInfo.cPin,
          food: data[key].food,
        });
      }
      console.log(foodList);
      setUserOrder(foodList);
    };

    sendData(
      "https://aku-310-default-rtdb.firebaseio.com/order.json",
      "GET",
      "",
      false,
      applyData
    );
  }, [sendData]);
  useEffect(() => {
    getuserorder();
  }, [getuserorder]);

  return (
    <DataStore.Provider
      value={{
        cardOpen: cardOpen,
        cardOrder: cardOrder,
        onCloseCard: onCloseCard,
        myOrderCount: myOrderCount,
        myOrder: myOrder,
        onsetMyOrder: onsetMyOrder,
        clearMyOrders: clearMyOrders,
        addFoodCard: addFoodCard,
        onClickFoodCard: onClickFoodCard,
        onOrderList: onOrderList,
        orderList: orderList,
      }}
    >
      <Nav />
      <AppBody userOrder={userOrder} />
    </DataStore.Provider>
  );
}

export default App;

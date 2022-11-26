import { useEffect, useState } from "react";
import { getUserData, updatePoints, addItemToHistory } from "../utils/getData";

const userState = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    isLoading: true,
    points: 0,
    redeem: [],
  });

  useEffect(() => {
    getUserData().then((data) => {
      console.log(data)
      setUserInfo({
        ...userInfo,
        points: data.points,
        name: data.name,
        redeem: data.redeemHistory,
      });
    });
  }, [userInfo])
  


  const setUserPoints = (payload) => {
    updatePoints(payload).then((data) => console.log(data));
  };

  const setReedemItem = (payload) => {
    addItemToHistory(payload).then((data) => console.log(data));
  };

  return {
    userInfo,
    setUserPoints,
    setReedemItem,
  };
};

export default userState;

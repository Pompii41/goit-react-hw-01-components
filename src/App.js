import React from "react"; 
import user from './jsons/user.json';
import UserProfile from "./components/Profile"
import Statistic from "./components/Statistic"
import statisticalData from './jsons/statistical-data.json';
import FriendList from "./components/FriendList/FriendList";
import friends from "./jsons/friends.json";
import transaction from './jsons/transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';








  function App() {
  return (
    <>
      <UserProfile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
         <Statistic statisticsList={statisticalData} />
      <FriendList friends={friends} />
        <TransactionHistory transactionList={transaction} />
        </>
  );
};


export default App;
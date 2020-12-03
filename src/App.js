import React from "react"; 
import user from './jsons/user.json';
import UserProfile from "./components/Profile/Profile";
import Statistics from "./components/statistic/Statistics";
import statistical from './jsons/statistic.json';
import FriendList from "./components/FriendList/FriendList";
import friendslist from "./jsons/friends.json";
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
         <Statistics title="Upload stats" stats={statistical} />
     <FriendList list={friendslist} />
        <TransactionHistory transactionList={transaction} />
        </>
  );
};


export default App;
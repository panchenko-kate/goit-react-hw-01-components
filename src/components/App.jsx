import user from '../paths/user.json';
import data from '../paths/data.json';
import friends from '../paths/friends.json';
import transactions from '../paths/transactions.json'
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistiry } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile   
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistiry items={transactions} key={transactions.id}/>
    </div>
  );
};

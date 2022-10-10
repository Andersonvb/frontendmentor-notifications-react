import './App.css';
import Header from './components/Header.js'
import Notification from './components/Notification';
import img from './assets/images/avatar-mark-webber.webp';

function App() {
  return (
    <div className='App'>
      <main className='main-container'>
        <Header />

        <Notification 
          name='Mark Webber'
          post='reacted to your recent post'
          specialText='My first tournament today!' 
          specialTextType='gray'
          time='1m ago'
          alert={true}
        />

        <Notification 
          name='Angela Gray'
          post='followed you'
          time='5m ago'
          alert={true}
        />

        <Notification 
          name='Jacob Thompson'
          post='has joined your group'
          specialText='Chess Club'
          time='1 day ago'
          alert={true}
        />

        <Notification 
          name='Rizky Hasanuddin'
          post='sent you a private message'
          time='5 days ago'
          message='Hello, Thans for setting up the Chess Club. I have been a member for a few weeks now and I am already having lots of fun and improving my game.'
        />

        <Notification 
          name='Kimberly Smith'
          post='commented on your picture'
          time='1 week ago'
          image={true}
        />

        <Notification 
          name='Nathan Peterson'
          post='reacted to your recent post'
          specialText='end-game strategies to increaase your winrate'
          specialTextType='gray'
          time='2 weeks ago'
        />

        <Notification 
          name='Anna Kim'
          post='left the group'
          specialText='Chess Club'
          time='2 weeks ago'
        />

      </main>
    </div>
  );
}

export default App;

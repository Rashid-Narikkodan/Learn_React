import './index.css';
import ProfileList from './components/ProfileList';
import { profiles } from './utils/storage';
import CountDown from './components/CountDown';
import Label from './components/Label';
import CounterWithUser from './components/CountWithUser';
import FormExample from './components/Form';
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Profiles (Assignment 1) */}
        <Label content="User Profile"/>
      <div className="w-full max-w-4xl px-4">
        <ProfileList profiles={profiles} />
      </div>

      {/* Count on screen */}

<br />
<br />
      <div>
        <Label content="Counter"/>
        <CountDown />
      </div>

      <br />
      <br />
      <br />

      {/* Count on screen */}
      <div>
        <Label content="Counter with users"/>
          <CounterWithUser />
      </div>

      <br />
      <br />
      <br />
      <div>
        <Label content="Form"/>
          <FormExample />
      </div>
      
    </div>
  );
}

export default App;

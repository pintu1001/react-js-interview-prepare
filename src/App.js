import React from 'react';
import './App.css';
import ComponentA from './components/Hooks/ComponentA';

import Hoc from './components/Hooks/Hoc';
// import Add from './components/Hooks/Add';
import ExerciseFour from './components/MachineCoding/ExerciseFour';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <div className="App">
      {/* <Provider value="Pintu">
        <Debouncing />
      </Provider> */}
      {/* <ParentComponent /> */}
      {/* <RefsDemo /> */}
      {/* <Debouncing /> */}
      {/* <ArrayMethods /> */}
      {/* <ShallowAndDeepCopy /> */}
      {/* <Promise /> */}
      {/* <CallApplyBind /> */}
      {/* <AppRoutes /> */}
      {/* <ComponentA name='first' />
      <ComponentB name='second' /> */}
      {/* <UserContext.Provider value={"Priyabrat"}>
        <ChannelContext.Provider value={"Dash"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <ComponentA name="Hello" />
      <ComponentB /> */}
      {/* <Currying /> */}
      {/* <CallbackPromiseAsyncAwait /> */}
      {/* <Add /> */}
      <ExerciseFour />
    </div>
  );
}

export default App;

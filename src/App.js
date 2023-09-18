import React from 'react';
import './App.css';
import ComponentA from './components/Hooks/ComponentA';

import Hoc from './components/Hooks/Hoc';
// import Add from './components/Hooks/Add';
// import Class from './components/Oops/Class';
// import ConstructorFunction from './components/Oops/ConstructorFunction';
// import InfiniteScroll from './components/MachineCoding/InfiniteScroll';
// import Calculator from './components/MachineCoding/Calculator';
// import Class from './components/Oops/Class';
// import ProgressBar from './components/MachineCoding/ProgressBar';
import Promise from "./components/Javascript/Promise"

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
      {/* <InfiniteScroll /> */}
      {/* <TodoApp /> */}
      {/* <Hoisting /> */}
      {/* <Calculator /> */}
      <Promise />
      {/* <Promise /> */}
    </div>
  );
}

export default App;

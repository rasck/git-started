import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./src/reducers";
import thunk from "redux-thunk";
import TapNavigator from "./src/components/TapNavigator";

export default class App extends React.Component {
  render() {
    const store = createStore(reducers, compose(applyMiddleware(thunk)));
    return (
      <Provider store={store}>
        <TapNavigator />
      </Provider>
    );
  }
}

import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./src/reducers";
import TopRepos from "./src/components/TopRepos";
import { Header } from "./src/components/common";
import { View } from "react-native";
import thunk from "redux-thunk";

export default class App extends React.Component {
  render() {
    console.log("loading main");
    // const store = createStore(reducers);
    // const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    const store = createStore(reducers, compose(applyMiddleware(thunk)));

    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Header headerText="Git Started!" />
          <TopRepos />
        </View>
      </Provider>
    );
  }
}

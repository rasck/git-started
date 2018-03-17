import React from "react";
import { TabNavigator, StackNavigator, TabBarBottom } from "react-navigation";
import TopReposfrom from "./TopRepos";
import FavRepos from "./FavRepos";
import RepoDetails from "./RepoDetails";
import RepoListItem from "./RepoListItem";
import RepoList from "./RepoList";
import FavRepoDetails from "./FavRepoDetails";
import TopRepos from "./TopRepos";
import { Ionicons } from "@expo/vector-icons";

const FavReposNavigation = StackNavigator(
  {
    FavRepos: {
      screen: FavRepos
    },
    FavRepoDetails: {
      screen: FavRepoDetails
    }
  },
  {
    initialRouteName: "FavRepos"
  }
);
const TopReposNavigation = StackNavigator(
  {
    TopRepos: {
      screen: TopRepos
    },
    RepoDetails: {
      screen: RepoDetails
    }
  },
  {
    initialRouteName: "TopRepos"
  }
);

export default TabNavigator(
  {
    Repos: { screen: TopReposNavigation },
    Favourites: { screen: FavReposNavigation }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Repos") {
          iconName = `ios-home${focused ? "" : "-outline"}`;
        } else if (routeName === "Favourites") {
          iconName = `ios-star${focused ? "" : "-outline"}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: "#0091EA",
      inactiveTintColor: "gray"
    },
    animationEnabled: true,
    swipeEnabled: true
  }
);

import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import ChooseDestination from "~screens/ChooseDestination";
import MainScreen from "~screens/MainScreen";
import ChooseOrigin from "~screens/ChooseOrigin";
import BookVehicle from "~screens/BookVehicle";

const MainStack = createStackNavigator();
const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <MainStack.Screen name="MainScreen" component={MainScreen} />
      <MainStack.Screen name="ChooseDestination" component={ChooseDestination} />
      <MainStack.Screen name="ChooseOrigin" component={ChooseOrigin} />
      <MainStack.Screen name="BookVehicle" component={BookVehicle} />
    </MainStack.Navigator>
  );
};

export { MainStackNavigator };

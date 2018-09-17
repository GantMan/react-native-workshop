import React from "react";
import { createSwitchNavigator } from "react-navigation";
import { AuthNavigator } from "../../Auth";
import PrivateNavigator from "./PrivateNavigator";

export const PRIVATE_SCREEN = "PRIVATE_SCREEN";
export const PUBLIC_SCREEN = "PUBLIC_SCREEN";

/*
  - You need to create a SWITCH navigator here.
  - the screens that you need to add to this navigator are `AuthNavigator`
  and `Privatenavigator`
  - You need to setup as the `initialRouteName` the AuthNavigator
  - use the String variable names to define teh Route name
  instead of hardCoding it. This will make sense later.
  (or ask one of the coaches/mentors :P)
  - specify the `headerMode` to `none`.
*/

const Navigator = "YOUR NAVIGATOR HERE"

export default Navigator;

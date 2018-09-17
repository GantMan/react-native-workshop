import React from 'react'
import { createStackNavigator } from 'react-navigation'
import TimelineScreen from './TimelineScreen';
import TweetDetailScreen from './TweetDetailScreen'
import ProfileScreen from './ProfileScreen';
import { Colors } from '../../Utils'


export const TIMELINE_FEED_SCREEN = 'TIMELINE_FEED_SCREEN'
export const TWEET_DETAIL_SCREEN = 'TWEET_DETAIL_SCREEN'
export const OTHER_USER_PROFILE = "OTHER_USER_PROFILE"


const TimelineNavigator = createStackNavigator(
  {
    //Add all the routes to this navigator
  },
  {
  initialRouteName: TIMELINE_FEED_SCREEN,
  navigationOptions: {
    headerStyle: {
      backgroundColor: Colors.brand.primary
    },
    headerTintColor: '#fff'
  }
})

export default TimelineNavigator;




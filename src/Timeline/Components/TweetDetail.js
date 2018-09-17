import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking
} from "react-native";
import { Paper, Screen } from "../../App";
import Avatar from "../Components/Avatar";
import { Feather } from "@expo/vector-icons";
import { Icons, Colors } from "../../Utils";

const IconButton = ({ icon }) => (
  <Feather name={Icons[icon]} size={24} color={Colors.lightgrey} />
);

const TweetURL = ({ urls }) => {
  if (urls && urls.length > 0) {
    return (
      <TouchableOpacity onPress={() => Linking.openURL(urls[0].url)}>
        <Text style={[styles.tweet, styles.tweetURL]}>
          {urls[0].display_url}
        </Text>
      </TouchableOpacity>
    );
  } else {
    return null;
  }
};

/*
  Whenever the user press on top of the header, you need to navigate
  to the Profile View of that tweet's user. Hint: you are getting a method
  that you need to call onPress of that header. can you add an `onPress` prop
  directly to the header ???
*/

const TweetDetail = ({ tweet, handleProfilePress }) => {
  const date = new Date(tweet.created_at);
  return (
    <Screen>
      <Paper style={styles.paper}>
        <View style={styles.header}>
          <Avatar uri={tweet.user.profile_image_url_https} />
          <View style={styles.contentHeader}>
            <Text style={styles.userName}>{tweet.user.name}</Text>
            <Text style={styles.userScreenName}>@{tweet.user.screen_name}</Text>
          </View>
        </View>
        <View style={styles.tweetContent}>
          <Text style={styles.tweet}>{tweet.text}</Text>
          <TweetURL urls={tweet.entities.urls} />
          <Text style={styles.timestamp}>{date.toLocaleTimeString()}</Text>
        </View>
        <View style={styles.footer}>
          <IconButton icon="rt" />
          <IconButton icon="likes" />
          <IconButton icon="open" />
        </View>
      </Paper>
    </Screen>
  );
};

const styles = StyleSheet.create({
  paper: {
    margin: 16
  },
  header: {
    flexDirection: "row"
  },
  contentHeader: {
    marginLeft: 8,
    flex: 1,
    justifyContent: "center"
  },
  userName: {
    fontSize: 18,
    fontWeight: "800",
    marginRight: 4
  },
  userScreenName: {
    fontSize: 16,
    fontWeight: "200"
  },
  tweetContent: {
    margin: 8
  },
  tweet: {
    fontSize: 24
  },
  tweetURL: {
    color: "blue",
    marginTop: 12
  },
  timestamp: {
    fontSize: 14,
    color: "rgba(0,0,0,0.4)",
    marginVertical: 12
  },
  footer: {
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});

export default TweetDetail;

import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { Button } from 'react-native-elements'
import { Title, Screen, PRIVATE_SCREEN, Headline, FormInput } from "../../App";
import LoginHeader from '../Components/LoginHeader'
import { Colors } from '../../Utils'
import { TOC_SCREEN } from "./AuthNavigator";

class LoginScreen extends React.Component {
  state = {
    email: "",
    password: ""
  };

  login = () => {
    // - implement a navigation to the PRIVATE_SCREEN
  };

  handleFormChange = ({ key, value }) => this.setState({ [key]: value });

  render() {
    return (
      <Screen style={styles.container}>
        <LoginHeader>
          <Headline>Twitter Clone</Headline>
          <Title>@reactjsacademy</Title>
        </LoginHeader>
        <FormInput
          label="Email"
          value={this.state.email}
          onChangeText={value => this.handleFormChange({ key: "email", value })}
        />
        <FormInput
          label="Password"
          value={this.state.password}
          secureTextEntry
          onChangeText={value =>
            this.handleFormChange({ key: "password", value })
          }
        />
        <Button onPress={this.login} style={styles.submitButton} backgroundColor={Colors.brand.primary} title="Login" />
        <TouchableOpacity onPress={() => this.props.navigation.navigate({routeName: TOC_SCREEN})}>
          <Text style={styles.tocText}>by login you accept the Terms and Conditions.</Text>
        </TouchableOpacity>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light
  },
  submitButton: {
    marginVertical: 24,
  },
  tocText: {
    textAlign: 'center',
    fontSize: 14,
    color: Colors.lightgrey,
  }
});

export default LoginScreen;

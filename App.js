import React, { Component } from "react";
import { View, StyleSheet, Button, Alert, TextInput, Text } from "react-native";
//import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
const text = 2;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, numerator: "/" };
  }
  one = () => this.setState({ value: this.state.value + "1" });
  two = () => this.setState({ value: this.state.value + "2" });
  three = () => this.setState({ value: this.state.value + "3" });
  four = () => this.setState({ value: this.state.value + "4" });
  five = () => this.setState({ value: this.state.value + "5" });
  six = () => this.setState({ value: this.state.value + "6" });
  seven = () => this.setState({ value: this.state.value + "7" });
  eight = () => this.setState({ value: this.state.value + "8" });
  nine = () => this.setState({ value: this.state.value + "9" });
  zero = () => this.setState({ value: this.state.value + "0" });

  plus = () => this.setState({ numerator: "+" });

  minus = () => this.setState({ numerator: "-" });
  divide = () => this.setState({ numerator: "/" });
  clear = () => this.setState({ value: "" });
  multiply = () => this.setState({ numerator: "*" });
  dot = () => this.setState({ value: this.state.value + "." });
  equals = () => console.log("=");

  render() {
    return (
      <View style={[{ width: "100%", height: "100%" }]}>
        <TextInput style={styles.input} value={this.state.value} disabled />
        <table>
          <tr>
            <td></td>
            <td></td>
            <td>
              <Text style={styles.numerator}>{this.state.numerator}</Text>
            </td>
            <td>
              <Button title={"%"} onPress={this.divide} />
            </td>
          </tr>
          <tr>
            <td>
              <Button title={"7"} onPress={this.seven} />
            </td>
            <td>
              <Button title={"8"} onPress={this.eight} />
            </td>
            <td>
              <Button title={"9"} onPress={this.nine} />
            </td>
            <td>
              <Button title={"X"} onPress={this.multiply} />
            </td>
          </tr>
          <tr>
            <td>
              <Button title={"4"} onPress={this.four} />
            </td>
            <td>
              <Button title={"5"} onPress={this.five} />
            </td>
            <td>
              <Button title={"6"} onPress={this.six} />
            </td>
            <td>
              <Button title={"-"} onPress={this.minus} />
            </td>
          </tr>
          <tr>
            <td>
              <Button title={"1"} onPress={this.one} />
            </td>
            <td>
              <Button title={"2"} onPress={this.two} />
            </td>
            <td>
              <Button title={"3"} onPress={this.three} />
            </td>
            <td>
              <Button title={"+"} onPress={this.plus} />
            </td>
          </tr>
          <tr>
            <td>
              <Button title={"."} onPress={this.dot} />
            </td>
            <td>
              <Button title={"0"} onPress={this.zero} />
            </td>
            <td>
              <Button title={"Clear"} onPress={this.clear} />
            </td>
            <td>
              <Button title={"="} onPress={this.equals} />
            </td>
          </tr>
        </table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  numerator: {
    fontSize: 30,
  },
});

export default App;

import * as React from "react";
import { View } from "@tarojs/components";

export default class Op extends React.Component {
  isFetching = false;
  componentWillMount() {
    console.log("isFetching: ", this.isFetching, this.$preloadData);
    this.$preloadData.then((res) => {
      console.log("res: ", res);
      this.isFetching = false;
    });
  }

  componentWillPreload() {
    return this.fetchData();
  }

  fetchData() {
    this.isFetching = true;
    return Promise.resolve(10);
  }

  render() {
    return <View>12</View>;
  }
}

import { Component } from "react";
import "./app.scss";
import "taro-skeleton/dist/index.css";

class App extends Component {
  componentDidMount() {
    console.log("app mount");
  }

  componentDidShow() {
    console.log("app show");
  }

  componentDidHide() {
    console.log("app hide");
  }

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;

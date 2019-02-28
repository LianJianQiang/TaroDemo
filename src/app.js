import Taro, { Component } from "@tarojs/taro";

import Index from "./pages/Home";
import "./app.scss";

class App extends Component {
  config = {
    pages: [
      "pages/home/index",
      "pages/stroll/index",
      "pages/reward/index",
      "pages/wish/index"
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#000000",
      navigationBarTextStyle: "white"
    },
    tabBar: {
      list: [
        {
          pagePath: "pages/home/index",
          text: "我的互达卡",
          iconPath: "./static/images/06.png"
          // selectedIconPath: "./static/images/06-active.png"
        },
        {
          pagePath: "pages/stroll/index",
          text: "逛一逛",
          iconPath: "./static/images/03.png"
          // selectedIconPath: "./static/images/03-active.png"
        },
        {
          pagePath: "pages/reward/index",
          text: "打个赏",
          iconPath: "./static/images/04.png"
          // selectedIconPath: "./static/images/04-active.png"
        },
        {
          pagePath: "pages/wish/index",
          text: "心愿单",
          iconPath: "./static/images/05.png"
          // selectedIconPath: "./static/images/05-active.png"
        }
      ],
      color: "#888",
      selectedColor: "#3eb7b5",
      backgroundColor: "#fff"
    }
  };

  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById("app"));

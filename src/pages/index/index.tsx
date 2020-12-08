import React, { useEffect, useState } from "react";
import Taro, {
  useDidShow,
  useReady,
  useDidHide,
  usePullDownRefresh,
} from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";

export default function Component() {
  const [count, setCount] = useState(0);
  useDidShow(() => {
    Taro.showNavigationBarLoading();
    console.log("did show", count);
    // setCount(count + 1);
  });

  usePullDownRefresh(() => {
    console.log("pull down refresh", count);
  });

  useDidHide(() => {
    console.log("did hide", count);
  });

  useReady(() => {
    console.log("did ready", count);
  });

  useEffect(() => {
    console.log("effect", count);
    // setCount(count + 1);
  });

  console.log("render", count);

  return (
    <View className="index">
      <Text onClick={() => setCount(count + 1)}>Hello world!{count}</Text>
    </View>
  );
}

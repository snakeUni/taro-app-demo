import React, { useEffect, useRef, useState } from "react";
import Taro, {
  useDidShow,
  useReady,
  useDidHide,
  usePullDownRefresh,
  createSelectorQuery,
  NodesRef,
} from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";

export interface TDomRectInfo {
  rect: NodesRef.BoundingClientRectCallbackResult;
}

export default function Component() {
  const [count, setCount] = useState(0);
  const ref = useRef();
  useDidShow(() => {
    // Taro.showNavigationBarLoading();
    console.log("did show", count);
    setCount(count + 1);
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
  });

  console.log("render", count);

  return (
    <View className="index" ref={ref} id="adc-11">
      <Text onClick={() => setCount(count + 1)}>Hello world!{count}</Text>
    </View>
  );
}

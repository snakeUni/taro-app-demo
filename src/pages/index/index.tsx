import React, { useEffect, useRef, useState } from "react";
import Taro, {
  useDidShow,
  useReady,
  useDidHide,
  usePullDownRefresh,
  createSelectorQuery,
  NodesRef,
} from "@tarojs/taro";
import Skeleton from "taro-skeleton";
import { View, Text, Navigator } from "@tarojs/components";
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
    // setTimeout(() => {
    //   setCount(count + 1);
    // }, 100);
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
    // setCount(count + 1);
  });

  useEffect(() => {
    console.log("effect", count);
  });

  console.log("render", count);

  return (
    <Skeleton row={1} rowHeight={250} loading={false}>
      <View className="index" ref={ref} id="adc-11">
        <Text onClick={() => setCount(count + 1)}>Hello world!{count}</Text>
        <Navigator url="/pages/optimize/index">到优化页面</Navigator>
      </View>
    </Skeleton>
  );
}

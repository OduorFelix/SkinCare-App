import React, { Children, ReactNode, useState } from "react";
import { Dimensions } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Animated, { multiply } from "react-native-reanimated";
import { useTransition, mix } from  "react-native-redash/lib/module/v1";
import theme, { Box, Text } from "./Theme";


const { width } = Dimensions.get("window");

interface Tab {
    id: string;
    title: string;
}

interface TabsProps { 
    tabs: Tab[];
    children: ReactNode;
 };


const Tabs = ({ tabs, children }: TabsProps) => { 
    const [index, setIndex] = useState(0);
    const selectedTab = tabs[index];
    const transition = useTransition(index);
    const translateX = mix(transition, width * 0.09, width * 0.34);
    return (
        <Box flex={1}>
            <Box flexDirection="row">
                {tabs.map((tab, i) => (
                    <RectButton
                        style={{ flex: 1 }}
                        key={i}
                        onPress={() => setIndex(i)}
                    >
                        <Box padding="s" style={{ paddingBottom: theme.spacing.s + 5 }}>
                            <Text variant="tabTitle" textAlign="center">{ tab.title }</Text>
                        </Box>
                    </RectButton>
                ))}
                <Animated.View
                    style={{
                        position: "absolute",
                        bottom: 5,
                        left: -5,
                        backgroundColor: theme.colors.dark,
                        width: 40,
                        height: 5,
                        borderRadius: 5,
                        transform: [{ translateX }]
                    }}
                />
            </Box>
            <Animated.View
                style={{
                    flex: 1,
                    width: width * tabs.length,
                    flexDirection: "row",
                    transform: [{ translateX: multiply(-width , transition) }]
                }}
            >
                {Children.map(children, (child, i) => (
                    <Box flex={1} key={i} width={width}>
                        { child }
                    </Box>
                ))}
            </Animated.View>
        </Box>
    );
 };


export default Tabs;
import React from "react";
import { FlatList } from 'react-native';

// Importing Custom Componens
import { Box, Tabs, Text, PopularCard } from "../components";
import Header from "../components/Header";
import { Categories } from "../DummyData/Categories";
import Face from "./Face";
import Body from "./Body";
import Hair from "./Hair";
import Gifts from "./Gifts";
import { ScrollView } from "react-native";
import { Popular } from "../DummyData/Popular";


const Home = ({ navigation }: any) => {
    

    const renderPopular = ({ item }: any) => {
        return (
            <PopularCard
                title={item.title}
                subTitle={item.subTitle}
                price={item.price}
                image={item.image}
                onPress={() => navigation.navigate("Details", {item: item})}
            />
        )
    }

    return (
        <Box flex={1} backgroundColor="bg1">
            <Header
                title="SkinCare"
                left={{ icon: "menu", onPress: () => alert("Open Menu") }}
                right={{ icon: "user", onPress: () => alert("Open Profile") }}
            />
            <Box flex={1}>
                <ScrollView showsHorizontalScrollIndicator={false}>
                    <Box  flex={0.65} >
                        <Tabs tabs={Categories}>
                            <Face />
                            <Body />
                            <Hair />
                            <Gifts />
                        </Tabs>
                    </Box>
                    
                    <Box marginHorizontal="m">
                        <Text variant="title2">Popular</Text>
                    </Box>
                    <Box>
                        <FlatList
                            data={Popular}
                            renderItem={renderPopular}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </Box>
                </ScrollView>
            </Box>
        </Box>
    )
}

export default Home;
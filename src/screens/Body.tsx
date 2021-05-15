import { useNavigation } from "@react-navigation/core";
import React from "react";
import { FlatList } from 'react-native';

// Importing Custom Components
import { Box, ProductCard } from "../components";
import { Popular } from "../DummyData/Popular";


const Body = () => {

    const { navigate } = useNavigation()

    const renderFaceProducts = ({item}: any) => {
        return (
            <ProductCard
                title={item.title}
                subTitle={item.subTitle}
                price={item.price}
                image={item.image}
                onPress={() => navigate("Details", {item: item})}
            />
        )
    }

    
    return (
        <Box padding="s" justifyContent="center" alignItems="center">
            <FlatList
                data={Popular}
                renderItem={renderFaceProducts}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </Box>
    )
}


export default Body;
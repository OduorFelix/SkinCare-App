import React from "react";
import { Dimensions, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Box, Text } from "./Theme";
import { Feather as Icon } from "@expo/vector-icons";


interface ProductCardProps{
    image: any;
    title: string;
    subTitle: string;
    price: string;
    onPress: () => void;
}


const ProductCard = ({image, title, subTitle, price, onPress}: ProductCardProps) => {
    return (
        <Box
            backgroundColor="white"
            style={{
                height,
                width,
                borderRadius,
                padding: 15,
                marginLeft: 8,
                marginRight: 4,
            }}
        >
            <Box>
                <Box alignItems="center">
                    <Image
                        source={image}
                        style={{ height: 200, width: 200 }}
                        resizeMode="contain"
                    />
                </Box>
            
                <Box margin="s">
                    <Text variant="hedaderTitle" color="dark">{title}</Text>
                    <Text variant="body" color="grey3" >{ subTitle }</Text>
                </Box>

                <Box flexDirection="row" justifyContent="space-between" alignItems="center" margin="s">
                    <Box flexDirection="row">
                        <Text variant="textPrice" color="dark">{ price }</Text>
                    </Box>

                    <Box
                        backgroundColor="dark"
                        padding="s"
                        borderRadius="l"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <TouchableOpacity {...{ onPress }}>
                             <Icon size={20} name="shopping-bag" color="white" />
                        </TouchableOpacity>
                    </Box>

                </Box>
            </Box>

        </Box>
    )
}

const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.57;
const height = width * (455 / 265);
const borderRadius = 24;


export default ProductCard;
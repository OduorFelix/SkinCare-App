import React from "react";
import { Dimensions, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Box, Text } from "./Theme";
import { Feather as Icon } from "@expo/vector-icons";


interface PopularCardProps{
    image: any;
    title: string;
    subTitle: string;
    price: string;
    onPress: () => void;
}


const PopularCard = ({image, title, subTitle, price, onPress}: PopularCardProps) => {
    return (
        <Box
            backgroundColor="bg1"
            style={{
                height,
                width,
                padding: 15,
                marginLeft: 8,
                marginRight: 4,
            }}
        >
            <TouchableOpacity {...{ onPress }}>
                <Box flexDirection="row" justifyContent="space-between" alignItems="center">
                    <Box
                        backgroundColor="grey1"
                        borderRadius="m"
                    >
                        <Image
                            source={image}
                            style={{ height: 80, width: 50 }}
                            resizeMode="contain"
                        /> 
                    </Box>

                    <Box>
                        <Text variant="hedaderTitle2" color="dark">{title}</Text>
                        <Text variant="body2" color="grey3" >{ subTitle }</Text>
                    </Box>
                    
                    <Box>
                        <Text variant="textPrice2" color="dark">{ price }</Text>
                    </Box>
                </Box>
            </TouchableOpacity>
        </Box>
    )
}

const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.87;
const height = width * (400 / 950);


export default PopularCard;
import React from "react";
import { Dimensions, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Box, Text } from "./Theme";
import { Feather as Icon } from "@expo/vector-icons";


interface PopularCardProps{
    icon?: any;
    title: string;
}


const PopularCard = ({ icon, title }: PopularCardProps) => {
    return (
        <Box
            backgroundColor="bg1"
        >
            <Box>
                <Icon size={35} name="sliders" />
                <Text>{ title }</Text>
            </Box>

        </Box>
    )
}

const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.87;
const height = width * (400 / 950);


export default PopularCard;
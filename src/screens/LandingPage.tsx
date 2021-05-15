import { StatusBar } from 'expo-status-bar';
import React from "react";
import { Box, Text } from "../components";
import { Feather as Icon } from "@expo/vector-icons";
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const LandingPage = ({navigation}: any) => {
    return (
        <Box flex={1} backgroundColor="bg1" alignItems="center" justifyContent="center">
            <Box>
                <Image
                  source={require('../../assets/images/splash-1.png')}
                  style={{height: 450, width: 400}}
                  resizeMode="center"
                />
            </Box>
            <Box marginTop="s">
              <Text variant="subTitle">Let Us Reward</Text>
                <Box flexDirection="row" justifyContent="flex-start">
                    <Text variant="subTitle">You, </Text>
                    <Text variant="title">Naturally!!</Text>
                </Box>
            </Box>

            <Box borderRadius="xm" borderColor="dark" borderWidth={1} padding="s" marginTop="xl">
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                   <Icon size={35} name="chevron-right"/>
                </TouchableOpacity>
            </Box>
            <StatusBar style="auto" />
        </Box>
    )
}

export default LandingPage;
import React from "react";
import { Box, Text, theme } from "../components";
import Header from "../components/Header";
import { StyleSheet, Image } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";


const Details = ({ route, navigation }: any) => {
    const { item } = route.params

    return (
        <Box flex={1} backgroundColor="bg1">
            <Header
                title=""
                left={{ icon: "chevron-left", onPress: () => navigation.goBack()}}
                right={{ icon: "grid", onPress: () => alert("Open Profile") }}
            />
            <Box style={styles.header}>
                <Box alignItems="center">
                    <Image
                    source={item.image}
                    style={{ height: 350, width: 200 }}
                    resizeMode="contain"
                    />
                </Box>


                <Box flexDirection="row" justifyContent="space-between">
                    <Box
                        backgroundColor="white"
                        padding="m"
                        borderRadius="l"
                        alignItems="center"
                    >
                        <Image
                            source={require('../../assets/images/add-2.png')}
                            style={{ height: 30, width: 40 }}
                            resizeMode="contain"
                        />
                        <Text variant="body2">Cented</Text>
                    </Box>

                    <Box
                        backgroundColor="white"
                        padding="m"
                        borderRadius="l"
                        alignItems="center"
                    >
                        <Image
                            source={require('../../assets/images/add-3.png')}
                            style={{ height: 30, width: 40 }}
                            resizeMode="contain"
                        />
                        <Text variant="body2">Natural</Text>
                    </Box>
        
                    <Box
                        backgroundColor="white"
                        padding="m"
                        borderRadius="l"
                        alignItems="center"
                    >
                        <Image
                            source={require('../../assets/images/add-2.png')}
                            style={{ height: 30, width: 40 }}
                            resizeMode="contain"
                        />
                        <Text variant="body2">Fibres</Text>
                    </Box>
                </Box>


            </Box>

            <Box style={styles.footer}>
                <Box margin="m">
                    <Box flexDirection="row" justifyContent="space-between" alignItems="center">
                        <Box>
                            <Text variant="title2">{item.title}</Text>
                            <Text variant="body" color="grey3">{ item.subTitle }</Text>
                        </Box>

                        <Box>
                            <Box flexDirection="row">
                                <Icon size={18} name="star" />
                                <Icon size={18} name="star" />
                                <Icon size={18} name="star" />
                                <Icon size={18} name="star" />
                                <Icon size={18} name="star" />
                            </Box>
                            <Box marginTop="s">
                               <Text variant="body">5 Reviews!</Text>
                            </Box>
                        </Box>

                    </Box>

                    <Box flexDirection="row" justifyContent="space-between" alignItems="center" marginTop="m">
                        <Box>
                            <Text variant="title">{ item.price }</Text>
                        </Box>

                        <Box
                            flexDirection="row"
                            borderWidth={1}
                            borderRadius="l"
                            padding="m"
                        >
                            <Text marginRight="sp">-</Text>
                            <Text marginRight="sp">1</Text>
                            <Text>+</Text>
                        </Box>

                        <Box
                            backgroundColor="dark"
                            padding="m"
                            borderRadius="m"
                        >
                            <Text color="white">Cart</Text>
                        </Box>

                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

const styles = StyleSheet.create({
	header: {
        flex: 4,
		paddingHorizontal: 20,
        paddingBottom: 20,
        marginTop: theme.spacing.m
	},
	footer: {
		flex: 1.5,
		backgroundColor: theme.colors.white,
		borderTopLeftRadius: theme.borderRadii.l,
		borderTopRightRadius: theme.borderRadii.l,
		paddingHorizontal: 5,
		paddingVertical: theme.borderRadii.l,
	},

});

export default Details;
import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import Navigator from "./src/navigation/index";
import { Background } from "@react-navigation/elements";

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#fff',
    }
}

const App = () => {
    return (
        <NavigationContainer theme={MyTheme}>
            <Navigator />
        </NavigationContainer>
    );
};

export default App;

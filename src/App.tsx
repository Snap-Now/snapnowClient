import React, { useState, useContext } from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import Navigator from "./navigation/RootNavigator";
import { AuthProvider, useAuth } from "./context/AuthContext";

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#fff',
    }
};

const AppContent = () => {
    const { isAuthenticated } = useAuth();

    return (
        <NavigationContainer theme={MyTheme}>
            <Navigator isAuthenticated={isAuthenticated} />
        </NavigationContainer>
    );
};

const App = () => {
    return (
        <AuthProvider>
            <AppContent />
        </AuthProvider>
    );
};

export default App;
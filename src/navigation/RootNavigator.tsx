import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStack from './MainStack';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();

const Navigator = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
    return (
        <Stack.Navigator>
            {isAuthenticated ? (
                <Stack.Screen
                    name="MainStack"
                    component={MainStack}
                    options={{ headerShown: false }}
                />
            ) : (
                <Stack.Screen
                    name="AuthStack"
                    component={AuthStack}
                    options={{ headerShown: false }}
                />
            )}
        </Stack.Navigator>
    );
};

export default Navigator;
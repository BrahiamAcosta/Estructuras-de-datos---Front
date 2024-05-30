import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveAuthData = async (token, userName) => {
    try {
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('userName', userName);
    } catch (error) {
        console.log('Failed to save auth data', error);
    }
};

export const getAuthData = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
        const userName = await AsyncStorage.getItem('userName');
        return { token, userName };
    } catch (error) {
        console.log('Failed to fetch auth data ', error);
        return { token: null, userName: null };
    }
};

export const clearAuthData = async () => {
    try {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('userName');
    } catch (error) {
        console.log('Failed to clear data ', error);
    }
};

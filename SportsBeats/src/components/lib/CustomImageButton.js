import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

const CustomImageButton = ({ title, onPress, image }) => {
    const { contenedorStyle, textoStyle } = styles;
    return (
        <TouchableOpacity style={[contenedorStyle]} onPress={onPress}>
            <Image source={image} />
            <Text style={textoStyle}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    contenedorStyle: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#acacac',
        padding: 5
    },
    textoStyle: {
        alignSelf: 'center',
        color: '#0022d1',
        fontSize: 16,
        fontWeight: '400'
    }
};

export { CustomImageButton };


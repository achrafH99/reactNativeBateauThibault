import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

const TitlePage = ({
    content,color="white"
}) => (
    <View>
        <Text style={{color: color}}>{content}</Text>
    </View>
);

export default TitlePage;

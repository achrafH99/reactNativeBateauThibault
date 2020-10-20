import React from 'react';
import { View } from 'react-native';
import {Button} from 'teaset';
import ListRow from 'teaset/components/ListRow/ListRow';
import TitlePage from './TitlePage';

const Detail = ({
    title, image, subTitle, description
}) => (
    <View>
        <ListRow>
            <TitlePage content="title"></TitlePage>
        </ListRow>
    </View>
);

export default Detail;

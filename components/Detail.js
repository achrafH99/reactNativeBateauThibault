import React from 'react';
import { SafeAreaView, View } from 'react-native';
import {Button} from 'teaset';
import ListRow from 'teaset/components/ListRow/ListRow';
import TitlePage from './TitlePage';

const Detail = ({
    title, image, subTitle, description
}) => (
    <SafeAreaView>
        <ListRow>
            <TitlePage content="title"></TitlePage>
        </ListRow>
    </SafeAreaView>
);

export default Detail;

import * as React from "react";
import { Card, CardContent } from '@mui/material';
import { Title } from 'react-admin';

const Settings = () => (
    <Card>
        <Title title="Settings" />
        <CardContent sx={{flex:1,}}>
            ...
        </CardContent>
    </Card>
);

export default Settings;
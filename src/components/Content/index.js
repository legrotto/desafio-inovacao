import React from 'react';
import Tab from '../Tab';
import Routes from '../../routes';

import { Container } from './styles';

export default function Content() {
    return (
        <Container>
            <Tab />
            <Routes />
        </Container>
    );
}
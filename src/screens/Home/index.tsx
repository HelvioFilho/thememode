import React, { useContext } from 'react';
import { ThemeContext } from '../../assets/ThemeProvider';
import { Switch } from '../../components/Switch';

import { Container, Title } from './styles';

export function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <Container>
      <Switch style={{ top: 60, right: 60 }} />
      <Title> Teste de dark e light: {'\n'} Agora estou no modo {theme}</Title>
    </Container>
  );
}
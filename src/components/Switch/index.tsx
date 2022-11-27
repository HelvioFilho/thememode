import React, { useContext, useEffect, useRef } from 'react';
import LootieView from 'lottie-react-native';
import toggle from '../../assets/toggle.json';
import { Container } from './styles';

import { ViewProps } from 'react-native';
import { ThemeContext } from '../../assets/ThemeProvider';

export function Switch({...rest}: ViewProps) {
  const { toggleTheme, theme: themeContext } = useContext(ThemeContext);
  const animation = useRef(null);

  function changedTheme(){
    if(themeContext === 'light'){
      animation.current.play(110,50);
    }else{
      animation.current.play(50,110);
    }
    toggleTheme();
  }

  useEffect(() => {
    if(themeContext === 'light'){
      animation.current.play(110,110);
    }else{
      animation.current.play(50,50);
    }
  },[])
  
  return (
    <Container
      activeOpacity={0.8}
      onPress={changedTheme}
      {...rest}
    >
      <LootieView
        ref={animation}
        resizeMode="contain"
        source={toggle}
        loop={false}
        speed={2}
        autoPlay={false}
        style={{
          width: '250%',
        }}
      />
    </Container>
  );
}
import React, {useState} from 'react';
import {Animated, Easing, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ButtonLoader = ({onPress, containerStyles, width = 40}) => {
  const [rotateAnim] = useState(new Animated.Value(0));
  React.useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
    // eslint-disable-next-line
  }, []);
  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyle = {
    transform: [
      {
        rotate: rotateInterpolate,
      },
    ],
  };
  return (
    <View style={{...containerStyles}}>
      <Animated.View
        style={{
          ...animatedStyle,
          width: width,
        }}>
        <TouchableOpacity onPress={onPress}>
          <Icon name="reload" size={width} color="white" />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default ButtonLoader;

import React from 'react';
import {View, Text, Image} from 'react-native';
import {stylesVertical as styles} from './styles';
import Video from 'react-native-video';

const BannerVertical = ({img1, img2, img3, video, text}) => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionContainerSectionTop}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <View style={styles.containerImageVideo}>
          <View style={styles.videoContainer}>
            <Video
              source={video}
              repeat={true}
              style={styles.video}
              muted={true}
              resizeMode="stretch"
            />
          </View>
        </View>
      </View>
      <View style={styles.sectionContainerSectionBottom}>
        <View style={styles.containerImages}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: img1,
              }}
              style={styles.imagesSectionLeft}
            />
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: img2,
              }}
              style={styles.imagesSectionRigth}
            />
            <Image
              source={{
                uri: img3,
              }}
              style={styles.imagesSectionRigth}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default BannerVertical;

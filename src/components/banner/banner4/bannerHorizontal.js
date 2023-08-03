import React from 'react';
import {View, Text, Image} from 'react-native';
import {stylesHorizontal as styles} from './styles';
import Video from 'react-native-video';

const BannerHorizontal = ({img1, img2, img3, video, text}) => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionContainerSectionLeft}>
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
          <View style={styles.imageContainer}>
            <View style={styles.imagesSectionLeftTop}>
              <Image
                source={{
                  uri: img1,
                }}
                style={styles.imagesSectionLeft}
              />
            </View>
            <View style={styles.imagesSectionLeftBottom}>
              <Image
                source={{
                  uri: img2,
                }}
                style={styles.imagesSectionLeft}
              />
            </View>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
      <View style={styles.sectionContainerSectionRight}>
        <Image
          source={{
            uri: img3,
          }}
          style={styles.imagesSectionRigth}
        />
      </View>
    </View>
  );
};

export default BannerHorizontal;

import React from 'react';
import {View, Text, Image} from 'react-native';
import {stylesHorizontal as styles} from './styles';

const BannerHorizontal = ({img1, img2, img3, img4, text}) => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionContainerSectionLeft}>
        <View style={styles.containerImageText}>
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
              style={styles.imagesSectionLeft}
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
      <View style={styles.sectionContainerSectionRight}>
        <View style={styles.imageContainerRightTop}>
          <Image
            source={{
              uri: img3,
            }}
            style={styles.imagesSectionRigth}
          />
        </View>
        <View style={styles.imageContainerRightBottom}>
          <Image
            source={{
              uri: img1,
            }}
            style={styles.imagesSectionRigth}
          />
        </View>
      </View>
    </View>
  );
};

export default BannerHorizontal;

import {StyleSheet} from 'react-native';

export const stylesHorizontal = StyleSheet.create({
  sectionContainer: {
    // Aca se modifica el tamaño del container general, tanto el padding y demas,
    // los componentes internos son responsives al cambio
    flex: 1,
    flexDirection: 'row',
  },
  sectionContainerSectionLeft: {
    flex: 5,
  },
  sectionContainerSectionRight: {
    flex: 3,
  },
  containerImageVideo: {
    flex: 7,
    flexDirection: 'row',
  },
  imagesSectionRigth: {
    width: '100%',
    height: '50%',
  },
  video: {
    flex: 1,
    width: '100%',
  },
  videoContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  imagesSectionLeft: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 2,
    backgroundColor: 'blue',
    padding: 3,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    verticalAlign: 'middle',
    fontSize: 20,
  },
});

export const stylesVertical = StyleSheet.create({
  sectionContainer: {
    // Aca se modifica el tamaño del container general, tanto el padding y demas,
    // los componentes internos son responsives al cambio
    flex: 1,
    flexDirection: 'column',
  },
  sectionContainerSectionTop: {
    flex: 3,
  },
  sectionContainerSectionBottom: {
    flex: 3,
    width: '100%',
  },
  containerImageVideo: {
    flex: 5,
  },
  imagesSectionRigth: {
    width: '100%',
    height: '50%',
  },
  containerImages: {
    flex: 1,
    flexDirection: 'row',
  },
  video: {
    flex: 1,
    width: '100%',
  },
  videoContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  imagesSectionLeft: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 2,
    backgroundColor: 'blue',
    padding: 3,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    verticalAlign: 'middle',
    fontSize: 20,
  },
});

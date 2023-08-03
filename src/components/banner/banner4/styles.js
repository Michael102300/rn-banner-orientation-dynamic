import {StyleSheet} from 'react-native';

export const stylesHorizontal = StyleSheet.create({
  sectionContainer: {
    // Aca se modifica el tamaño del container general, tanto el padding y demas,
    // los componentes internos son responsives al cambio
    flex: 1,
    flexDirection: 'row',
  },
  sectionContainerSectionLeft: {
    flex: 4,
  },
  sectionContainerSectionRight: {
    flex: 5,
  },
  containerImageVideo: {
    flex: 7,
    flexDirection: 'row',
  },
  imagesSectionRigth: {
    width: '100%',
    height: '100%',
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
  imagesSectionLeftTop: {
    flex: 5,
  },
  imagesSectionLeftBottom: {
    flex: 2,
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

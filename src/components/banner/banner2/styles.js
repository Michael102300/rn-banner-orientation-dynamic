import {StyleSheet} from 'react-native';

export const stylesHorizontal = StyleSheet.create({
  sectionContainer: {
    // Aca se modifica el tamaño del container general, tanto el padding y demas,
    // los componentes internos son responsives al cambio
    flex: 1,
    flexDirection: 'row',
  },
  sectionContainerSectionLeft: {
    flex: 3,
  },
  sectionContainerSectionRight: {
    flex: 3,
    flexDirection: 'row',
  },
  containerImageText: {
    flex: 4,
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
    flex: 3,
  },
  imagesSectionLeft: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 1,
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

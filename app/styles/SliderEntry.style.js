import { StyleSheet, Dimensions, Platform } from 'react-native';

export const colors = {
  black: '#1a1917',
  gray: '#888888',
  background1: 'hsl(15, 55%, 50%)',
  background2: 'hsl(230, 30%, 45%)'
};
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight - 100;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

export default StyleSheet.create({
  slideInnerContainer: {
    width: itemWidth,
    height: slideHeight,
    backgroundColor: '#fff',
    marginTop: 18,
    marginBottom: 18,
    shadowColor: '#aaa',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    borderRadius: 4
  },
  title: {
    color: colors.black,
    fontSize: 18,
    backgroundColor: '#eee',
    padding: 10
  },
  itemsView: {
    position: 'relative',
    backgroundColor: '#fff'
  },
  item: {
    position: 'relative',
    backgroundColor: '#f5f5f5',
    padding: 10,
    height: 68,
    shadowColor: 'black',
    borderLeftColor: '#e9eef2',
    borderLeftWidth: 5
  },
  priority1: {
    borderLeftColor: '#ce0000',
  },
  priority2: {
    borderLeftColor: '#ed6161',
  },
  priority3: {
    borderLeftColor: '#ea7d24',
  },
  priority4: {
    borderLeftColor: '#2a8735',
  },
  priority5: {
    borderLeftColor: '#55a557',
  },
  itemTypeIcon:{
    marginTop:2,
    width: 12,
    height: 12,
  },
  itemText: {
    marginRight: 30,
    position: 'absolute',
    top: 25,
    left: 10,
    // color: '#000'
  },
  itemTextKey:{
    fontSize:12,
    height:22,
    color:'#3b73af',
    // marginLeft: 5,
    position: 'absolute',
    left: 17,
    width: '80%'
  },
  priorityIcon: {
    position: 'absolute',
    left: -9,
    top: 10,
    width: 8,
    height: 8,
  },

  typeIcon: {
    position: 'absolute',
    left: -9,
    top: 18,
    width: 8,
    height: 8,
  },
  itemAvatar: {
    position: 'absolute',
    right: 10,
    top: 6,
    width: 22,
    height: 22,
    borderRadius: 11
  },
  nullData: {
    textAlign: 'center',
    marginTop: 100
  },
  footer: {
    height: 50,
    paddingTop: 15
  },
  separator: {
    height: 10
  },
  header: {
    height: 10
  }
});
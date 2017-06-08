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
    padding: 10,
    position: 'relative'
  },
  item: {
    position: 'relative',
    backgroundColor: '#f5f5f5',
    marginTop: 10,
    padding: 10,
    shadowColor: 'black',
    borderRadius: 2,
    borderLeftColor: '#e9eef2',
    borderLeftWidth: 5
  },
  priority1: {
    borderLeftColor: '#c40707',
  },
  priority2: {
    borderLeftColor: '#faa121',
  },
  priority3: {
    borderLeftColor: '#2c96da',
  },
  priority4: {
    borderLeftColor: '#1b9451',
  },
  itemText: {
    marginRight: 30
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
  }
});
import { Constants } from '../assets';

//ENGLISH

const texts = {
  oilRatioCalculator: 'Oil Ratio Calculator',
  options: 'Options',
  amountOfFuel: 'Amount of fuel:',
  oilMixRatio: 'Oil mix ratio:',
  youNeedAdd: 'You need add',
  ofOilToGasoline: 'of oil to gasoline.',
  unitsOfMeasurement: 'Unit of measurement',
  litersUnit: 'Liters',
  usGallons: 'US gallons',
  imperialGallons: 'Imperial gallons',
  shareApp: 'Share App',
  shareMessage: `Super Gas/Oil ratio calculator ${Constants.GOOGLE_PLAY_LINK}`,
  shareTitle: 'Super Gas/Oil ratio calculator',
};

const units = {
  liters: 'liters',
  l: 'l',
  milliliter: 'milliliter',
  ml: 'ml',
  gallon: 'gallon',
  gal: 'gal.',
  ounce: 'ounce',
  oz: 'oz.',
};

export default {
  ...texts,
  ...units,
};

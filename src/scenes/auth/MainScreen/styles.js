import { StyleSheet } from 'react-native';
import colors from '../../../theme/colors';
import { hScaleRatio, wScale } from '../../../utils/scailing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: colors.white
  },
  title: {
    fontFamily: 'Mulish',
    fontWeight: '700',
    fontSize: 24,
    color: '#221F60'
  },
  searchBar: {
    width: '100%',
    height: hScaleRatio(48),
    backgroundColor: '#F5F6FA',
    borderRadius: hScaleRatio(10),
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: hScaleRatio(32)
  },
  panel: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F6FA',
    borderRadius: hScaleRatio(30),
    padding: wScale(28)
  },
  bottomBar: {
    borderRadius: hScaleRatio(30),
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: hScaleRatio(83),
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center'
  },
  bottomBtn: {
    flex: 1,
    alignItems: 'center'
  },
  subText: {
    color: '#4FACFE',
    fontWeight: '700',
    fontSize: 16,
    marginTop: hScaleRatio(20)
  }
});

export default styles;

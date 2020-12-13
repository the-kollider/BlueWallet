import React from 'react';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';
import { useRoute } from '@react-navigation/native';

import { SafeBlueArea } from '../../BlueComponents';
import navigationStyle from '../../components/navigationStyle';

const HodlHodlWebview = () => {
  const { uri } = useRoute().params;

  return (
    <SafeBlueArea>
      <WebView source={{ uri }} incognito />
    </SafeBlueArea>
  );
};

HodlHodlWebview.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      uri: PropTypes.string.isRequired,
    }),
  }),
};

HodlHodlWebview.navigationOptions = navigationStyle({
  closeButton: true,
  title: '',
  headerLeft: null,
});

export default HodlHodlWebview;

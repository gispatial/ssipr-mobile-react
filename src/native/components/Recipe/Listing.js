import * as React from 'react';
import { WebView } from 'react-native-webview';

export default class App extends React.Component {
  render() {
    return <WebView source={{ uri: 'http://localhost:3000/update-profile' }} style={{ marginTop: 0 }} />;
  }
}

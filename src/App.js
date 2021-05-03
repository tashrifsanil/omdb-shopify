import React, { useCallback, useState } from 'react';

import {
  AppProvider,
  Card,
  Frame,
  Layout,
  Page,
  DropZone,
  TextField,
  FormLayout,
  Banner,
} from '@shopify/polaris';

import { ArrowLeftMinor } from '@shopify/polaris-icons';
import SearchBar from './components/SearchBar';
import movieIcon from './resources/icons/movie_black_24dp.svg'
import SearchResults from './components/SearchResults';

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const handleThemeChange = useCallback(
    () => setIsDarkTheme((isDarkTheme) => !isDarkTheme),
    [],
  );

  const theme = {
    colors: {
      surface: '#FFFFFF',
      onsurface: '#212B36',
    },
    colorScheme: isDarkTheme ? 'dark' : 'light',
    logo: {
      width: 50,
      topBarSource: movieIcon,
      url: 'https://plus.shopify.com',
      accessibilityLabel: 'Shopify Plus',
    },
  };




  return (
    <AppProvider
      theme={theme}
    >
      <Frame>
        <SearchBar setSearchTerm={setSearchTerm}/>
        <Page fullWidth>
          <Layout>
            <Layout.Section>
              <Banner title="Order archived" onDismiss={() => { }}>
                <p>This order was archived on March 7, 2017 at 3:12pm EDT.</p>
              </Banner>
            </Layout.Section>
          </Layout>
          <Layout>
            <Layout.Section>
              <Page
                title={"Search Results"}
                fullWidth={true}>
                <Layout>

                  <SearchResults searchTerm={searchTerm}/>
                </Layout>
              </Page>
            </Layout.Section>
            <Layout.Section secondary>
              <Page title={"Nominations"}>
                <Card sectioned></Card>
                <Card sectioned></Card>
                <Card sectioned></Card>
                <Card sectioned></Card>
                <Card sectioned></Card>
              </Page>
            </Layout.Section>
          </Layout>
        </Page>
      </Frame>
    </AppProvider >
  );
}

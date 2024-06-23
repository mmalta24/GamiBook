import React, { useEffect, useState, useRef } from 'react';
import { View, Text, ScrollView, FlatList, Animated, useWindowDimensions } from 'react-native';
import BookListItem from '../components/library/BookListItem';
import NoBooks from '../components/library/NoBooks';
import NavigationPressable, { NavigationPressableFE, NavigationPressableIO } from '../components/shared/NavigationPressable';
import PageTitle from '../components/shared/PageTitle';
import OverlayComponent from '../components/addBook/overlay';
import FilterBook from '../components/library/FilterBook'

import styles from '../styles/LibraryStyles';

import { getBooks } from '../api/books';
import BookGalleryItem from '../components/library/BookGalleryItem';

const LibraryScreen = ({ navigation, route }) => {
  const [books, setBooks] = useState([]);

  const [viewType, setViewType] = useState("list");
  const [visibility, setVisibility] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const [filterSelected, setFilterSelected] = useState(route?.params?.category ? route.params.category : {});
  const [firstTime, setFirstTime] = useState(true);

  const [scrollViewWidth, setScrollViewWidth] = useState(useWindowDimensions().width);
  const boxWidth = scrollViewWidth * 0.8;
  const boxDistance = scrollViewWidth - boxWidth;
  const pan = useRef(new Animated.ValueXY()).current;

  useEffect(() => {
    if (firstTime) {
      receivedBooks(filterSelected);
      setFirstTime(false);
    }
    else {
      if (route.params.category) {
        if (route.params.category.id != filterSelected.id) {
          setFilterSelected(route.params.category)
          receivedBooks(filterSelected);
        }
      } else {
        receivedBooks(filterSelected);
      }
    }

  }, [filterSelected, route?.params?.category]);

  async function receivedBooks(data) {
    setBooks(await getBooks(data))
  }

  return (
    <ScrollView style={styles.body}>
      <View style={{ ...styles.section, ...styles.sectionTitle }}>
        <PageTitle title="Biblioteca" />
        <View style={styles.optionsLibrary}>
          <NavigationPressableFE
            navigateAction={() => setVisibility(true)}
            iconName="plus"
            iconColor="white"
            marginSize={10}
          />
          <NavigationPressableIO
            navigateAction={() => setFilterModal(true)}
            iconName="ios-search"
            iconColor="white"
            iconSize={34}
            marginSize={10}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.resultText}>
          Resultados (<Text style={[styles.resultText, { fontFamily: 'Sora-SemiBold' }]}>{books.length}</Text>)
        </Text>
        <View style={styles.optionsLibrary}>
          <NavigationPressable
            navigateAction={() => setViewType("list")}
            iconName="view-list"
            iconSize={35}
            iconColor={viewType === "list" ? "white" : "#A0A0A0"}
            marginSize={0}
            aditionalStyles={styles.typeViewBtn}
          />
          <NavigationPressable
            navigateAction={() => setViewType("gallery")}
            iconName="view-carousel"
            iconSize={35}
            iconColor={viewType === "gallery" ? "white" : "#A0A0A0"}
            marginSize={0}
            aditionalStyles={styles.typeViewBtn}
          />
        </View>
      </View>

      {books.length === 0 ? <NoBooks /> :
        viewType === "list" ?
          <ScrollView style={styles.scrollList}>
            {books.map((book, index) => (
              <BookListItem key={index} book={book}
                goToBook={() => navigation.navigate("BookScreen", { id: book.id })}
                updateBooks={() => receivedBooks(filterSelected)} />
            ))}
          </ScrollView>
          :
          <View style={{ width: '100%', display: 'flex', alignItems: 'center', marginTop: 17 }}>
            <FlatList
              horizontal
              data={books}
              contentContainerStyle={{ paddingVertical: 16 }}
              contentInsetAdjustmentBehavior="never"
              snapToAlignment="center"
              decelerationRate="fast"
              automaticallyAdjustContentInsets={false}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={1}
              snapToInterval={boxWidth}
              contentInset={{
                left: boxDistance / 2,
                right: boxDistance / 2,
              }}
              contentOffset={{ x: (boxDistance / 2) * -1, y: 0 }}
              onLayout={(e) => {
                setScrollViewWidth(e.nativeEvent.layout.width);
              }}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: pan.x } } }],
                { useNativeDriver: false },
              )}
              keyExtractor={(item, index) => `${index}-${item}`}
              renderItem={({ item, index }) => (
                <BookGalleryItem book={item} index={index} pan={pan}
                  updateBooks={() => receivedBooks(filterSelected)}
                  goToBook={() => navigation.navigate("BookScreen", { id: item.id })}
                />
              )} />
          </View>
      }

      <OverlayComponent show={visibility}
        toggleOverlay={() => setVisibility(false)} updateBook={() => receivedBooks(filterSelected)} />
      <FilterBook show={filterModal} toggleOverlay={() => setFilterModal(false)}
        filter={filterSelected} changeFilter={(data) => { setFilterSelected(data) }} />
    </ScrollView>
  );
};
export default LibraryScreen;
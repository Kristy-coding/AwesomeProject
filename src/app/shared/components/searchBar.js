import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Animated,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const SearchBar = () => {
  const [isExpanded, setExpanded] = useState(false);
  const searchBarWidth = useRef(new Animated.Value(0)).current;
  const recentSearchesHeight = useRef(new Animated.Value(0)).current;

  const toggleSearchBar = () => {
    const width = isExpanded ? 0 : 300; // Set the desired expanded width for the search bar
    const height = isExpanded ? 0 : 200; // Set the desired expanded height for the recent searches

    Animated.parallel([
      Animated.timing(searchBarWidth, {
        toValue: width,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(recentSearchesHeight, {
        toValue: height,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();

    setExpanded(!isExpanded);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonInputContainer}>
        <TouchableOpacity onPress={toggleSearchBar}>
          {/* Add your search icon */}
          <Text style={{paddingHorizontal: 15}}>S</Text>
        </TouchableOpacity>
        <Animated.View style={[styles.searchBar, {width: searchBarWidth}]}>
          <TextInput
            style={styles.input}
            placeholder="Search"
            // Add necessary props and event handlers for search functionality
          />
        </Animated.View>
      </View>
      <Animated.View
        style={[styles.recentSearches, {height: recentSearchesHeight}]}>
        {/* Add your recent searches component */}
        <Text>This is where the recet searches will go</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '95%',
  },
  buttonInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    //paddingLeft: 10,
    backgroundColor: 'blue',
    borderRadius: 50,
  },
  searchBar: {
    // flex: 1,
    // marginLeft: 10,
    overflow: 'hidden',
  },
  input: {
    //backgroundColor: 'red',
    borderRadius: 5,
    padding: 10,
    //marginLeft: 10,
  },
  recentSearches: {
    marginTop: 10,
    width: '100%',
    backgroundColor: '#f5f5f5',
    overflow: 'hidden',
  },
});

export default SearchBar;

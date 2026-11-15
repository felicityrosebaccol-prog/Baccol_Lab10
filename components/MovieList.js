import {
    ScrollView,
    StyleSheet,
    View,
} from "react-native";

import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.list}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  list: {
    paddingBottom: 20,
  },
});

export default MovieList;
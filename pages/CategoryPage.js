
import {
    StyleSheet,
    Text,
    View,
} from "react-native";

import MovieList from "../components/MovieList";
import { MOVIES } from "../data/movies";

export default function CategoryPage({ route }) {
  const { category } = route.params;

  // Filter movies based on the selected category
  const filteredMovies = MOVIES.filter((movie) =>
    movie.categories.includes(category)
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {category} Movies ♡
      </Text>

      <Text style={styles.subtitle}>
        Discover something lovely to watch!
      </Text>

      {filteredMovies.length > 0 ? (
        <MovieList movies={filteredMovies} />
      ) : (
        <Text style={styles.empty}>
          No movies available in this category.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5F8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#8B4565",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  subtitle: {
    fontSize: 14,
    color: "#777777",
    paddingHorizontal: 20,
    marginTop: 5,
    marginBottom: 10,
  },
  empty: {
    textAlign: "center",
    marginTop: 40,
    color: "#777777",
  },
});

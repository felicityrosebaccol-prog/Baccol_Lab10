import {
    Image,
    StyleSheet,
    Text,
    View,
} from "react-native";

const MovieCard = ({ movie }) => {
  return (
    <View style={styles.card}>
      <Image
        source={movie.image}
        style={styles.poster}
        resizeMode="cover"
      />

      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={2}>
          {movie.title}
        </Text>

        <Text style={styles.year}>
          {movie.year}
        </Text>

        <Text style={styles.rating}>
          ⭐ {movie.rating}
        </Text>

        <Text style={styles.description} numberOfLines={4}>
          {movie.desc}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    overflow: "hidden",
    marginBottom: 15,
    elevation: 3,
    height: 155,
  },

  poster: {
    width: 105,
    height: 155,
  },

  details: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#8B4565",
  },

  year: {
    fontSize: 12,
    color: "#888888",
    marginTop: 5,
  },

  rating: {
    fontSize: 13,
    marginTop: 5,
  },

  description: {
    fontSize: 11,
    color: "#666666",
    lineHeight: 16,
    marginTop: 7,
  },
});

export default MovieCard;


import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

const categories = [
  {
    id: "1",
    name: "Latest",
    emoji: "✨",
    description: "Discover the newest movies!",
    color: "#F8D7E5",
  },
  {
    id: "2",
    name: "Top Rated",
    emoji: "⭐",
    description: "Movies worth watching.",
    color: "#FCE8C8",
  },
  {
    id: "3",
    name: "Popular",
    emoji: "🎬",
    description: "Everyone's favorite movies!",
    color: "#E9DDF8",
  },
  {
    id: "4",
    name: "Recommended",
    emoji: "💕",
    description: "Handpicked just for you.",
    color: "#DCEDE5",
  },
];

export default function MoviesPage({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Find Your Next Favorite ♡
        </Text>

        <Text style={styles.subtitle}>
          From heart-fluttering romances to
          unforgettable musical moments.
        </Text>
      </View>

      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <Pressable
            key={category.id}
            style={[
              styles.card,
              { backgroundColor: category.color },
            ]}
            onPress={() =>
              navigation.navigate("Category", {
                category: category.name,
              })
            }
          >
            <Text style={styles.emoji}>
              {category.emoji}
            </Text>

            <Text style={styles.categoryTitle}>
              {category.name}
            </Text>

            <Text style={styles.description}>
              {category.description}
            </Text>

            <Text style={styles.explore}>
              Explore Movies →
            </Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5F8",
  },
  header: {
    padding: 22,
    paddingTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#8B4565",
  },
  subtitle: {
    fontSize: 14,
    color: "#777777",
    marginTop: 10,
    lineHeight: 21,
  },
  categoryContainer: {
    paddingHorizontal: 18,
    paddingBottom: 25,
  },
  card: {
    padding: 22,
    borderRadius: 18,
    marginBottom: 16,
    elevation: 2,
  },
  emoji: {
    fontSize: 35,
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#8B4565",
  },
  description: {
    fontSize: 14,
    color: "#6F5963",
    marginTop: 5,
  },
  explore: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#A74770",
    marginTop: 15,
  },
});

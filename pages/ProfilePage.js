
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function ProfilePage() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heart}>♡</Text>

        <Text style={styles.title}>
          My Profile
        </Text>

        <Text style={styles.subtitle}>
          A little about the person behind the collection.
        </Text>
      </View>

      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>F</Text>
        </View>

        <Text style={styles.name}>
          Your Name Here
        </Text>

        <Text style={styles.role}>
          Movie Lover ♡
        </Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}>
          About Me
        </Text>

        <Text style={styles.description}>
          I love watching romantic comedies,
          musical films, and stories that make
          me laugh, smile, and feel something.
        </Text>

        <Text style={styles.sectionTitle}>
          Favorite Movie Genres
        </Text>

        <View style={styles.genreContainer}>
          <Text style={styles.genre}>💕 Rom-Com</Text>
          <Text style={styles.genre}>🎤 Musical</Text>
        </View>

        <Text style={styles.sectionTitle}>
          My Movie Collection
        </Text>

        <Text style={styles.description}>
          Welcome to Reel in Love, my personal
          collection of romance, music, and
          unforgettable movie moments.
        </Text>
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
    alignItems: "center",
    padding: 25,
  },
  heart: {
    fontSize: 55,
    color: "#C45B83",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#8B4565",
  },
  subtitle: {
    fontSize: 13,
    color: "#777777",
    marginTop: 8,
    textAlign: "center",
  },
  profileCard: {
    backgroundColor: "#F8D7E5",
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#C45B83",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontSize: 38,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  name: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#8B4565",
    marginTop: 15,
  },
  role: {
    fontSize: 14,
    color: "#A74770",
    marginTop: 5,
  },
  infoCard: {
    backgroundColor: "#FFFFFF",
    margin: 20,
    padding: 20,
    borderRadius: 18,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#8B4565",
    marginTop: 12,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#666666",
    lineHeight: 22,
  },
  genreContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  genre: {
    backgroundColor: "#FCEAF1",
    color: "#A74770",
    padding: 10,
    borderRadius: 20,
    fontWeight: "600",
  },
});



import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";

export default function HomePage({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.welcome}>
        <Text style={styles.eyebrow}>
          YOUR LITTLE MOVIE CORNER ♡
        </Text>

        <Text style={styles.title}>
          Hello, Movie Lover!
        </Text>

        <Text style={styles.subtitle}>
          Love stories, music, and movies
          that stay in your heart.
        </Text>
      </View>

      <View style={styles.hero}>
        <Text style={styles.heroLabel}>
          WELCOME TO
        </Text>

        <Text style={styles.heroTitle}>
          Reel in Love ♡
        </Text>

        <Text style={styles.heroText}>
          A little romance, a little music,
          and a lot of movie magic.
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Movies")}
        >
          <Text style={styles.buttonText}>
            Explore Movies →
          </Text>
        </Pressable>
      </View>

      <View style={styles.featured}>
        <Text style={styles.sectionTitle}>
          Made for Your Next Movie Night ♡
        </Text>

        <Text style={styles.description}>
          Whether you're in the mood for a
          heart-fluttering rom-com or a
          music-filled adventure, there's
          always a story waiting for you.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Made with love, for movie lovers. ♡
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

  welcome: {
    padding: 22,
    paddingTop: 28,
  },

  eyebrow: {
    color: "#C45B83",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 2,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#8B4565",
    marginTop: 12,
  },

  subtitle: {
    fontSize: 14,
    color: "#777777",
    lineHeight: 22,
    marginTop: 8,
  },

  hero: {
    backgroundColor: "#F4CBDC",
    marginHorizontal: 20,
    borderRadius: 22,
    padding: 25,
    marginTop: 10,
  },

  heroLabel: {
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 2,
    color: "#A74770",
  },

  heroTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#8B4565",
    marginTop: 12,
  },

  heroText: {
    fontSize: 14,
    color: "#74465A",
    lineHeight: 22,
    marginTop: 10,
  },

  button: {
    backgroundColor: "#C45B83",
    padding: 14,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 22,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },

  featured: {
    padding: 22,
    marginTop: 15,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#8B4565",
  },

  description: {
    fontSize: 14,
    color: "#777777",
    lineHeight: 23,
    marginTop: 10,
  },

  footer: {
    padding: 25,
    alignItems: "center",
  },

  footerText: {
    fontSize: 12,
    color: "#C45B83",
  },
});

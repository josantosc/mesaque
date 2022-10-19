import { StyleSheet, View, Text } from "react-native";
import { Card } from "../../../components/Card";

export function Videos() {
  const videos = [
    { title: "Vídeo 01 - Lorem Ipsum" },
    { title: "Vídeo 02 - Lorem Ipsum" },
    { title: "Vídeo 03 - Lorem Ipsum" },
    { title: "Vídeo 04 - Lorem Ipsum" },
    { title: "Vídeo 05 - Lorem Ipsum" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Videos</Text>
      {videos.map((video) => (
        <Card key={video.title} style={{ marginBottom: 16 }}>
          <View style={styles.videoContainer}>
            <View style={styles.videoImage} />
            <Text style={styles.videoTitle}>{video.title}</Text>
          </View>
        </Card>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  title: {
    fontSize: 26,
    lineHeight: 48,
    fontWeight: "500",
  },
  videoContainer: {
    flexDirection: "row",
    padding: 16,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  videoImage: {
    width: 82,
    height: 48,
    borderRadius: 8,
    backgroundColor: "#737380",
  },
  videoTitle: {
    marginLeft: 16,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400",
  },
});

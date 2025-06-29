import { Box } from "@mui/material";
import GalleryGrid from "../components/GalleryGrid";
import About from "./About";

function Home() {
  return (
    <Box sx={{ p: 4, position: "relative" }}>
      <Box sx={{ mt: 6 }}>
        <GalleryGrid />
      </Box>
      <Box sx={{ mt: 6 }}>
        <About>
          I am a creative photographer with a passion for capturing people in
          natural, candid moments. I love telling stories through unique
          perspectives and unexpected compositions. My goal is to reveal
          authentic emotion and personality in every frame — whether it’s a
          quiet glance, a burst of laughter, or a moment of stillness. I believe
          the best photos happen when people feel at ease, and I strive to
          create a relaxed atmosphere that allows true beauty to shine through.
        </About>
      </Box>
    </Box>
  );
}

export default Home;

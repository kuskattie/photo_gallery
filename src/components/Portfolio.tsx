import { Box, Typography } from "@mui/material";
import PhotoCrad from "./PhotoCrad";

const portfolioData = [
  {
    category: "Portraits",
    photos: [
      "photo1.jpeg",
      "photo2.jpeg",
      // ...
      "photo10.jpeg",
    ],
  },
  {
    category: "Spain",
    photos: [
      "photo1.jpeg",
      // ...
      "photo16.jpeg",
    ],
  },
  {
    category: "Argentina",
    photos: [
      "photo1.jpeg",
      // ...
      "photo12.jpeg",
    ],
  },
  {
    category: "Morocco",
    photos: [
      "photo1.jpeg",
      // ...
      "photo12.jpeg",
    ],
  },
];

function Portfolio() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          mb: 4,
          fontFamily: "'Playfair Display', serif",
          fontWeight: 600,
          letterSpacing: 1,
        }}
      >
        My portfolio
      </Typography>

      {portfolioData.map((section, index) => (
        <Box key={index} sx={{ mb: 6 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              fontFamily: "'Playfair Display', serif",
              fontWeight: 500,
              color: "#555",
            }}
          >
            {section.category}
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr 1fr",
              },
              gap: 2,
            }}
          >
            {section.photos.map((file, idx) => {
              const fullPath = `/photo_gallery/assets/photos/${file}`;
              return (
                <PhotoCrad
                  key={idx}
                  src={fullPath}
                  alt={`${section.category} ${idx + 1}`}
                />
              );
            })}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Portfolio;

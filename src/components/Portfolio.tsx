import { Box, Typography } from "@mui/material";
import PhotoCrad from "./PhotoCrad";

const portfolioData = [
  {
    category: "Portraits",
    photos: [
      "photo1.jpeg",
      "photo2.jpeg",
      "photo3.jpeg",
      "photo4.jpeg",
      "photo5.jpeg",
      "photo6.jpeg",
      "photo7.jpeg",
      "photo8.jpeg",
      "photo9.jpeg",
      "photo10.jpeg",
    ],
    folder: "portreits",
  },
  {
    category: "Spain",
    photos: [
      "photo1.jpeg",
      "photo2.jpeg",
      "photo3.jpeg",
      "photo4.jpeg",
      "photo5.jpeg",
      "photo6.jpeg",
      "photo7.jpeg",
      "photo8.jpeg",
      "photo9.jpeg",
      "photo10.jpeg",
      "photo11.jpeg",
      "photo12.jpeg",
      "photo13.jpeg",
      "photo14.jpeg",
      "photo15.jpeg",
      "photo16.jpeg",
    ],
    folder: "spain",
  },
  {
    category: "Argentina",
    photos: [
      "photo1.jpeg",
      "photo2.jpeg",
      "photo3.jpeg",
      "photo4.jpeg",
      "photo5.jpeg",
      "photo6.jpeg",
      "photo7.jpeg",
      "photo8.jpeg",
      "photo9.jpeg",
      "photo10.jpeg",
      "photo11.jpeg",
      "photo12.jpeg",
    ],
    folder: "argentina",
  },
  {
    category: "Morocco",
    photos: [
      "photo1.jpeg",
      "photo2.jpeg",
      "photo3.jpeg",
      "photo4.jpeg",
      "photo5.jpeg",
      "photo6.jpeg",
      "photo7.jpeg",
      "photo8.jpeg",
      "photo9.jpeg",
      "photo10.jpeg",
      "photo11.jpeg",
      "photo12.jpeg",
    ],
    folder: "morocco",
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
            {section.photos.map((file, idx) => (
              <PhotoCrad
                key={idx}
                src={`/photo_gallery/assets/photos/${section.folder}/${file}`}
                alt={`${section.category} ${idx + 1}`}
              />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Portfolio;

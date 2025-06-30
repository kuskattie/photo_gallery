import { Box, Typography } from "@mui/material";

interface AboutProps {
  children: React.ReactNode;
}

function About({ children }: AboutProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 10 },
        background: "linear-gradient(135deg, #f5f5f5, #ffffff)",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 500,
            mb: 3,
            textAlign: { xs: "center", md: "left" },
            color: "#222",
          }}
        >
          About me
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.2rem",
            lineHeight: 1.8,
            color: "#444",
            textAlign: { xs: "center", md: "left" },
            fontFamily: "'Open Sans', sans-serif",
          }}
        >
          {children}
        </Typography>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="/photo_gallery/assets/photos/about.jpeg"
          alt="Photographer"
          sx={{
            width: "100%",
            maxWidth: 400,
            borderRadius: "20px",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.03)",
            },
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default About;

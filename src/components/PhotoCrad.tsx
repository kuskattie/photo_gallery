import { Box } from "@mui/material";

interface PhotoCradProps {
  src: string;
  alt?: string;
}

function PhotoCrad({ src, alt }: PhotoCradProps) {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: "100%",
        height: "auto",
        borderRadius: 2,
        transition: "transform 0.3s ease",
        cursor: "pointer",
        filter: "grayscale(20%)",
        "&:hover": {
          transform: "scale(1.03)",
          filter: "grayscale(0%)",
        },
      }}
    />
  );
}

export default PhotoCrad;

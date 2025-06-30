import { useState } from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PhotoCrad from "../../components/PhotoCrad";

const moroccoPhotos = [
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
];

function Morocco() {
  const [open, setOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const handleClickOpen = (src: string) => {
    setSelectedPhoto(src);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPhoto(null);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h4"
        sx={{ mb: 3, fontFamily: "'Playfair Display', serif" }}
      >
        Morocco
      </Typography>

      <Box
        sx={{
          columnCount: { xs: 1, sm: 2, md: 3 },
          columnGap: 2,
        }}
      >
        {moroccoPhotos.map((file, idx) => (
          <Box
            key={idx}
            sx={{ breakInside: "avoid", mb: 2, cursor: "pointer" }}
            onClick={() =>
              handleClickOpen(`/photo_gallery/assets/photos/morocco/${file}`)
            }
          >
            <PhotoCrad
              src={`/photo_gallery/assets/photos/morocco/${file}`}
              alt={`Morocco ${idx + 1}`}
            />
          </Box>
        ))}
      </Box>

      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "grey.500",
            zIndex: 10,
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{ p: 0 }}>
          {selectedPhoto && (
            <Box
              component="img"
              src={selectedPhoto}
              alt="Selected"
              sx={{
                width: "100%",
                maxWidth: 800,
                maxHeight: "80vh",
                borderRadius: 2,
                display: "block",
                margin: "auto",
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default Morocco;

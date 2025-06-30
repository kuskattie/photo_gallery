import { useState } from "react";
import { Box, Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PhotoCard from "./PhotoCrad";

const photoList = [
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
];

function GalleryGrid() {
  const [open, setOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const handleClickOpen = (filename: string) => {
    const fullPath = `/photo_gallery/assets/photos/${filename}`;
    setSelectedPhoto(fullPath);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPhoto(null);
  };

  return (
    <>
      <Box
        sx={{
          columnCount: { xs: 1, sm: 2, md: 3 },
          columnGap: 2,
        }}
      >
        {photoList.map((filename, index) => {
          const fullPath = `/photo_gallery/assets/photos/${filename}`;
          return (
            <Box
              key={index}
              sx={{ breakInside: "avoid", mb: 2, cursor: "pointer" }}
              onClick={() => handleClickOpen(filename)}
            >
              <PhotoCard src={fullPath} alt={`Photo ${index + 1}`} />
            </Box>
          );
        })}
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        sx={{ textAlign: "center" }}
      >
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", right: 8, top: 8, color: "grey.500" }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {selectedPhoto && (
            <Box
              component="img"
              src={selectedPhoto}
              alt="Selected"
              sx={{
                width: "100%",
                maxWidth: 600,
                maxHeight: "80vh",
                borderRadius: 2,
                objectFit: "contain",
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default GalleryGrid;

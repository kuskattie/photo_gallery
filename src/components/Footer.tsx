import { Box, Typography, Link } from "@mui/material";

interface FooterProps {
  email: string;
}

function Footer({ email }: FooterProps) {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f0f0f0",
        color: "#333",
        textAlign: "center",
        py: 2,
        mt: "auto",
        borderTop: "1px solid #ccc",
      }}
    >
      <Typography variant="body2">© 2025 Kattie</Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        <Link href={`mailto:${email}`} underline="none" color="inherit">
          Contact me
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;

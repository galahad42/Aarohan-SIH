import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import logo from "../assests/logo.svg";
import profilelogo from "../assests/profilelogo.svg";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavBar() {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ padding: 1, background: "#FA2A55" }}>
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <img src={logo} width={200} />

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                sx={{ p: 0 }}
                onClick={() => {
                  navigate("/profile");
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={profilelogo}
                  sx={{ height: 70, width: 70 }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={false}
            >
              {settings.map((setting) => (
                <MenuItem key={setting}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;

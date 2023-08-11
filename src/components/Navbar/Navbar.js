import React from "react";
import "./Navbar.css";
import { CgProfile } from "react-icons/cg";
import AppButton from "../../libComponents/AppButton/AppButton";
import { useNavigate } from "react-router-dom";
import PopUpMenu from "../../libComponents/PopUpMenu/PopUpMenu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { clearAuthLocalStorage } from "../../storage/getLocalStorage";
import { setIsAdninLogin } from "../../redux/actions/auth";
import { setLoading } from "../../redux/actions/admin";

/**
 * @author Lovesh Singh
 * @since 10-08-2023
 * @description navbar component
 * @returns JSX.Element
 */
function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAdminLogin } = useSelector((state) => state.authReducer);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  /**
   * @author Lovesh Singh
   * @since 10-08-2023
   * @description handle logout functionality
   */
  const onClickLogout = () => {
    dispatch(setLoading(true));
    clearAuthLocalStorage();
    dispatch(setIsAdninLogin(false));
    dispatch(setLoading(false));
    navigate("/login", { replace: true });
  };

  /**
   * @author Lovesh Singh
   * @since 10-08-2023
   * @description to render profile view
   */
  const renderProfileView = () => {
    return (
      <>
        <div className="navbar__profile" onClick={handleClick}>
          <CgProfile color="#FFFFFF" size={30} />
        </div>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Profle
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={onClickLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </>
    );
  };

  return (
    <div className="navbar">
      <input type="text" placeholder="Search" className="navbar__search" />

      {isAdminLogin ? (
        renderProfileView()
      ) : (
        <AppButton
          text={"Login"}
          style={{ marginRight: "1rem", backgroundColor: "rgb(31, 100, 248)" }}
          onClick={() => navigate("/login")}
        />
      )}
    </div>
  );
}

export default Navbar;

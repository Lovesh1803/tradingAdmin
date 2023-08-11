import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SidebarItems } from "../../helper/Utility";
import { useNavigate } from "react-router-dom";

/**
 * @author Lovesh Singh
 * @since 10-08-2023
 * @description sidebar component
 * @returns JSX.Element
 */
function Sidebar({ isSidebarOpen, onClickNavbarIcon }) {

  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div
        style={{
          justifyContent: isSidebarOpen ? "flex-start" : "center",
        }}
        className="sidebar__header"
      >
        <AiOutlineMenu
          onClick={onClickNavbarIcon}
          className="sidebar__menu-icon"
          size={25}
          color={"white"}
        />
        <h1
          style={{
            color: "white",
            display: isSidebarOpen ? "flex" : "none",
            margin: "unset",
            cursor: "pointer"
          }}
          onClick={() => navigate("/")}
        >
          Lovesh
        </h1>
      </div>

      <div className="sidebar__items">
        {SidebarItems?.map((sidebarItem) => {
          // if(sidebarItem?children && sidebarItem?.children.length > 0){

          // }
          // else {
          return (
            <RenderSidebarItem
              itemName={sidebarItem?.name}
              itemLink={sidebarItem?.link}
              itemIcon={sidebarItem?.icon}
              isSidebarOpen={isSidebarOpen}
              children={sidebarItem?.children}
            />
          );
          // }
        })}
      </div>
    </div>
  );
}

/**
 * @author Lovesh Singh
 * @since 10-08-2023
 * @description sidebar item component
 * @returns JSX.Element
 */
const RenderSidebarItem = ({
  itemIcon,
  itemLink,
  itemName,
  onClickItem,
  isSidebarOpen,
  children,
}) => {
  const [isChildDropdownOpen, setIsChildDropdownOpen] = useState(false);
  const navigate = useNavigate();

  /**
 * @author Lovesh Singh
 * @since 10-08-2023
 * @description sidebar item click handler
 */
  const onClickSidebarItem = (path) => {
    if (path) {
      navigate(path)
    } else {
      setIsChildDropdownOpen(!isChildDropdownOpen);
    }
  };

  useEffect(() => {
    if(!isSidebarOpen){
      setIsChildDropdownOpen(false)
    }
  }, [isSidebarOpen])

  return (
    <div
      className="sidebar__item-wrapper"
      style={{
        border: isSidebarOpen ? "1px solid #474747" : "none",
        justifyContent: isSidebarOpen ? "flex-start" : "center",
      }}
    >
      <div
        className="sidebar__item"
        style={{
          backgroundColor: isChildDropdownOpen ? "#474747" : "transparent",
        }}
        onClick={
          children && children.length > 0
            ? () => onClickSidebarItem(null)
            : () => onClickSidebarItem(itemLink)
        }
      >
        {itemIcon}
        <p
          className="sidebar__item-text"
          style={{ display: isSidebarOpen ? "block" : "none" }}
        >
          {itemName}
        </p>
        <RiArrowDropDownLine
          color="white"
          size={30}
          style={{
            display: children && children?.length > 0 && isSidebarOpen ? "flex" : "none",
            marginLeft: "auto",
            marginRight: "0.5rem",
          }}
        />
      </div>

      {children && children?.length > 0 ? (
        <div
          className="sidebar__child-item-wrapper"
          style={{
            height: isChildDropdownOpen ? "100%" : "0%",
            display: isChildDropdownOpen ? "flex" : "none",
            transition: "height 0.5s",
          }}
        >
          {children?.map((childItem) => {
            return (
              <div
                className="sidebar__child-item"
                style={{ height: "100%", display: "flex" }}
                onClick={() => onClickSidebarItem(childItem?.link)}
              >
                {childItem?.icon}
                <p
                  className="sidebar__child-item-text"
                  style={{ display: isSidebarOpen ? "block" : "none" }}
                >
                  {childItem?.name}
                </p>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Sidebar;

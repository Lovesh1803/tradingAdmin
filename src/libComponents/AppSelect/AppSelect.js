import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import "./AppSelect.css";

/**
 * @author Lovesh Singh
 * @since 10-08-2023
 * @description select component
 * @returns JSX.Element
 */
function AppSelect({ label, items, onItemSelect, selectedItemValue }) {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(selectedItemValue ? selectedItemValue : items[0]);

  useEffect(() => {
    setSelectedItem(selectedItemValue ? selectedItemValue : items[0])
  },[selectedItemValue])


  /**
   * @author Lovesh Singh
   * @since 10-08-2023
   * @description select click handler
   */
  const onClickSelect = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  /**
   * @author Lovesh Singh
   * @since 10-08-2023
   * @description select item click handler
   */
  const onClickItem = (item) => {
    setSelectedItem(item);
    onItemSelect(item);
    setIsSelectOpen(false);
  };

  return (
    <div className="select">
      {label ? <p className="select__label">{label}</p> : null}
      <div className="select-wrapper">
        <div className="select__header" onClick={onClickSelect}>
          <p className="select__header-text">{selectedItem?.name}</p>
          {isSelectOpen ? (
            <RiArrowDropUpLine
              color="black"
              size={30}
              style={{
                marginLeft: "auto",
              }}
            />
          ) : (
            <RiArrowDropDownLine
              color="black"
              size={30}
              style={{
                marginLeft: "auto",
              }}
            />
          )}
        </div>
        {isSelectOpen ? (
          <div className="select__items-wrapper">
            {items.map((item) => {
              return (
                <p
                  key={item?.value}
                  className={`select__item ${
                    selectedItem?.name === item?.name ? "active" : ""
                  }`}
                  onClick={() => onClickItem(item)}
                >
                  {item?.name}
                </p>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default AppSelect;

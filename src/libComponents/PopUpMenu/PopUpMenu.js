import React from "react";
import { useState } from "react";

/**
 * @author Lovesh Singh
 * @since 10-08-2023
 * @description pop up menu component
 * @returns JSX.Element
 */
function PopUpMenu({ children }) {
  const [showPopupContent, setShowPopupContent] = useState(false);

  /**
   * @author Lovesh Singh
   * @since 10-08-2023
   * @description popup showing handler
   */
  const showPopuMenu = () => {
    setShowPopupContent(!showPopupContent);
  };

  return (
    <div className="popup-wrapper" onClick={showPopuMenu}>
      {children}
      {showPopupContent && (
        <div className="popup-content">
          <p>Popup Menu</p>
        </div>
      )}
    </div>
  );
}

export default PopUpMenu;

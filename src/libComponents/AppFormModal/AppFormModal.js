import React, { useEffect, useState } from "react";
import "./AppFormModal.css";

/**
 * @author Lovesh Singh
 * @since 10-08-2023
 * @description form modal component
 * @returns JSX.Element
 */
function AppFormModal({
  isFormModalOpen,
  onRequestClose,
  formName,
  formComponent,
}) {
  return (
    <div
      className="form__wrapper"
      style={{ display: isFormModalOpen ? "flex" : "none" }}
    >
      <div className="form__backdrop" onClick={onRequestClose} />

      <div className="form__modal">
        <div className="form__header">
          <h1 className="form__heading">{formName}</h1>
        </div>
        {formComponent}
      </div>
    </div>
  );
}

export default AppFormModal;

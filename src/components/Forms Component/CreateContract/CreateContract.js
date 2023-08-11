import React, { useState } from "react";
import AppInput from "../../../libComponents/AppInput/AppInput";
import "./CreateContract.css";
import AppButton from "../../../libComponents/AppButton/AppButton";
import AppSelect from "../../../libComponents/AppSelect/AppSelect";
import { ValidityDropdown } from "../../../helper/Utility";
import { useDispatch } from "react-redux";
import {
  APIUrl,
  NetworkConfiguration,
} from "../../../network/NetworkConfiguration";
import { setLoading } from "../../../redux/actions/admin";
import { callAPI } from "../../../network/NetworkConnection";
import { useNavigate } from "react-router-dom";

/**
 * @author Lovesh Singh
 * @since 10-08-2023
 * @description create contract form component
 * @returns JSX.Element
 */
function CreateContract({ onSubmitForm }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [contractFormData, setContractFormData] = useState({
    amount: "",
    validity: "",
    validityType: "",
  });
  const [contractFormError, setContractFormError] = useState({
    amount: "",
    validity: "",
  });

  /**
   * @author Lovesh Singh
   * @since 10-08-2023
   * @description handle selection of validity
   * @param {item} validity item
   */
  const onValiditySelect = (item) => {
    setContractFormData({
      ...contractFormData,
      validityType: item?.value,
    });
  };

  /**
   * @author Lovesh Singh
   * @since 10-08-2023
   * @description to clear all form values
   */
  const clearFormValues = () => {
    setContractFormData({ amount: "", validity: "" });
  };

  /**
   * @author Lovesh Singh
   * @since 10-08-2023
   * @description handle create contract button
   */
  const onClickCreateContract = () => {
    if (validateContract()) {
      dispatch(setLoading(true));
      callAPI(APIUrl + NetworkConfiguration.CREATE_CONTRACT, "POST", {
        amount: contractFormData?.amount,
        validity: `${contractFormData?.validity} ${contractFormData?.validityType}`,
      })
        .then((res) => {
          clearFormValues();
          onSubmitForm();
          dispatch(setLoading(false));
        })
        .catch((err) => console.log("error: ", err))
        .finally(() => dispatch(setLoading(false)));
    }
  };

  /**
   * @author Lovesh Singh
   * @since 10-08-2023
   * @description to validate contract form values
   */
  const validateContract = () => {
    if (!contractFormData?.amount) {
      setContractFormError({
        ...contractFormError,
        amount: "Please fill the amount",
      });
      return false;
    }

    if (!contractFormData?.validity) {
      setContractFormError({
        ...contractFormError,
        validity: "Please fill the validity",
      });
      return false;
    }

    return true;
  };

  return (
    <div className="create-contract">
      <div style={{ width: "90%" }}>
        <AppInput
          label={"Amount"}
          type={"number"}
          placeholder={"Enter Amount"}
          value={contractFormData?.amount}
          error={contractFormError?.amount}
          onChange={(e) => {
            setContractFormData({
              ...contractFormData,
              amount: e.target.value,
            });
            setContractFormError({ ...contractFormError, amount: "" });
          }}
        />
      </div>
      <div className="validity-text-wrapper">
        <p className="validity__label">Select Validity</p>
      </div>
      <div className="validity-inputs-wrapper">
        <div className="validity-input">
          <AppInput
            type={"number"}
            placeholder={"Enter Validity"}
            value={contractFormData?.validity}
            error={contractFormError?.validity}
            onChange={(e) => {
              setContractFormData({
                ...contractFormData,
                validity: e.target.value,
              });
              setContractFormError({ ...contractFormError, validity: "" });
            }}
          />
        </div>
        <div className="validity-select">
          <AppSelect items={ValidityDropdown} onItemSelect={onValiditySelect} />
        </div>
      </div>
      <AppButton
        text={"Create Contract"}
        style={{
          width: "90%",
          margin: "1.5rem 0",
          height: "3rem",
          borderRadius: "0.5rem",
          fontSize: "1rem",
        }}
        onClick={onClickCreateContract}
      />
    </div>
  );
}

export default CreateContract;

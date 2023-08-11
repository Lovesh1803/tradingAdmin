import React, { useEffect, useState } from "react";
import AppInput from "../../../libComponents/AppInput/AppInput";
import AppButton from "../../../libComponents/AppButton/AppButton";
import AppSelect from "../../../libComponents/AppSelect/AppSelect";
import { ContractStatus } from "../../../helper/Utility";
import { useDispatch } from "react-redux";
import {
  APIUrl,
  NetworkConfiguration,
} from "../../../network/NetworkConfiguration";
import { setLoading } from "../../../redux/actions/admin";
import { callAPI } from "../../../network/NetworkConnection";
import { useNavigate } from "react-router-dom";
import "./PurchasedContractForm.css";
import { ToastTypes, useMessage } from "../../../base/context/MessageProvider";

/**
 * @author Lovesh Singh
 * @since 10-08-2023
 * @description purchased contract form component
 * @returns JSX.Element
 */
function PurchasedContractForm({ purchasedContractData, onSubmitForm }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const message = useMessage();
  const [purchasedContractFormData, setPurchasedContractFormData] = useState({
    id: "",
    name: "",
    user: {},
    contractId: {},
    validity: "",
    amount: "",
    status: "",
  });
  const [purchasedContractFormError, setPurchasedContractFormError] = useState({
    id: "",
    name: "",
    validity: "",
    amount: "",
    status: "",
  });

  useEffect(() => {
    setPurchasedContractFormData({
      id: purchasedContractData?._id,
      name: purchasedContractData?.user?.firstName,
      user: purchasedContractData?.user,
      contractId: purchasedContractData?.contractId,
      validity: purchasedContractData?.contractId?.validity,
      amount: purchasedContractData?.amount,
      status: purchasedContractData?.status,
    });
  }, [purchasedContractData]);

  /**
   * @author Lovesh Singh
   * @since 10-08-2023
   * @description handle selection of validity
   * @param {item} status item
   */
  const onStatusSelect = (item) => {
    setPurchasedContractFormData({
      ...purchasedContractFormData,
      status: item?.value,
    });
  };

  /**
   * @author Lovesh Singh
   * @since 10-08-2023
   * @description to clear all form values
   */
  const clearFormValues = () => {
    setPurchasedContractFormData({
      id: "",
      name: "",
      user: {},
      contractId: {},
      validity: "",
      amount: "",
      status: "",
    });
  };

  /**
   * @author Lovesh Singh
   * @since 11-08-2023
   * @description handle update purchased contract button
   */
  const onClickUpdatePurchasedContract = () => {
    if (validatePurchasedContract()) {
      dispatch(setLoading(true));
      callAPI(APIUrl + NetworkConfiguration.UPDATE_PURCHASED_CONTRACT, "PUT", {
        _id: purchasedContractFormData?.id,
        user: purchasedContractFormData?.user?._id,
        contractId: purchasedContractFormData?.contractId?._id,
        amount: purchasedContractFormData?.amount,
        validity: purchasedContractFormData?.validity,
        status: purchasedContractFormData?.status,
      })
        .then((res) => {
          clearFormValues();
          onSubmitForm();
          dispatch(setLoading(false));
        })
        .catch((err) => {
          console.log("update purchased error: ", err);
          message.showToast(err?.statusText, ToastTypes.ERROR)
        })
        .finally(() => dispatch(setLoading(false)));
    }
  };

  /**
   * @author Lovesh Singh
   * @since 10-08-2023
   * @description to validate purchased contract form values
   */
  const validatePurchasedContract = () => {
    console.log("Purchased contract: ", purchasedContractFormData);
    if (!purchasedContractFormData?.id) {
      setPurchasedContractFormError({
        ...purchasedContractFormError,
        id: "Please fill the ID",
      });
      return false;
    }

    if (!purchasedContractFormData?.name) {
      setPurchasedContractFormError({
        ...purchasedContractFormError,
        name: "Please fill the name",
      });
      return false;
    }

    if (!purchasedContractFormData?.validity) {
      setPurchasedContractFormError({
        ...purchasedContractFormError,
        validity: "Please fill the validity",
      });
      return false;
    }

    if (!purchasedContractFormData?.amount) {
      setPurchasedContractFormError({
        ...purchasedContractFormError,
        amount: "Please fill the amount",
      });
      return false;
    }

    if (!purchasedContractFormData?.status) {
      setPurchasedContractFormError({
        ...purchasedContractFormError,
        status: "Please fill the status",
      });
      return false;
    }

    return true;
  };

  return (
    <div className="create-contract">
      <div style={{ width: "90%" }}>
        <AppInput
          label={"Id"}
          type={"text"}
          disabled={true}
          placeholder={"Enter Id"}
          value={purchasedContractFormData?.id}
          error={purchasedContractFormError?.id}
          onChange={(e) => {
            setPurchasedContractFormData({
              ...purchasedContractFormData,
              id: e.target.value,
            });
            setPurchasedContractFormError({
              ...purchasedContractFormError,
              id: "",
            });
          }}
        />
      </div>

      <div style={{ width: "90%" }}>
        <AppInput
          label={"Name"}
          type={"text"}
          disabled={true}
          placeholder={"Enter Name"}
          value={purchasedContractFormData?.name}
          error={purchasedContractFormError?.name}
          onChange={(e) => {
            setPurchasedContractFormData({
              ...purchasedContractFormData,
              name: e.target.value,
            });
            setPurchasedContractFormError({
              ...purchasedContractFormError,
              name: "",
            });
          }}
        />
      </div>

      <div style={{ width: "90%" }}>
        <AppInput
          label={"Validity"}
          type={"text"}
          disabled={true}
          placeholder={"Enter Validity"}
          value={purchasedContractFormData?.validity}
          error={purchasedContractFormError?.validity}
          onChange={(e) => {
            setPurchasedContractFormData({
              ...purchasedContractFormData,
              validity: e.target.value,
            });
            setPurchasedContractFormError({
              ...purchasedContractFormError,
              validity: "",
            });
          }}
        />
      </div>

      <div style={{ width: "90%" }}>
        <AppInput
          label={"Amount"}
          type={"text"}
          disabled={true}
          placeholder={"Enter Amount"}
          value={purchasedContractFormData?.amount}
          error={purchasedContractFormError?.amount}
          onChange={(e) => {
            setPurchasedContractFormData({
              ...purchasedContractFormData,
              amount: e.target.value,
            });
            setPurchasedContractFormError({
              ...purchasedContractFormError,
              amount: "",
            });
          }}
        />
      </div>
      <div className="validity-text-wrapper">
        <p className="validity__label">Select Status</p>
      </div>
      <div className="validity-inputs-wrapper">
        <div className="validity-select">
          <AppSelect
            items={ContractStatus}
            onItemSelect={onStatusSelect}
            selectedItemValue={ContractStatus.find(
              (item) => item?.value === purchasedContractFormData?.status
            )}
          />
        </div>
      </div>
      <AppButton
        text={"Update Contract"}
        style={{
          width: "90%",
          margin: "1.5rem 0",
          height: "3rem",
          borderRadius: "0.5rem",
          fontSize: "1rem",
        }}
        onClick={onClickUpdatePurchasedContract}
      />
    </div>
  );
}

export default PurchasedContractForm;

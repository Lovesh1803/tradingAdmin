import React, { useEffect, useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import AppBreadcrumb from "../../libComponents/AppBreadcrumb/AppBreadcrumb";
import AppButton from "../../libComponents/AppButton/AppButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchPurchasedContracts } from "../../redux/actions/admin";
import "./PurchasedContract.css";
import PurchasedContractForm from "../Forms Component/PurchasedContractForm/PurchasedContractForm";
import AppFormModal from "../../libComponents/AppFormModal/AppFormModal";

/**
 * @author Lovesh Singh
 * @since 10-08-2023
 * @description purchased page component
 * @returns JSX.Element
 */
function PurchasedContract() {
  const dispatch = useDispatch();
  const { purchasedContracts } = useSelector((state) => state.adminReducer);
  const [purchasedContractFormOpen, setPurchasedContractFormOpen] = useState(false);
  const [purchasedContractData, setPurchasedContractData] = useState({});

  useEffect(() => {
    dispatch(fetchPurchasedContracts());
  }, []);

  useEffect(() => {
    console.log("All purchased contracts: ", purchasedContracts);
  }, [purchasedContracts]);

  /**
 * @author Lovesh Singh
 * @since 11-08-2023
 * @description handle update purchased contract
 */
  const onClickUpdatePurchasedContract = () => {
    setPurchasedContractFormOpen(!purchasedContractFormOpen);
  };


  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "_id",
        header: "ID",
      },
      {
        accessorKey: "user.firstName",
        header: "Name",
      },
      {
        accessorKey: "contractId.validity",
        header: "Validity",
      },
      {
        accessorKey: "amount",
        header: "Amount",
      },
      {
        accessorKey: "status",
        header: "Status",
      },
    ],
    []
  );

  return (
    <div className="purchasedContract">
      <div className="purchasedContract__header">
        <p className="purchasedContract__breadcrumb">
          <AppBreadcrumb />
        </p>
        <div className="purchasedContract__button-wrapper">
          <AppButton text={"Download Excel"} />
          <AppButton text={"Download PDF"} type="secondary" />
        </div>
      </div>
      <div className="purchasedContract__content">
        {purchasedContracts && purchasedContracts?.length > 0 ? (
          <MaterialReactTable columns={columns} data={purchasedContracts} muiTableBodyRowProps={({row}) => ({
            onClick: (event) => {
              console.info(row?.original);
              setPurchasedContractData(row?.original)
              onClickUpdatePurchasedContract();
            },
            sx: {
              cursor: 'pointer', //you might want to change the cursor too when adding an onClick
            },
          })} />
        ) : null}
        {/* <MaterialReactTable columns={columns} data={data} />
          <MaterialReactTable columns={columns} data={data} />
          <MaterialReactTable columns={columns} data={data} />
          <MaterialReactTable columns={columns} data={data} /> */}
      </div>
      <AppFormModal
        isFormModalOpen={purchasedContractFormOpen}
        onRequestClose={onClickUpdatePurchasedContract}
        formName={"Update Contract"}
        formComponent={
          <PurchasedContractForm
            purchasedContractData={purchasedContractData}
            onSubmitForm={() => {
              onClickUpdatePurchasedContract();
              dispatch(fetchPurchasedContracts());
            }}
          />
        }
      />
    </div>
  );
}

export default PurchasedContract;

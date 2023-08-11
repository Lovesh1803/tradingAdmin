import React, { useEffect, useMemo, useState } from "react";
import "./Contract.css";
import { MaterialReactTable } from "material-react-table";
import AppBreadcrumb from "../../libComponents/AppBreadcrumb/AppBreadcrumb";
import AppButton from "../../libComponents/AppButton/AppButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllContracts } from "../../redux/actions/admin";
import AppFormModal from "../../libComponents/AppFormModal/AppFormModal";
import CreateContract from "../Forms Component/CreateContract/CreateContract";

/**
 * @author Lovesh Singh
 * @since 10-08-2023
 * @description contract page component
 * @returns JSX.Element
 */
function Contract() {
  const dispatch = useDispatch();
  const { allContracts } = useSelector((state) => state.adminReducer);
  const [contractFormOpen, setContractFormOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchAllContracts());
  }, []);

  useEffect(() => {
    console.log("All contracts: ", allContracts);
  }, [allContracts]);

  /**
 * @author Lovesh Singh
 * @since 10-08-2023
 * @description handle create contract
 */
  const onClickCreateContract = () => {
    setContractFormOpen(!contractFormOpen);
  };

  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "_id",
        header: "ID",
      },
      {
        accessorKey: "validity",
        header: "Validity",
      },
      {
        accessorKey: "amount",
        header: "Amount",
      },
    ],
    []
  );

  return (
    <>
      <div className="contract">
        <div className="contract__header">
          <p className="contract__breadcrumb">
            <AppBreadcrumb />
          </p>
          <div className="contract__button-wrapper">
            <AppButton text={"Download Excel"} />
            <AppButton text={"Download PDF"} type="secondary" />
            <AppButton text={"Create Contract"} onClick={onClickCreateContract} />
          </div>
        </div>
        <div className="contract__content">
          {allContracts && allContracts?.length > 0 ? (
            <MaterialReactTable columns={columns} data={allContracts} />
          ) : null}
          {/* <MaterialReactTable columns={columns} data={allContracts} />
        <MaterialReactTable columns={columns} data={allContracts} />
        <MaterialReactTable columns={columns} data={allContracts} />
        <MaterialReactTable columns={columns} data={allContracts} /> */}
        </div>
      </div>
      <AppFormModal
        isFormModalOpen={contractFormOpen}
        onRequestClose={onClickCreateContract}
        formName={"Create Contract"}
        formComponent={
          <CreateContract
            onSubmitForm={() => {
              onClickCreateContract();
              dispatch(fetchAllContracts());
            }}
          />
        }
      />
    </>
  );
}

export default Contract;

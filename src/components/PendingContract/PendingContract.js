import React, { useEffect, useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import AppBreadcrumb from "../../libComponents/AppBreadcrumb/AppBreadcrumb";
import AppButton from "../../libComponents/AppButton/AppButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchPendingContracts } from "../../redux/actions/admin";
import "./PendingContract.css";

/**
 * @author Lovesh Singh
 * @since 10-08-2023
 * @description pending contract component
 * @returns JSX.Element
 */
function PendingContract() {
  const dispatch = useDispatch();
  const { pendingContracts } = useSelector((state) => state.adminReducer);

  useEffect(() => {
    dispatch(fetchPendingContracts());
  }, []);

  useEffect(() => {
    console.log("All pending contracts: ", pendingContracts);
  }, [pendingContracts]);

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
    <div className="pendingContract">
      <div className="pendingContract__header">
        <p className="pendingContract__breadcrumb">
          <AppBreadcrumb />
        </p>
        <div className="pendingContract__button-wrapper">
          <AppButton text={"Download Excel"} />
          <AppButton text={"Download PDF"} type="secondary" />
        </div>
      </div>
      <div className="pendingContract__content">
        {pendingContracts && pendingContracts?.length > 0 ? (
          <MaterialReactTable columns={columns} data={pendingContracts} />
        ) : null}
        {/* <MaterialReactTable columns={columns} data={data} />
          <MaterialReactTable columns={columns} data={data} />
          <MaterialReactTable columns={columns} data={data} />
          <MaterialReactTable columns={columns} data={data} /> */}
      </div>
    </div>
  );
}

export default PendingContract;

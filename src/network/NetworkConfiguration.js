export const APIUrl = "http://localhost:5000/api/v1/admin"

/**
 * @author Lovesh Singh
 * @since 10-08-2023
 * @description to handle all network apis
 * @returns object of network apis
 */
export const NetworkConfiguration = {
    LOGIN: "/loginAdmin",
    ALL_CONTRACTS: "/contract/getAllContracts",
    PURCHASED_CONTRACTS: "/contract/getAllPurchasedContracts",
    PENDING_CONTRACTS: "/contract/getAllPendingPurchasedContracts",
    CREATE_CONTRACT: "/contract/createContract",
    UPDATE_PURCHASED_CONTRACT: "/contract/purchasedContractStatusUpdate",
}
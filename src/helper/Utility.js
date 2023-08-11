import { MdDashboard } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { MdViewList } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { PiFlagBannerFill } from "react-icons/pi";

/**
 * @author Lovesh Singh
 * @since 10-08-2023
 * @description sidebar items list
 * @returns array of sidebar items
 */
export const SidebarItems = [
    {
        name: "Dashboard",
        link: "/",
        icon: <MdDashboard style={{margin: "1rem",
          cursor: "pointer"}} size={20} color={"white"}/>,
      },
      {
        name: "Contract",
        link: "/contract",
        icon: <MdCategory style={{margin: "1rem",
        cursor: "pointer"}} size={20} color={"white"}/>,
        children: [
          {
            name: "Contracts",
            link: "/contracts",
            icon: <MdDashboard style={{margin: "1rem",
          cursor: "pointer"}} size={20} color={"white"}/>,
          },
          {
            name: "Pending Contracts",
            link: "/contracts/pending",
            icon: <MdDashboard style={{margin: "1rem",
          cursor: "pointer"}} size={20} color={"white"}/>,
          },
          {
            name: "Purchased Contracts",
            link: "/contracts/purchased",
            icon: <MdDashboard style={{margin: "1rem",
          cursor: "pointer"}} size={20} color={"white"}/>,
          }
        ]
      },
  
      {
        name: "Category List",
        link: "/categoryList",
        icon: <MdViewList style={{margin: "1rem",
        cursor: "pointer"}} size={20} color={"white"}/>,
        children: [
          {
            name: "Category child",
            link: "/categorychild",
            icon: <MdDashboard style={{margin: "1rem",
          cursor: "pointer"}} size={20} color={"white"}/>,
          },
          {
            name: "Category child 2",
            link: "/dashboard/child",
            icon: <MdDashboard style={{margin: "1rem",
          cursor: "pointer"}} size={20} color={"white"}/>,
          }
        ]
      },
      {
        name: "Group List",
        link: "/groupList",
        icon: <MdViewList style={{margin: "1rem",
        cursor: "pointer"}} size={20} color={"white"}/>
      },
      {
        name: "Contact Request List",
        link: "/contactList",
        icon: <MdViewList style={{margin: "1rem",
        cursor: "pointer"}} size={20} color={"white"}/>
      },
      {
        name: "Incoming Email",
        link: "/editEmail",
        icon: <MdEmail style={{margin: "1rem",
        cursor: "pointer"}} size={20} color={"white"}/>
      },
      {
        name: "Ads Banners",
        link: "/banners",
        icon: <PiFlagBannerFill style={{margin: "1rem",
        cursor: "pointer"}} size={20} color={"white"}/>
      },
]


/**
 * @author Lovesh Singh
 * @since 10-08-2023
 * @description validity items list
 * @returns array of validity items
 */
export const ValidityDropdown = [
  {
    name: "--Select Validity--",
    value: "",
  },
  {
    name: "Months",
    value: "months",
  },
  {
    name: "Days",
    value: "days",
  },
  {
    name: "Years",
    value: "years",
  },
]

/**
 * @author Lovesh Singh
 * @since 10-08-2023
 * @description contract status items list
 * @returns array of contract status items
 */
export const ContractStatus = [
  {
    name: "--Select Status--",
    value: "",
  },
  {
    name: "Completed",
    value: "Completed",
  },
  {
    name: "Pending",
    value: "Pending",
  },
  {
    name: "Failed",
    value: "Failed",
  },
]
import { useLink } from "@/hooks/use-link";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MngrmenuService from "@/service/MngrmenuService";
import { AxiosResponse } from "axios";

interface LeftMenuList {
  id: string;
  open: boolean;
  menuNm: string;
  uri: string;
}

export const LeftMenu = () => {
  const navigate = useNavigate();

  const [menuList, setMenuList] = useState([
    {
      id: 1,
      menuNm: "Dashboard",
      uri: "",
      upperMenuId: null,
      upperMenuNm: null,
      lowers: [
        {
          id: 6,
          menuNm: "Sales status",
          uri: "/sales-status",
          upperMenuId: 1,
          upperMenuNm: "Dashboard",
          lowers: [],
        },
        {
          id: 7,
          menuNm: "Data report",
          uri: "/data-report",
          upperMenuId: 1,
          upperMenuNm: "Dashboard",
          lowers: [],
        },
      ],
    },
    {
      id: 2,
      menuNm: "Display Mgmt",
      uri: "",
      upperMenuId: null,
      upperMenuNm: null,
      lowers: [
        {
          id: 8,
          menuNm: "Theme Pages",
          uri: "/theme-pages",
          upperMenuId: 2,
          upperMenuNm: "Display Mgmt",
          lowers: [],
        },
        {
          id: 9,
          menuNm: "Shelf Display",
          uri: "/shelf-display",
          upperMenuId: 2,
          upperMenuNm: "Display Mgmt",
          lowers: [],
        },
        {
          id: 10,
          menuNm: "Content List",
          uri: "/content-list",
          upperMenuId: 2,
          upperMenuNm: "Display Mgmt",
          lowers: [],
        },
      ],
    },
    {
      id: 3,
      menuNm: "User Mgmt",
      uri: "",
      upperMenuId: null,
      upperMenuNm: null,
      lowers: [
        {
          id: 11,
          menuNm: "User List",
          uri: "/user-list",
          upperMenuId: 3,
          upperMenuNm: "User Mgmt",
          lowers: [],
        },
      ],
    },
    {
      id: 4,
      menuNm: "VoC",
      uri: "",
      upperMenuId: null,
      upperMenuNm: null,
      lowers: [
        {
          id: 12,
          menuNm: "VoC",
          uri: "/voc",
          upperMenuId: 4,
          upperMenuNm: "VoC",
          lowers: [],
        },
        {
          id: 13,
          menuNm: "Admin Pop-up",
          uri: "/admin-popup",
          upperMenuId: 4,
          upperMenuNm: "VoC",
          lowers: [],
        },
      ],
    },
    {
      id: 5,
      menuNm: "Sales",
      uri: "",
      upperMenuId: null,
      upperMenuNm: null,
      lowers: [
        {
          id: 14,
          menuNm: "Voucher",
          uri: "/voucher",
          upperMenuId: 5,
          upperMenuNm: "Sales",
          lowers: [],
        },
        {
          id: 15,
          menuNm: "Sales Report",
          uri: "/sales-report",
          upperMenuId: 5,
          upperMenuNm: "Sales",
          lowers: [],
        },
      ],
    },
  ]);

  const [userDetails, setUserDetails] = useState({ tyCode: "" });
  const [menuTempList, setMenuTempList] = useState([
    {
      id: 1,
      menuNm: "Dashboard",
      uri: "",
      upperMenuId: null,
      upperMenuNm: null,
      lowers: [
        {
          id: 6,
          menuNm: "Sales status",
          uri: "/sales-status",
          upperMenuId: 1,
          upperMenuNm: "Dashboard",
          lowers: [],
        },
        {
          id: 7,
          menuNm: "Data report",
          uri: "/data-report",
          upperMenuId: 1,
          upperMenuNm: "Dashboard",
          lowers: [],
        },
      ],
    },
    {
      id: 2,
      menuNm: "Display Mgmt",
      uri: "",
      upperMenuId: null,
      upperMenuNm: null,
      lowers: [
        {
          id: 8,
          menuNm: "Theme Pages",
          uri: "/theme-pages",
          upperMenuId: 2,
          upperMenuNm: "Display Mgmt",
          lowers: [],
        },
        {
          id: 9,
          menuNm: "Shelf Display",
          uri: "/shelf-display",
          upperMenuId: 2,
          upperMenuNm: "Display Mgmt",
          lowers: [],
        },
        {
          id: 10,
          menuNm: "Content List",
          uri: "/content-list",
          upperMenuId: 2,
          upperMenuNm: "Display Mgmt",
          lowers: [],
        },
      ],
    },
    {
      id: 3,
      menuNm: "User Mgmt",
      uri: "",
      upperMenuId: null,
      upperMenuNm: null,
      lowers: [
        {
          id: 11,
          menuNm: "User List",
          uri: "/user-list",
          upperMenuId: 3,
          upperMenuNm: "User Mgmt",
          lowers: [],
        },
      ],
    },
    {
      id: 4,
      menuNm: "VoC",
      uri: "",
      upperMenuId: null,
      upperMenuNm: null,
      lowers: [
        {
          id: 12,
          menuNm: "VoC",
          uri: "/voc",
          upperMenuId: 4,
          upperMenuNm: "VoC",
          lowers: [],
        },
        {
          id: 13,
          menuNm: "Admin Pop-up",
          uri: "/admin-popup",
          upperMenuId: 4,
          upperMenuNm: "VoC",
          lowers: [],
        },
      ],
    },
    {
      id: 5,
      menuNm: "Sales",
      uri: "",
      upperMenuId: null,
      upperMenuNm: null,
      lowers: [
        {
          id: 14,
          menuNm: "Voucher",
          uri: "/voucher",
          upperMenuId: 5,
          upperMenuNm: "Sales",
          lowers: [],
        },
        {
          id: 15,
          menuNm: "Sales Report",
          uri: "/sales-report",
          upperMenuId: 5,
          upperMenuNm: "Sales",
          lowers: [],
        },
      ],
    },
  ]);

  useEffect(() => {
    // fetchData();
  }, []);

  const fetchData = () => {
    MngrmenuService.leftmenu().then(({ data }: AxiosResponse) => {
      // setMenuList(data.menuList);
      setMenuList([...menuTempList]);
      setUserDetails(data.userDetails);
    });
  };

  return (
    <>
      <div className="side-bar">
        <div className="side-bottom">
          <nav>
            <ul id="main-menu" className="main-menu" role="menu">
              {menuList &&
                menuList.map((menu: any) => (
                  <li className="parent-menu has-child" key={menu.id}>
                    <a
                      href="#"
                      className="btn-main-menu"
                      onClick={() => (menu.open = !menu.open)}
                    >
                      {menu.menuNm}
                    </a>
                    <div className={menu.open ? "" : "sub-menu-wrap"}>
                      <ul className="depth2">
                        {menu.lowers.map((lower, index) => (
                          <li className="sub-menu" key={lower.id}>
                            <a
                              className="btn-sub-menu"
                              onClick={() => navigate(lower.uri)}
                            >
                              {lower.menuNm}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}

              <li className="parent-menu has-child">
                {userDetails.tyCode === "MA" && (
                  <div className="fix-menu-wrap">
                    <ul className="depth2">
                      <li className="sub-menu active">
                        <a className="btn-sub-menu" href="/mngr-list">
                          Master Board
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

import LoginService from "@/service/LoginService";
import { Button } from "../button";
import { useNavigate } from "react-router-dom";

export const TopMenu = () => {
  const navigate = useNavigate();
  const onLogout = async () => {
    const data = await LoginService.logout();
    navigate("/login");
  };

  return (
    <>
      <div className="header-container">
        <header>
          <div className="left-side">
            <img
              className="shop"
              src="../assets/images/ic_app_content_store (TBD).svg"
              alt="LG Content Store"
            />
            <a href="/">LG Content Store - Admin</a>
          </div>
          <div className="right-side">
            <Button
              name={"My info"}
              cl={"myinfo"}
              onClick={() => navigate("/myinfo")}
            />
            <Button
              name={"Log Out"}
              cl={"logout"}
              onClick={() => {
                onLogout();
                navigate("/logout");
              }}
            />
          </div>
        </header>
      </div>
    </>
  );
};

import { Outlet, useNavigate } from "react-router-dom";
import styles from "./Management.module.scss";
import { NavLink } from "react-router-dom";
import logoDark from "../../assets/logo-dark.svg";
import { MdLeaderboard, MdToys } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Suspense, useEffect } from "react";
import { managerGetInfo, managerLogout } from "../../redux/slices/manager.slice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import LoadSpinner from "../../shared/LoadSpinner";

const ManagementLayout = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const managerToken = localStorage.getItem("managerToken");
  const { currentManager } = useAppSelector(state => state.manager)

  useEffect(() => {
    if (!managerToken) {
      navigate("/managerLogin")
    } else { dispatch(managerGetInfo())}
  }, [currentManager?._id, managerToken, navigate, dispatch])

  const handleManagerLogout = () => {
    dispatch(managerLogout())
    navigate("/managerLogin")
  }

  return (
    <div className={styles.content}>
      <nav className={styles.nav}>
        <NavLink to="/">
          <img src={logoDark} />
        </NavLink>
        <ul>
          <li>
            <NavLink
              to=""
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
              end
            >
              <MdLeaderboard style={{ width: "24px", height: "24px" }} />{" "}
              Основна
            </NavLink>
          </li>
          <li>
            {currentManager ? <><span>{currentManager?.city}</span><br /><span className={styles.location}>{currentManager?.location}</span></> : <LoadSpinner/>}
          </li>
          <li>
            <NavLink
              to="clients"
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
            >
              <BsFillPersonLinesFill
                style={{ width: "24px", height: "24px" }}
              />{" "}
              Клієнти
            </NavLink>
          </li>
          <li>
            <NavLink
              to="toys"
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
            >
              <MdToys style={{ width: "24px", height: "24px" }} /> Іграшки
            </NavLink>
          </li>
        </ul>
        <div className={styles.logoutWrapper}>
          <button className={styles.logoutBtn} onClick={handleManagerLogout}>
            Вийти
          </button>
        </div>
      </nav>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default ManagementLayout;

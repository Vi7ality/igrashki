import styles from "./DropDownProfile.module.scss";
import { useAppDispatch } from "../../../../redux/store";
import { clearClient } from "../../../../redux/slices/client.slice";
import { Link, useNavigate } from "react-router-dom";

interface DropDownProfileProps {
    closeDropDown: () => void;
}

const DropDownProfile = ({ closeDropDown }: DropDownProfileProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        closeDropDown();
        dispatch(clearClient());
        navigate('/');
    };

    return (
        <div className={styles.container}>
            <ul className={styles.listOfItems}>
                <li className={styles.items}><Link to='/profile'>Профіль</Link></li>
                <li className={styles.items} onClick={handleLogout}>Вийти</li>
            </ul>
        </div>
    );
};

export default DropDownProfile;
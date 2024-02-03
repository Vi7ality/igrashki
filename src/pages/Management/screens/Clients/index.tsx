import styles from "./Clients.module.scss";
import Search from "../../../../shared/Search";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { Link, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { useEffect, useState } from "react";
import { fetchClients } from "../../../../redux/slices/clients.slice";
import ClientModal from "./components/ClientModal";
import { IClient } from "../../../../models/client";
import { appDateFormat } from "../../../../constants/date";
import { format } from "date-fns";

const Clients = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editableClient, setEditableClient] = useState<IClient | null>(null)
  const { clients } = useAppSelector(state => state.clients)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchClients())
  }, [])

  const handleEdit = (client: IClient) => {
    setEditableClient(client)
    setIsModalOpen(true)
  }

  const formatDate = (date: Date | undefined | string) => {
    if (!date) return ""
    return format(new Date(date), appDateFormat)
  }

  const searchClient = searchParams.get("search") || ""
  const filteredClients = clients.filter(client => client.parentName.toLowerCase().includes(searchClient.toLowerCase()))

  return (
    <main className={styles.main}>
      <header>
        <div className={styles.headerLeft}>
          <h1>Клієнти</h1>
          <Search handleSearch={(search: string) => setSearchParams({ search })} />
        </div>
        <button style={{ cursor: "pointer" }} onClick={() => setIsModalOpen(true)}>
          <BsFillPersonPlusFill />
          <span>Додати клієнта</span>
        </button>
      </header>
      <div className={styles.dataInfo}>
        <table>
          <thead>
            <tr>
              <th>Форма заповнення</th>
              <th>Імя та прізвище батька/матері</th>
              <th>Номер телефону</th>
              <th>Імя малюка</th>
              <th>Дата народження малюка</th>
              <th>Іграшки в оренді</th>
              <th>Дата отримання</th>
              <th>Дата повернення</th>
              <th className={styles.actions}>Дії</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.length > 0 && filteredClients.map((client) => (
              <tr key={client._id}>
                <td>{client.formType}</td>
                <td className={styles.parentName}>
                  <Link to={`/management/clients/${client._id}`}>{client.parentName}</Link>
                </td>
                <td>{client.phoneNumber}<br />({client.messenger})</td>
                <td>{client.childName}</td>
                <td>{formatDate(new Date(client.childBirthDate))}</td>
                <td>
                  <ul>
                    {client.toys?.map((toy, i) => (
                      <li key={i}>
                        <Link to={`/management/toys/${toy?._id}`}>
                          {toy?.toyName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </td>
                <td>{formatDate(client?.subscription?.subscribtionStartDate)}</td>
                <td>{client?.subscription?.subscribtionEndDate ? formatDate(client?.subscription?.subscribtionEndDate) : "Не повернута"}</td>
                <td>
                  <div className={styles.actions}>
                    <button onClick={() => handleEdit(client)}>
                      <AiOutlineEdit />
                    </button>
                    {/* <button onClick={() => handleDelete(client._id)}>
                    <button onClick={() => handleDelete(client._id)}>
                      <BsTrash />
                    </button> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ClientModal isModalOpen={isModalOpen} closeModal={() => { setIsModalOpen(false); setEditableClient(null) }} editableClient={editableClient} />
    </main>
  );
};

export default Clients;

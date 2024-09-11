import styles from './Toys.module.scss';
import Search from '../../../../shared/Search';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../../../../redux/store';
import { useCallback, useEffect, useState } from 'react';
import { fetchToysAdmin } from '../../../../redux/slices/toysAdmin.slice';
import ToyModal from './components/ToyModal';
import { IToy } from '../../../../models/toy';
import { toyStateOptions } from '../../../../constants/toys';
import { Link, useSearchParams } from 'react-router-dom';
import { format } from 'date-fns';
import { appDateFormat } from '../../../../constants/date';
import { useMemo } from 'react';
import { ConfirmModal } from './components/ConfirmModal';
import AddNewToyModal from './components/AddNewToyModal';

const Toys = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [editableToy, setEditableToy] = useState<IToy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddToyModalOpen, setIsAddToyModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [choosenItemId, setChoosenItemId] = useState('');
  const { toysAdmin } = useAppSelector(state => state.toysAdmin);
  const [sortFilter, setSortFilter] = useState({
    sortBy: '',
    sortOrder: 'asc',
  });
  const dispatch = useAppDispatch();

  const toyCount = toysAdmin.length;

  useEffect(() => {
    dispatch(fetchToysAdmin());
  }, [dispatch]);

  const handleEdit = (toy: IToy) => {
    setEditableToy(toy);
    setIsModalOpen(true);
  };

  const ConfirmDelete = (itemId: string) => {
    setChoosenItemId(itemId);
    setIsConfirmModalOpen(true);
  };

  const handleSort = (sortBy: string) => {
    setSortFilter(prevSortFilter => ({
      sortBy,
      sortOrder:
        prevSortFilter.sortBy === sortBy && prevSortFilter.sortOrder === 'asc'
          ? 'desc'
          : 'asc',
    }));
  };

  const sortByFilter = useCallback(
    (
      a: {
        toyName: string;
        usageCycle: number;
        lastDisinfectionDate: string | number | Date;
      },
      b: {
        toyName: string;
        usageCycle: number;
        lastDisinfectionDate: string | number | Date;
      }
    ) => {
      switch (sortFilter.sortBy) {
        case 'toy':
          return a.toyName.localeCompare(b.toyName);
        case 'cycle':
          return a.usageCycle - b.usageCycle;
        case 'date':
          return (
            new Date(b.lastDisinfectionDate).getTime() -
            new Date(a.lastDisinfectionDate).getTime()
          );
        default:
          return 0;
      }
    },
    [sortFilter]
  );

  const filteredItems = useMemo(() => {
    const searchToy = searchParams.get('search') || '';
    const sortedItems = [...toysAdmin]
      .sort(sortByFilter)
      .filter(
        ({ toyName, _id }) =>
          toyName?.toLowerCase().includes(searchToy.toLowerCase()) ||
          _id?.toLowerCase().includes(searchToy.toLowerCase())
      );

    return sortFilter.sortOrder === 'desc'
      ? sortedItems.reverse()
      : sortedItems;
  }, [toysAdmin, sortFilter, searchParams, sortByFilter]);

  return (
    <main className={styles.main}>
      <header>
        <div className={styles.headerLeft}>
          <h1>Іграшки</h1>
          <Search
            handleSearch={(search: string) => setSearchParams({ search })}
          />
        </div>
        <p>Усього іграшок на точці: {toyCount}</p>
        <div className={styles.headerRight}>
          <button onClick={() => setIsAddToyModalOpen(true)}>
            <MdOutlineAddCircleOutline />
            <span>Додати нову іграшку</span>
          </button>
          <button onClick={() => setIsModalOpen(true)}>
            <MdOutlineAddCircleOutline />
            <span>Додати іграшку на точку</span>
          </button>
        </div>
      </header>
      <div className={styles.dataInfo}>
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort('toy')}>Іграшка</th>
              <th onClick={() => handleSort('cycle')}>Циклів користування</th>
              <th onClick={() => handleSort('date')}>Продезінфековано</th>
              <th>Стан іграшки</th>
              <th>У користуванні</th>
              <th>Користувач</th>
              <th>Дії</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.length > 0 &&
              filteredItems.map(toy => (
                <tr key={toy._id}>
                  <td className={styles.toyName}>
                    <Link to={`/management/toys/${toy._id}`}>
                      {toy.toyName}
                      <br />({toy._id})
                    </Link>
                  </td>
                  <td>{toy.usageCycle}</td>
                  <td>
                    {format(new Date(toy.lastDisinfectionDate), appDateFormat)}
                  </td>
                  <td>
                    {
                      toyStateOptions.find(
                        state => state.value === toy.toyState
                      )?.label
                    }
                  </td>
                  <td>{!toy.isAvailable ? 'Так' : 'Ні'}</td>
                  <td>
                    <Link to={`/management/clients/${toy.client?._id}`}>
                      {toy.client?.parentName} {toy.client?.parentSurname}
                    </Link>
                  </td>
                  <td>
                    <div className={styles.actions}>
                      <button title="Edit toy" onClick={() => handleEdit(toy)}>
                        <AiOutlineEdit />
                      </button>
                      <button onClick={() => ConfirmDelete(toy._id)}>
                        <BsTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <ToyModal
          isModalOpen={isModalOpen}
          closeModal={() => {
            setIsModalOpen(false);
            setEditableToy(null);
          }}
          editableToy={editableToy}
        />
      )}
      {isAddToyModalOpen && (
        <AddNewToyModal
          isModalOpen={isAddToyModalOpen}
          closeModal={() => setIsAddToyModalOpen(false)}
        />
      )}

      {isConfirmModalOpen && (
        <ConfirmModal
          isModalOpen={isConfirmModalOpen}
          closeModal={() => setIsConfirmModalOpen(false)}
          id={choosenItemId}
        />
      )}
    </main>
  );
};

export default Toys;

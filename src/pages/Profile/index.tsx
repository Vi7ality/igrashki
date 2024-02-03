import { addMonths, format } from 'date-fns';
import { useAppSelector } from '../../redux/store';
import Header from '../../shared/Header'
import styles from './Profile.module.scss'
import { appDateFormat } from '../../constants/date';
import { useEffect, useState } from 'react';
import api from '../../api';
import QRCode from 'react-qr-code';
import { ISubscription } from '../../models/client';

const Profile = () => {
    const { client } = useAppSelector((state) => state.client);
    const [subscriptions, setSubscriptions] = useState<ISubscription[]>([])
    const [isQRModalVisible, setIsQRModalVisible] = useState(false)
    const [selectedSubscription, setSelectedSubscription] = useState<any>(null)

    useEffect(() => {
        const fetchSubscriptions = async () => {
            const { data } = await api.get(`/subscription`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` }
            })
            setSubscriptions(data)
        }

        fetchSubscriptions()
    }, [])

    const formatDate = (date: Date | undefined) => {
        if (!date) return ""
        return format(new Date(date), appDateFormat)
    }

    const getStatus = (subscription: any) => {
        if (subscription?.subscribtionStartDate) {
            if (subscription?.subscribtionEndDate) {
                return { title: "Закінчилась", className: styles.ended }
            }

            return { title: "Активна", className: styles.active }
        } else {
            return { title: "Очікується", className: styles.pending }
        }
    }

    const showQRModal = (subscription: any) => {
        setSelectedSubscription(subscription)
        setIsQRModalVisible(true)
    }

    const getEndingExpectedDate = (startSubDate: Date | null) => {
        if (!startSubDate) return ""
        return format(addMonths(new Date(startSubDate), 3), appDateFormat)
    }

    const cancelSubscription = async (subscription: any) => {
        try {
            const response = await api.post('/subscription/unsub', { subscriptionId: subscription._id }, {
                headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` }
            });
            if (response.status === 200) {
                setSubscriptions((prevSubscriptions) =>
                    prevSubscriptions.filter((sub) => sub._id !== subscription._id)
                );
            }
        } catch (error) {
            console.error('Помилка скасування підписки:', error);
        }
    };

    return (
        <main className={styles.main}>
            <Header darkMode />
            <div className={styles.container}>
                <div className={styles.left}>
                    <h2>Профіль</h2>
                    <div className={styles.info}>
                        <div className={styles.info__item}>
                            <h4>Імя: <span>{client?.parentName}</span></h4>
                        </div>
                        <div className={styles.info__item}>
                            <h4>Прізвище: <span>{client?.parentSurname}</span></h4>
                        </div>
                        <div className={styles.info__item}>
                            <h4>Номер телефону: <span>{client?.phoneNumber}</span></h4>
                        </div>
                        <div className={styles.info__item}>
                            <h4>Імя дитини: <span>{client?.childName}</span></h4>
                        </div>
                        <div className={styles.info__item}>
                            <h4>Дата народження дитини: <span>{client && format(new Date(client.childBirthDate!), "yyyy.mm.dd")}</span></h4>
                        </div>

                    </div>
                </div>
                <div className={styles.right}>
                    <h2>Інформація про підписки</h2>
                    <p className={styles.warning}>
                        Якщо у вас вже є активна підписка, ви не можете зареєструвати нову. Щоб оформити іншу підписку, будь ласка, скасуйте попередню. У разі завершення попередньої підписки, будь ласка, поверніть іграшки і зможете отримати нову підписку.
                    </p>
                    <div className={styles.subscriptions}>
                        {subscriptions.map((subscription: any) => {
                            const { title, className } = getStatus(subscription)
                            return (
                                <div className={styles.sub} key={subscription?._id}>
                                    <h3>Підписка</h3>
                                    <h4>Статус: <span className={`${styles.status} ${className}`}>{title}</span></h4>
                                    {subscription?.subscribtionStartDate && <h4>Дата початку: <span>{formatDate(subscription?.subscribtionStartDate)}</span></h4>}
                                    {formatDate(subscription?.subscribtionEndDate) && <h4>Дата закінчення: <span>{formatDate(subscription?.subscribtionEndDate)}</span></h4>}
                                    {subscription?.subscribtionStartDate && <h4>Дата очікуваного закінчення: <span>{getEndingExpectedDate(subscription?.subscribtionStartDate)}</span></h4>}
                                    <h4>Локація: <span>{subscription?.managementPoint?.location}</span></h4>
                                    <div className={styles.subToys}>
                                        <h4>Іграшки:</h4>
                                        {subscription?.toys.map((toy: any) => (
                                            <div className={styles.subToy} key={toy?._id}>
                                                <h5>{toy?.toyName}</h5>
                                            </div>
                                        ))}
                                    </div>
                                    {title === "Очікується" && <button onClick={() => cancelSubscription(subscription)} className={styles.cancelBtn}>Відмінити</button>}
                                    {title !== "Закінчилась" && <button onClick={() => showQRModal(subscription)} className={styles.qrBtn}>QR для менеджера</button>}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            {isQRModalVisible && (
                <div className={styles.modal}>
                    <div className={styles.modal__content}>
                        <h3>QR код для менеджера</h3>
                        <QRCode
                            size={256}
                            value={`https://growithyou.club/management/subscriptions/${selectedSubscription?._id}`}
                            viewBox={`0 0 256 256`}
                        />
                        <button onClick={() => setIsQRModalVisible(false)}>Закрити</button>
                    </div>
                </div>
            )}
        </main>
    )
}

export default Profile
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../../../api'
import { IToyInfo } from '../../../../models/toy';
import { IClient } from '../../../../models/client';
import styles from './SubscriptionInfo.module.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ISubscription {
    _id: string;
    toys: IToyInfo[];
    client: IClient;
}

const SubscriptionInfo = () => {
    const [subscription, setSubscription] = useState<ISubscription | null>(null)
    const { subId } = useParams<{ subId: string }>()

    useEffect(() => {
        const fetchSubscription = async () => {
            const { data } = await api.get(`/subscription/showSubInfoForManager/${subId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('managerToken')}`
                }
            })
            setSubscription(data)
        }

        fetchSubscription()
    }, [])

    const handleSubmit = async (finished: boolean = false) => {
        const updateData = finished ? { subscribtionEndDate: new Date() } : { subscribtionStartDate: new Date() }
        const toastTitle = finished ? 'Підписку закінчено' : 'Підписку підтверджено'
        await api.put(`/subscription/${subId}`, updateData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('managerToken')}`
            }
        })
        toast.success(toastTitle)
    }

    const getStatus = (subscription: any) => {
        if (subscription?.subscribtionStartDate) {
            if (subscription?.subscribtionEndDate) {
                return { title: "Закінчилась" }
            }

            return { title: "Активна" }
        } else {
            return { title: "Очікується" }
        }
    }

    const { title } = getStatus(subscription)
    return (
        <div className={styles.clientSubscription}>
            <h1>Підписка {subscription && `(ID: ${subscription?._id})`}</h1>
            <h2>Статус: {title}</h2>
            {subscription?.client && <h2>Клієнт: {`${subscription.client.parentName} ${subscription.client.parentSurname}`}</h2>}
            <div className={styles.subToys}>
                {subscription?.toys.map(toy => (
                    <div className={styles.subToy} key={toy._id}>
                        <h3>{toy.toyName}</h3>
                        <img className={styles.subToyImg} src={toy.images[0]} />
                        <p>ID: {toy._id}</p>
                    </div>
                ))}
            </div>
            {/* <button className={styles.declineBtn} onClick={() => window.history.back()}>Скасувати</button> */}
            {title === "Активна" && <button className={styles.submitBtn} onClick={() => handleSubmit(true)} >Підтвердити повернення</button>}
            {title === "Очікується" && <button className={styles.submitBtn} onClick={() => handleSubmit()} >Підтвердити отримання</button>}
            <ToastContainer />
        </div>
    )
}

export default SubscriptionInfo
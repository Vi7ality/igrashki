import { useParams } from "react-router-dom";
import Footer from "../../shared/Footer";

import ImageSlider from "./components/ImageSlider";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchToy } from "../../redux/slices/toy.slice";
import { useEffect } from "react";
import { addItemToCart, removeItemFromCart } from "../../redux/slices/cart.slice";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HeaderBackgound from "../../shared/HeaderBackground";
import { IToyInfo } from "../../models/toy";
import ToyInfo from "./components/ToyInfo";

const Toy = () => {
  const { toyId } = useParams<{ toyId: string }>();
  const { toy } = useAppSelector((state) => state.toy);
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);

  useEffect(() => {
    if (toyId) {
      dispatch(fetchToy(toyId));
    }
  }, [toyId, dispatch]);

    const handleToggleToCart = () => {
    const isItemInCart = cart.some(item => item.itemId === toy.toyId);
    if (cart.length >= 3) {
      toast.error('Кошик повний. Максимальна кількість: 3 іграшки.', {
        autoClose: 1000,
      });
    } else if (toy && isItemInCart) {
      dispatch(removeItemFromCart(toy.toyId));
    } else {
      toy && dispatch(
        addItemToCart({
          itemId: toy.toyId,
          itemName: toy.toyName,
          itemImage: toy.images[0],
        })
      );
      toast.success('Іграшку додано в кошик!', { autoClose: 1000 });
    }
  };

  // const handleAddToCart = () => {
  //   if (toy) {
  //     const isItemInCart = cart.some((item) => item.itemId === toy.images[0]);
  //     if (isItemInCart) {
  //       toast.warning("Іграшка вже додана в кошик!");
  //     } else if (cart.length >= 3) {
  //       toast.error("Кошик повний. Максимальна кількість: 3 іграшки.");
  //     } else {
  //       dispatch(addItemToCart({ itemId: toy._id, itemImage: toy.images[0], itemName: toy.toyName }));
  //       toast.success("Іграшку додано в кошик!");
  //     }
  //   }
  // };


  return (
    <>
      <HeaderBackgound />
      <ImageSlider images={toy?.images} />
      <ToyInfo handleToggleToCart={handleToggleToCart} />
            <ToastContainer
            position="bottom-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme="light"
            closeButton={false}
          />
    </>
  );
};

export default Toy;

// <div className={styles.toy}>
//       <Header />
//       <div className={styles.toyWrapper}>
//         <ImageSlider images={toy?.images} />
//         <div className={styles.toyTitle}>
//           <h2>{toy?.toyName}</h2>
//           <button onClick={handleAddToCart}>Додати</button>
//           <ToastContainer
//             position="bottom-right"
//             autoClose={1000}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss={false}
//             draggable
//             pauseOnHover={false}
//             theme="light"
//             closeButton={false}
//           />
//         </div>
//         <button className={styles.mobileAddBtn} onClick={handleAddToCart}>Додати</button>
//       </div>
//       <div className={styles.toyInfo}>
//         {/* <img className={styles.bg} src={bg} alt="bg" /> */}
//         <div className={styles.toyInfoLeft}>
//           <div className={styles.toyDescription}>
//             <h6>Опис</h6>
//             <p>
//               {toy?.description}
//             </p>
//           </div>
//           {toy?.features?.length! > 0 && (
//             <div className={styles.toyFeatures}>
//               <h6>
//                 Особливості {toy?.toyName}:
//               </h6>
//               <ul>
//                 {toy?.features.map((feature, index) => (
//                   <li key={index}>{feature}</li>
//                 ))}
//               </ul>
//             </div>
//           )}

//         </div>
//         <div className={styles.toyInfoRight}>
//           <div className={styles.toyCharacterstic}>
//             <h6>Характеристики:</h6>
//             <div className={styles.toyCharactersticItem}>
//               <div }>Виробництво</div>
//               <div>{toy?.manufacturer}</div>
//             </div>
//             <div className={styles.toyCharactersticItem}>
//               <div }>Вік </div>
//               <div>
//                 Від {toy?.ageFrom}{toy?.ageTo && ` до ${toy?.ageTo}`}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
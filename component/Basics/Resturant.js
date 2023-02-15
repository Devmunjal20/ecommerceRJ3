import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

console.log(uniqueList);

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

// const Resturant = () => {
//   const [menuData, setMenuData] = useState(Menu);
//   const myStyle = { color: "red" };

//   const filterItem = (category) => {
//     const updatedList = Menu.filter((currElem) => {
//       return currElem.category === category;
//     });
//     setMenuData(updatedList);
//   };
//   return (
//     <>
//       {/* <div className='card-container'>
//         <div className='card'>
//             <div className='card-body'>
//                 <span className='card-number card-circle subtitle'>1</span>
//                 <span className='card-author subtle' style={myStyle} >Breakfast</span>
//                 <h2 className='card-title'>Maggi</h2>
//                 <span className='card-description subtle'>
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book

//                 </span>

//                 <div className='card-read'>Read</div>

//             </div>
//             <img src='https://images.unsplash.com/photo-1671851476760-487cd6b3bb73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60'></img>
//             <span className='card-tag subtle'>Oder Now</span>

//         </div>

//     </div> */}

//       <nav className="navbar">
//         <div className="btn-group">
//           <button
//             className="btn-group__item"
//             onClick={() => filterItem("breakfast")}
//           >
//             Breakfast
//           </button>
//           <button
//             className="btn-group__item"
//             onClick={() => filterItem("lunch")}
//           >
//             Lunch
//           </button>
//           <button
//             className="btn-group__item"
//             onClick={() => filterItem("evening")}
//           >
//             Evening
//           </button>
//           <button
//             className="btn-group__item"
//             onClick={() => filterItem("dinner")}
//           >
//             Dinner
//           </button>
//           <button className="btn-group__item" onClick={() => setMenuData(Menu)}>
//             All
//           </button>
//         </div>
//       </nav>
//       <MenuCard menuData={menuData}></MenuCard>
//     </>
//   );
// };

export default Resturant;

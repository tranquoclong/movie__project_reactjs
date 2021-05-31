import { useSelector } from "react-redux";
import cls from "classnames";
import { Link } from "react-router-dom";
function handleMapMainMenus(listMenu, isRoot) {
  return (
    <ul
      className={cls({
        "header-nav__lists": isRoot === true,
      })}
    >
      {listMenu.map((menuItem) => {
        return (
          <li key={menuItem.id}>
            {menuItem.url.indexOf("http") === 0 ? (
              <a href={menuItem.url} target="_blank" rel="noreferrer">
                {menuItem.title}
              </a>
            ) : (
              <Link to={menuItem.url}>{menuItem.title}</Link>
            )}

            {menuItem.child_items &&
              handleMapMainMenus(menuItem.child_items, false)}
          </li>
        );
      })}
    </ul>
  );
}

function MainMenus() {
  const menusItems = useSelector((state) => state.Menus.mainMenus); // [{}, {}, {}]

  return handleMapMainMenus(menusItems, true);
}

export default MainMenus;

// <ul className="header-nav__lists">
//   {
//     menusItems.map(menuItem => {
//       return (
//         <li key={menuItem.id}>
//           <a href={menuItem.url}>{menuItem.title}</a>

//           {
//             menuItem.child_items && (
//               <ul>
//                 {
//                   menuItem.child_items.map(menuItemItem => {
//                     return (
//                       <li key={menuItemItem.id}>
//                         <a href={menuItemItem.url}>{menuItemItem.title}</a>

//                         {
//                           menuItemItem.child_items && (
//                             <ul>
//                               {
//                                 menuItemItem.child_items.map(menuItemItemItem => {
//                                   return (
//                                     <li key={menuItemItemItem.id}>
//                                       <a href={menuItemItemItem.url}>{menuItemItemItem.title}</a>
//                                     </li>
//                                   )
//                                 })
//                               }
//                             </ul>
//                           )
//                         }
//                       </li>
//                     )
//                   })
//                 }
//               </ul>
//             )
//           }

//         </li>
//       )
//     })
//   }
// </ul>

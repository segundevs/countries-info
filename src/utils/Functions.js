/* eslint-disable array-callback-return */
export const filter = (items, query, params) => {
  return items.filter((item) => {
    return params.some((newItem) => {
      return ( item[newItem].toString().toLowerCase().indexOf(query.toLowerCase()) > -1);
      });
  });
}

// export const search = (items, query, filterParam, searchParam) => {
//    return items.filter((item) => {
//        if (item.region === filterParam) {
//            return searchParam.some((newItem) => {
//              return (
//                item[newItem]
//                    .toString()
//                    .toLowerCase()
//                    .indexOf(query.toLowerCase()) > -1
//                         );
//                     });
//                 } else{
//                     return searchParam.some((newItem) => {
//                         return (
//                             item[newItem]
//                                 .toString()
//                                 .toLowerCase()
//                                 .indexOf(query.toLowerCase()) > -1
//                         );
//                     });
//                 }
//             });
// }
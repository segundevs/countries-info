export const filter = (items, query, params) => {
  return items.filter((item) => {
    return params.some((newItem) => {
      return ( item[newItem].toString().toLowerCase().indexOf(query.toLowerCase()) > -1);
      });
  });
}
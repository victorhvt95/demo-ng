type ListResponse<Item> = {
  items: Item[];
  page: number;
  pageSize: number;
  totalCount: number;
};

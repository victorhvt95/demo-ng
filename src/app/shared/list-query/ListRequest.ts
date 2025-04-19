export type ListRequest<TFilter> = {
  page?: number;
  pageSize?: number;
  orderBy?: keyof TFilter;
  ascending: boolean;
} & Partial<TFilter>;

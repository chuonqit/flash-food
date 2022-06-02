export interface Paginator {
  totalRows: number | null;
  pageSize: number | null;
  totalPages: number | null;
  currentPage: number | null;
  pagingCounter: number | null;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

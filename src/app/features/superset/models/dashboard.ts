
export interface User {
  first_name: string;
  id: number;
  last_name: string;
}

export interface Result {
  certification_details: string;
  certified_by: string;
  changed_by?: User;
  changed_by_name: string;
  changed_on_delta_humanized: string;
  changed_on_utc: string;
  created_by?: User;
  created_on_delta_humanized: string;
  dashboard_title: string;
  id: number;
  is_managed_externally: boolean;
  owners: string[];
  published: boolean;
  roles: string[];
  slug?: string;
  status: string;
  tags: string[];
  thumbnail_url: string;
  url: string;
}


export interface DashboardResponse {
  count: number;
  result: Result[];
}

export interface DashboardQueryParams {
  columns: string[];
  filters: string[];
  keys: string[];
  order_column: string;
  order_direction: string;
  page: number;
  page_size: number;
  select_columns: string[];
}
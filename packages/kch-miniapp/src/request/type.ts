export interface RequestOptions {
  url: string;
  data?: string | AnyObject | ArrayBuffer;
  method?: 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';
}
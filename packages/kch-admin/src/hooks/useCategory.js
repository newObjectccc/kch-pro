import { generateAxiosHook } from 'hooks/useAxios';

const useCategory = generateAxiosHook('post', '/category/list');

export default useCategory;

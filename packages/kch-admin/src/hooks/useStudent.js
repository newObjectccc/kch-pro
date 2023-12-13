import { generateAxiosHook } from 'hooks/useAxios';

const useStudent = generateAxiosHook('post', '/to-cuser/list');

export default useStudent;

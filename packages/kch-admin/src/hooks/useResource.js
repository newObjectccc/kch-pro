import { generateAxiosHook } from 'hooks/useAxios';

const useResource = generateAxiosHook('post', '/resource/list');

export default useResource;

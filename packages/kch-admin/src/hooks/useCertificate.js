import { generateAxiosHook } from 'hooks/useAxios';

const useCertificate = generateAxiosHook('post', '/certificate/list');

export default useCertificate;

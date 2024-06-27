import { useRouter } from 'next/navigation';

const useNavigation = () => {
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
  };

  return { navigate };
};

export default useNavigation;

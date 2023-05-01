import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { APP_ROUTES } from '@/constants/app-routes';
import { checkIsUserAuthenticated } from '@/functions/chek-is-user-authenticated';

type PrivateRouteProps = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { push } = useRouter();
  const isUserAuthenticated = checkIsUserAuthenticated();

  useEffect(() => {
    if (!isUserAuthenticated) {
      push(APP_ROUTES.public.login);
    }
  }, [isUserAuthenticated, push]);

  return (
    <>
      {!isUserAuthenticated && null}
      {isUserAuthenticated && children}
    </>
  );
};

export default PrivateRoute;

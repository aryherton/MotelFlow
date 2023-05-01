import { APP_ROUTES } from '@/constants/app-routes';

export const checkIsPublicRoute = (routeName: string): boolean => {
  const publicRoutes = Object.values(APP_ROUTES.public);
  return publicRoutes.includes(routeName);
};

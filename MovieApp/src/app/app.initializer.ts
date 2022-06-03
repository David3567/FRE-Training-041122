import { AuthLocalStorageService } from './services/auth-local-storage.service';

export function appInitializer(auth: AuthLocalStorageService) {
  console.log('Inside appInitializer');
  return () =>
    new Promise((resolve: any) => {
      auth.refreshToken().subscribe().add(resolve);
    });
}

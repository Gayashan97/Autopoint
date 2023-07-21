import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user');

    //remove welcome message
    localStorage.removeItem('welcomeMessageShown');

    // dispatch logout action
    dispatch({ type: 'LOGOUT' });
  }

  return { logout }
}
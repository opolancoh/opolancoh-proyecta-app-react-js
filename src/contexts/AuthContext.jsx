import React, { createContext, useReducer, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { decodeJWT } from '@helpers/auth-helper';

const initialState = {
  isAuthenticated: false,
  user: null,
};

const getUserFromToken = (token) => {
  if (!token) return null;

  const { payload } = decodeJWT(token);

  return {
    id: payload.sub,
    name: payload.name,
    username: payload.username,
    roles: payload.roles !== undefined ? payload.roles : null,
    isAdmin: payload.isAdmin,
  };
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

// Create context
export const AuthContext = createContext(initialState);

// Provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = localStorage.getItem('access_token');
        if (token) {
          const decoded = getUserFromToken(token);
          dispatch({
            type: 'LOGIN',
            payload: decoded,
          });
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
      }
    };

    initializeAuth();
  }, []);

  // Actions
  const loginContext = ({ accessToken, refreshToken }) => {
    try {
      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('refresh_token', refreshToken);
      dispatch({
        type: 'LOGIN',
        payload: getUserFromToken(accessToken),
      });
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const logoutContext = () => {
    try {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      dispatch({ type: 'LOGOUT' });
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const contextValue = useMemo(
    () => ({
      user: state.user,
      isAuthenticated: state.isAuthenticated,
      loginContext,
      logoutContext,
    }),
    [state.user, state.isAuthenticated]
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

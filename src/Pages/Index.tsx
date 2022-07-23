import React, { useEffect } from 'react';
import LoadingOverLay from '../components/Loading/LoadingOverLay';
import routes from '../Lib/Routes/Routes';
import { helperSliceActions } from '../Lib/Store/Helper/Helper.Slice';
import { useAppDispatch, useAppSelector } from '../Lib/Store/hooks';


export default function Index() {
    const user = useAppSelector(state => state.user.currentUser);
    const dispatch = useAppDispatch();
  
    useEffect(() => {
      console.log({ user });
      
      if (user) {
        dispatch(helperSliceActions.setRedirectUrl(routes.app.children.me.fullPath));
      } else {
        dispatch(helperSliceActions.setRedirectUrl(routes.login.path));
      }
    }, [user, dispatch]);
  
    return (
      <>
        <LoadingOverLay />
      </>
    );
  }

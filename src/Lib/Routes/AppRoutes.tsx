import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoadingOverLay from '../../components/Loading/LoadingOverLay';
import { AuthGuard } from '../Guards/AuthGuard';
import routes from './Routes';
const NotFound = React.lazy(() => import('../../Pages/NotFoundPage'));
const IndexPage = React.lazy(() => import('../../Pages/Index'));
const AppPage = React.lazy(() => import('../../Pages/AppPage'));
const LoginPage = React.lazy(() => import('../../Pages/Login/LoginPage'));
const ForgetPassword = React.lazy(() => import('../../Pages/ForgetPassword/ForgetPassword'));
const RegisterPage = React.lazy(() => import('../../Pages/Register/RegisterPage'));

const DashboardPage = React.lazy(() => import('../../Pages/Dashboard/DashboardPage'));
const ProfilePage = React.lazy(() => import('../../Pages/Profile/ProfilePage'));
const PostList = React.lazy(() => import('../../Pages/Dashboard/Post/PostList/PostList'));
const PostDetails = React.lazy(() => import('../../Pages/Dashboard/Post/PostDetails/PostDetails'));



export default function AppRoutes() {
  return (
    <div>
      <Suspense fallback={<LoadingOverLay />}>
        <Routes>
          <Route path={routes.home.path} element={<IndexPage />} />

          <Route path={routes.app.path} element={<AppPage />}>
            <Route path={routes.app.children.me.path} element={<AuthGuard />}>
              <Route path={routes.app.children.me.path} element={<ProfilePage />} />
            </Route>
          </Route>

          <Route path={routes.dashboard.path} element={<DashboardPage />}>
            <Route path={routes.dashboard.children.me.path} element={<ProfilePage />} />
            <Route path={routes.dashboard.children.postList.path} element={<PostList />} />
            <Route path={routes.dashboard.children.post.path} element={<PostDetails />} />
          </Route>
          

          <Route path={routes.login.path} element={<LoginPage />} />
          <Route path={routes.forgetPassword.path} element={<ForgetPassword />} />
          <Route path={routes.register.path} element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}
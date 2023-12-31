import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// category routing
const CategoryManagement = Loadable(lazy(() => import('views/pages/category/CategoryMain')));
const CategoryManagementTest = Loadable(lazy(() => import('views/pages/categoryTest/CategoryMain')));
// resource routing
const ResourceManagement = Loadable(lazy(() => import('views/pages/resource/ResourceMain')));
const VideoResourceManagement = Loadable(
  lazy(() => import('views/pages/resource/video/VideoResource'))
);
const ImageResourceManagement = Loadable(
  lazy(() => import('views/pages/resource/image/ImageResource'))
);
const CoursewareResourceManagement = Loadable(
  lazy(() => import('views/pages/resource/courseware/CoursewareResource'))
);
const CerificateResourceManagement = Loadable(
  lazy(() => import('views/pages/resource/certificate/CertificateResource'))
);
// course routing
const CourseManagement = Loadable(lazy(() => import('views/pages/course/CourseMain')));
// student routing
const StudentManagement = Loadable(lazy(() => import('views/pages/student/StudentMain')));
// system routing
const SystemMember = Loadable(lazy(() => import('views/pages/system/SystemMember')));

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'pages/category',
      children: [
        {
          path: 'index',
          element: <CategoryManagement />
        },
        {
          path: 'indexTest',
          element: <CategoryManagementTest />
        },
      ]
    },
    {
      path: 'pages/resource',
      children: [
        {
          path: 'index',
          element: <ResourceManagement />
        },
        {
          path: 'video',
          element: <VideoResourceManagement />
        },
        {
          path: 'image',
          element: <ImageResourceManagement />
        },
        {
          path: 'courseware',
          element: <CoursewareResourceManagement />
        },
        {
          path: 'cerificate',
          element: <CerificateResourceManagement />
        }
      ]
    },
    {
      path: 'pages/course',
      children: [
        {
          path: 'index',
          element: <CourseManagement />
        }
      ]
    },
    {
      path: 'pages/student',
      children: [
        {
          path: 'index',
          element: <StudentManagement />
        }
      ]
    },
    {
      path: 'pages/system',
      children: [
        {
          path: 'member',
          element: <SystemMember />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    }
  ]
};

export default MainRoutes;

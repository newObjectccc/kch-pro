// assets
import {
  IconAccessible,
  IconBrandBitbucket,
  IconCategory,
  IconCpu,
  IconKey,
  IconSchool
} from '@tabler/icons';

// constant
const icons = {
  IconKey,
  IconCpu,
  IconBrandBitbucket,
  IconSchool,
  IconAccessible,
  IconCategory
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: '模块页面',
  caption: '所有功能模块页面总和',
  type: 'group',
  children: [
    {
      id: 'category',
      title: '分类模块',
      type: 'collapse',
      icon: icons.IconCategory,
      children: [
        {
          id: 'index',
          title: '分类管理',
          type: 'item',
          url: '/pages/category/index'
        }
      ]
    },
    {
      id: 'resource',
      title: '资源模块',
      type: 'collapse',
      icon: icons.IconBrandBitbucket,
      children: [
        {
          id: 'index',
          title: '资源管理',
          type: 'item',
          url: '/pages/resource/index'
        },
        {
          id: 'video',
          title: '视频管理',
          type: 'item',
          url: '/pages/resource/video'
        },
        {
          id: 'image',
          title: '图片管理',
          type: 'item',
          url: '/pages/resource/image'
        },
        {
          id: 'courseware',
          title: '课件管理',
          type: 'item',
          url: '/pages/resource/courseware'
        },
        {
          id: 'cerificate',
          title: '证书管理',
          type: 'item',
          url: '/pages/resource/cerificate'
        }
      ]
    },
    {
      id: 'course',
      title: '课程模块',
      type: 'collapse',
      icon: icons.IconSchool,
      children: [
        {
          id: 'index',
          title: '课程管理',
          type: 'item',
          url: '/pages/course/index'
        }
      ]
    },
    {
      id: 'student',
      title: '学员模块',
      type: 'collapse',
      icon: icons.IconAccessible,
      children: [
        {
          id: 'index',
          title: '学员管理',
          type: 'item',
          url: '/pages/student/index'
        }
      ]
    },
    {
      id: 'system',
      title: '系统模块',
      type: 'collapse',
      icon: icons.IconCpu,
      children: [
        {
          id: 'member',
          title: '管理员设置',
          type: 'item',
          url: '/pages/system/member'
        }
      ]
    },
    {
      id: 'authentication',
      title: '身份验证',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'login3',
          title: '登录',
          type: 'item',
          url: '/pages/login'
        },
        {
          id: 'register3',
          title: '注册',
          type: 'item',
          url: '/pages/register'
        }
      ]
    }
  ]
};

export default pages;

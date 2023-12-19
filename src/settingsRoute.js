import { CiUser } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io"
import { CiBookmark } from "react-icons/ci";


export default [
  {
      to: '/profile',
      name: 'User Profile',
      Icon: CiUser
  },
  {
      to: '/emailNotifs',
      name: 'Email notifications',
      Icon: IoIosNotificationsOutline
  },
  {
      to: '/',
      name: 'Subscription',
      Icon: CiBookmark
  }
];
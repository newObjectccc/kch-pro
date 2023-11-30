import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  ListItemButton,
  ListItemText,
  Typography
} from '@mui/material';

// project imports

// assets

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

const NavItem = ({ item, level, current, setCurrent }) => {
  const theme = useTheme();
  // const dispatch = useDispatch();
  // const { pathname } = useLocation();
  const customization = useSelector((state) => state.customization);
  // const matchesSM = useMediaQuery(theme.breakpoints.down('lg'));

  const handleClick = (type) => {
    setCurrent(type)
  }

  // const itemIcon = (
  //   <FiberManualRecordIcon
  //     sx={{
  //       width: customization.isOpen.findIndex((id) => id === item?.id) > -1 ? 8 : 6,
  //       height: customization.isOpen.findIndex((id) => id === item?.id) > -1 ? 8 : 6
  //     }}
  //     fontSize={level > 0 ? 'inherit' : 'medium'}
  //   />
  // );

  // const itemHandler = (id) => {
  //   dispatch({ type: MENU_OPEN, id });
  //   if (matchesSM) dispatch({ type: SET_MENU, opened: false });
  // };

  // // active menu item on page load
  // useEffect(() => {
  //   const currentIndex = document.location.pathname
  //     .toString()
  //     .split('/')
  //     .findIndex((id) => id === item.id);
  //   if (currentIndex > -1) {
  //     dispatch({ type: MENU_OPEN, id: item.id });
  //   }
  //   // eslint-disable-next-line
  // }, [pathname]);

  return (
    <ListItemButton
      // {...listItemProps}
      sx={{
        borderRadius: `${customization.borderRadius}px`,
        mb: 0.5,
        alignItems: 'flex-start',
        backgroundColor: 'inherit',
        // backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
        py: level > 1 ? 1 : 1.25,
        pl: `${level * 24}px`
      }}
      selected={current === item.id}
      onClick={() => handleClick(item.id)}
    >
      <ListItemText
        primary={
          <Typography
            variant={customization.isOpen.findIndex((id) => id === item.id) > -1 ? 'h5' : 'body1'}
            color="inherit"
          >
            {item.title}
          </Typography>
        }

      />
    </ListItemButton>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number,
  current: PropTypes.string,
  setCurrent: PropTypes.func,
};

export default NavItem;

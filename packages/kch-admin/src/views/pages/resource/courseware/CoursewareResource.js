import PropTypes from 'prop-types';
import MainCard from 'ui-component/cards/MainCard';

function CoursewareResource(props) {
  return <MainCard title="课件管理">CoursewareResource</MainCard>;
}

CoursewareResource.propTypes = {
  children: PropTypes.node
};

export default CoursewareResource;

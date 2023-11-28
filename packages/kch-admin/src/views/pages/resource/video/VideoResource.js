import PropTypes from 'prop-types';
import MainCard from 'ui-component/cards/MainCard';

function VideoResource(props) {
  return <MainCard title="视频管理">VideoResource</MainCard>;
}

VideoResource.propTypes = {
  children: PropTypes.node
};

export default VideoResource;

import PropTypes from 'prop-types';
import MainCard from 'ui-component/cards/MainCard';

function ImageResource(props) {
  return <MainCard title="图片管理">ImageResource</MainCard>;
}

ImageResource.propTypes = {
  children: PropTypes.node
};

export default ImageResource;

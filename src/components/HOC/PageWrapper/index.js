import './index.css';

const pageWrapper = WrappedComponent => props => (
  <div className="PageWrapper">
    <WrappedComponent {...props} />
  </div>
);

export default pageWrapper;
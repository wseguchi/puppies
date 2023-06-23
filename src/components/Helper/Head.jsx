import React from 'react';

const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title + ' | Social Dogs';
  }, [props]);

  return <></>;
};

export default Head;

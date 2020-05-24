import React, { useState } from 'react';
import Portal from '../../utils/Portal';

const TooltipContainer = () => {
  const [coords, setCoords] = useState({});
  const [isOpened, openTooltip] = useState(false);

  const handleTooltipClick = e => {
    // implement
  }

  return <div style={{ overflow: 'hidden' }}>
    <button
      onClick={e => {
        const rect = e.target.getBoundingClientRect();
        setCoords({
          left: rect.x + rect.width / 2,
          top: rect.y + window.scrollY
        });
        openTooltip(!isOpened);
      }}
    >
      Info
    </button>
    {
      isOpened &&
      <Portal>
        <div style={{position: 'absolute', top: coords.top, left: coords.left}}>
          <div>Explanation Tooltip</div>
        </div>
      </Portal>
    }
  </div>
}

export default TooltipContainer;
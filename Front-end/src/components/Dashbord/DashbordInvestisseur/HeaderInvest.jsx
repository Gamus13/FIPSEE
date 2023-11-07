import React from 'react';

const Headerinvestor = () => {
  const headStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '70px',
    borderx: '4px solid black',
    boxShadow: '0 40px 15px rgba(0,0,0,.1)',
    padding: '15px',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    zIndex: '-9999',
  };

  const leftxStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const logomStyle = {
    width: '100px',
    marginLeft: '15px',
  };

  const iconvStyle = {
    padding: '0 7px',
    cursor: 'pointer',
  };

  const ordre = {
    display: 'flex',
  };

  const searchzFormStyle = {
    border: '1px solid #ddd',
    height: '35px',
    margin: '0',
    padding: '0',
    display: 'flex',
  };

  const inputmStyle = {
    width: '500px',
    padding: '10px',
    margin: '0',
    borderRadius: '0',
    border: 'none',
    height: '100%',
  };

  const buttondStyle = {
    padding: '0',
    margin: '0',
    height: '100%',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '0',
  };

  return (
    <div style={headStyle}>
      <div style={leftxStyle}>
        {/* <div id="menu" className="material-icons" style={iconvStyle}>
          menu
        </div> */}
        <img
          src="https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube-logo-full_color_light.svg?cache=72a5d9c"
          alt=""
          style={logomStyle}
        />
      </div>

      <div className="headStyle__search" style={searchzFormStyle}>
        <form action="" style={ordre}>
          <input type="text" placeholder="Rechercher" style={inputmStyle} />
          <div style={buttondStyle}>
            <div className="material-icons">search</div>
          </div>
        </form>
      </div>

      <div className="headStyle__icons">
        {/* <div className="material-icons display-this" style={iconvStyle}>
          search
        </div> */}
        <div className="material-icons" style={iconvStyle}>
          videocam
        </div>
        <div className="material-icons" style={iconvStyle}>
          apps
        </div>
        <div className="material-icons" style={iconvStyle}>
          notifications
        </div>
        <div className="material-icons display-this" style={iconvStyle}>
          account_circle
        </div>
      </div>
    </div>
  );
};

export default Headerinvestor;
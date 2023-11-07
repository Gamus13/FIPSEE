import React from 'react';

const MainBody = () => {
  const maintBodyStyle = {
    height: 'calc(100vh - 70px)',
    
    display: 'flex',
    overflow: 'hidden',
  };

  const sidekbarStyle = {
    height: '100%',
    width: '230px',
    backgroundColor: 'white',
    overflowY: 'scroll',
  };

  const sidebarmCategoriesStyle = {
    width: '100%',
    display: 'flex',
    position: 'relative',
    top: '2%',
    flexDirection: 'column',
    marginBottom: '15px',
    marginTop: '15px',
  };

  const sidebarzCategoryStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 25px',
  };

  const sidebarpCategorySpanStyle = {
    marginLeft: '15px',
  };

  const sidebarzCategoryHoverStyle = {
    background: '#e5e5e5',
    cursor: 'pointer',
  };

  const hrxStyle = {
    width: '100%',
    height: '1px',
    backgroundColor: '#e5e5e5',
    border: 'none',
  };

  return (
    <div style={maintBodyStyle} className="mainBody">
      <div style={sidekbarStyle} className="sidebar">
        <div style={sidebarmCategoriesStyle} className="sidebar__categories">
          <div style={sidebarzCategoryStyle} className="sidebar__category">
            <div className="material-icons">home</div>
            <span style={sidebarpCategorySpanStyle}>Accueil</span>
          </div>
          <div style={sidebarzCategoryStyle} className="sidebar__category">
            <div className="material-icons">local_fire_department</div>
            <span style={sidebarpCategorySpanStyle}>Tendances</span>
          </div>
          <div style={sidebarzCategoryStyle} className="sidebar__category">
            <div className="material-icons">subscriptions</div>
            <span style={sidebarpCategorySpanStyle}>Subscriptions</span>
          </div>
        </div>
        <div style={hrxStyle} />
        <div style={sidebarmCategoriesStyle} className="sidebar__categories">
          <div style={sidebarzCategoryStyle} className="sidebar__category">
            <div className="material-icons">library_add_check</div>
            <span style={sidebarpCategorySpanStyle}>Library</span>
          </div>
          <div style={sidebarzCategoryStyle} className="sidebar__category">
            <div className="material-icons">history</div>
            <span style={sidebarpCategorySpanStyle}>Historique</span>
          </div>
          <div style={sidebarzCategoryStyle} className="sidebar__category">
            <div className="material-icons">play_arrow</div>
            <span style={sidebarpCategorySpanStyle}>Your Videos</span>
          </div>
          <div style={sidebarzCategoryStyle} className="sidebar__category">
            <div className="material-icons">watch_later</div>
            <span style={sidebarpCategorySpanStyle}>Watch Later</span>
          </div>
          <div style={sidebarzCategoryStyle} className="sidebar__category">
            <div className="material-icons">thumb_up</div>
            <span style={sidebarpCategorySpanStyle}>Liked Videos</span>
          </div>
        </div>
        <div style={hrxStyle} />
      </div>
    </div>
  );
};

export default MainBody;
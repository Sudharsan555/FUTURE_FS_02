const Settings = () => {
  return (
    <div className="main">
      <div className="header">Settings</div>
      <div className="content">
        <h3>Change Password</h3>
        <input placeholder="Old Password" />
        <input placeholder="New Password" />
        <input placeholder="Confirm Password" />
        <button>Change Password</button>
      </div>
    </div>
  );
};

export default Settings;

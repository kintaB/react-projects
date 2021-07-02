import React from "react";
import cont from "../../Content/Content.module.css";

const Profile = () => {
  return (
    <>
      <div className="main">
        <div className="profile">
          <img className="profileImage" alt="" />
          <div className="profileContent">
            <div className={cont.profileContentName}>Nikita B.</div>
            <div className={cont.profileContentDescription}>
              <div>Birth: 11 oct</div>
              <div>City: CPB</div>
              <div>Educ: MGU</div>
              <div>web site: lilpensil.com </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

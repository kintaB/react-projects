import React from "react";
import cont from "../../Content/Content.module.css";
import Preloader from "../../command/preloader/preloader";
import s from "../Content.module.css";

const Profile = (props) => {
  console.log(props);
  if (props.profile === null) {
    return (
      <>
        <Preloader />
      </>
    );
  }
  return (
    <>
      <div className="main">
        <div className="profile">
          <img className={s.profileImage} src={props.profile.photos.small} />
          <div className="profileContent">
            <div className={cont.profileContentName}>
              {props.profile.fullName}
            </div>
            <div className={cont.profileContentDescription}>
              <div>About Me: {props.profile.aboutMe} </div>
              <div>Facebook: {props.profile.contacts.facebook}</div>
              <div>twitter: {props.profile.contacts.twitter}</div>
              <div>Vk: {props.profile.contacts.vk} </div>
              <div>
                Поиск работы:{" "}
                {props.profile.lookingForAJob ? "Ищу работу" : "Не ищу работу"}
              </div>
              <div>
                Статус поиска работы: {props.profile.lookingForAJobDescription}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

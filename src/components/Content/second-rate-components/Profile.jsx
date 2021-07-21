import React from "react";
import cont from "../../Content/Content.module.css";
import Preloader from "../../command/preloader/preloader";
// import Status from "./Status";
import s from "../Content.module.css";
import StatusWithHooks from "./StatusWithHooks";

const Profile = (props) => {
  if (!props.profile) {
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
            <StatusWithHooks
              updateUserStatus={props.updateUserStatus}
              status={props.status}
            />
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

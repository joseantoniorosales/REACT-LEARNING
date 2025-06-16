import { useState } from "react";

export function CardFollow({
  userPfp,
  userName,
  userTag,
  formatTag = (userTag) => `@${userTag}`,
}) {
  const [isFollowingState, setIsFollowingState] = useState("follow");

  const toggleFollow = () => {
    setIsFollowingState((prev) =>
      /* if (prev === "follow") {
        return "unfollow";
      } else if (prev === "unfollow") {
        return "follow";
      } */
      prev === "follow" ? "unfollow" : "follow"
    );
  }; // TODO Comenzar a utilizar más seguido expresiones ternarias hasta hacerlo siempre

  return (
    <article className="tw-follow-card">
      <img className="tw-follow-card-pfp" src={userPfp} alt="pfp" />
      <header className="tw-follow-card-head">
        <div className="tw-follow-card-text">
          <strong className="tw-follow-card-username">{userName}</strong>
          <div>
            <span className="tw-follow-card-usertag">{formatTag(userTag)}</span>
          </div>
        </div>
        <button
          className={`tw-follow-card-button ${
            isFollowingState === "follow" ? "is-following" : "is-unfollowing"
          }`}
          onClick={toggleFollow}
        >
          {isFollowingState === "follow" ? "Follow" : "Unfollow"}
        </button>
      </header>
    </article>
  );
}

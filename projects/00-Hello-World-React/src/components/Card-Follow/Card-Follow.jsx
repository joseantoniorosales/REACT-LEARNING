export function CardFollow({ userPfp, userName, userTag, formatTag = (userTag) => `@${userTag}`, isFollowing }) {
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
        <button className="tw-follow-card-button">{isFollowing}</button>
      </header>
    </article>
  );
}

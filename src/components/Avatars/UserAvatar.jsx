export function UserAvatar() {
  return (
    <span className="avatar avatar-user" aria-hidden="true">
      <svg className="user-profile-icon" viewBox="0 0 48 48" focusable="false">
        <circle className="user-icon-bg" cx="24" cy="24" r="20" />
        <circle className="user-icon-head" cx="24" cy="19" r="7" />
        <path className="user-icon-body" d="M12.5 38c2.3-7.3 6.4-11 11.5-11s9.2 3.7 11.5 11" />
      </svg>
    </span>
  );
}

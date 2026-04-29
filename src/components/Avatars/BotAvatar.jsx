export function BotAvatar() {
  return (
    <span className="avatar avatar-bot" aria-hidden="true">
      <svg className="bot-assistant-icon" viewBox="0 0 48 48" focusable="false">
        <rect className="assistant-card" x="10" y="13" width="25" height="24" rx="5" />
        <circle className="assistant-dot" cx="18" cy="22" r="3" />
        <path className="assistant-line" d="M25 21h6M17 29h14" />
        <path className="assistant-spark" d="M36 8l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" />
      </svg>
    </span>
  );
}

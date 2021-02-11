import { useState, Fragment } from "react";

import "./fan-entry.css";

export default function FanEntry({ name, users }) {
  const [numberShown, setNumberShown] = useState(10);

  const sortUsers = (user1, user2) => user2.points - user1.points;

  const getUserWithTooltip = (user, index) => {
    return (
      <Fragment key={user.id}>
        <div className="tooltip">
          {user.fullName}
          <span className="tooltip-text">Points: {user.points}</span>
        </div>
        {index < numberShown - 1 ? ", " : ""}
      </Fragment>
    );
  };

  const canShowMore = numberShown === 10;

  return (
    <div className="fan-entry">
      <h3 className="animal-header">{name}</h3>
      {users
        .sort(sortUsers)
        .slice(0, numberShown)
        .map(getUserWithTooltip)}
      <p
        className="button"
        onClick={() => setNumberShown(canShowMore ? 25 : 10)}
      >
        {canShowMore ? "Show more" : "Show less"}
      </p>
    </div>
  );
}

import React from "react";

const Stats = ({ text }) => {
  const showRemaining = (length) => {
    return length - text.length;
  };
  const wordCount = (text) => {
    if (!text) return 0;
    return text.split(" ").length;
  };
  return (
    <section className="stats">
      <Stat title="Words" text={text} count={wordCount(text)} />
      <Stat title="Letters" text={text} count={text.length} />
      <Stat
        title="Characters"
        text={text}
        count={showRemaining(280)}
        limit={280}
      />
      <Stat
        title="Facebook"
        text={text}
        count={showRemaining(2200)}
        limit={2200}
      />
    </section>
  );
};

const Stat = ({ title, text, count, limit = 0 }) => {
  return (
    <section className="stat">
      <span
        className={`stat__number ${
          limit && limit < count && "stat__number--limit"
        }`}
      >
        {count}
      </span>
      <h2 className="second-heading">{title}</h2>
    </section>
  );
};

export default Stats;

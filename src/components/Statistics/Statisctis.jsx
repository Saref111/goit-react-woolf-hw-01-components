import css from './Statistics.module.scss';

export const Statistics = ({title, stats}) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      {stats?.length && (
        <ul className={css.statList}>
          {stats.map(({ label, percentage }) => (
            <li key={label} className={css.item}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

import classes from './results-title.module.css';
import Link from 'next/link';

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Link href="/events" className={classes.btn}>Show all events</Link>
    </section>
  );
}

export default ResultsTitle;

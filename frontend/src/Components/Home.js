import useStyles from './Style';
import Header from './Header';
import Contents from './Contents';

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Header />
      <Contents />
    </div>
  );
}

export default Home;
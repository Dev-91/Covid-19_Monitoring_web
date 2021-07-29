import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  app: {
    display: "flex",
    flexDirection: "column"
  },
  appbar: {
    position: "static",
    height: "70px",
    display: "flex",
    justifyContent: "center"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    marginLeft: "20px"
  },
  select: {
    width: "100px",
  },
  body: {
    margin: "20px"
  }

}));

export default useStyles;
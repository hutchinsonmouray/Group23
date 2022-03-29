import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 30,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
      // color: #ee5522,
    color: 'rgba(0,0,0,100)',
  },
  image: {
    marginLeft: '15px',
  },
}));

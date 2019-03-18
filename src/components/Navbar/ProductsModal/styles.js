import { variables } from 'style';

const categoryCard = theme => ({
  card: {
    flexBasis: 0,
    flexGrow: 1,
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  media: {
    [theme.breakpoints.down('md')]: {
      height: 100,
      width: '100%',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
    },
    [theme.breakpoints.up('md')]: {
      height: 150,
      width: '100%',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      height: 200,
    },
  },
  categoryTitle: {
    fontSize: '1rem',
    color: `${variables.darkGreen}`,
    fontWeight: 600,
    margin: '1rem 0',
    transition: 'all .2s ease',
    cursor: 'pointer',
    '&:hover': {
      color: `${variables.midGrey}`,
    },
  },
  productTitle: {
    fontSize: '.875rem',
    lineHeight: '1.25rem',
    fontWeight: 400,
    marginBottom: '.5rem',
    color: `${variables.darkGrey}`,
    transition: 'all .2s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      color: `${variables.lightGrey}`,
    },
  }
});

const productModal = theme => ({
  dialog: {
    top: '70px',
  },
  root: {
    top: '70px',
  },
  scrollPaper: {
    alignItems: 'start',
  },
  paper: {
    margin: 0,
    width: '90%',
    padding: '2rem 2rem 2.5rem',
    display: 'block',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '720px',
      marginTop: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '960px',
      marginTop: '1.5rem',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '1140px',
    },
  },
  categoryWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  learnMore: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: '1rem',
    cursor: 'pointer',
  },
  learnMoreText: {
    color: `${variables.darkGrey}`,
    borderBottom: `1px solid ${variables.darkGrey}`,
    transition: 'all .3s ease',
    fontSize: '1rem',
    '&:hover': {
      color: `${variables.midGrey}`,
      borderBottom: `1px solid ${variables.midGrey}`,
    }
  }
});

export {
  productModal,
  categoryCard,
};

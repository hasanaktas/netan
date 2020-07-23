import {
  Paper,
  Grid,
  Typography,
  Container,
  Box,
  makeStyles,
} from '@material-ui/core'
import {
  AccessAlarm,
  ThreeDRotation,
  IndeterminateCheckBoxSharp,
} from '@material-ui/icons'

const options = [
  {
    icon: AccessAlarm,
    title: 'First Option Lorem Ipsum',
  },
  {
    icon: AccessAlarm,
    title: 'Second Option Lorem Ipsum',
  },
  {
    icon: AccessAlarm,
    title: 'Third Option Lorem Ipsum',
  },
  {
    icon: AccessAlarm,
    title: 'Tertiary Option Lorem Ipsum',
  },
  {
    icon: AccessAlarm,
    title: 'Five Option Lorem Ipsum',
  },
]

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
    marginRight: theme.spacing(2),
  },

  iphone: {
    height: 500,
    width: 'auto',
  },
}))

const SectionPhoto = () => {
  const classes = useStyles()
  return (
    <Paper square className={classes.paper}>
      <Container maxWidth='md'>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant='h3'>
              How Connected With All Of Your Friends
            </Typography>
            {options.map((item, index) => {
              return (
                <Box
                  key={IndeterminateCheckBoxSharp}
                  display='flex'
                  alignItems='center'
                  marginTop={3}
                >
                  <Box className={classes.iconContainer}>
                    <item.icon />
                  </Box>

                  <Typography>{item.title}</Typography>
                </Box>
              )
            })}
          </Grid>
          <Grid item xs={12} md={6}>
            <Box width='100%' display='flex' justifyContent='center'>
              <img src='/assets/images/iphone.png' className={classes.iphone} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  )
}

export default SectionPhoto

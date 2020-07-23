import {
  Paper,
  Typography,
  Grid,
  Container,
  makeStyles,
  Box,
} from '@material-ui/core'
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons'

const options = [
  {
    icon: AccessAlarm,
    title: 'First Option',
    info:
      'Lorem ipsum dolar sit amet Lorem Lorem ipsum dolar sit amet Lorem  amet amet Lorem  amet Lorem',
  },
  {
    icon: ThreeDRotation,
    title: 'Second Option',
    info:
      'Lorem ipsum dolar sit amet Lorem Lorem ipsum dolar sit amet Lorem  amet amet Lorem  amet Lorem',
  },
  {
    icon: AccessAlarm,
    title: 'Third Option',
    info:
      'Lorem ipsum dolar sit amet Lorem Lorem ipsum dolar sit amet Lorem  amet amet Lorem  amet Lorem',
  },
]

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
  },
  icon: {
    fontSize: 60,
    marginBottom: 20,
    marginTop: 40,
    color: '#fff',
  },
  text: {
    color: '#fff',
  },
}))

const HowIs = () => {
  const classes = useStyles()
  return (
    <Paper square className={classes.paper}>
      <Container maxWidth='md'>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography align='center' variant='h3' className={classes.text}>
              How sApp works?
            </Typography>
            <Typography align='center' className={classes.text}>
              Lorem ipsum dolar sit amet Lorem ipsum dolar sit amet Lorem ipsum
              dolar sit amet Lorem ipsum dolar sit amet Lorem ipsum dolar sit
              amet
            </Typography>
          </Grid>
          {options.map((item, index) => {
            return (
              <Grid item xs={12} md={4} key={index}>
                <Box width='100%' display='flex' justifyContent='center'>
                  <item.icon className={classes.icon} />
                </Box>

                <Typography
                  align='center'
                  variant='h5'
                  className={classes.text}
                >
                  {item.title}
                </Typography>
                <Typography align='center' className={classes.text}>
                  {item.info}
                </Typography>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Paper>
  )
}

export default HowIs

import {
  Paper,
  Grid,
  Typography,
  Container,
  Box,
  makeStyles,
} from '@material-ui/core'
import {
  Category,
  Check,
  People,
  Grade,
  IndeterminateCheckBoxSharp,
} from '@material-ui/icons'
import Button from '@material-ui/core/Button'

const options = [
  {
    icon: Category,
    title:
      'Tahribatsız Muayene, Endüstriyel Güvenlik ve Tren Teknoloji Sistemleri',
  },
  {
    icon: Category,
    title: 'Otomotiv, enerji, demir çelik ve döküm endüstrisi',
  },
  {
    icon: Grade,
    title: 'İhtiyacınız olan ürünleri kiralama imkanı',
  },
  {
    icon: People,
    title: 'Öncü firmalarla işbirliği',
  },
  {
    icon: Check,
    title: 'Müşteri Odaklı Yaklaşım',
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
    backgroundColor: '#e2e8f0',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
    marginRight: theme.spacing(2),
  },

  iphone: {
    objectFit: 'cover',
    height: 'auto',
    width: '100%',
    borderRadius: 10,
  },
}))

const SectionPhoto = () => {
  const classes = useStyles()
  return (
    <Paper square className={classes.paper}>
      <Container maxWidth='md'>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant='h3'>NETAN - Tahribatsız Muayene</Typography>
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
            <Button
              variant='outlined'
              color='primary'
              style={{ marginTop: '20px' }}
            >
              Detaylar için Tıklayınız
            </Button>
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

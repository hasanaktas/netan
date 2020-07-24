import {
  Paper,
  Typography,
  Grid,
  Container,
  makeStyles,
  Box,
} from '@material-ui/core'
import { GroupWork, WbSunny, Train } from '@material-ui/icons'

const options = [
  {
    icon: GroupWork,
    title: 'NDT',
    info:
      'Tecrübesi ve her gün yenilenen teknolojisiyle beraber kendini sürekli geliştiren firmamız sizlere kaliteli hizmet ayrıcalığını, en iyi teknolojiyi ve daha birçok günümüz teknolojisine paralel hizmetleri ile sunar.',
  },
  {
    icon: WbSunny,
    title: 'Enerji',
    info:
      'Sektörünün dünyada öncü firmalarını Türkiye’de ve Asya Ülkeleri’nde başarılı bir şekilde temsil ederek standartlara uygun cihaz, donanım ve mühendislik çözümlerini müşteri odaklı sunmaktadır.',
  },
  {
    icon: Train,
    title: 'Demiryolu',
    info:
      'Firmamız dünyanın önde gelen test ve analiz cihazlarını ihtiyaçlarınız doğrultusunda belirleyerek istenmesi durumunda kiralık olarak hizmetinize sunmaktadır. ',
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
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography
              style={{ marginBottom: '20px' }}
              align='center'
              variant='h3'
              className={classes.text}
            >
              NETAN NDT Tahribatsız Muayene
            </Typography>
            <Typography align='center' className={classes.text}>
              Tahribatsız Muayene, Endüstriyel Güvenlik ve Tren Teknoloji
              Sistemleri, otomotiv, enerji, demir çelik ve döküm endüstrisi gibi
              sektörlere; ürün, sistem ve çözüm hizmetleri sunmaktadır
            </Typography>
          </Grid>
          {options.map((item, index) => {
            return (
              <Grid item xs={12} md={4} key={index}>
                <Box width='100%' display='flex' justifyContent='center'>
                  <item.icon className={classes.icon} />
                </Box>

                <Typography
                  style={{ marginBottom: '20px' }}
                  align='center'
                  variant='h5'
                  width='100%'
                  className={classes.text}
                >
                  {item.title}
                </Typography>
                <Typography
                  width='100%'
                  align='center'
                  className={classes.text}
                >
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

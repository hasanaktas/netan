import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
let theme = createMuiTheme({
  typography: {
    fontFamily: 'Poppins, Arial',
  },
  palette: {
    primary: {
      main: '#833CE7',
    },
    secondary: {
      main: '#8BE5E5',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
})

theme = responsiveFontSizes(theme)

export default theme

import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Titillium Web, Arial',
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

export default theme

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import background from '../assets/breaking-bad-logo.jpg'
import CharacterCard from './Card'
import Pagination from '@material-ui/lab/Pagination'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Michelle Kiss
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#c0ca33',
    },
  },
})

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    background: `url(${background})`,
    height: theme.spacing(48),
    marginTop: theme.spacing(8),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    width: '100%',
  },
  paginationButtons: {
    display: 'flex',
    width: '910px',
    justifyContent: 'space-between',
    marginTop: '-30px',
    marginBottom: '50px',
  },
  ul: {
    '& .MuiPaginationItem-root': {
      color: theme.palette.background.paper,
      // backgroundColor: '#282c34',
      marginTop: '-20px',
    },
  },
}))

const Home = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [dataPerPage] = useState(6)

  const handleChange = (event, value) => {
    setCurrentPage(value)
  }

  const classes = useStyles()

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const result = await axios.get(
        'https://www.breakingbadapi.com/api/characters'
      )
      setData(result.data)
      setLoading(false)
    }
    fetchData()
  }, [])

  const indexOfLastData = currentPage * dataPerPage
  const indexOfFirstData = indexOfLastData - dataPerPage
  const currentData = data.slice(indexOfFirstData, indexOfLastData)
  const totalPages = Math.ceil(data.length / dataPerPage)

  console.log(data)

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            ></Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            ></Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center"></Grid>
            </div>
          </Container>
        </div>
        <CharacterCard data={currentData} loading={loading} />
      </main>
      {/* Footer */}
      <MuiThemeProvider theme={theme}>
        <Pagination
          color="secondary"
          classes={{ ul: classes.ul }}
          count={totalPages}
          size="large"
          page={currentPage}
          onChange={handleChange}
        />
      </MuiThemeProvider>
      <div className={classes.paginationButtons}></div>
      <footer className={classes.footer}>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  )
}

export default Home

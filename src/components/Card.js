import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
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
    height: '350px',
    width: '100%',
    paddingTop: '56.25%', // 16:9
    objectFit: 'cover',
  },
  cardContent: {
    flexGrow: 1,
  },
  cardBottom: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: '10px',
    paddingRight: '15px',
    paddingLeft: '15px',
    opacity: '80%',
    color: 'black',
  },
}))

const deadOrAlive = {}

const cards = [1]

const CharacterCard = (props) => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const characters = Object.keys(props.data).map(function (key) {
    return [Number(key), props.data[key]]
  })

  console.log(characters[0][1])
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {/* End hero unit */}
      {cards.map((card) => (
        <Grid container spacing={4}>
          {characters.map((character) => (
            <Grid item key={character[0]} xs={12} sm={6} md={4}>
              {console.log(character[1].char_id)}
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={character[1].img}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {character[1].name}
                  </Typography>
                  <Typography>{character[1].portrayed}</Typography>
                </CardContent>
                {/* <CardActions> */}
                <div className={classes.cardBottom}>
                  <Typography>"{character[1].nickname}"</Typography>
                  <Typography color="secondary">
                    {character[1].status}
                  </Typography>
                </div>
                {/* <Button size="small" color="primary">
                    {character[1].nickname}
                  </Button>
                  <Button size="small" color="primary">
                    {character[1].status}
                  </Button> */}
                {/* </CardActions> */}
              </Card>
            </Grid>
          ))}
        </Grid>
      ))}
    </Container>
  )
}

export default CharacterCard

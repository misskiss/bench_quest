import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
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
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    paddingRight: 'inherit',
    paddingLeft: 'inherit',
  },
  card: {
    height: '100%',
    width: '280px',
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

const cards = [1]

const CharacterCard = ({ data, loading }) => {
  const classes = useStyles()

  const deadOrAlive = (char) => {
    if (char.status === 'Alive') {
      return 'green'
    } else if (char.status === 'Deceased') {
      return 'red'
    }
    return 'black'
  }

  if (loading) {
    return <Typography>Loading...</Typography>
  }

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {/* End hero unit */}
      {cards.map((card) => (
        <Grid container spacing={4}>
          {data.map((character) => (
            <Grid item key={character} xs={12} sm={6} md={4}>
              {console.log(character.char_id)}
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={character.img}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {character.name}
                  </Typography>
                  <Typography>{character.portrayed}</Typography>
                </CardContent>
                <div className={classes.cardBottom}>
                  <Typography>"{character.nickname}"</Typography>
                  <Typography
                    style={{
                      color: deadOrAlive(character),
                      fontWeight: 'bold',
                      opacity: '75%',
                    }}
                  >
                    {character.status}
                  </Typography>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      ))}
    </Container>
  )
}

export default CharacterCard

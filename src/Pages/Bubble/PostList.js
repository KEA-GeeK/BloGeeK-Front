import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function PostList() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline>
        <Container sx={{ mt: 3 }} maxWidth="md">
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '24px' }}>


            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              defaultValue={0}
              onChange={handleChange}
              sx={{
                width: 120,
                height: 40,
                backgroundColor: '#D4AB39',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#D4AB39',
                },
              }}
            >
              <MenuItem value={0}>기본</MenuItem>
              <MenuItem value={1}>인기순</MenuItem>
              <MenuItem value={2}>최신순</MenuItem>
            </Select>
          </div>
          <main>
            {/* Hero unit */}
            <Container sx={{ py: 4 }} maxWidth="md">
              {/* End hero unit */}
              <Grid container spacing={4}>
                {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card
                      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                      <CardMedia
                        component="div"
                        sx={{
                          // 16:9
                          pt: '56.25%',
                        }}
                        image="https://source.unsplash.com/random?wallpapers"
                      />
                      <CardContent sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                          <Typography gutterBottom variant="h5" component="h2">
                            제목 {card} {/* 각 카드에 다른 제목을 표시 */}
                          </Typography>
                          <Typography>
                            User ID {card}
                          </Typography>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                          <FavoriteBorderIcon sx={{ marginRight: 1 }} />
                          <Typography>
                            123
                          </Typography>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </main>
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}

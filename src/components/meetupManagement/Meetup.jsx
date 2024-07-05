import React from 'react';
import { Card, Grid, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(7),
  height: theme.spacing(7),
  margin: '0 auto',
}));

const meetups = [
  {
    id: 1,
    name: 'Lee from Tennessee',
    location: 'Baskins',
    time: '100:pm until 400:pm',
    image: '/path/to/image.png',
  },
  // Add more dummy data here
  {
    id: 2,
    name: 'Jane from New York',
    location: 'Central Park',
    time: '200:pm until 500:pm',
    image: '/path/to/image.png',
  },
  {
    id: 3,
    name: 'John from California',
    location: 'Santa Monica',
    time: '300:pm until 600:pm',
    image: '/path/to/image.png',
  },
  {
    id: 4,
    name: 'Sara from Texas',
    location: 'Houston',
    time: '400:pm until 700:pm',
    image: '/path/to/image.png',
  },
  {
    id: 5,
    name: 'Mike from Florida',
    location: 'Miami',
    time: '500:pm until 800:pm',
    image: '/path/to/image.png',
  },
  {
    id: 6,
    name: 'Anna from Nevada',
    location: 'Las Vegas',
    time: '600:pm until 900:pm',
    image: '/path/to/image.png',
  },
];

const MeetupGrid = () => {
  return (
    <Root>
      <Typography variant="h4" gutterBottom>
        Available Meetups
      </Typography>
      <Grid container spacing={3}>
        {meetups.map((meetup) => (
          <Grid item xs={12} sm={6} md={4} key={meetup.id}>
            <StyledCard>
              <StyledAvatar alt={meetup.name} src={meetup.image} />
              <Typography variant="h6">{meetup.name}</Typography>
              <Typography variant="body2">{meetup.location}</Typography>
              <Typography variant="body2">{meetup.time}</Typography>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Root>
  );
};

export default MeetupGrid;

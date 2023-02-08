import React from 'react'
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';

interface Props {
  isConnected: boolean;
  members: string[];
  chatRows: React.ReactNode[];
  onPublicMessage: () => void;
  onPrivateMessage: (to: string) => void;
  onConnect: () => void;
  onDisconnect: () => void;
}

export const ChatClient = (props: Props) => {
  return (
    <div style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
    }}>
      <CssBaseline />
      <Container maxWidth="lg" style={{ height: '90%' }}>
        <Grid container style={{ height: '100%' }}>
          <Grid item xs={2} style={{ backgroundColor: 'cadetblue', color: 'white' }}>
            <List component="nav">
              {props.members.map(item =>
                <ListItem key={item} onClick={() => { props.onPrivateMessage(item); }} button>
                  <ListItemText style={{ fontWeight: 800 }} primary={item} />
                </ListItem>
              )}
            </List>
          </Grid>
          <Grid style={{ position: 'relative' }} item container direction="column" xs={10} >
            <Paper style={{ flex: 1 }}>
              <Grid item container style={{ height: '100%' }} direction="column">
                <Grid item container style={{ flex: 1 }}>
                  <ul style={{
                    paddingTop: 20,
                    paddingLeft: 44,
                    listStyleType: 'none',
                  }}>
                    {props.chatRows.map((item, i) =>
                      <li key={i} style={{ paddingBottom: 9 }}>{item}</li>
                    )}
                  </ul>
                </Grid>
                <Grid item style={{ margin: 10 }}>
                  {props.isConnected && <Button style={{ marginRight: 7 }} variant="outlined" size="small" disableElevation onClick={props.onPublicMessage}>Send Public Message</Button>}
                  {props.isConnected && <Button variant="outlined" size="small" disableElevation onClick={props.onDisconnect}>Disconnect</Button>}
                  {!props.isConnected && <Button variant="outlined" size="small" disableElevation onClick={props.onConnect}>Connect</Button>}
                </Grid>
              </Grid>
              <div style={{
                position: 'absolute',
                right: 9,
                top: 8,
                width: 12,
                height: 12,
                backgroundColor: props.isConnected ? '#00da00' : '#e2e2e2',
                borderRadius: 50,
              }} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div >
  )
};
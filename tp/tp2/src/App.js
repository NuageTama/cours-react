import './App.css';
import 'fontsource-roboto';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from '@material-ui/core';

//Composants
import Title from './Title';

//Ressources
import noel from './pere_noel.png';

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function App() {
  //Modèle
  let list = ["Un Dassault Rafale","Une AMD RX6900","Mohammed bin Salman bin Abdulaziz Al Saud"];

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Title />
          <img src={noel}/>
          <List component="nav" aria-label="secondary mailbox folders">
          {
            list.map((value, index) => {
              return (
              <ListItem>
                <ListItemText primary={value}/>
              </ListItem>
              )
            })
          }
          </List>
        </header>
      </div>
    </>
  );
}

export default App;

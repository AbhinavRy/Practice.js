import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import productsdata from '../productsdata';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import  {useHistory } from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SearchBar() {
  const classes = useStyles();
  let history = useHistory();
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const handleKeyPress = (event) => {
      if(event.key === 'Enter'){
        history.push('/product')
      }
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
    <div className="App" style={{backgroundColor:"#5eaaa8"}}>
      <header className="App-header">
      <AppBar position="static" color="transparent">
        <Tabs value={value} variant="fullWidth" onChange={handleChange} aria-label="product or store option">
          <Tab label="Product" {...a11yProps(0)} />
          <Tab label="Store" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div onKeyPress={handleKeyPress}>
          <ReactSearchAutocomplete
            items={productsdata}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div onKeyPress={handleKeyPress}>
          <ReactSearchAutocomplete
            items={productsdata}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
          />
        </div>
      </TabPanel>
      </header>
    </div>
  );
};

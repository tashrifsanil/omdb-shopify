import React, { useState, useEffect } from 'react';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';

import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Typography,
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

import { ReactComponent as DarkModeIcon } from "../../resources/icons/dark_mode.svg";
import { ReactComponent as LightModeIcon } from "../../resources/icons/light_mode.svg";
import ShopifySmallIcon from "../../resources/icons/shopify_small.svg";


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  homeButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontFamily: "Roboto",
    fontStyle: "italic",
    fontWeight: 700,
    flexGrow: 1,
    fontSize: "1.75rem",
  },
  search: {
    flexGrow: 2,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100ch',
      '&:focus': {
        width: '150ch',
      },
    },
  },
  sectionDesktop: {
    display: 'flex',
  },
  darkModeIcon: {
    fill: theme.palette.primary,
  },
}));

const SearchAppBar = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false);
  const [searchText, setSearchText] = useState("");

  const inputRef = React.createRef();

  useEffect(() => {
    if (!props.landing) {
      inputRef.current.focus();
    }
  }, [props.landing]); // Only run the function if disabled changes

  const handleDarkModeToggle = () => {
    setDarkMode((currentTheme) => {
    localStorage.setItem("omdb-app-dark-mode", !currentTheme);
      props.onDarkModeToggle(!currentTheme);
      return (!currentTheme);
    });
  };

  const handleChange = (event) => {
    setSearchText(event.target.value);
    props.setSearchTerm(event.target.value);
  }

  const handleHomeClick = (event) => {
    setSearchText("");
    props.onHomeClick()
  }


  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.homeButton}
            color="inherit"
            aria-label="Go to homepage"
            onClick={handleHomeClick}
          >
            <img src={ShopifySmallIcon} />
          </IconButton>
          <Typography className={classes.title} noWrap>
            the shoppies
          </Typography>
          <div className={classes.search}>
            {props.landing ? <div className={classes.grow} /> : (
              <>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>

                <InputBase
                  placeholder="Search to nominate your top 5 favorite movies & series..."
                  onChange={handleChange}
                  inputRef={inputRef}
                  value={props.searchTerm}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </>
            )}
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="Toggle Dark Mode" color="inherit"
              onClick={() => { handleDarkModeToggle(); }}>
              {darkMode ? (
                // <LightModeIcon fill={theme.palette.primary.light} />
                <LightModeIcon fill={theme.palette.primary.light} />
              ) : (
                // <DarkModeIcon fill={theme.palette.primary.dark} />
                <DarkModeIcon fill={theme.palette.primary.dark} />
              )}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default SearchAppBar;
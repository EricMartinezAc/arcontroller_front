import React, { Component } from 'react'
import { Box, Grid, Icon, IconButton, ListItem, ListItemIcon, styled, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import PrintIcon from '@mui/icons-material/Print';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { alpha } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { SearchSharp } from '@mui/icons-material';

import ModalFormAddLocalidades from './Modal_form_add_localidades';
import ModalFormEditLocalidades from './Modal_form_editar_localidades';
import ModalFormPrintLocalidades from './Modal_form_imprimir_localidades';
import ModalFormDropLocalidades from './Modal_form_borrar_localidades';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Search = styled('button')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha('#GGG', 0.50),
    '&:hover': {
        backgroundColor: alpha('#111', 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '97%'
    },
    border: 'none'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleSearch: false,
            openModalAdd: false,
            openModalEdit: false,
            openModalDrop: false,
            openModalPrint: false,
            dataModal: null
        }
        this.ws= this.props.ws
    }

    visibleModalAdd = () => {
        this.setState({ openModalAdd: !this.state.openModalAdd })
    }
    visibleModalEdit = () => {
        this.setState({ openModalEdit: !this.state.openModalEdit })
    }
    visibleModalDrop = () => {
        this.setState({ openModalDrop: !this.state.openModalDrop })
    }
    visibleModalPrint = () => {
        this.setState({ openModalPrint: !this.state.openModalPrint })
    }
    
    visibleSearchLocalidades = () => this.setState({visibleSearch: !this.state.visibleSearch})

    handleOpenMenusLocalidades = (e) => {
        this.dataModal = e.target.id
        console.log(e.target.id);
        this.setState({ openModal: true})
    }

    render() {
        return (
            <nav className="menu-main">
                <Box sx={{ flexGrow: 1 }}>
                    <Item>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <IconButton>
                                    <Typography component="h5" variant="h6" >
                                        Localidades
                                    </Typography>
                                </IconButton>
                            </Grid>
                            <Grid item xs={4}>
                                <IconButton onClick={this.visibleSearchLocalidades}>
                                    <SearchSharp />
                                </IconButton>
                                <IconButton onClick={this.visibleModalAdd} size='medium' >
                                    <AddIcon fontSize='100%' style={{zIndex: 10}} id='add_localidad' onClick={this.handleOpenMenusLocalidades} />
                                </IconButton>
                                <IconButton onClick={this.visibleModalEdit} size='medium' >
                                    <EditIcon fontSize='100%' style={{zIndex: 10}} id='edit_localidad' onClick={this.handleOpenMenusLocalidades} />
                                </IconButton>
                                <IconButton onClick={this.visibleModalPrint} size='medium' >
                                    <PrintIcon fontSize='100%' style={{zIndex: 10}} id='print_localidades' onClick={this.handleOpenMenusLocalidades} />
                                </IconButton>
                                <IconButton onClick={this.visibleModalDrop} size='medium' >
                                    <DeleteForeverIcon fontSize='100%' style={{zIndex: 10}} id='del_localidades' onClick={this.handleOpenMenusLocalidades} />
                                </IconButton>
                            </Grid>
                        </Grid >
                    </Item>
                </Box >
                <br />
                <Box style={{ display: this.state.visibleSearch === false ? 'none' : 'block' }} sx={{ flexGrow: 1 }}>
                    <Item>
                        <Grid container spacing={2}>
                            <Grid item xs={7}>
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search…"
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>
                            </Grid>
                            <Grid item xs={1}>
                                <IconButton button >
                                    < ChevronRightIcon />
                                </IconButton>
                            </Grid>
                            <Grid item xs={4}>
                                <Item >
                                    <Typography variant='h7'>
                                        Result
                                    </Typography>
                                </Item>
                            </Grid>
                        </Grid>
                    </Item>
                </Box>
                <ModalFormAddLocalidades
                    open={this.state.openModalAdd}
                    visibleModalAdd={this.visibleModalAdd}                  
                />
                <ModalFormEditLocalidades
                    open={this.state.openModalEdit}
                    visibleModalEdit={this.visibleModalEdit}                  
                />
                <ModalFormDropLocalidades
                    open={this.state.openModalDrop}
                    visibleModalDrop={this.visibleModalDrop}                  
                />
                <ModalFormPrintLocalidades
                    open={this.state.openModalPrint}
                    visibleModalPrint={this.visibleModalPrint}                  
                />
            </nav >
        )
    }
}

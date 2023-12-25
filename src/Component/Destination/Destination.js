import React, { useState } from 'react';
import axios from 'axios';
import './Destination.css' ;
import Logop from '../../images/logop.png';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function CustomTabPanel(props) {
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
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }



const Destination = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <div style={{overflowX : 'hidden'}}>
            <div id='headerD'>
                <div class=''>
                <nav class="navbar navbar-expand-lg bg-body-transparent">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><img src={Logop} width={50}/></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul class="nav mx-5" id='nav'>
                                <li class="nav-item mx-5">
                                    <a class="nav-link" aria-current="page" href="/Home">Home</a>
                                </li>
                                <li class="nav-item mx-5">
                                    <a class="nav-link" href="/Profile" >Profil</a>
                                </li>
                                <li class="nav-item mx-5">
                                    <a class="nav-link text-light" href="/Destination" id='profil'>Destination</a>
                                </li>
                                <li class="nav-item mx-5">
                                    <a class="nav-link" href='/Tips'>Tips</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </nav>
                    
                </div>
                
            </div>
            <div class='container-fluid'>
                <div class='row my-5'>
                    <div class='col'>
                        <h1 class='mx-5' id='where'>
                            <span>Where do</span> you want to<br></br> go?
                        </h1>
                    </div>
                    <div class='col'>
                        <p class='mx-5' id='des'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed mor mattis nec etiam ac. Bibendum tellus mi imperdiet amet 
                            maecenas magna tortor nulla. Nec tortor ut cursus ornare nibh vivamus.
                             Quam elementum at velit viverra mattis.
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed mor mattis nec etiam ac. Bibendum tellus mi imperdiet amet 
                            maecenas magna tortor nulla. Nec tortor ut cursus ornare nibh vivamus.
                             Quam elementum at velit viverra mattis.
                        </p>      
                    </div>
                </div>
            </div>

            <Box sx={{ width: '100%' }}>
                <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        variant="fullWidth"
                    >
                        <Tab label="South America" {...a11yProps(0)} sx={{
                            '&:hover': {
                                backgroundColor: '#0336FF', 
                                color : '#FFFF',
                                
                            },
                            fontSize : '20px',}} 
                        />
                        <Tab label="North America" {...a11yProps(1)} sx={{
                            '&:hover': {
                                backgroundColor: '#0336FF', 
                                color : '#FFFF',
                                
                            },
                            fontSize : '20px',}} 
                        />
                        <Tab label="Europe" {...a11yProps(2)} sx={{
                            '&:hover': {
                                backgroundColor: '#0336FF', 
                                color : '#FFFF',
                                
                            },
                            fontSize : '20px',}} 
                        />
                        <Tab label="Africa" {...a11yProps(3)}
                        sx={{
                            '&:hover': {
                                backgroundColor: '#0336FF', 
                                color : '#FFFF',
                                
                            },
                            fontSize : '20px',}}  
                        />
                        <Tab label="Asia" {...a11yProps(4)} sx={{
                            '&:hover': {
                                backgroundColor: '#0336FF', 
                                color : '#FFFF',
                                
                            },
                            fontSize : '20px',}} 
                         /> 
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                <div class='d-flex flex-wrap justify-content-center'>
                                <div class="card my-3 shadow-lg" id='minicard' style={{width: '26rem'}}>
                                    <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <div class='d-flex my-1'>
                                            <div id='bar'></div>
                                            <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                        </div>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div class='row'>
                                            <div class='col  d-flex' >                 
                                                <LocationOnIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2 '>Penang, Malaysia </p>

                                            </div>
                                            <div class='col-4  d-flex'>
                                                <ChatBubbleIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2'>Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card my-3 mx-2 shadow-lg" id='minicard' style={{width: '26rem'}}>
                                    <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <div class='d-flex my-1'>
                                            <div id='bar'></div>
                                            <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                        </div>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div class='row'>
                                            <div class='col  d-flex' >                 
                                                <LocationOnIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2 '>Penang, Malaysia </p>

                                            </div>
                                            <div class='col-4  d-flex'>
                                                <ChatBubbleIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2'>Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card my-3 mx-2 shadow-lg" id='minicard' style={{width: '26rem'}}>
                                    <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <div class='d-flex my-1'>
                                            <div id='bar'></div>
                                            <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                        </div>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div class='row'>
                                            <div class='col  d-flex' >                 
                                                <LocationOnIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2 '>Penang, Malaysia </p>

                                            </div>
                                            <div class='col-4  d-flex'>
                                                <ChatBubbleIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2'>Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card my-3 mx-2 shadow-lg" id='minicard' style={{width: '26rem'}}>
                                    <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <div class='d-flex my-1'>
                                            <div id='bar'></div>
                                            <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                        </div>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div class='row'>
                                            <div class='col  d-flex' >                 
                                                <LocationOnIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2 '>Penang, Malaysia </p>

                                            </div>
                                            <div class='col-4  d-flex'>
                                                <ChatBubbleIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2'>Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card my-3 mx-2 shadow-lg" id='minicard' style={{width: '26rem'}}>
                                    <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <div class='d-flex my-1'>
                                            <div id='bar'></div>
                                            <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                        </div>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div class='row'>
                                            <div class='col  d-flex' >                 
                                                <LocationOnIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2 '>Penang, Malaysia </p>

                                            </div>
                                            <div class='col-4  d-flex'>
                                                <ChatBubbleIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2'>Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card my-3 mx-2 shadow-lg" id='minicard' style={{width: '26rem'}}>
                                    <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <div class='d-flex my-1'>
                                            <div id='bar'></div>
                                            <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                        </div>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div class='row'>
                                            <div class='col  d-flex' >                 
                                                <LocationOnIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2 '>Penang, Malaysia </p>

                                            </div>
                                            <div class='col-4  d-flex'>
                                                <ChatBubbleIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2'>Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                <div class='d-flex flex-wrap justify-content-center'>
                                <div class="card my-3 shadow-lg" id='minicard' style={{width: '26rem'}}>
                                    <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <div class='d-flex my-1'>
                                            <div id='bar'></div>
                                            <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                        </div>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div class='row'>
                                            <div class='col  d-flex' >                 
                                                <LocationOnIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2 '>Penang, Malaysia </p>

                                            </div>
                                            <div class='col-4  d-flex'>
                                                <ChatBubbleIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2'>Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card my-3 mx-2 shadow-lg" id='minicard' style={{width: '26rem'}}>
                                    <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <div class='d-flex my-1'>
                                            <div id='bar'></div>
                                            <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                        </div>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div class='row'>
                                            <div class='col  d-flex' >                 
                                                <LocationOnIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2 '>Penang, Malaysia </p>

                                            </div>
                                            <div class='col-4  d-flex'>
                                                <ChatBubbleIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2'>Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card my-3 mx-2 shadow-lg" id='minicard' style={{width: '26rem'}}>
                                    <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <div class='d-flex my-1'>
                                            <div id='bar'></div>
                                            <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                        </div>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div class='row'>
                                            <div class='col  d-flex' >                 
                                                <LocationOnIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2 '>Penang, Malaysia </p>

                                            </div>
                                            <div class='col-4  d-flex'>
                                                <ChatBubbleIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2'>Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card my-3 mx-2 shadow-lg" id='minicard' style={{width: '26rem'}}>
                                    <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <div class='d-flex my-1'>
                                            <div id='bar'></div>
                                            <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                        </div>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div class='row'>
                                            <div class='col  d-flex' >                 
                                                <LocationOnIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2 '>Penang, Malaysia </p>

                                            </div>
                                            <div class='col-4  d-flex'>
                                                <ChatBubbleIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2'>Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card my-3 mx-2 shadow-lg" id='minicard' style={{width: '26rem'}}>
                                    <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <div class='d-flex my-1'>
                                            <div id='bar'></div>
                                            <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                        </div>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div class='row'>
                                            <div class='col  d-flex' >                 
                                                <LocationOnIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2 '>Penang, Malaysia </p>

                                            </div>
                                            <div class='col-4  d-flex'>
                                                <ChatBubbleIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2'>Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card my-3 mx-2 shadow-lg" id='minicard' style={{width: '26rem'}}>
                                    <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <div class='d-flex my-1'>
                                            <div id='bar'></div>
                                            <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                        </div>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div class='row'>
                                            <div class='col  d-flex' >                 
                                                <LocationOnIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2 '>Penang, Malaysia </p>

                                            </div>
                                            <div class='col-4  d-flex'>
                                                <ChatBubbleIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2'>Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                <div class='d-flex flex-wrap justify-content-center'>
                                <div class="card my-3 shadow-lg" id='minicard' style={{width: '26rem'}}>
                                    <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <div class='d-flex my-1'>
                                            <div id='bar'></div>
                                            <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                        </div>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div class='row'>
                                            <div class='col  d-flex' >                 
                                                <LocationOnIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2 '>Penang, Malaysia </p>

                                            </div>
                                            <div class='col-4  d-flex'>
                                                <ChatBubbleIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2'>Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card my-3 mx-2 shadow-lg" id='minicard' style={{width: '26rem'}}>
                                    <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <div class='d-flex my-1'>
                                            <div id='bar'></div>
                                            <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                        </div>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div class='row'>
                                            <div class='col  d-flex' >                 
                                                <LocationOnIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2 '>Penang, Malaysia </p>

                                            </div>
                                            <div class='col-4  d-flex'>
                                                <ChatBubbleIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2'>Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card my-3 mx-2 shadow-lg" id='minicard' style={{width: '26rem'}}>
                                    <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <div class='d-flex my-1'>
                                            <div id='bar'></div>
                                            <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                        </div>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div class='row'>
                                            <div class='col  d-flex' >                 
                                                <LocationOnIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2 '>Penang, Malaysia </p>

                                            </div>
                                            <div class='col-4  d-flex'>
                                                <ChatBubbleIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2'>Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card my-3 mx-2 shadow-lg" id='minicard' style={{width: '26rem'}}>
                                    <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <div class='d-flex my-1'>
                                            <div id='bar'></div>
                                            <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                        </div>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div class='row'>
                                            <div class='col  d-flex' >                 
                                                <LocationOnIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2 '>Penang, Malaysia </p>

                                            </div>
                                            <div class='col-4  d-flex'>
                                                <ChatBubbleIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2'>Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card my-3 mx-2 shadow-lg" id='minicard' style={{width: '26rem'}}>
                                    <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <div class='d-flex my-1'>
                                            <div id='bar'></div>
                                            <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                        </div>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div class='row'>
                                            <div class='col  d-flex' >                 
                                                <LocationOnIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2 '>Penang, Malaysia </p>

                                            </div>
                                            <div class='col-4  d-flex'>
                                                <ChatBubbleIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2'>Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card my-3 mx-2 shadow-lg" id='minicard' style={{width: '26rem'}}>
                                    <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <div class='d-flex my-1'>
                                            <div id='bar'></div>
                                            <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                        </div>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div class='row'>
                                            <div class='col  d-flex' >                 
                                                <LocationOnIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2 '>Penang, Malaysia </p>

                                            </div>
                                            <div class='col-4  d-flex'>
                                                <ChatBubbleIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2'>Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                <div class='d-flex flex-wrap justify-content-center'>
                                <div class="card my-3 shadow-lg" id='minicard' style={{width: '26rem'}}>
                                    <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <div class='d-flex my-1'>
                                            <div id='bar'></div>
                                            <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                        </div>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div class='row'>
                                            <div class='col  d-flex' >                 
                                                <LocationOnIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2 '>Penang, Malaysia </p>

                                            </div>
                                            <div class='col-4  d-flex'>
                                                <ChatBubbleIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2'>Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card my-3 mx-2 shadow-lg" id='minicard' style={{width: '26rem'}}>
                                    <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <div class='d-flex my-1'>
                                            <div id='bar'></div>
                                            <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                        </div>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div class='row'>
                                            <div class='col  d-flex' >                 
                                                <LocationOnIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2 '>Penang, Malaysia </p>

                                            </div>
                                            <div class='col-4  d-flex'>
                                                <ChatBubbleIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2'>Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card my-3 mx-2 shadow-lg" id='minicard' style={{width: '26rem'}}>
                                    <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <div class='d-flex my-1'>
                                            <div id='bar'></div>
                                            <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                        </div>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div class='row'>
                                            <div class='col  d-flex' >                 
                                                <LocationOnIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2 '>Penang, Malaysia </p>

                                            </div>
                                            <div class='col-4  d-flex'>
                                                <ChatBubbleIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2'>Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card my-3 mx-2 shadow-lg" id='minicard' style={{width: '26rem'}}>
                                    <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <div class='d-flex my-1'>
                                            <div id='bar'></div>
                                            <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                        </div>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div class='row'>
                                            <div class='col  d-flex' >                 
                                                <LocationOnIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2 '>Penang, Malaysia </p>

                                            </div>
                                            <div class='col-4  d-flex'>
                                                <ChatBubbleIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2'>Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card my-3 mx-2 shadow-lg" id='minicard' style={{width: '26rem'}}>
                                    <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <div class='d-flex my-1'>
                                            <div id='bar'></div>
                                            <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                        </div>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div class='row'>
                                            <div class='col  d-flex' >                 
                                                <LocationOnIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2 '>Penang, Malaysia </p>

                                            </div>
                                            <div class='col-4  d-flex'>
                                                <ChatBubbleIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2'>Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card my-3 mx-2 shadow-lg" id='minicard' style={{width: '26rem'}}>
                                    <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <div class='d-flex my-1'>
                                            <div id='bar'></div>
                                            <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                        </div>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div class='row'>
                                            <div class='col  d-flex' >                 
                                                <LocationOnIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2 '>Penang, Malaysia </p>

                                            </div>
                                            <div class='col-4  d-flex'>
                                                <ChatBubbleIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2'>Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={4}>
                <div class='d-flex flex-wrap justify-content-center'>
                                <div class="card my-3 shadow-lg" id='minicard' style={{width: '26rem'}}>
                                    <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <div class='d-flex my-1'>
                                            <div id='bar'></div>
                                            <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                        </div>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div class='row'>
                                            <div class='col  d-flex' >                 
                                                <LocationOnIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2 '>Penang, Malaysia </p>

                                            </div>
                                            <div class='col-4  d-flex'>
                                                <ChatBubbleIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2'>Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card my-3 mx-2 shadow-lg" id='minicard' style={{width: '26rem'}}>
                                    <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <div class='d-flex my-1'>
                                            <div id='bar'></div>
                                            <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                        </div>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div class='row'>
                                            <div class='col  d-flex' >                 
                                                <LocationOnIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2 '>Penang, Malaysia </p>

                                            </div>
                                            <div class='col-4  d-flex'>
                                                <ChatBubbleIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2'>Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card my-3 mx-2 shadow-lg" id='minicard' style={{width: '26rem'}}>
                                    <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <div class='d-flex my-1'>
                                            <div id='bar'></div>
                                            <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                        </div>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div class='row'>
                                            <div class='col  d-flex' >                 
                                                <LocationOnIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2 '>Penang, Malaysia </p>

                                            </div>
                                            <div class='col-4  d-flex'>
                                                <ChatBubbleIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2'>Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card my-3 mx-2 shadow-lg" id='minicard' style={{width: '26rem'}}>
                                    <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <div class='d-flex my-1'>
                                            <div id='bar'></div>
                                            <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                        </div>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div class='row'>
                                            <div class='col  d-flex' >                 
                                                <LocationOnIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2 '>Penang, Malaysia </p>

                                            </div>
                                            <div class='col-4  d-flex'>
                                                <ChatBubbleIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2'>Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card my-3 mx-2 shadow-lg" id='minicard' style={{width: '26rem'}}>
                                    <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <div class='d-flex my-1'>
                                            <div id='bar'></div>
                                            <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                        </div>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div class='row'>
                                            <div class='col  d-flex' >                 
                                                <LocationOnIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2 '>Penang, Malaysia </p>

                                            </div>
                                            <div class='col-4  d-flex'>
                                                <ChatBubbleIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2'>Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card my-3 mx-2 shadow-lg" id='minicard' style={{width: '26rem'}}>
                                    <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <div class='d-flex my-1'>
                                            <div id='bar'></div>
                                            <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                        </div>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div class='row'>
                                            <div class='col  d-flex' >                 
                                                <LocationOnIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2 '>Penang, Malaysia </p>

                                            </div>
                                            <div class='col-4  d-flex'>
                                                <ChatBubbleIcon sx={{ color: '#FFA500' }}/>
                                                <p class='mx-2'>Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                </div>
                </CustomTabPanel>
            </Box>

            
                
            <footer>
                <div class='row'>
                    <div class='col'>
                        <img src={Logop} width={300}/>
                    </div>
                    <div class='col'>

                    </div>
                </div>        
            </footer>

        </div>
    );

};
export default Destination;
import React, { useState } from 'react';
import axios from 'axios';
import './Tips.css' ;
import Logop from '../../images/logop.png';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Tips = () => {
    return(
        <div style={{overflowX : 'hidden'}}>
            <div id='headerT'>
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
                                        <a class="nav-link" href="/Destination" >Destination</a>
                                    </li>
                                    <li class="nav-item mx-5">
                                        <a class="nav-link  text-light" href='/Tips' id='profil'>Tips</a>
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
                            Maintaining your<br></br>
                            <span>privacy</span> during<br></br>
                            travels.
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
                <div class='d-flex flex-wrap justify-content-center'>
                                <div class="card mx-2 my-3 shadow-lg" id='minicard' style={{width: '26rem'}}>
                                    <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <div class='d-flex my-1'>
                                            <div id='bar'></div>
                                            <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                        </div>
                                        <p class="card-text fs-4 ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                                        <p class="card-text fs-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                                        <p class="card-text fs-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                                        <p class="card-text fs-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                                        <p class="card-text fs-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                                        <p class="card-text fs-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
            </div>
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
    
}
export default Tips;
import React, { useState , useEffect } from "react";
import axios from "axios";
import "./Home.css";
import Logop from "../../images/logop.png";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Plane from "../../images/Plane.svg";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';



const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


const Home = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
      setOpenModal(true);
    };

    const handleCloseModal = () => {
      setOpenModal(false);
    };


    useEffect(() => {
      const storedUser = sessionStorage.getItem('user');

      if (storedUser) {
        // Parse the stored user string back to an object
        const parsedUser = JSON.parse(storedUser);
        
        // Extract email if available
        const { email: storedEmail } = parsedUser;
        if (storedEmail) {
          setEmail(storedEmail);
        }
      }
      getUserByEmail();

    }, []); 


    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    const getUserByEmail = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/user/by-email?email=${email}`);
        setUser(response.data); 
      } catch (error) {
        console.error('Error fetching user:', error);
        return null;
      }
    };



  return (
    <div style={{ overflowX: "hidden" }}>
      <div id="headerH">
        <div class="">
          <nav class="navbar navbar-expand-lg bg-body-transparent">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img src={Logop} width={50} />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse justify-content-end"
                id="navbarNav"
              >
                <ul class="nav mx-3" id="nav">
                  <li class="nav-item mx-5">
                    <a
                      class="nav-link  text-light"
                      aria-current="page"
                      href="/Home"
                      id="profil"
                    >
                      Home
                    </a>
                  </li>
                  <li class="nav-item mx-5">
                    <a class="nav-link" href="/Profile">
                      Profil
                    </a>
                  </li>
                  <li class="nav-item mx-5">
                    <a class="nav-link" href="/Destination">
                      Destination
                    </a>
                  </li>
                  <li class="nav-item mx-5">
                    <a class="nav-link" href="/Tips">
                      Tips
                    </a>
                  </li>
                  <li class="nav-item ">
                    <Box sx={{ flexGrow: 0 }}>
                      <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                          <Avatar alt="Remy Sharp" src={user.photo} />
                        </IconButton>
                      </Tooltip>
                      <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                      >
                          <MenuItem onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">{user.username}</Typography>
                          </MenuItem>
                          <MenuItem onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">Déconnexion</Typography>
                          </MenuItem>
                      </Menu>
                    </Box>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row my-4">
          <div class="col-1"></div>
          <div class="col-4">
            <button className="d-flex my-3 shadow-lg" id="posté" onClick={handleOpenModal}>
              <p class="my-2">Share Your Experience</p>
              <img class="img-fluid" src={Plane} width={50} />
            </button>
            <div
              class="card shadow-lg"
              style={{ width: "28rem", marginTop: "6rem" }}
            >
              <ul class="list-group list-group-flush">
                <li class="list-group-item text-center">Catégorie</li>
                <li class="list-group-item">
                  Europe<span class="float-end">(11)</span>
                </li>
                <li class="list-group-item">
                  Africa<span class="float-end">(23)</span>
                </li>
                <li class="list-group-item">
                  Asia<span class="float-end">(10)</span>
                </li>
                <li class="list-group-item">
                  America<span class="float-end">(99)</span>
                </li>
              </ul>
            </div>
            <div class='shadow-lg' id="posté2">
              <p>Popular Post</p>
            </div>
            <div id="carouselExampleCaptions" class="carousel slide shadow-lg">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" class="d-block w-100 rounded " alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5 >First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="https://www.progressive.com/lifelanes/wp-content/uploads/2023/01/PR1497_FamilyRoadTrip_Banner.jpg" class="d-block w-100 rounded " alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>
                      Some representative placeholder content for the second
                      slide.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="..." class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <div class='shadow-lg' id="posté2">
              <p>Recent Post</p>
            </div>
            <Card sx={{ display: 'flex' , width : '450px' ,marginTop : '50px' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 150 }}
                    image="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg"
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' ,width: '400px' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        Live From Space
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Mac Miller
                    </Typography>
                    </CardContent>
                </Box>
                
            </Card>
            <Card sx={{ display: 'flex' , width : '450px' ,marginTop : '20px' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 150 }}
                    image="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg"
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' ,width: '400px' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        Live From Space
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Mac Miller
                    </Typography>
                    </CardContent>
                </Box>
                
            </Card>
            <Card sx={{ display: 'flex' , width : '450px' ,marginTop : '20px' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 150 }}
                    image="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg"
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' ,width: '400px' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        Live From Space
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Mac Miller
                    </Typography>
                    </CardContent>
                </Box>
                
            </Card>
          </div>
          <div class="col mx-4">
            <div
              class="card my-3 shadow-lg"
              id="minicard"
              style={{ width: "53rem" }}
            >
              <img
                src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <div class="d-flex my-1">
                  <div id="bar"></div>
                  <p class="mx-4">July, 15, 2021 - Tips and Tricks </p>
                </div>
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div class="row">
                  <div class="col  d-flex">
                    <LocationOnIcon sx={{ color: "#FFA500" }} />
                    <p class="mx-2 ">Penang, Malaysia </p>
                  </div>
                  <div class="col-2  d-flex">
                    <ChatBubbleIcon sx={{ color: "#FFA500" }} />
                    <p class="mx-2">Comment</p>
                  </div>
                </div>
              </div>
            </div>
            {/* 
                            <div class='shadow-lg' id='card2'>
                                <img src='https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg' width={848} style={{maxHeight : '400px' , borderTopRightRadius : '15px' , borderTopLeftRadius : '15px'}} />
                                <div class='d-flex my-1'>
                                    <div id='bar'></div>
                                    <p class='mx-4'>July, 15, 2021 - Tips and Tricks </p>
                                </div>
                                <h4 class='mx-3'>A traveler’s guide to Penang, Malaysia - Where to Eat, Drink, Sleep and Explore </h4>
                                <p class='card-text mx-3' id='content'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra.
                                </p>
                                <div class='row card-text'>
                                    <div class='col mx-3 d-flex' >                 
                                        <LocationOnIcon sx={{ color: '#FFA500' }}/>
                                        <p class='mx-2 '>Penang, Malaysia </p>

                                    </div>
                                    <div class='col-2 mx-3 d-flex float-end'>
                                        <ChatBubbleIcon sx={{ color: '#FFA500' }}/>
                                        <p class='mx-2'>Comment</p>
                                    </div>
                                </div>
                            </div>
                            */}
            <div class="d-flex flex-wrap justify-content-center">
              <div
                class="card my-3 shadow-lg"
                id="minicard"
                style={{ width: "26rem" }}
              >
                <img
                  src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <div class="d-flex my-1">
                    <div id="bar"></div>
                    <p class="mx-4">July, 15, 2021 - Tips and Tricks </p>
                  </div>
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div class="row">
                    <div class="col  d-flex">
                      <LocationOnIcon sx={{ color: "#FFA500" }} />
                      <p class="mx-2 ">Penang, Malaysia </p>
                    </div>
                    <div class="col-4  d-flex">
                      <ChatBubbleIcon sx={{ color: "#FFA500" }} />
                      <p class="mx-2">Comment</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="card my-3 mx-2 shadow-lg"
                id="minicard"
                style={{ width: "26rem" }}
              >
                <img
                  src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <div class="d-flex my-1">
                    <div id="bar"></div>
                    <p class="mx-4">July, 15, 2021 - Tips and Tricks </p>
                  </div>
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div class="row">
                    <div class="col  d-flex">
                      <LocationOnIcon sx={{ color: "#FFA500" }} />
                      <p class="mx-2 ">Penang, Malaysia </p>
                    </div>
                    <div class="col-4  d-flex">
                      <ChatBubbleIcon sx={{ color: "#FFA500" }} />
                      <p class="mx-2">Comment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex">
              <div
                class="card my-3 shadow-lg"
                id="minicard"
                style={{ width: "26rem" }}
              >
                <img
                  src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <div class="d-flex my-1">
                    <div id="bar"></div>
                    <p class="mx-4">July, 15, 2021 - Tips and Tricks </p>
                  </div>
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div class="row">
                    <div class="col  d-flex">
                      <LocationOnIcon sx={{ color: "#FFA500" }} />
                      <p class="mx-2 ">Penang, Malaysia </p>
                    </div>
                    <div class="col-4  d-flex">
                      <ChatBubbleIcon sx={{ color: "#FFA500" }} />
                      <p class="mx-2">Comment</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="card my-3 mx-2 shadow-lg"
                id="minicard"
                style={{ width: "26rem" }}
              >
                <img
                  src="https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <div class="d-flex my-1">
                    <div id="bar"></div>
                    <p class="mx-4">July, 15, 2021 - Tips and Tricks </p>
                  </div>
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div class="row">
                    <div class="col  d-flex">
                      <LocationOnIcon sx={{ color: "#FFA500" }} />
                      <p class="mx-2 ">Penang, Malaysia </p>
                    </div>
                    <div class="col-4  d-flex">
                      <ChatBubbleIcon sx={{ color: "#FFA500" }} />
                      <p class="mx-2">Comment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div class="row">
          <div class="col">
            <img src={Logop} width={300} />
          </div>
          <div class="col"></div>
        </div>
      </footer>

      {/*Modale*/}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Share Your Experience</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the form below:
          </DialogContentText>
          <form >
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Titre"
              type="text"
              fullWidth
              required
            />
            <TextField
              margin="dense"
              id="email"
              label="Description"
              fullWidth
              required
              multiline
              maxRows={4}
            />
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
              Upload file
              <VisuallyHiddenInput type="file" />
            </Button>
            <DialogActions>
              <Button onClick={handleCloseModal}>Cancel</Button>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default Home;

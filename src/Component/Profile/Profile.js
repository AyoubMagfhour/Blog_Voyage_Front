import React, { useState } from "react";
import axios from "axios";
import "./Profile.css";
import Logop from "../../images/logop.png";
import Employer from "../../images/employer.jpg";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Profile = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div id="header">
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
                <ul class="nav mx-5" id="nav">
                  <li class="nav-item mx-5">
                    <a class="nav-link" aria-current="page" href="/Home">
                      Home
                    </a>
                  </li>
                  <li class="nav-item mx-5">
                    <a class="nav-link text-light" href="/Profile" id="profil">
                      Profil
                    </a>
                  </li>
                  <li class="nav-item mx-5">
                    <a class="nav-link" href="Destination">
                      Destination
                    </a>
                  </li>
                  <li class="nav-item mx-5">
                    <a class="nav-link" href="/Tips">
                      Tips
                    </a>
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
            <div class="shadow-lg my-3" id="card">
              <img
                class="rounded mx-4 my-3 img-fluid"
                src={Employer}
                width={350}
              />
              <div class="mx-4" id="discription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <i class="float-end mx-3">
                <SystemUpdateAltIcon />
              </i>
            </div>
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
    </div>
  );
};
export default Profile;

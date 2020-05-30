// import React, { useState } from 'react'
import React from 'react'
import { Card } from '@material-ui/core';
import labelLogo from "../../logos/tm-brick.png";
import bigWash from "../../logos/bigWash.jpg";

import "../../App.css";


const Home = () => {


  return (
    <div className="Home"
      style={{
        overflow: "scroll",
        height: "77vh",
        width: "100vw",
        backgroundImage: `url(${bigWash})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100vw 100vh",
        backgroundPosition: "top, center",
        display: "flex",
        flexDirection: "column",
      }}>
      <div style={{
        width: "100%",
        height: "700px",
        alignSelf: "center"
      }}>
        <Card className="imageCard"
          style={{
            width: "60%",
            height: "21em",
            overflow: "auto",
            margin: "30px auto 30px auto",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${labelLogo})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundColor: "#74444a",
            borderStyle: "outset",
          }}>
        </Card>
        <Card style={{
          width: "60%",
          margin: "30px auto 30px auto",
          borderStyle: "outset",
          background: 'linear-gradient(55deg, #006aff 50%, #00e6ff 80%)',
        }}>
          <h2>LAUNDRY SERVICES PRICE LIST</h2>
          <p>Wash, Dry, Fold, & Hang</p>
          <p>$1.50/LB</p>
          <p>10lb minimum/gauranteed 24 hours</p>
          <p>EXPRESS SERVICE</p>
          <p>$1.75/LB</p>
          <p>gauranteed same day</p>
        </Card>
        <Card style={{
          width: "60%",
          margin: "30px auto 30px auto",
          borderStyle: "outset",
          background: 'linear-gradient(55deg, #006aff 50%, #00e6ff 80%)',
        }}>
          <h2>BEDDING</h2>
          <h3>COMFORTERS</h3>
          <p>Cali King - $24.00</p>
          <p>King - $22.00</p>
          <p>Queen - $18.00</p>
          <p>Full - $14.00</p>
          <p>Twin - $14.00</p>
        </Card>
        <Card style={{
          width: "60%",
          margin: "30px auto 30px auto",
          borderStyle: "outset",
          background: 'linear-gradient(55deg, #006aff 50%, #00e6ff 80%)',
        }}>
          <h2>PET BEDS</h2>
          <p>Small - $14.00</p>
          <p>Large - $16.00</p>
        </Card>
        <Card style={{
          width: "60%",
          margin: "30px auto 30px auto",
          borderStyle: "outset",
          background: 'linear-gradient(55deg, #006aff 50%, #00e6ff 80%)',
        }}>
          <h2>BLANKETS/QUILTS</h2>
          <p>Lightweight - $9.00</p>
          <p>Heavyweight - $11.00</p>
          <p>Oversize - $16.00</p>
        </Card>
        <Card style={{
          width: "60%", margin: "30px auto 30px auto", borderStyle: "outset", background: 'linear-gradient(55deg, #006aff 50%, #00e6ff 80%)',
        }}>
          <h2>RUGS</h2>
          <p>Regular - $10.00</p>
          <p>Oversize - $14.00</p>
        </Card>
        <Card style={{
          width: "60%", margin: "30px auto 30px auto", borderStyle: "outset", background: 'linear-gradient(55deg, #006aff 50%, #00e6ff 80%)',
        }}>
          <h2>TABLE LINENS</h2>
          <p>Table Cloth - per/lb</p>
          <p>Table Runner - per/lb</p>
          <p>Napkin - per/lb</p>
        </Card>
        <Card style={{
          width: "60%", margin: "30px auto 30px auto", borderStyle: "outset", background: 'linear-gradient(55deg, #006aff 50%, #00e6ff 80%)',
        }}>
          <h2>ADDITIONAL SERVICES</h2>
          <p>DRY CLEANING</p>
          <p>UNIFORMS</p>
          <p>CULTURAL ITEMS</p>
          <p>UPHOLSTRY COVERS</p>
          <p>GARMENT STEAMING</p>
          <p>COMMERCIAL PICKUP & DELIVERY</p>
          <p>RESIDENTIAL PICKUP & DELIVERY</p>
        </Card>
      </div>
    </div>
  )
}

export default Home

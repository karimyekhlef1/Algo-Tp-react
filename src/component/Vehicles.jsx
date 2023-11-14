import axios from "axios";
import React, { useState, useEffect } from "react";
import Loader from "../elements/Loader";
import {motion} from "framer-motion"


export default function Vehicles() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const apiUrl = "http://localhost:8080/vehicles";
      const response = await axios.get(apiUrl);
      console.log(response.data.distanceTotalALLvehicles);
      setData(response.data.distanceTotalALLvehicles);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <motion.div
    initial={{y:-400 , opacity:0.5 }}
    transition={{duration:0.8 , delay:0.08}}

    animate={{y:0, opacity:1 }}
      style={{
        Background: " rgba(255,255,255,0.5)",
        backdropFilter: " blur(10px)",
        border: "2px solid #999999",
        width: "100%",
        padding: "20px",
        borderRadius: "15px",
        zIndex: "1000",
      }}
    >
      {loading ? (
        <Loader />
      ) : data ? (
        <div>
          {data.map((item, index) => (
            <div
              key={item.id}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                Ranking :<span style={{ fontSize: "22px" }}>{index + 1}</span>
              </div>
              <div>
                Vehicle :<span style={{ fontSize: "22px" }}>{item.id}</span>
              </div>
              <div>
                Distance :{" "}
                <span style={{ fontSize: "22px" }}>{item.distance}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No data available</p>
      )}
    </motion.div>
  );
}

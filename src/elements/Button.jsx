import React, { useState } from "react";
import Vehicles from "../component/Vehicles";
import { motion } from "framer-motion";
import { HiChevronDoubleUp } from "react-icons/hi";
import { HiChevronDoubleDown } from "react-icons/hi";

export default function Button({ start }) {
  const [open, setopen] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "15px",
        right: "15px",
        display: "flex",
        width: "50%",
        alignItems: "flex-end",
        flexDirection: "column",
      }}
    >
      {open ? <Vehicles /> : null}

      <div
        onClick={() => setopen(!open && start)}
        style={{
          margin: "2px",
          backgroundColor: "green",
          width: "50px",
          height: "50px",
          borderRadius: "100%",
        }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {!open ? (
            <motion.div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            //   initial={{ opacity: 0, x: -100 }}
            //   animate={{ opacity: 1 }}
            //   exit={{ opacity: 0, x: 100 }}
            >
              <HiChevronDoubleUp size={30}/>
            </motion.div>
          ) : (
            <motion.div
             
              initial={{ opacity: 0, x: -100 ,  }}
              animate={{ opacity: 1, x: 0  }}
              exit={{ opacity: 0, x: 100 }}
            >
              <HiChevronDoubleDown size={30}/>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

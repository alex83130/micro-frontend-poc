import { BrowserRouter } from "react-router-dom";
import { Box } from "@material-ui/core";
import Navigation from "./components/Navigation";
import Viewport from "./components/Viewport";
import Header from "./components/Header";
import React from "react";
import Router from "./Router";
import { ServiceProvider } from "./Service";
import { useDrawer } from './hooks'

export default function Shell () {
  const drawer = useDrawer();

  return (
    <ServiceProvider>
      <BrowserRouter>
        <Viewport>
          <Box display="flex" flex={1}>
            <Header drawer={drawer} />
            <Navigation drawer={drawer} />
            <Router/>
          </Box>
        </Viewport>
      </BrowserRouter>
    </ServiceProvider>
  )
};


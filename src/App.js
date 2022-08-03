import "./assets/styles/App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageContainer from "./layouts/PageContainer";
import React, { Suspense } from "react";
import Loading from "./components/Loading";

// lazy load Home
const Home = React.lazy(() => import("./pages/Home"));
const News = React.lazy(() => import("./pages/News"));
const PressRelease = React.lazy(() => import("./pages/PressRelease"));
const VideoGallery = React.lazy(() => import("./pages/VideoGallery"));
const ImageGallery = React.lazy(() => import("./pages/ImageGallery"));
const Events = React.lazy(() => import("./pages/Events"));
const NewsOverview = React.lazy(() => import("./pages/NewsOverview"));
const OrganisationStructure = React.lazy(() =>
  import("./pages/OrganisationStructure")
);
const AboutMessages = React.lazy(() => import("./pages/AboutMessages"));
const LeadershipTeam = React.lazy(() => import("./pages/LeadershipTeam"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Router>
          <Routes>
            <Route
              index
              element={
                <PageContainer>
                  <Home />
                </PageContainer>
              }
            ></Route>
            <Route path="newsroom">
              <Route
                path="news"
                element={
                  <PageContainer>
                    <News />
                  </PageContainer>
                }
              ></Route>
              <Route
                path="press-release"
                element={
                  <PageContainer>
                    <PressRelease />
                  </PageContainer>
                }
              ></Route>
              <Route
                path="video-gallery"
                element={
                  <PageContainer>
                    <VideoGallery />
                  </PageContainer>
                }
              ></Route>
              <Route
                path="events"
                element={
                  <PageContainer>
                    <Events />
                  </PageContainer>
                }
              ></Route>
              <Route
                path="image-gallery"
                element={
                  <PageContainer>
                    <ImageGallery />
                  </PageContainer>
                }
              ></Route>
              <Route
                path="overview"
                element={
                  <PageContainer>
                    <NewsOverview />
                  </PageContainer>
                }
              ></Route>
            </Route>
            <Route path="about">
              <Route
                path="organisation-structure"
                element={
                  <PageContainer>
                    <OrganisationStructure />
                  </PageContainer>
                }
              ></Route>
              <Route
                path="messages"
                element={
                  <PageContainer>
                    <AboutMessages />
                  </PageContainer>
                }
              ></Route>
              <Route
                path="leadership-team"
                element={
                  <PageContainer>
                    <LeadershipTeam />
                  </PageContainer>
                }
              ></Route>
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;

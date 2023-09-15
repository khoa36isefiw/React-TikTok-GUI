import { Fragment } from "react"; // only use to contains --> DOn't have a real tag in DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {publicRoutes} from '~/routes'
import {DefaultLayout} from '~/components/Layout'


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* get Routes */}
          {publicRoutes.map((route, index) => {

            // component in variables
            const Page = route.component; // Component
            
            // check layout
            // if layout null --> get Fragment else get DefaultLayout
            // const LayoutCheck = route.layout === null? Fragment : DefaultLayout;


            let LayoutCheck = DefaultLayout;
            
            if (route.layout) {
              LayoutCheck = route.layout;
            }
            else if(route.layout === null) {
              LayoutCheck = Fragment;
            }
            
            
        //     return <Route
        //             key={index} path ={route.path} element={<LayoutCheck>
        //         <Page />
        //       </LayoutCheck>
        //  }/>
            return <Route
              key = {index}
              path = {route.path}
              element = {<LayoutCheck>
                          <Page />
                        </LayoutCheck>}
              />
                
       
    


          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

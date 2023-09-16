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

            // component, dont have layout
            let LayoutCheck = DefaultLayout;
            
            // if we push layout
            if (route.layout) {
              LayoutCheck = route.layout;
            }
            // when layout === null
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

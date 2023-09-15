import Header from "../components/Header";
import SideBar from "./Sidebar";

function DefaultLayout({children}) {
    return (
        // Contains all the layout of the current website 
        <div>
            <Header/>
            <div className="container">
                <SideBar />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
import Header from "../components/Header";


function HeaderOnly({children}) {
    return (
        // Contains all the layout of the current website 
        <div>
            <Header/>
            <div className="container">
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default HeaderOnly;
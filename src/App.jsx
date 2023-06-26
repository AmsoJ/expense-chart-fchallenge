import Main from "./assets/components/Body/Main";
import Header from "./assets/components/Header/Header";

function App() {
    return <>
        <div className="parent-wrap container-fluid d-flex align-items-center justify-content-center">
            <div className="child-wrap container" style={{maxWidth: "500px", minHeight: "200px"}}>
                <Header balance="921.48" title="My balance" />
                <Main />
            </div>
        </div>
    </>
}

export default App;
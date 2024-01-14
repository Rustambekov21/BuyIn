import Add from "./add"
import Brands from "./brands"
import Header from "./header"
import Sale from "./sale"
import Trend from "./trand"

const Main = () => {
    return <div className="main">
        <Header />
        <Trend />
        <Sale />
        <Brands />
        <Sale/>
        <Add/>
    </div>  
}

export default Main;
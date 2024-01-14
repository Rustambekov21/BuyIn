import { SportCards } from "../../../constants/router";

const Trainers = () => {
    return <div>
        <Routes>
                    {
                        SportCards.map(item => (
                            <Route
                                path={item.path} 
                                key={item.id} 
                                element={item.element} />
                            ))
                        }
                </Routes>
    </div>
}

export default Trainers;

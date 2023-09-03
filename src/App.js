/*import Illustrations from './pages/Illustrations';*/
import Snow from './assets/Snow.jpg';
import CupofTea from './assets/CupofTea.jpg';
import JapaneseSpitz from './assets/JapaneseSpitz.jpg';
import WinterCamping from './assets/WinterCamping.jpg';
import Sidenavi from './components/Sidenavi.js';
import ImageCard from './components/ImageCard';
import './layouts/Gallery.css';

function App(props) {
    console.log(props);
    return (
        // className="Gallery" probably unintentional, "Gallery" is already being used below
        <div>
            <div className="Sidenavi">
                <Sidenavi
                    imgsrc={WinterCamping}
                    name="Winter Camping"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at aliquam justo.
                    Cras eu lobortis elit, eu egestas velit. Donec diam augue, congue non volutpat eget,
                    feugiat ultrices elit. Fusce sed lectus cursus, porta sem id, ultricies odio. Vivamus
                    dictum nibh ultricies sapien condimentum, sed feugiat massa venenatis."
                />
            </div>
            <div className="GalleryContainer">
                <div className="Gallery">
                {/* className="ImageCard" is already in the component */}
                    <ImageCard
                        imgsrc={Snow}
                        title="Snow"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at aliquam justo.
                        Cras eu lobortis elit, eu egestas velit. Donec diam augue, congue non volutpat eget,
                        feugiat ultrices elit. Fusce sed lectus cursus, porta sem id, ultricies odio. Vivamus
                        dictum nibh ultricies sapien condimentum, sed feugiat massa venenatis."
                    />
                    <ImageCard
                        imgsrc={CupofTea}
                        title="Cup of Tea"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at aliquam justo.
                        Cras eu lobortis elit, eu egestas velit. Donec diam augue, congue non volutpat eget,
                        feugiat ultrices elit. Fusce sed lectus cursus, porta sem id, ultricies odio. Vivamus
                        dictum nibh ultricies sapien condimentum, sed feugiat massa venenatis."
                    />
                    <ImageCard
                        imgsrc={JapaneseSpitz}
                        title="Japanese Spitz"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at aliquam justo.
                        Cras eu lobortis elit, eu egestas velit. Donec diam augue, congue non volutpat eget,
                        feugiat ultrices elit. Fusce sed lectus cursus, porta sem id, ultricies odio. Vivamus
                        dictum nibh ultricies sapien condimentum, sed feugiat massa venenatis."
                    />
                </div>
            </div>
        </div>
        );
}

export default App;

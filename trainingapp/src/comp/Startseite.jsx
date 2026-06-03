import "../App.css"
import img from "../assets/img.png"

export default function Startseite() {

    return (
        <>
            <div id="startseite">
                <div className="training-card">
                    <h3>Titel</h3>
                    <img alt="Img" src={img}/>
                    <div className="training-card-content">
                        <p>Ein kurzer Text der Erklärt was man bei diesem Abteil machen kann</p>
                    </div>
                </div>

                <div className="training-card">
                    <h3>Titel</h3>
                    <img alt="Img" src={img}/>
                    <div className="training-card-content">
                        <p>Ein kurzer Text der Erklärt was man bei diesem Abteil machen kann</p>
                    </div>
                </div>

                <div className="training-card">
                    <h3>Titel</h3>
                    <img alt="Img" src={img}/>
                    <div className="training-card-content">
                        <p>Ein kurzer Text der Erklärt was man bei diesem Abteil machen kann</p>
                    </div>
                </div>
            </div>
        </>
    )
}
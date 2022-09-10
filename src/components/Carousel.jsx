import { useRef, useState } from "react"

export default () => {
    let isActive = true; // Variável de verificação
    const myDocument = useRef();

    let imagens = {
        img1: 'https://i.postimg.cc/dtngTBg1/fullscreen.png',
        img2: 'https://i.postimg.cc/mgDJ39GS/fullscreen-exit.png',
    }

    const [imageBtnFullscreen, setImageBtnFullscreen] = useState(imagens.img1);

    function handleFullscreen() {
        if (isActive) {
            isActive = false;
            setImageBtnFullscreen(imagens.img2);

            if (myDocument.current.requestFullscreen) {
                myDocument.current.requestFullscreen();
            } else if (myDocument.current.webkitRequestFullscreen) {
                myDocument.current.webkitRequestFullscreen();
            } else if (myDocument.current.msRequestFullscreen) {
                myDocument.current.msRequestFullscreen();
            }
        } else {
            isActive = true;
            setImageBtnFullscreen(imagens.img1);

            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    }

    return (
        <main ref={myDocument}>
            <div className="field-carousel">
                <div>
                    <img src="https://assets2.razerzone.com/images/pnx.assets/618c0b65424070a1017a7168ea1b6337/razer-wallpapers-page-hero-mobile.jpg" alt="wallpaper" />
                    <img src="https://t3.ftcdn.net/jpg/03/10/16/88/360_F_310168822_FtoXtGb1YRdzOpaC1EDIryRgqQM4noyt.jpg" alt="wallpaper" />
                    <img src="https://t3.ftcdn.net/jpg/03/96/94/42/360_F_396944237_QynilCqWYBTTcBntwZw41HQJRup9phO6.jpg" alt="wallpaper" />
                    <img src="https://wallpapercave.com/wp/wp2646303.jpg" alt="wallpaper" />
                    <img src="https://tcg.pokemon.com/assets/img/home/wallpapers/wallpaper-53.jpg" alt="wallpaper" />
                    <img src="https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg" alt="wallpaper" />
                    <img src="https://wallup.net/wp-content/uploads/2018/09/26/189914-sunset-digital_art-748x421.jpg" alt="wallpaper" />
                    <img src="https://wallpaper.dog/large/20492872.jpg" alt="wallpaper" />
                </div>
            </div>

            <div className="bar-fullscreen">
                <div>
                    <p>Ative o botão ao lado</p>
                    <img onClick={handleFullscreen} src={imageBtnFullscreen} alt="btn-fullscreen" />
                </div>
            </div>
        </main>
    )
}
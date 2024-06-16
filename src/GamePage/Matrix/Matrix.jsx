import {useEffect, useRef} from "react";
import s from "./Matrix.module.css"

const Matrix = () => {

    const canvasRef = useRef(0);
    useEffect(() => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d")
            let width = (canvas.width = window.innerWidth)
            let height = (canvas.height = window.innerHeight)
            let columns = Math.floor(width) //!!!!!!!!!!!!!!! /20
            const characters = "rA9"
            const charArray = characters.split("")
            let drops = [];

            for (let i = 0; i < columns; i++) {
                drops[i] = 1;
            }

            let frameRate = 25;
            let lastFrame = Date.now();
            const draw = () => {
                ctx.fillStyle = "rgba(0, 0, 0, 0.04)"
                ctx.fillRect(0, 0, width, height)
                ctx.fillStyle = "#0f0"
                ctx.font = "15px monospace"
                for (let i = 0; i < drops.length; i++) {
                    const text = charArray[Math.floor(Math.random() * charArray.length)]
                    ctx.fillText(text, i * 20, drops[i] * 20)

                    if (drops[i] * 20 > height && Math.random() > 0.975) {
                        drops[i] = 0
                    }
                    drops[i]++;
                }
            }

            const animate = () => {
                const currentTime = Date.now()
                const ellapsedTime = currentTime - lastFrame;

                if (ellapsedTime > 1000 / frameRate) {
                    draw();
                    lastFrame = currentTime
                }
                requestAnimationFrame(animate)
            }
            animate()

            const handleResize = () => {
                width = canvas.width = window.innerWidth;
                height = canvas.height = window.innerHeight;
                columns = Math.floor(width / 20)
                drops = []
                for (let i = 0; i < columns; i++) {
                    drops[i] = 1
                }
            }

            const isMobileDevice = /Mobi/i.test(window.navigator.userAgent)
            if (isMobileDevice) {
                window.addEventListener("resize", handleResize)
            }
            return () => {
                if (!isMobileDevice) {
                    window.addEventListener("resize", handleResize)
                }
            }
        }
    )
    return <canvas id="matrix" ref={canvasRef} className={s.matrix}></canvas>
}

export default Matrix;
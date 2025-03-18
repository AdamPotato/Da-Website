function Changecolour () {
    const colour = ["#FF0000","#FFFF00","#00FF00","#00FFFF","#0000FF","#FF00FF","#9000ad"];
    const Randomcolour = colour[Math.floor(Math.random() * colour.length)]

    document.body.style.backgroundColor = Randomcolour;
}
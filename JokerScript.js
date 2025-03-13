function Changecolour () {
    const colour = ["#FFFFFF", "#0000FF"];
    const Randomcolour = colours [Math.floor(Math.random() * colours.length)]

    document.body.style.backgroundColor = Randomcolour;
}
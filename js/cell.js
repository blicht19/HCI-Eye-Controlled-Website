class Cell {
    constructor(x, y, d, color = null) {
        this.pos = createVector(x, y);
        this.d = d;
        this.color = color || random(['orange', 'yellow', 'green', 'blue', 'indigo', 'violet']);
    }

    show = () => {
        fill(this.color);
        circle(this.pos.x, this.pos.y, this.d);
    };

}
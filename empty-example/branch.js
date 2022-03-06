function Branch(begin, end) {
    this.begin = begin;
    this.end = end;
    this.finished = false;

    this.jitter = function() {
        this.end.x += random(-1,1);
        this.end.y += random(-1,1)
    }

    this.show=function(){
        stroke(255);
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }

    this.branch = function(degrees) {
        this.finished = true;
        let direction = p5.Vector.sub(this.end, this.begin);
        direction.rotate(degrees);
        direction.mult(0.67);
        let newEnd = p5.Vector.add(this.end, direction);
        let right = new Branch(this.end, newEnd);

        //let left = new Branch(this.end, -newEnd);
        return right;
    }
}
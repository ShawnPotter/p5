let slider;
let tree = [];
//let leaves = []; //leaf graphic
//let count = 0; //leaf graphic

function setup() {
  // put setup code here
    createCanvas(800,800);
    //slider=createSlider(0, TWO_PI, PI/4, 0.01);
    let a = createVector(width/2, height);
    let b = createVector(width/2, height-100);
    tree[0] = new Branch(a, b);
}

function mousePressed() {
    for (let i = tree.length - 1; i >= 0 ; i--) {
        if(!tree[i].finished) {
            tree.push(tree[i].branch(PI/4));
            tree.push(tree[i].branch(-PI/4));
        }
    }

    //for adding a leaf graphic to the fractal after a certain mount of clicks
    /*count++;
    if(count % 2 === 0) {
        for (let i = 0; i < tree.length; i++) {
            let leaf = tree[i].end.copy();
            leaves.push(leaf);
        }
    }*/
}

function draw() {
  // put drawing code here
    background(20);
    for (let i = 0; i < tree.length ; i++) {
        tree[i].show();
        //tree[i].jitter(); //animation
    }

    //for adding a leaf graphic to the fractal after a certain mount of clicks
    /*for (let i = 0; i < leaves.length; i++) {
        fill(0,255,0);
        ellipse(leaves[i].x, leaves[i].y, 5, 10);
    }*/

    //adding a slider below the canvas to control the angle of the branches
    //angle = slider.value();
    /*stroke(255);
    translate(400, height);
    branch(100);*/


}

/*
function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    if(len > 4)
    {
        push();
        rotate(angle);
        branch(len*0.75, angle);
        pop();
        push();
        rotate(-angle);
        branch(len*0.75, -angle);
        pop();
    }

}*/

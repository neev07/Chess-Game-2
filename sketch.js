var squares = [];
var rook_w,rook_w_1,knight_w,knight_w_1,bishop_w,bishop_w_1,queen_w,king_w;
var rook_b,rook_b_1,knight_b,knight_b_1,bishop_b,bishop_b_1,queen_b,king_b;
pieces_b=[];
pieces_w=[];
var rook_img,bishop_img,knight_img,king_img,queen_img;

function preload(){
  rook_img = loadImage("R.png");
  bishop_img = loadImage("B.jpg");
  knight_img = loadImage("K.png");
  king_img = loadImage("King.jfif");
  queen_img = loadImage("Queen.png");
}

function setup() {
  createCanvas(800, 800);

  // Create the squares
  for (y = 0; y < height; y += 50) {
    for (x = 0; x < width; x += 50) {
      square = new Square(x, y);
      squares.push(square);
    }
  }

  rook_w = createSprite();
  rook_w.addImage(rook_img);
  rook_w.scale = 0.3;
  knight_w = createSprite();
  bishop_w = createSprite();
  queen_w = createSprite();
  king_w = createSprite();
  bishop_w_1 = createSprite();
  knight_w_1 = createSprite();
  rook_w_1 = createSprite();

  rook_w.x = square[0];
  rook_w_1.x = square[7];

  bishop_w.x = square[2];
  bishop_w_1.x = square[5];

  knight_w.x = square[1];
  knight_w_1.x = square[6];

  queen_w.x = square[3];
  king_w.x = square[4];



  for (i = 8; i < 16; i++) {
    pawn = createSprite();
    pawn.x=square[i];
  }

  for (i = 48; i < 56; i++) {
    pawn = createSprite();
    pawn.x=square[i];
  }

  rook_b = createSprite();
  knight_b = createSprite();
  bishop_b = createSprite();
  queen_b = createSprite();
  king_b = createSprite();
  bishop_b_1 = createSprite();
  knight_b_1 = createSprite();
  rook_b_1 = createSprite();

  rook_b.x = square[56];
  rook_b_1.x = square[63];

  bishop_b.x = square[58];
  bishop_b_1.x = square[61];

  knight_b.x = square[57];
  knight_b_1.x = square[62];

  queen_b.x = square[59];
  king_b.x = square[60];

}

function draw() {
  background(255);
  
  black = 220;
  white = 30;
  for (y = 0; y < height; y += 50) {
    for (x = 0; x < width; x += 50) {
      if (x % 100 == 0) {
        if (y % 100 == 0) {
          fill(black);
        }
        if (y % 100 == 50) {
          fill(white);
        }
      }
      if (x % 100 == 50) {
        if (y % 100 == 50) {
          fill(black);
        }
        if (y % 100 == 0) {
          fill(white);
        }
      }

      rect(x, y, 50, 50);
    }
  }
  drawSprites();
}
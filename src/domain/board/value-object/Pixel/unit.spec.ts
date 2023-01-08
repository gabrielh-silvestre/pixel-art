import { Pixel } from ".";
import { PixelException } from "./exception";

const FAKE_PIXEL = {
  color: "#000000",
  x: 0,
  y: 0,
};

describe("Unit test for Pixel value object", () => {
  it("should create a new Pixel successfully", () => {
    const pixel = new Pixel(FAKE_PIXEL.color, FAKE_PIXEL.x, FAKE_PIXEL.y);

    expect(pixel).to.be.instanceOf(Pixel);

    expect(pixel.id).to.be.an("string");
    expect(pixel.color).to.be.eq(FAKE_PIXEL.color);
    expect(pixel.position).to.be.an("array");
    expect(pixel.position).to.have.lengthOf(2);

    expect(pixel.position[0]).to.be.eq(FAKE_PIXEL.x);
    expect(pixel.position[1]).to.be.eq(FAKE_PIXEL.y);
  });

  it("should change the color of the pixel successfully", () => {
    const pixel = new Pixel(FAKE_PIXEL.color, FAKE_PIXEL.x, FAKE_PIXEL.y);

    const newColor = "#ffffff";
    pixel.changeColor(newColor);

    expect(pixel.color).to.be.eq(newColor);
  });

  it("should throw an error when trying to change the color of the pixel with an invalid color", () => {
    const pixel = new Pixel(FAKE_PIXEL.color, FAKE_PIXEL.x, FAKE_PIXEL.y);

    const invalidColor = "invalid-color";
    expect(() => pixel.changeColor(invalidColor)).to.throw(PixelException);

    const emptyColor = "";
    expect(() => pixel.changeColor(emptyColor)).to.throw(PixelException);

    const spaceColor = " ";
    expect(() => pixel.changeColor(spaceColor)).to.throw(PixelException);
  });
});

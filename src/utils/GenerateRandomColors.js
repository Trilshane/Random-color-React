function GenerateRandomColors() {
  return "#" + ((Math.random() * 0xffffff) << 0).toString(16);
}
export default GenerateRandomColors;

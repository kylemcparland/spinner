let delay = 100;
let animation = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   '];

for (let frame of animation) {
  setTimeout(() => {
    process.stdout.write(frame);
  }, delay);
  delay += 200;
}
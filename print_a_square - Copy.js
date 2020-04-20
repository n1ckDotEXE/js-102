function printSquare(size) {
    for (i = 0; i < size; i++) {
      let star = '';
      for (j = 0; j < size; j++) {
        star += '*';
      }
      console.log(star);
    }
  }

printSquare(5);
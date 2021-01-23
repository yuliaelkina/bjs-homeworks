function parseCount(number) {
  let result = Number.parseInt(number);
  if (isNaN(result)) { 
  throw new Error("Невалидное значение")
} 
  return result;
};

function validateCount(number) {
try { let answer = parseCount(number);
  return answer;
} catch(e) {
return e;
};
};

class Triangle {
  constructor(a,b,c) {
    if (((a+b) <= c) || ((a+c) <= b) || ((b+c) <= a)) {
      throw new Error("Треугольник с такими сторонами не существует");
    };
      this.a = a;
      this.b = b;
      this.c = c; 
  };

  getPerimeter() {
    return +(this.a+this.b+this.c);
  };
  getArea() {
    let p = (this.getPerimeter())/2;
    let count = p*(p-this.a)*(p-this.b)*(p-this.c);
    let area = Math.sqrt(count);
    return +area.toFixed(3);
  };
};

class errorTriangle {
  getPerimeter() {
    return "Ошибка! Треугольник не существует";
  };
  getArea() {
    return "Ошибка! Треугольник не существует";
  };
};

function getTriangle(a,b,c) {
  try {
    return new Triangle(a,b,c);
  } catch(e) { 
    return new errorTriangle;
  };
};




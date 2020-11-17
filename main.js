R = prompt('Введите радиус',);
console.log('радиус = ', R);
H = prompt('Введите высоту',);
console.log('высота = ', H);
S = (R ** 2) * Math.PI;
console.log('площадь цилиндра = ', S);
V = S * H;
console.log('объем цилиндра = ', V);

stripes = '--------------------'
result = 'V = ' + V.toFixed(2) + '.'; 


document.write('<p>************** </p>');
document.write('<p>Обьем цилиндра с площадью основы ' + S.toFixed(2) + ' радиусом ' + R + ' и высотой ' + H + ' равен: </p>');
document.write(stripes);
document.write('<p>' + result +'</p>');
document.write(stripes);

document.writeln('<p>end.</p>');

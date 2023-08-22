//  For syntax

// 1. k va n butun son berilgan. k ni n marta chiqaruvchi dastur tuzing.

// const k = 77 ;
// const n = 11 ;
// for( i = 0 ; i < n ; i++ ) {
//    console.log(k);
// }

// 2. a, b sonlar beilgan. a b dan katta a va b orasidagi butun sonlarni chiqaruvchi dastur tuzing. A va B ni ozi ham chiqsin.

// const a = 77 ;
// const b = 33 ;
// for( i = 33 ; i <= a ; i++ ) {
//    console.log(i);
// }

// 3. a,b sonlar berilgan a b dan katta a va b orasidagi barcha butun sonlarni kamayish tartibida chiqaring a va b kirmasin.

// const a = 99 ;
// const b = 55 ;
// for( i=98 ; i > b ; i-- ) {
//    console.log(i);
// }

// 4. 1kg konfet 10000so'm berilgan. 1 kgdan 10 kggacha barchasini narxini chiqaruvchi dastur tuzing.

// const birkg = 10000 ;
// for(i = 1; i <= 10 ; i++ ) {
//    console.log(i*birkg);
// }

// 5. 1kg konfet 10000so'm. 0,1 kg dan 1 kg gacha bo'lgan konfet narxin toping.

// const birkg = 10000 ;
// for(i = 1 ; i <= 10 ; i++ ) {
//    console.log( (i*birkg)/10);
// }

// 6. 1kg konfet 10000so'm. 1,2kg, 1,4, 1,6, 1,8, 2kg konfetlarni narxini toping.

// const birkg = 10000 ;
// for(i = 1.2 ; i <= 2 ; i += 0.2 ) {
//    console.log( i*birkg );
// }

// 7. a,b sonlar berilgan. A dan b gacha barcha butun sonlarni yig'indisin topuvchi dastur yozing.

// const a = 22 ;
// const b = 55 ;
// let sum = 0 ;
// for( i = 22; i <= 55 ; i++ ) {
//   sum+=i
// }
// console.log(sum);

// 8. a,b sonlar berilgan. A dan b gacha barcha butun sonlarni ko'paytmasin topuvchi dastur yozing.

// const a = 13 ;
// const b = 15 ;
// let sum = 1 ;
// for( i = 13; i <= 15 ; i++ ) {
//   sum*=i
// }
// console.log(sum);

// 9. a,b sonlar berilgan a dan b gacha bo'lgan sonlarni kvadratlarini yig'indisini topuvchi dastur toping.

// let Sum = 0
// function sum(a,b){
//     for(let i = a; i<b;i++){
//         let pow = Math.pow(2,i)
//         Sum+=pow   
//     }
//     console.log(Sum)
// }
// sum(1,4)

// 11. n soni berilgan shu soni ichidan toqlarin ko'ruvchi dastur yozing.

// let n = 10
// for (let i = 1; i < n; i++) {
//     if (i % 2 != 0) console.log(i);
// } 

// 12. n soni berilgan shu sonlarni ichidan juftlarini koruvchi dastur yozing.

// let n = 10
// for (let i = 1; i < n; i++) {
//     if (i % 2 == 0) console.log(i);
// }

// 13. n soni berilgan shu son ichidan faqat murakkab sonlarni aniqlovchi dastur yozing.

// Sharti tushunarsiz

// 14. n soni berilgan shu sonlarni ichidan juft va toq sonlarni kvadratlarini chiqaring.

// Sharti tushunarsiz

// 15. n son berilgan n sonidan kamayish tartibida sonlar chiqarilsin.

// let n = 15
// for (let i = n; i > 0; i --){
//     console.log(i);
// }

// 16. n son berilgan 0 va ngacha sonlar orasida 5 ga karralisini tashlab o'tib ketuvchi dastur tuzing.

// let n = 20
// for (let i = 0; i <= n; i ++){
//     if (i % 5 != 0){
//         console.log(i);
//     }

// 17. n butun son berilgan ngacha butun sonlarni ko'paytmasini topuvchi dastur tuzing.

// let n = 5, cnt = 1
// for (let i = 1; i <= n; i ++){
//     cnt *= i
// }
// console.log(cnt);


//  IF


// let a = 3
// let res = a > 0 ? 'musbat' : 'manfiy'
// console.log(res);   1 - masala

// let a = 5
// let res = a % 2 != 0 ? 'toq' : 'juft'
// console.log(res);  2 - masala

// let a = 6
// let res = a % 2 == 0 ? 'juft' : 'toq'
// console.log(res);  3 - masala

// let a = -1, b = 10, res
// res = a > 0 && b > 0 ? 'true' : 'false'
// console.log(res);   4 - masala

// let a = 10, b = 3, c = 2, res
// res = a > b && b > c ? 'true' : 'false'
// console.log(res);  5 - masala

// let a = 10, b = 4, c = 1, res
// res = b > c && b < a ? 'true' : 'false'
// console.log(res);   6 - masala

// let a = 3, b = 11, res
// res = a % 2 != 0 && b % 2 != 0 ? 'true' : 'false'
// console.log(res);   7 - masala

// let a = 1, b = 4, c = -1, d = 10, res
// res = a > 0 && b > 0 && c > 0 && d > 0 ? 'true' : 'false'
// console.log(res);     8 - masala

// let a = -1, b = 10, c = 6, res
// res = a > 0 && b > 0 || a > 0 && c > 0 || b > 0 && c > 0 ? 'true' : 'false'
// console.log(res);    9 - masala

// let k = 0, res
// res = k == 1 ? 'dushanba' : k == 2 ? 'seshanba' : k == 3 ? 'chorshanba' : k == 4 ? 'payshanba' : k == 5 ? 'juma' : k == 6 ? 'shanba' : k == 7 ? 'yakshanba': "bunaqa hafta kuni yo'"
// console.log(res);   10 - masala

// let a = 1, res
// res = a > 0 ? a += 1 : a -= 1
// console.log(res);   12 - masala

// let a = 1, res
// res = a > 0 ? a += 3 : a -= 2
// console.log(res);   13 - masala

// let a = 11, b = 4, res
// res = a > b ? a : b
// console.log(res);   14 - masala

// let a = 8, b = 4, c = 3, res
// res = a > b && a > c ? a : b > a && b > c ? b : c
// console.log(res);   15 - masala

// let a = 8, b = 4, c = 3, res
// res = a < b && a < c ? a : b < a && b < c ? b : c
// console.log(res);   16 - masala

// let k = -3, res
// res = k % 2 == 0 && k > 0 ? 'juft musbat' : k % 2 != 0 && k > 0 ? 'toq musbat' : k % 2 == 0 && k < 0 ? 'juft manfiy' : 'toq manfiy'
// console.log(res);  19 - masala

// let a = 4, b = 5, c = 6, res
// res = a <= b <= c ? 'true' : 'false'
// console.log(res);   21 - masala

// let a = 3, b = 4, res
// res = a % 2 != 0 && b % 2 == 0 ? 'true' : b % 2 != 0 && a % 2 == 0 ? 'true' : 'false'
// console.log(res);   22 - masala

// let a = 4, b = 6, c = 5, res
// res = a > 0 && b > 0 && c > 0 ? 'true' : 'false'
// console.log(res);  23 - masala

// let a = 4, b = 6, c = 5, res
// res = a > 0 && b < 0 && c < 0 || b > 0 && a < 0 && c < 0 || c > 0 && b < 0 && a < 0 ? 'true' : 'false'
// console.log(res);    24 - masala

// let n = 123, a = 0, b = 0, c = 0, res
// a = n / 100;
// c = n % 100 / 10;
// b = n % 10;
// res = a != b && a != c && b != c ? 'true' : 'false'
// console.log(res);   25 - masala


//  CASE


// let c = 5
// switch (c) {
//     case 1: console.log('Dushanba');break
//     case 2: console.log('Seshanba');break
//     case 3: console.log('Chorshaba');break
//     case 4: console.log('Payhanba');break
//     case 5: console.log('Juma');break
//     case 6: console.log('Shanba');break
//     case 7: console.log('Yakshanba');break

//     default: console.log("Bunaqa hafta kuni yoq");
// }   1 - masala

// let k = 3
// switch(k){
//     case 1: console.log('yomon');
//     case 2: console.log('qoniqarsiz');
//     case 3: console.log('qoniqarli');
//     case 4: console.log('yaxshi');
//     case 5: console.log('alo');
//     default: console.log("bunaqa baho qo'yish mumkinmas");
// }  2 - masala

// let m = 4
// switch(m){
//     case 1: console.log('qish');break
//     case 2: console.log('qish');break
//     case 3: console.log('bahor');
//     case 4: console.log('bahor');
//     case 5: console.log('bahor');
//     case 6: console.log('yoz');break
//     case 7: console.log('yoz');break
//     case 8: console.log('yoz');break
//     case 9: console.log('kuz');break
//     case 10: console.log('kuz');break
//     case 11: console.log('kuz');break
//     case 12: console.log('qish');break
//     default: console.log("bunaqa oy yo'q");
// }  3 - masala

// let m = 3
// switch(m){
//     case 1: console.log('31 kun bor');break
//     case 2: console.log('28 kun bor');break
//     case 3: console.log('31 kun bor');break
//     case 4: console.log('30 kun bor');break
//     case 5: console.log('31 kun bor');break
//     case 6: console.log('30 kun bor');break
//     case 7: console.log('31 kun bor');break
//     case 8: console.log('31 kun bor');break
//     case 9: console.log('30 kun bor');break
//     case 10: console.log('31 kun bor');break
//     case 11: console.log('30 kun bor');break
//     case 12: console.log('31 kun bor');break
//     default: console.log("bunaqa oy yo'q");
// }   4 - masala

// let a = 5, b = 3, c = '+'
// switch(c){
//     case '+': console.log(a + b);break
//     case '-': console.log(a - b);break
//     case '*': console.log(a * b);break
//     case '/': console.log(a / b);break
//     case '%': console.log(a % b);break
//     default: console.log('bunaqa amal mavjudmas');
// }   5 - masala


let sayi =prompt("Lütfen bir sayı giriniz: ");
// differenceMultipleAdded fonksiyonunu yazınız.
// girilen input = differenceMultipleAdded(72) 
// output =  5
// girilen değerin rakamları çarpımı ile toplamı farkını alıyor (7*2)-(7+2) = 5
// differenceMultipleAdded(24) = (2*4)-(2+4) = 2

function differenceMultipleAdded(num) {

  let carpim=1, toplam=0 ;
  const numArr = num.toString().split('').map(Number);
   
    for(let i=0;i<numArr.length;i++)
    {
        carpim *= numArr[i];
        toplam += numArr[i];
    }
    return carpim-toplam;
  }
console.log("Girilen değerin rakamları çarpımı ile toplamının farkı :",differenceMultipleAdded(sayi));


// findChildren fonksiyonunu yazınız.
// girilen input = findChildren(72) 
// output =  (8*8) + (2*2) = 68
// en yakın iki kare toplamını buluyor
// findChildren(12) = (3*3) + (1*1) = 10

 
function findChildren(sayi) {
  let kok = Math.sqrt(sayi); // sayının karekökü
  let altKok = Math.floor(kok); // alt karekök
  let altToplam = altKok * altKok; // alt kare toplamı

  let kalan=sayi-altToplam;
  let kalanKok=Math.floor(Math.sqrt(kalan));
  let kalanKokToplam = kalanKok*kalanKok; 

  return altToplam+kalanKokToplam;

}
console.log("En yakın iki kare toplamı :",findChildren(sayi)); 
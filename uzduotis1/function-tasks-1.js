console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  manoMasyvas = ['a','b','c','d','e','f','g','h','i'];

  function pirmasElementas (masyvas) {
    return masyvas[0];
  }

  console.log(pirmasElementas(manoMasyvas));
}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
  manoMasyvas = ['a','b','c','d','e','f','g','h','i'];

  function pasalinkPirma (masyvas) {
    return masyvas.shift();
  }

  console.log(pasalinkPirma(manoMasyvas));
  console.log("Likes masyvas: " + manoMasyvas);
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  manoMasyvas = ['a','b','c','d','e','f','g','h','i'];

  function paskutinisElementas (masyvas) {
    return masyvas[masyvas.length-1];
  }

  console.log(paskutinisElementas(manoMasyvas));
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
  manoMasyvas = ['a','b','c','d','e','f','g','h','i'];

  function pasalinkPaskutini (masyvas) {
    elementas = masyvas[masyvas.length-1];
    console.log(elementas);

    return masyvas.length = masyvas.length-1;
  }

  pasalinkPaskutini(manoMasyvas);
  console.log("Likes masyvas: " + manoMasyvas);
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
  manoMasyvas = ['a','b','c','d','e','f','g','h','i'];

  function grazinkKieki (masyvas) {
    return masyvas.length;
  }

  console.log(grazinkKieki(manoMasyvas));
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  manoMasyvas = ['a','b','c','d','e','f','g','h','i'];

  function paskutinioIndeksas (masyvas) {
    console.log(masyvas.length-1);
  }

  paskutinioIndeksas(manoMasyvas);
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  manoMasyvas = ['a','b','c','d','e','f','g','h','i'];

  function visiIndeksai (masyvas) {
    for (let i = 0; i < masyvas.length; i += 1)
    {
      console.log(i);
    }
    // masyvas.forEach(printFunction);

    // function printFunction (item, index) {
    //   console.log(index);
    // }
  }

  visiIndeksai(manoMasyvas);
}
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  manoMasyvas = ['a','b','c','d','e','f','g','h','i'];

  function visosReiksmes (masyvas) {

    for (let i = 0; i < masyvas.length; i += 1)
    {
      console.log(masyvas[i]);
    }
    // masyvas.forEach(printFunction);

    // function printFunction (item) {
    //   console.log(item);
    // }
  }

  visosReiksmes(manoMasyvas);
}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  manoMasyvas = ['a','b','c','d','e','f','g','h','i'];

  function reiksmiuPoros (masyvas) {
    for (let i = 0; i < masyvas.length; i += 1)
    {
      console.log("[" + i + "] => " + masyvas[i]);
    }
    // masyvas.forEach(printFunction);

    // function printFunction (item, index) {
    //   console.log("[" + index + "] => " + item);
    // }
  }

  reiksmiuPoros(manoMasyvas);
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  manoMasyvas = ['a','b','c','d','e','f','g','h','i'];

  function atvirksciai (masyvas) {
    for (let i = masyvas.length-1; i >= 0 ; i -=1 ) {
      console.log(masyvas[i]);
    }
  }

  atvirksciai(manoMasyvas);
}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  manoMasyvas = ['a','b','c','d','e','f','g','h','i'];

  function indeksaiEiluteje (masyvas) {
    eilute = '';
    for (let i = 0; i < masyvas.length; i += 1)
    {
      eilute += i;
      if (i < masyvas.length-1) {
        eilute += " ";
      }
    }
    console.log(eilute);
  }

  indeksaiEiluteje(manoMasyvas);
}
console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
  manoMasyvas = ['a','b','c','d','e','f','g','h','i'];

  function reiksmesEiluteje (masyvas) {
    eilute = '';
    for (let i = 0; i < masyvas.length; i += 1)
    {
      eilute += masyvas[i];
      if (i < masyvas.length-1) {
        eilute += " ";
      }
    }
    console.log(eilute);
  }

  reiksmesEiluteje(manoMasyvas);
}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{
  manoMasyvas = ['a','b','c','d','e','f','g','h','i'];

  function porosEiluteje (masyvas) {
    eilute = '';
    for (let i = 0; i < masyvas.length; i += 1)
    {
      eilute = eilute + "[" + i + "]=>" + masyvas[i];
    }
    if (i < masyvas.length-1) {
      eilute += " ";
    }
    console.log(eilute);
  }

  porosEiluteje(manoMasyvas);
}
console.groupEnd();

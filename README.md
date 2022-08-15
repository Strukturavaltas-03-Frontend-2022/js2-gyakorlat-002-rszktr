# Feladatok

## NAGYON FONTOS!!!
- A könnyebb tesztelhetőség érdekében az elkészített függvényeket exportálni 
kell! Ez azt jelenti, hogy ha például írsz egy ilyen függvényt:
```javascript
const objectsMerge = () => {};
```
akkor utána ki kell így exportálni a fájlból:
```javascript
export default objectsMerge;
```

## Előkészítés
- Az `app.js` fájlban dolgozz!
- Ne felejtsd el az `npm i` parancsot kiadni!
- Teszteléshez az `npm test` parancsot használhatod.

## 1. feladat
- A `01/solution/js/summarize.js` fájlban dolgozz!
- Készíts egy függvényt `summarize` néven!
- Ez a paraméterként kapott tetszőleges darabszámú, tetszőleges értékű egész számot összeadja, és visszatér az összeadás végeredményével. 
- A paraméterként kapott értékek egyszerű number típusúak legyenek! 
- Amennyiben bármelyik paraméter értéke vagy a részeredmény meghaladja a biztonságos tartományt, automatikusan konvertáljad
`BigInt`-be, és természetesen a visszatérési érték is `BigInt` típusú legyen!

## 2. feladat
- A `02/solution/js/numericConverter.js` fájlban dolgozz!
- Készíts egy függvényt `numericConverter` néven!
- Ez a paraméterként megadott tízes számrendszerbeli számot átkonvertálja kettes, nyolcas és tizenhatos
számrendszerbe is.
- Ezeket az értékeket egy objektumban add vissza. A property-k neve legyen: binary, octal, hexa.

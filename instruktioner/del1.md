#Inköpslista-App

Du ska få bygga en webbapplikation där man kan se det man ska innhandla, bocka av det man har handlar, lägga till nya saker samt bort saker man inte behöver handla.

Jag tänkte ge er ganska fria tyglar när det kommer till själva implementationen men nedan är några punkter för att hjälpa er på vägen

## Sätt upp er AngularJS applikation

* Definiera er Applikation, detta går att göra ganska so automatiskt med [ngApp](https://docs.angularjs.org/api/ng/directive/ngApp) direktivet.
* Ni behöver [registrera](https://docs.angularjs.org/guide/controller) er kontroller till er modul.
* Ni behöver koppla er controller till er vy med hjälp av [ngController](https://docs.angularjs.org/api/ng/directive/ngController).

## Lista artiklar

Nedan finner ni en mängd data som jag vill att ni ska lista i eran vy. Ett sätt att göra det här på är att använda sig av [ngRepeat](https://docs.angularjs.org/api/ng/directive/ngRepeat). För varje produkt i listan så vill jag att följande sak ska finnas med

* En indikator på mängd och enhet
* Produktens namn och pris
* Ett sätt att markera produkten som köpt.

```
[
  {
    qty: 1,
    unit: 'dl',
    product: 'Matlagningsgrädde',
    price: '15',
    purchased: true
  },
  {
    qty: 4,
    unit: 'st',
    product: 'Äpplen',
    price: '20',
    purchased: true
  },
  {
    qty: 1,
    unit: 'påse',
    product: 'bröd',
    price: '35',
    purchased: false
  },
  {
    qty: 5,
    unit: 'st',
    product: 'röda paprikor',
    price: '15',
    purchased: false
  },
  {
    qty: 1,
    unit: 'st',
    product: 'Magnum Mandel',
    price: '18',
    purchased: false
  }
]
```
## Lägg till, Ta bort och Uppdatera

Vid det här laget så bör det finnas 5 artiklar på er inköpslista. Och förhoppningsvis så kan man också markera dem som köpta eller inte köpta.

### Lägg till

Nu är det dags för att öka användarupplevelsen till något extraordinärt! Vi ska lägga till ett formulär för att lägga till nya artiklar på lista. följande information ska finnas med

* Mängd - siffra - krävs
* Enhet - dropdown - krävs
* produktnamn - text - krävs
* pris - siffra - valfrit

det finns en uppsättning [direktiv](https://docs.angularjs.org/api/ng/directive) för input- och select-element som kan hjälpa till med valideringen.

med hjälp av [ngSubmit](https://docs.angularjs.org/api/ng/directive/ngSubmit) kan man också koppla en metod på sin controller för att uppdatera sin inköpslista med en ny artikel.

### Uppdatera och Ta Bort

Gå tillbaka till er lista och för varje artikel så vill jag nu att du ska lägg till en länk för att uppdatera och en för att ta bort. Du kan koppla dessa till din controller med hjälp av [ngClick](https://docs.angularjs.org/api/ng/directive/ngClick).

#Inköpslista Forts.

I del två så kommer du få djupdyka lite mer i AngularJS. Primärt kommer vi gå igenom hur man kan arbeta med REST API:er och så kommer ni få bygga ert första direktiv.

Det är valfritt att börja med vilken del man vill men direktiv kan vara rätt kluriga och ta lite tid att lösa. Samtidigt är det en fördel att börja med direktivet ifall man vill lösa båda uppgifterna.

##Bygg ditt eget direktiv

Med hjälp av direktiv så kan man koppla logik till specifika element på DOM:en. Man kan även gå så långt som att transformera DOM-elementet så den får en annan struktur.

Jag vill att ni ska bygga ett direktiv som er html struktur för en post i er lista. Det betyder alltså att genom att definera ert direktiv så bör den skapa följande

* en checkbox
* skriva ut antal
* skriva ut enhet
* skriva ut produkt
* skriva ut pris

Ni kommer nog också behöva flytta delar av er logik från er controller till direktivet.

Det finns en bra [guide](https://code.angularjs.org/1.2.16/docs/guide/directive) på Angulars hemsida och även mer utförlig [API dokumentation](https://code.angularjs.org/1.2.16/docs/api/ng/service/$compile#description_comprehensive-directive-api_directive-definition-object)

##Att arbeta med REST API:er

I AngularJS kan man prata med servern på två olika sätt, båda via AJAX. Det första är via en service kallad [$http](https://docs.angularjs.org/api/ng/service/$http) som liknar jQuerys $.ajax rätt mycket. $http fungerar rätt bra för enstaka anrop men om man ska bygga en större applikation så kan det krävas mer logikt och då har man valt att hjälpa till med denna via en service som kallas [$resource](https://docs.angularjs.org/api/ngResource/service/$resource).

Från rooten av projektet kan ni nu starta upp en väldigt enkel node server med följande kommando

```node node/app.js```

(det kan krävas att ni kör en ```npm install``` innan.)

När servern kör så kan ni gå till [http://127.0.0.1:9001/items](http://127.0.0.1:9001/items) för att se er lista. Jag vill nu att ni med hjälp av $resource service byter ut er implementation av listan i er controller så att den istället pratar med det här API:et.

Följande endpoints i API:et finns

```
GET /items svarar med en lista över era inköpsartiklar

POST /items => skapar en ny inköpsartikel i API:et

PUT /items/:id => uppdaterar en inköpsartikel med rätt :id

DELETE /items/:id => tar bort en inköpsartikel med rätt :id

```

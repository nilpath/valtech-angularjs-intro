#Inköpslista Forts.

I del två så kommer du få djupdyka lite mer i AngularJS. Primärt kommer vi gå igenom hur man kan arbeta med REST API:er och så kommer ni få bygga ert första direktiv.

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

##Bygg ditt eget direktiv

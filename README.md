# Website Games (RELEASE)
[HERE](index.html) I think so here.
### SOURCES
#### I Think Websites but of now.
1. App
2. As Sources.
3. A be `index.html` i than see.
## BUT OF TODO
in `index.html` a be copy and paste here:
```html
<h1>You Have 0 Coins.</h1>
<button id="click">Click Me!</button>
<h2>Upgrades</h2>
<button>
    Cost:50
</button>
```
In js than here:
```javascript
var coins = 0
var cps = 0
var cpc = 1

document.getElementById("click").onclick = () => {
    coins += cpc
}

document.getElementsByClassName("upgrade")[0].onclick = () => {
    coins -= 50
}

setInterval(() => {
    coins += cps
}, 100);
```

# Manual
## Achievements
### New Achievement
```js
new Achievement("name", "desc", "html", "boolean")
```
```js
new Achievement("Array", "coming.", "\u2022.\u2022", () => game.myArray[0] > 1)
```
```js
new Achievement("Array Variable", "coming.", "\u2022.\u2022", () => game.myArray[new Date().getDay() - 1] > 2) // requires subtract of one but of use.
```
### Resource Achievement Tag
```html
<resource-achievement id="ach1" order="1"></resource-achievement>
```

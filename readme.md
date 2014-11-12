####Object.inArray Extension

Check if array, object or string for needle

----

#####Example:
```
/*
 * @param {mix}    needle       - Search-able needle
 * @param {bool}   searchInKey  - Search needle in keys?
 */
foo.inArray(needle, false)

var a = {one: "first", two: "second", foo: {three: "third"}};
a.inArray("first");          //true
a.inArray("foo");            //false
a.inArray("foo", true);      //true - search by keys
a.inArray({three: "third"}); //true

var b = ["one", "two", "three", "four", {foo: 'val'}];
b.inArray("one");         //true
b.inArray('foo');         //false
b.inArray({foo: 'val'})   //true
b.inArray("{foo: 'val'}") //false

var c = "String";
c.inArray("S");        //true
c.inArray("s");        //false
c.inArray("2", true);  //true
c.inArray("20", true); //false
```
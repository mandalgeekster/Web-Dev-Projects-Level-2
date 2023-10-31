<h1 style="color:green;">
	WEB-Dev
</h1>
<p id="demo2">sourceObject = {a:1, b:2, c:3};</p>
<button onClick="fun()">click
</button>
<p id="demo"></p>

<script>
	function fun(){
	const sourceObject = {a:1, b:2, c:3};
	let tO = {};
	tO = Object.assign({}, sourceObject);
	document.getElementById("demo").innerHTML =
		"targetObject a = "+tO.a+", b = " + tO.b+", c = "+tO.c;
	}
</script>

# ninebox-chart
A simple javascript library to create ninebox matrix<br>
Follow this <a href="#guide">guide</a> to learn how to use it.

<a href="http://imgur.com/a/cSJJf"><img src="http://i.imgur.com/iUnbcFi.png"/></a><br>
<br>
<div id="guide">
<p><strong>To use the ninebox-chart first you must create an instance of the class</strong></p>
<code>chart = new Chart('Potential', 'Performance')</code><br><br>
<p>The first parameter is the text of the <b>vertical</b> rule of the chart<br></p>
<p>The second parameter is the text of the <b>horizontal</b> rule of the chart</p>
<br>
<p><strong>After that, you must setup the canvas properties</strong></p>
<code>chart.setupCanvas(400, 400, 5, 40, 10)</code><br><br>
<p>The parameters are the canvas width, height, rectangle margin, rule size and rule margin</p>
<br>
<p><strong>Then you'll want to change each rule's colour</strong></p>
<code>chart.setRuleColor('vertical', '#DDD', '#333')</code><br>
<code>chart.setRuleColor('horizontal', '#333', '#DDD')</code><br><br>
<p>The first parameter stands for the <b>rule name</b> that you're changing</p>
<p>The second parameter is the <b>background colour</b></p>
<p>The third parameter is the <b>text colour</b></p>
<br>
<p><strong>After setting the colours you'll want to specify your nine box matrix values</strong></p>
<code>chart.setVerticalPeriod(0, 100, 3)</code><br>
<code>chart.setHorizontalPeriod(0, 100, 3)</code><br><br>
<p>For both functions, the first parameter is the <b>start value</b> of your matrix</p>
<p>The second parameter is the <b>limit value</b></p>
<p>And the third parameter is the <b>number of rows</b> and columns of the chart respectively</p>
<br>
<p><strong>With all set, now you can ask for the library to draw your chart</strong></p>
<code>chart.drawRectList('#222', true)</code><br><br>
<p>The first parameter is the <b>colour of the rectangles</b></p>
<p>The second parameter is if the rectangles are <b>filled or not</b></p>
</div>

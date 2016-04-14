/*
使用Array內建的sort()可對一組陣列進行排序
預設為使用ascii順序排序
客製化排序使用檢測回傳值屬於大於零(a>b),等於零(a=b),小於零(a<b)進行判斷
*/

//使用預設排序
var array = ['Bob','Apple','cloud','Xargon','wifi','923','789','#12','!12'];	//建立一個陣列

array.sort();									//進行排序（符號->數字->大寫字母->小寫字母）
console.log(array);								//顯示排序過後的陣列

//客製化排序
var number = ['321','78','999','123','78'];					//建立一個數字陣列
number.sort(function(a,b){							//檢測回傳結果
	return a-b;								//回傳運算結果
});

console.log(number);								//顯示排序過後的陣列

//--------------------------------------------
/*
[ '!12',
  '#12',
  '789',
  '923',
  'Apple',
  'Bob',
  'Xargon',
  'cloud',
  'wifi' ]
[ '78', '78', '123', '321', '999' ]
*/

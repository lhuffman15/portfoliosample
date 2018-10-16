	var date=new Date();
	var format = "YYYY-MMM-DD DDD";
	document.write(dateConvert(date,format));
	function dateConvert(dateobj,format){
	  var year = dateobj.getFullYear();
	  var month= ("0" + (dateobj.getMonth()+1)).slice(-2);
	  var date = ("0" + dateobj.getDate()).slice(-2);
	  var hours = ("0" + dateobj.getHours()).slice(-2);
	  var minutes = ("0" + dateobj.getMinutes()).slice(-2);
	  var seconds = ("0" + dateobj.getSeconds()).slice(-2);
	  var day = dateobj.getDay();
	  var months = ["Enero","Febrero","Mayo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
	  var dates = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
	  var converted_date = "";
		switch(format){
	    case "YYYY-MM-DD":
	      converted_date = year + "-" + month + "-" + date;
	      break;
	    case "YYYY-MMM-DD DDD":
	      converted_date = year + "-" + months[parseInt(month)-1] + "-" + date + " || " + dates[parseInt(day)] + " || " + hours  + ":" + minutes;
	      break;
	  }
	  return converted_date;
	}

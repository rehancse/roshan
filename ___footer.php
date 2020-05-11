

	
	</div>
	
    <script src="js/bootstrap.bundle.js"></script>
	<script src="js/myscript.js"></script>
	
	
<script>
	function Nav() {
	 // document.getElementById("mySidenav").style.width = "250px";
		var w = $('#mySidenav').width();
		//console.log(w);
		if(w==0){
			$('#mySidenav').width('300px');
		}
		else if(w==300){
			$('#mySidenav').width('0px');
		}
	}
</script>
	

  </body> 
</html>
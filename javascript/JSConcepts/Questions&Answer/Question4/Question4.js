

        //Random password generator- by javascriptkit.com
        //Visit JavaScript Kit (http://javascriptkit.com) for script
        //Credit must stay intact for use
        
        var keylist="abcdefghijklmnopqrstuvwxyz123456789"
        var temp=''
        
        function generatepass(plength){
        temp=''
        for (i=0;i<plength;i++)
        temp+=keylist.charAt(Math.floor(Math.random()*keylist.length))
        return temp
        }
        
        function populateform(enterlength){
        document.pgenerate.output.value=generatepass(enterlength)
        }
       
        
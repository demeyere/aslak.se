// jQuery for demeyere.com

$(document).ready(function() {



// demeyere_fix_targets
// add target="_blank" to other sites and .pdf files so they open in a new window
// author: @demeyere
// revised: 2014-02-12 08:53 

function demeyere_fix_targets(){
$("a[href^='http']").not("[href*='"+location.hostname+"']").attr('target','_blank');
$("a[href$='pdf']").attr('target','_blank');  
$("a[href$='PDF']").attr('target','_blank');  
};

demeyere_fix_targets();





}); // end $(document).ready(function()

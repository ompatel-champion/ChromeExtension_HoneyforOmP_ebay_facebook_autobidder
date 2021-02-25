
document.addEventListener('DOMContentLoaded', function() {
    function matching() {
        chrome.tabs.executeScript({
            // code: 'document.querySelector("#gh-ac").value'
            code: 'window.location.href'
        }, function(result) {
            var currentUrl = result[0];

            if (currentUrl.includes("https://www.ebay.com/")) {
                ebaySearch(currentUrl);                
            } else if (currentUrl.includes("https://www.facebook.com/")) {
                facebookPostDetect(currentUrl);
            } else if (currentUrl.includes("https://www.myibidder.com/")) {
                autoBidder(currentUrl);
            } else {
                defaultPopup();
            }
        });
    }

    function ebaySearch(curUrl)
    {
        $("#default").css("display", "none");
        $("#facebook").css("display", "none"); 
        $("#bidder").css("display", "none");
        $('#result').val(curUrl);
    }

    function facebookPostDetect(curUrl) {        
        $("#default").css("display", "none");
        $("#ebay").css("display", "none"); 
        $("#bidder").css("display", "none");
        $('#result').val(curUrl);
    }

    function autoBidder(curUrl) {
        $("#default").css("display", "none");
        $("#facebook").css("display", "none"); 
        $("#ebay").css("display", "none");
        $('#result').val(curUrl);
    }

    function defaultPopup() {
        $("#ebay").css("display", "none");
        $("#facebook").css("display", "none"); 
        $("#bidder").css("display", "none");
    }

    chrome.storage.sync.get(function(data) {
        matching();
    });
});


var setBO = "yesBO";

// function ebaySearch() {
        
//     if (typeof(Storage) !== "undefined") {
//         var tab_id = sessionStorage.getItem('tab_num');
//     }
//     $('#gh-ac').blur();
//     var query = $('#gh-ac').val();
//     var ebay_search_type= $('#ebay_search_type').val();
//     var ebay_search_region= $('#ebay_search_region').val();
//     var main_cat= $('#main_cat').val();
//     var sub_cat= $('#sub_cat').val();
//     var ebay_sort_order= $('#ebay_sort_order').val();
//     var page_num = $('#page_num').val();
//     // var searchSwitch = $('#resultsSlider').val();
//     var include_BO = setBO;
//     // alert(searchSwitch);

//     // var remoteIP = $('#remoteIP').val();
//     // var forwardIP = $('#forwardIP').val();
//     $('#gh-ac').val("query");

//     var nowTime = Date.now();

//     if (query!="") {
//         if (query.length > 40) {
//             var tab_label = query.substring(0,40);
//             tab_label = tab_label+'...';
//         } else {
//             var tab_label = query;
//         }
//         var newTab = '<button id="tab'+tab_id+'" onclick="change_tab(this.value)" class="ebay_results_tab" value="'+tab_id+'">'+tab_label+'</button>';
//         var newTabContent = '<div id="tabContent'+tab_id+'" class="ebay_results_content" value="'+tab_id+'"><div id="results'+tab_id+'"><br>Loading Search Results<br>Please be patient as this may take a moment if traffic is high<br><br><div class="loader"></div><br><br><br></div></div>';

//         $('#tab_row').append(newTab);
//         $('#tabs').append(newTabContent);

//         change_tab(tab_id);
        
//         if (tab_id==1) {
//             $('.h2_heading').hide();
//             $('.intro2').hide();
//         }
//         tab_id++;
//         var tab_ajax = tab_id-1;
//         if (typeof(Storage) !== "undefined") {
//             sessionStorage.setItem('tab_num', tab_id);
//         }

//         // jQuery.ajax({

//         //  type: "POST",

//         //  url: "/wp_pages/sales/log.php",

//         //  data: {ssearch2: query, ebay_search_type: ebay_search_type, time: nowTime, remoteIPAddr: remoteIP, forwardIPAddr: forwardIP},

//         //  success: function(){
//         //      // console.log(""+results+"");
//         //  }
//         // });


//         $('#ebay_affliliate').html("");

//         if (ebay_search_type.search('for_sale')===-1) {

//             jQuery.ajax({

//                 type: "POST",

//                 url: "/wp_pages/sales/ssales_affiliate.php",

//                 data: {ssearch2: query, ebay_search_type: ebay_search_type, ebay_search_region: ebay_search_region, main_cat: main_cat, sub_cat: sub_cat, ebay_sort_order: ebay_sort_order, page_num: page_num, tab_id: tab_ajax},

//                 success: function(data){
//                     $('#ebay_affliliate').html(data);
    
//                 }
//             });

//         }

//         var d = new Date();
//         var n = d.getUTCHours();

//         // console.log("UTC Hours = "+n);


//         if (n>=6 && n<10 || ebay_search_type!="sold_items") {
//             // console.log("Full query");

//             jQuery.ajax({

//                 type: "POST",

//                 url: "/wp_pages/sales/ssales_tabs.php",

//                 data: {ssearch2: query, ebay_search_type: ebay_search_type, ebay_search_region: ebay_search_region, main_cat: main_cat, sub_cat: sub_cat, ebay_sort_order: ebay_sort_order, page_num: page_num, tab_id: tab_ajax, includeBO: include_BO},

//                 success: function(data){
//                     var needle = 'noAPI';
//                     var checkResponse = data.indexOf(needle);
//                     // var checkResponse = 2;
//                     if (checkResponse!=-1) {
//                         // if(ebay_search_region=="EBAY-US"){
//                             var ebayUrl = "https://www.ebay.com";
//                         // } else if(ebay_search_region=="EBAY-AU"){
//                         //  ebayUrl = "https://www.ebay.com.au";
//                         // } else if(ebay_search_region=="EBAY-GB"){
//                         //  ebayUrl = "https://www.ebay.co.uk";
//                         // } else if(ebay_search_region=="EBAY-DE"){
//                         //  ebayUrl = "https://www.ebay.com";
//                         // } else if(ebay_search_region=="EBAY-ENCA"){
//                         //  ebayUrl = "https://www.ebay.de";
//                         // } else if(ebay_search_region=="EBAY-ES"){
//                         //  ebayUrl = "https://www.ebay.es";
//                         // } else if(ebay_search_region=="EBAY-FR"){
//                         //  ebayUrl = "https://www.ebay.fr";
//                         // } else if(ebay_search_region=="EBAY-HK"){
//                         //  ebayUrl = "https://www.ebay.hk";
//                         // } else if(ebay_search_region=="EBAY-IE"){
//                         //  ebayUrl = "https://www.ebay.ie";
//                         // } else if(ebay_search_region=="EBAY-IN"){
//                         //  ebayUrl = "https://in.ebay.com";
//                         // } else if(ebay_search_region=="EBAY-IT"){
//                         //  ebayUrl = "https://www.ebay.it";
//                         // } else if(ebay_search_region=="EBAY-MY"){
//                         //  ebayUrl = "https://www.ebay.com.my";
//                         // } else if(ebay_search_region=="EBAY-NL"){
//                         //  ebayUrl = "https://www.ebay.nl";
//                         // } else if(ebay_search_region=="EBAY-PH"){
//                         //  ebayUrl = "https://www.ebay.ph";
//                         // } else if(ebay_search_region=="EBAY-PL"){
//                         //  ebayUrl = "https://www.ebay.pl";
//                         // } else if(ebay_search_region=="EBAY-SG"){
//                         //  ebayUrl = "https://www.ebay.com.sg";
//                         // } 
//                         if (sub_cat!=-1) {
//                             ebayUrl = ebayUrl+"/sch/"+sub_cat+"";
//                         } else {
//                             ebayUrl = ebayUrl+"/sch/";
//                         }
                        
//                         var safequery = query.replace("/(/g","/%28");
//                         safequery = safequery.replace("/)/g","/%29");
//                         safequery = safequery.replace(" /g","/+");
//                         safequery = safequery.replace("/&/g","/%26");
//                         safequery = safequery.replace("/'/g","/%27");
//                         safequery = safequery.replace("/&/g","/%26");
//                         // $('#testBlock').html('<span>'+safequery+'</span>');
//                         safequery = encodeURIComponent(safequery);
//                         var urlEndTimeSoonest = ebayUrl+"/i.html?_from=R40&_nkw="+safequery+"&LH_Sold=1&LH_Complete=1&_oac=1&_sop=13&_ipg=100";
//                         var urlHighestPrice = ebayUrl+"/i.html?_from=R40&_nkw="+safequery+"&LH_Sold=1&LH_Complete=1&_oac=1&_sop=16&_ipg=100";
//                         var urlNewestListing = ebayUrl+"/i.html?_from=R40&_nkw="+safequery+"&LH_Sold=1&LH_Complete=1&_oac=1&_sop=10&_ipg=100";

//                         if (ebay_sort_order=="CurrentPriceHighest") {
//                             var url = urlHighestPrice;
//                         } else if(ebay_sort_order="urlEndTimeSoonest") {
//                             url = urlEndTimeSoonest;
//                         } else {
//                             url = urlNewestListing;
//                         }

//                         // console.log('https://api.allorigins.win/get?url=' + encodeURIComponent(url));

//                         jQuery.get('https://api.allorigins.win/raw?url=' + encodeURIComponent(url), function (dataDirect) {
//                             var dataReturned = dataDirect;
//                             // console.log("PageNum="+page_num);
//                             jQuery.ajax({

//                                 type: "POST",

//                                 url: "/wp_pages/sales/clientSimpleNew.php",

//                                 data: {pageData: dataReturned, page: page_num, tab_num: tab_id},

//                                 success: function(data){
//                                     $('#results'+tab_ajax+'').html(data);
//                                     $('.scroll_anchor').show();
//                                     $('body, html').animate({scrollTop:$('.scroll_anchor').offset().top}, 'slow');
//                                 },

//                                 complete: function(){
//                                     // console.log("Function complete");
//                                     // console.log("ebaySearchType"+ebay_search_type);
//                                     if (ebay_search_type.search('for_sale')===-1) {
//                                         var checkExist = setInterval(function() {
//                                            if ($('.sold_data-simple').length) {
//                                                 clearInterval(checkExist);
//                                                 switchBO = true;
//                                                 // console.log("Getting Best Offers");
//                                                 getBestOffer(0);
//                                            } 
//                                         }, 100);

//                                     }
//                                 }
//                             });
//                         });
//                     } else {
//                         $('#results'+tab_ajax+'').html(data);
//                         $('.scroll_anchor').show();
//                         $('body, html').animate({scrollTop:$('.scroll_anchor').offset().top}, 'slow');
//                     }
//                 },

//                 complete: function(){
//                     if (ebay_search_type.search('for_sale')===-1) {
//                         var checkExist = setInterval(function() {
//                            if ($('.sold_data-simple').length) {
//                                 clearInterval(checkExist);
//                                 switchBO = true;
//                                 getBestOffer(0);
//                            } 
//                         }, 100);

//                     }               
//                 }
//             });
//         } else {
//             // console.log("Scrape query");

//             var ebayUrl = "https://www.ebay.com"; 
//             if (sub_cat!=-1) {
//                 ebayUrl = ebayUrl+"/sch/"+sub_cat+"";
//             } else {
//                 ebayUrl = ebayUrl+"/sch/";
//             }
//             var safequery = encodeURIComponent(query);
//             var urlEndTimeSoonest = ebayUrl+"/i.html?_from=R40&_nkw="+safequery+"&LH_Sold=1&LH_Complete=1&_oac=1&_sop=13&_ipg=100";
//             var urlHighestPrice = ebayUrl+"/i.html?_from=R40&_nkw="+safequery+"&LH_Sold=1&LH_Complete=1&_oac=1&_sop=16&_ipg=100";
//             var urlNewestListing = ebayUrl+"/i.html?_from=R40&_nkw="+safequery+"&LH_Sold=1&LH_Complete=1&_oac=1&_sop=10&_ipg=100";

//             if (ebay_sort_order=="CurrentPriceHighest") {
//                 var url = urlHighestPrice;
//             } else if(ebay_sort_order="urlEndTimeSoonest") {
//                 url = urlEndTimeSoonest;
//             } else {
//                 url = urlNewestListing;
//             }

//             // console.log('https://api.allorigins.win/get?url=' + encodeURIComponent(url));

//             jQuery.get('https://api.allorigins.win/raw?url=' + encodeURIComponent(url), function (dataDirect) {
//                 var dataReturned = dataDirect;
//                 // console.log("PageNum="+page_num);
//                 jQuery.ajax({

//                     type: "POST",

//                     url: "/wp_pages/sales/clientSimpleNew.php",

//                     data: {pageData: dataReturned, page: page_num, tab_num: tab_id},

//                     success: function(data){
//                         $('#results'+tab_ajax+'').html(data);
//                         $('.scroll_anchor').show();
//                         $('body, html').animate({scrollTop:$('.scroll_anchor').offset().top}, 'slow');
//                     },

//                     complete: function(){
//                         // console.log("Function complete");
//                         // console.log("ebaySearchType"+ebay_search_type);
//                         if (ebay_search_type.search('for_sale')===-1) {
//                             var checkExist = setInterval(function() {
//                                if ($('.sold_data-simple').length) {
//                                     clearInterval(checkExist);
//                                     switchBO = true;
//                                     // console.log("Getting Best Offers");
//                                     getBestOffer(0);
//                                } 
//                             }, 100);

//                         }
//                     }
//                 });
//             });

//         }

                            
//     } else {
//         alert('Seach query must not be blank. Please enter data and try agian');
//     }

// }
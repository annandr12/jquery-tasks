$(document).ready(function() {
    $(".type").bind('input propertychange', function() {
        var str = $(".type").val();
        $(".text").html(str);
    });
    $(".search").bind('input propertychange', function() {
        var search_query = $(".search").val();
        var str = $(".type").val();
        var counter = 0;
        var array_of_entries = [];
        var entry;
        if (search_query !== "") {
            do {
                entry = str.toLowerCase().indexOf(search_query, counter);
                counter = entry + 1;
                array_of_entries.push(entry);
            } while (entry != -1);
            array_of_entries.pop();
            console.log(array_of_entries);
            for (var i = array_of_entries.length - 1; i >= 0; i--) {
                var query_in_str = str.substr(array_of_entries[i], search_query.length);
                var replacement = "<span class='yellow'>" + query_in_str + "</span>";
                str = str.substr(0, array_of_entries[i]) + replacement + str.substr(array_of_entries[i] + search_query.length);
            }
            $(".text").html(str);
        } else {
            $(".text").html(str);
        }
    });
});

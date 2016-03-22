/**
 * Created by adricacho on 29/2/16.
 */
function start() {
    $('article:even').css({"background-color": "#00B3FE", "color": "#C8F3F9"});
    $('#divRss').FeedEk({
        FeedUrl:'http://www.bbc.com/sport/rss.xml',
        MaxCount: 5,
        ShowDesc: true,
        ShowPubDate: true,
        DescCharacterLimit: 500
    })

}

function loaded(){
    $('.feedEkList li:even').css({"background-color": "#3E3"});
}
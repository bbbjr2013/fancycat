jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initaudioplayer-1\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    jQuery("#amazingaudioplayer-1").amazingaudioplayer({
        jsfolder:jsFolder,
        skinsfoldername:"",
        volumeimagewidth:24,
        barbackgroundimage:"",
        imagewidth:100,
        showtime:true,
        titleinbarwidth:80,
        showprogress:true,
        random:true,
        titleformat:"%TITLE%",
        height:600,
        prevnextimage:"prevnext-24-24-0.png",
        showinfo:true,
        imageheight:100,
        skin:"Jukebox",
        loopimage:"loop-24-24-0.png",
        loopimagewidth:24,
        forcefirefoxflash:true,
        prevnextimageheight:24,
        infoformat:"%ARTIST% %ALBUM%<br />%INFO%",
        stopotherplayers:true,
        showstop:false,
        showvolumebar:true,
        titleinbarscroll:true,
        width:300,
        showtitleinbar:false,
        showloop:true,
        volumeimage:"volume-24-24-0.png",
        progresswidth:96,
        loopimageheight:24,
        tracklistitem:10,
        tracklistitemformat:"%ID%. %TITLE% <span style='position:absolute;top:0;right:0;'>%DURATION%</span>",
        prevnextimagewidth:24,
        tracklistarrowimage:"tracklistarrow-16-16-0.png",
        playpauseimageheight:24,
        showbackgroundimage:false,
        progresswidthmode:"auto",
        stopimage:"stop-24-24-0.png",
        playpauseimage:"playpause-24-24-0.png",
        showprevnext:true,
        backgroundimage:"",
        autoplay:true,
        volumebarpadding:8,
        progressheight:8,
        showtracklistbackgroundimage:false,
        playpauseimagewidth:24,
        showtitle:true,
        defaultvolume:-1,
        tracklistarrowimageheight:16,
        heightmode:"auto",
        titleinbarformat:"%TITLE%",
        showtracklist:true,
        stopimageheight:24,
        volumeimageheight:24,
        stopimagewidth:24,
        volumebarheight:80,
        noncontinous:false,
        tracklistbackgroundimage:"",
        showbarbackgroundimage:false,
        showimage:true,
        tracklistwidth:300,
        tracklistarrowimagewidth:16,
        timeformat:"%CURRENT% / %DURATION%",
        showvolume:true,
        loop:1,
        preloadaudio:true
    });
});
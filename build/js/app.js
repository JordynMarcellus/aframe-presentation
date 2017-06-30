//IIFE because let's make my life easier...
(function() {

    // pass the config object to the initializer
    const config = {
        controls: true,
        progress: true,
        keyboard: true,
        showNotes: false,
        hideAddressBar: true,
        transition: 'slide',
        backgroundTransition: 'fade',
        viewDistance: 3,
        display: 'block',
        // presentational
        width: "100%",
        height: "100%",
        margin: 0.2,
        minScale: 1,
        maxScale: 1,
        dependencies:[
		    { src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.5.0/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.5.0/plugin/notes/notes.js', async: true },
        ]
    }

    Reveal.initialize(config)

})()
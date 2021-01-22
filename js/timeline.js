var deleteLog = false;

$(document).ready(function() {
    $('#pagepiling').pagepiling({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        navigation: {
            'textColor': '#f2f2f2',
            'bulletsColor': '#ccc',
            'position': 'right',
        },
        loopTop: true,
        loopBottom: true
    });
});

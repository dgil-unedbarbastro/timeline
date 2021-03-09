import './styles.scss'
import '@fortawesome/fontawesome-free/js/all.min.js'; 
import { Timeline } from "vis-timeline/standalone/";
import { DataSet } from "vis-data/standalone";

jQuery(async function () {
    let datasource = {
        "TimelineZoomable": false,
        "Name": "Timeline DEMO",
        "TimelineStartDate": "2021-01-01T00:00:00",
        "TimelineEndDate": "2021-05-25T13:15:00",
        "Groups": [
            {
                "id": 1,
                "content": "<i class=\"fas fa-graduation-cap\" aria-hidden=\"true\"></i> <strong>Group 1</strong>",
                "showNested": false
            },
            {
                "id": 2,
                "content": "<i class=\"fas fa-comments\" aria-hidden=\"true\"></i> <strong>Group 2</strong>",
                "showNested": false
            }
        ],
        "Items": [
            {
                "id": "1",
                "IdType": 0,
                "group": 1,
                "moduleId": 6,
                "content": "<i style='font-size:125%' class=\"fas fa-book\"></i> Item 1",
                "title": "Item 1",
                "start": "2021-01-01 00:00:00Z",
                "_StartDate": "2021-01-01T00:00:00",
                "end": "2021-01-12 00:00:00Z",
                "type": "range",
                "moduleType": "LESSON",
                "className": "lesson lesson-finished",
                "label": "Item 1",
                "next": 4
            },
            {
                "id": "4",
                "IdType": 0,
                "group": 1,
                "moduleId": 7,
                "content": "Item 2",
                "title": "Item 2",
                "start": "2021-01-14 00:00:00Z",
                "_StartDate": "2021-01-14T00:00:00",
                "end": "2021-03-09 00:00:00Z",
                "type": "range",
                "moduleType": "LESSON",
                "className": "lesson lesson-finished",
                "label": "Item 2",
                "prev": 1,
                "next": 5
            },
            {
                "id": "5",
                "IdType": 0,
                "group": 1,
                "moduleId": 8,
                "content": "<i style='font-size:125%' class=\"fas fa-book\"></i> Item 3",
                "title": "Item 3",
                "start": "2021-03-12 00:00:00Z",
                "_StartDate": "2021-03-12T00:00:00",
                "end": "2021-04-21 00:00:00Z",
                "type": "range",
                "moduleType": "LESSON",
                "className": "lesson lesson-finished",
                "label": "Item 3",
                "prev": 4,
                "next": 8
            },
            {
                "id": "10",
                "IdType": 0,
                "group": 2,
                "moduleId": 36,
                "content": "<i class='fas fa-chalkboard-teacher'></i> Item 4",
                "title": "Item 4",
                "start": "2021-01-05 17:00:00Z",
                "_StartDate": "2021-02-05T17:00:00",
                "end": "2021-04-05 17:45:00Z",
                "type": "range",
                "moduleType": "TUTORIAL",
                "className": "tutorial tutorial-finished",
                "label": "Item 4",
                "next": 11
            }
        ]
    };

    buildTimeline('visualization', datasource);
});

function buildTimeline(containerId, datasource) {
    let container = document.getElementById(containerId);

    let items = new DataSet(datasource.Items);
    let groups = new DataSet(datasource.Groups);

    let options = {
        locale: 'en',
        orientation: {
            axis: 'top',
            item: 'bottom'
        },        
        zoomable: datasource.TimelineZoomable,
        min:  datasource.TimelineStartDate,
        max: datasource.TimelineEndDate,
        start:  datasource.TimelineStartDate,
        end: datasource.TimelineEndDate
    };

    var timeline = new Timeline(container, items, groups, options);

    return timeline;

    // DOM element where the Timeline will be attached
    //var container = document.getElementById('visualization');

    // // Create a DataSet (allows two way data-binding)
    // var items = new DataSet([
    //     {id: 1, content: 'item 1', start: '2014-04-20'},
    //     {id: 2, content: 'item 2', start: '2014-04-14'},
    //     {id: 3, content: 'item 3', start: '2014-04-18'},
    //     {id: 4, content: 'item 4', start: '2014-04-16', end: '2014-04-19'},
    //     {id: 5, content: 'item 5', start: '2014-04-25'},
    //     {id: 6, content: 'item 6', start: '2014-04-27', type: 'point'}
    //     ]);

    // // Configuration for the Timeline
    // var options = {};

    // // Create a Timeline
    // var timeline = new Timeline(container, items, options);

    // let now = new Date();
    // let groups = new DataSet([
    //     {id: 0, content: 'First', value: 1},
    //     {id: 1, content: 'Third', value: 3},
    //     {id: 2, content: 'Second', value: 2}
    // ]);

    // // create a dataset with items
    // // note that months are zero-based in the JavaScript Date object, so month 3 is April
    // let items = new DataSet([
    //     {id: 0, group: 0, content: 'item 0', start: new Date(2014, 3, 17), end: new Date(2014, 3, 21)},
    //     {id: 1, group: 0, content: 'item 1', start: new Date(2014, 3, 19), end: new Date(2014, 3, 20)},
    //     {id: 2, group: 1, content: 'item 2', start: new Date(2014, 3, 16), end: new Date(2014, 3, 24)},
    //     {id: 3, group: 1, content: 'item 3', start: new Date(2014, 3, 23), end: new Date(2014, 3, 24)},
    //     {id: 4, group: 1, content: 'item 4', start: new Date(2014, 3, 22), end: new Date(2014, 3, 26)},
    //     {id: 5, group: 2, content: 'item 5', start: new Date(2014, 3, 24), end: new Date(2014, 3, 27)}
    // ]);

    // // Configuration for the Timeline
    // let options = {
    //     orientation: {
    //         axis: 'top'
    //     },
    //     groupOrder: 'id',
    //     locale: 'es',
    //     start: now.setDate(now.getDate() - 1),
    //     end: now.setDate(now.getDate() + 8)
    // };

    // // Create a Timeline

    // let timeline = new Timeline(container);
    // timeline.setGroups(groups);
    // timeline.setItems(items);
    // timeline.setOptions(options);
}

//export default buildTimeline
//module.exports = buildTimeline;
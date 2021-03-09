import './styles.scss'
import '@fortawesome/fontawesome-free/js/all.min.js'; 
import { Timeline } from "vis-timeline/standalone/";
import { DataSet } from "vis-data/standalone";

jQuery(async function () {
    let containerId = 'visualization';
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

    buildTimeline(containerId, datasource);
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

    let timeline = new Timeline(container);
    timeline.setGroups(groups);
    timeline.setItems(items);
    timeline.setOptions(options);
}

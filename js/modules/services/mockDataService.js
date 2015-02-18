/**=========================================================
* Module: Graph
* Visualizer for force directed graph
=========================================================*/
(function() {
  'use strict';

    var mockDataService = function MockDataService() {
      var MOCK_SAMPLE_DATA = [
      {
        'name' : 'All Types', 
        'data' : {
          "nodes": [
          {
            "name": "service: guestbook",
            "radius": 16,
            "fill": "olivedrab"
          }, 
          {
            "name": "pod: guestbook-controller",
            "radius": 20,
            "fill": "palegoldenrod"
          }, 
          {
            "name": "pod: guestbook-controller",
            "radius": 20,
            "fill": "palegoldenrod"
          },
          {
            "name": "pod: guestbook-controller",
            "radius": 20,
            "fill": "palegoldenrod"
          },
          {
            "name": "container: php-redis",
            "radius": 24,
            "fill": "cornflowerblue"
          }, 
          {
            "name": "container: php-redis",
            "radius": 24,
            "fill": "cornflowerblue"
          },
          {
            "name": "container: php-redis",
            "radius": 24,
            "fill": "cornflowerblue"
          }, 
          {
            "name": "service: redis-master",
            "radius": 16,
            "fill": "olivedrab",
            "tags": [
              {
                "key": "Type",
                "value": "Service"
              },
              {
                "key": "Console",
                "value": "http://localhost:5678/some/console",
                "type": "link",
                "hide": false
              }
            ]
          },
          {
            "name": "pod: redis-master",
            "radius": 20,
            "fill": "palegoldenrod"
          },
          {
            "name": "container: master",
            "radius": 24,
            "fill": "cornflowerblue"
          },
          {
            "name": "load balancer: guestbook",
            "radius": 16,
            "fill": "yellowgreen",
            "tags": [
              {
                "key": "Type",
                "value": "Load Balancer"
              },
              {
                "key": "Port",
                "value": "3000"
              },
              {
                "key": "Logs",
                "value": "http://localhost:1234/some/logs",
                "type": "link",
                "hide": false
              },
              {
                "key": "More Logs",
                "value": "http://localhost:9012/more/logs",
                "type": "link",
                "hide": true
              }
            ]
          },
          {
            "name": "service: redis-worker",
            "radius": 16,
            "fill": "olivedrab"
          },
          {
            "name": "pod: redis-worker-controller",
            "radius": 20,
            "fill": "palegoldenrod"
          }, 
          {
            "name": "container: slave",
            "radius": 24,
            "fill": "cornflowerblue"
          }, 
          {
            "name": "container: slave",
            "radius": 24,
            "fill": "cornflowerblue"
          }
          ],
          "links": [
          {
            "source": 0,
            "target": 1,
            "thickness": 2,
            "distance": 80
          }, 
          {
            "source": 0,
            "target": 2,
            "thickness": 2,
            "distance": 80
          }, 
          {
            "source": 0,
            "target": 3,
            "thickness": 2,
            "distance": 80
          }, 
          {
            "source": 1,
            "target": 4,
            "thickness": 1,
            "distance": 80
          }, 
          {
            "source": 2,
            "target": 5,
            "thickness": 1,
            "distance": 80
          }, 
          {
            "source": 3,
            "target": 6,
            "thickness": 1,
            "distance": 80
          }, 
          {
            "source": 7,
            "target": 8,
            "thickness": 2,
            "distance": 80
          }, 
          {
            "source": 8,
            "target": 9,
            "thickness": 1,
            "distance": 80
          }, 
          {
            "source": 10,
            "target": 0,
            "thickness": 3,
            "distance": 80,
            "label": "port: 3000"
          }, 
          {
            "source": 11,
            "target": 12,
            "thickness": 2,
            "distance": 80
          }, 
          {
            "source": 12,
            "target": 13,
            "thickness": 1,
            "distance": 80
          }, 
          {
            "source": 12,
            "target": 14,
            "thickness": 1,
            "distance": 80
          },
          ],
          "settings": {
            "clustered": false,
            "showEdgeLabels": true,
            "showNodeLabels": true
          }
        }
      },
      {
        'name' : 'Hide Containers',
        'data' : {
          "nodes": [
          {
            "name": "service: guestbook",
            "radius": 16,
            "fill": "olivedrab"
          },
          {
            "name": "pod: guestbook-controller",
            "radius": 20,
            "fill": "palegoldenrod"
          },
          {
            "name": "pod: guestbook-controller",
            "radius": 20,
            "fill": "palegoldenrod"
          },
          {
            "name": "pod: guestbook-controller",
            "radius": 20,
            "fill": "palegoldenrod"
          },
          {
            "name": "service: redis-master",
            "radius": 16,
            "fill": "olivedrab"
          },
          {
            "name": "pod: redis-master",
            "radius": 20,
            "fill": "palegoldenrod"
          },
          {
            "name": "service: redis-worker",
            "radius": 16,
            "fill": "olivedrab"
          },
          {
            "name": "pod: redis-worker-controller",
            "radius": 20,
            "fill": "palegoldenrod"
          },
          {
            "name": "pod: redis-worker-controller",
            "radius": 20,
            "fill": "palegoldenrod"
          },
          {
            "name": "load balancer: guestbook",
            "radius": 16,
            "fill": "yellowgreen"
          }
          ],
          "links": [
          {
            "source": 0,
            "target": 1,
            "thickness": 2,
            "distance": 80
          },
          {
            "source": 0,
            "target": 2,
            "thickness": 2,
            "distance": 80
          },
          {
            "source": 0,
            "target": 3,
            "thickness": 2,
            "distance": 80
          },
          {
            "source": 9,
            "target": 0,
            "thickness": 3,
            "distance": 80,
            "label": "port: 3000"
          },
          {
            "source": 4,
            "target": 5,
            "thickness": 2,
            "distance": 80
          },
          {
            "source": 6,
            "target": 7,
            "thickness": 2,
            "distance": 80
          },
          {
            "source": 6,
            "target": 8,
            "thickness": 2,
            "distance": 80
          },
          {
            "source": 7,
            "target": 4,
            "thickness": 4,
            "distance": 80,
            "dashes": true
          },
          {
            "source": 8,
            "target": 4,
            "thickness": 4,
            "distance": 80,
            "dashes": true
          },
          {
            "source": 1,
            "target": 4,
            "thickness": 4,
            "distance": 80,
            "dashes": true
          },
          {
            "source": 2,
            "target": 4,
            "thickness": 4,
            "distance": 80,
            "dashes": true
          },
          {
            "source": 3,
            "target": 4,
            "thickness": 4,
            "distance": 80,
            "dashes": true
          },
          {
            "source": 1,
            "target": 6,
            "thickness": 4,
            "distance": 80,
            "dashes": true
          },
          {
            "source": 2,
            "target": 6,
            "thickness": 4,
            "distance": 80,
            "dashes": true
          },
          {
            "source": 3,
            "target": 6,
            "thickness": 4,
            "distance": 80,
            "dashes": true
          }
          ],
          "settings": {
            "clustered": false,
            "showEdgeLabels": true,
            "showNodeLabels": true
          }
        }
      },
      {
      'name' : 'Clustered',
      'data' : {
        "nodes" : [ 
        {
          "cluster" : 1,
          "name" : "pod: guestbook-controller",
          "radius" : 24,
          "fill": "red"
        },
        { 
          "cluster" : 2,
          "name" : "pod: guestbook-controller",
          "radius" : 24,
          "fill": "green"
        },
        { 
          "cluster" : 3,
          "name" : "pod: guestbook-controller",
          "radius" : 24,
          "fill": "blue"
        },
        { 
          "cluster" : 1,
          "name" : "container: php-redis",
          "radius" : 20,
          "fill": "red"
        },
        { 
          "cluster" : 2,
          "name" : "container: php-redis",
          "radius" : 20,
          "fill": "green"
        },
        { 
          "cluster" : 3,
          "name" : "container: php-redis",
          "radius" : 20,
          "fill": "blue"
        },
        { 
          "cluster" : 4,
          "name" : "pod: redis-master",
          "radius" : 24,
          "fill": "orange"
        },
        { 
          "cluster" : 4,
          "name" : "container: master",
          "radius" : 20,
          "fill": "orange"
        },
        { 
          "cluster" : 5,
          "name" : "pod: redis-worker-controller",
          "radius" : 24,
          "fill" : "goldenrod"
        },
        { 
          "cluster" : 5,
          "name" : "container: slave",
          "radius" : 20,
          "fill" : "goldenrod"
        },
        { 
          "cluster" : 5,
          "name" : "container: slave",
          "radius" : 20,
          "fill" : "goldenrod"
        }
        ],
        "settings" : { 
          "clusterSettings" : { 
            "clusterPadding" : 25,
            "padding" : 1.5
          },
          "clustered" : true,
          "showEdgeLabels" : true,
          "showNodeLabels" : true
        }
      }
    }];

    return {
      samples : MOCK_SAMPLE_DATA
    };
  };

  angular.module('krakenApp.Graph')
  .service('mockDataService', mockDataService);

})();

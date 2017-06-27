// var Docker = require('dockerode');


// var docker = new Docker({socketPath: '/var/run/docker.sock'});
//
// docker.listContainers(function (err, containers) {
//   containers.forEach(function (containerInfo) {
//     var containerID = docker.getContainer(containerInfo.Id);
//     console.log(containerID);
//     http.get('http://localhost:5050/blink/' + containerID, res => {
//         console.log('done');
//     });
//   });
// });

var http = require('http');

http.get('http://goolge.com', res => {
        console.log('done');
});

FROM jsurf/rpi-raspbian
RUN apt-get update && apt -y install curl
CMD ["cat /proc/self/cgroup | grep "cpu:/" | sed 's/\([0-9]\):cpu:\/docker\///g'", "while true ; do curl http://localhost/blink/id & sleep 5; done"]

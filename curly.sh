#! /usr/bin/bash
while true;
do
 curl http://osp.kitchen:9999/p/variable_publication/export/txt > content.html
 curl http://osp.kitchen:9999/p/variable_publication.css/export/txt > styles.less
 sleep 15
done




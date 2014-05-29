#! /usr/bin/bash
while 1;
do
 curl http://osp.kitchen:9999/p/variable_publication/export/txt > content.html
 curl http://osp.kitchen:9999/p/variable_publication.css/export/txt > styles.css
 sleep 15
done




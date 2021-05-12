FROM ubuntu:14.04

#Install nginx
RUN apt-get update && apt-get -y install nginx curl
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

#Install Supervisor and config
RUN apt-get install -y supervisor
RUN touch /etc/supervisord.conf
RUN echo '[supervisord]'  >> /etc/supervisord.conf
RUN echo 'nodaemon=true'  >> /etc/supervisord.conf
RUN echo '[program:nginx]' >> /etc/supervisord.conf
RUN echo 'command=nginx'   >> /etc/supervisord.conf

EXPOSE 80
CMD /usr/bin/supervisord -c /etc/supervisord.conf
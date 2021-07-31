FROM python:3.6
LABEL maintainer 'Gabriel Ribeiro de Aráujo <gableisure@sempreceub.com>'

RUN useradd www && \
    mkdir /app && \
    mdkir /log && \ 
    chown www /log

USER www
VOLUME /log
WORKDIR /app
EXPOSE 8000

ENTRYPOINT ["/usr/local/bin/python"]
CMD ["run.py"]